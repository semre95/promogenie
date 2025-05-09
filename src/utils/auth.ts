
// Helper functions
const sleep = (seconds: number) => new Promise(resolve => setTimeout(resolve, seconds * 1000));

// Encryption function (placeholder - replace with actual implementation)
const encrypt = async (password: string): Promise<string> => {
  // In a real implementation, this would use a proper encryption algorithm
  // For now, we'll just return the password to make the login function work
  return password;
};

// Cookie handling
const nibble_cookie = (name: string) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
};

// Global vars for auth state
let username: string | null = null;
let login_time: string | null = null;
let login_expiry: string | null = null;

/**
 * Login function
 * @param username_ - Username for login
 * @param password_ - Password for login
 * @returns Auth result object or false if login failed
 */
export async function login(username_: string | null = null, password_: string | null = null) {
  let is_auto_login = !username_ || !password_;
  if (!is_auto_login && nibble_cookie('usr')) await logout();
  
  let result: any = null;
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://multifox.ai/user_login', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.withCredentials = true;
  xhr.onload = () => result = xhr.responseText;
  xhr.send(is_auto_login ? '' : JSON.stringify({ usr: username_, pwd: await encrypt(password_) }));
  
  while (result == null) await sleep(0.1);
  
  if (result !== 'NACK') {
    result = JSON.parse(result);
    username = result.val;
    login_time = new Date().toISOString();
    login_expiry = result.exp;
    
    // Store auth in localStorage
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", username);
    localStorage.setItem("loginTime", login_time);
    localStorage.setItem("loginExpiry", login_expiry);
  } else {
    result = false;
    if (!is_auto_login) alert('Login failed.');
  }
  
  return result;
}

/**
 * Signup function
 * @param username_ - Username for signup
 * @param password_ - Password for signup
 * @param email - Email for signup
 * @returns Auth result object or false if signup failed
 */
export async function signup(username_: string, password_: string, email: string) {
  let result: any = null;
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://multifox.ai/user_signup', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.withCredentials = true;
  xhr.onload = () => result = xhr.responseText;
  xhr.send(JSON.stringify({ usr: username_, pwd: await encrypt(password_), email: email }));
  
  while (result == null) await sleep(0.1);
  
  if (result !== 'NACK') {
    result = JSON.parse(result);
    username = result.val;
    login_time = new Date().toISOString();
    login_expiry = result.exp;
    
    // Store auth in localStorage
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", username);
    localStorage.setItem("loginTime", login_time);
    localStorage.setItem("loginExpiry", login_expiry);
  } else {
    result = false;
    alert('Signup failed.');
  }
  
  return result;
}

/**
 * Logout function
 */
export async function logout() {
  let result: any = null;
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://multifox.ai/user_logout', true);
  xhr.withCredentials = true;
  xhr.onload = () => result = xhr.responseText;
  xhr.send();
  
  while (result == null) await sleep(0.1);
  
  // Clear auth from localStorage
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("username");
  localStorage.removeItem("loginTime");
  localStorage.removeItem("loginExpiry");
  
  username = null;
  login_time = null;
  login_expiry = null;
  
  return result !== 'NACK';
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated() {
  return localStorage.getItem("isAuthenticated") === "true";
}

/**
 * Get current username
 */
export function getUsername() {
  return localStorage.getItem("username");
}

/**
 * Check if login has expired
 */
export function isLoginExpired() {
  const expiry = localStorage.getItem("loginExpiry");
  if (!expiry) return true;
  
  return new Date() > new Date(expiry);
}
