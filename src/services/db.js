
/**
 * MongoDB connection service for PromoGenie
 */

// For demonstration purposes only - in production, use environment variables for sensitive data
const MONGODB_URI = "mongodb://localhost:27017/promogenie";

// Simulate MongoDB connection and operations
class MongoDBService {
  constructor() {
    this.isConnected = false;
    this.collections = {
      users: [],
      products: [],
      influencers: [],
      voices: [],
      generations: []
    };
  }

  async connect() {
    try {
      console.log("Connecting to MongoDB...");
      // In a real app, this would use the MongoDB driver
      this.isConnected = true;
      console.log("Connected to MongoDB");
      return true;
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw error;
    }
  }

  async disconnect() {
    try {
      console.log("Disconnecting from MongoDB...");
      this.isConnected = false;
      console.log("Disconnected from MongoDB");
      return true;
    } catch (error) {
      console.error("MongoDB disconnection error:", error);
      throw error;
    }
  }

  /**
   * Saves a generation to the database
   * @param {Object} data - Generation data to save
   * @returns {Promise<Object>} - Saved generation with ID
   */
  async saveGeneration(data) {
    try {
      if (!this.isConnected) {
        await this.connect();
      }
      
      const id = `gen_${Date.now()}`;
      const generation = {
        _id: id,
        ...data,
        createdAt: new Date()
      };
      
      this.collections.generations.push(generation);
      console.log("Generation saved:", generation);
      
      return generation;
    } catch (error) {
      console.error("Error saving generation:", error);
      throw error;
    }
  }

  /**
   * Fetches user generations
   * @param {string} userId - User ID
   * @returns {Promise<Array>} - User's generations
   */
  async getUserGenerations(userId) {
    try {
      if (!this.isConnected) {
        await this.connect();
      }
      
      // Filter generations by user ID
      const generations = this.collections.generations.filter(gen => gen.userId === userId);
      return generations;
    } catch (error) {
      console.error("Error fetching user generations:", error);
      throw error;
    }
  }

  /**
   * Saves user data (for remember me functionality)
   * @param {Object} userData - User data to save
   * @returns {Promise<Object>} - Saved user with ID
   */
  async saveUserData(userData) {
    try {
      if (!this.isConnected) {
        await this.connect();
      }
      
      const existingUserIndex = this.collections.users.findIndex(u => u.email === userData.email);
      
      if (existingUserIndex >= 0) {
        // Update existing user
        this.collections.users[existingUserIndex] = {
          ...this.collections.users[existingUserIndex],
          ...userData,
          updatedAt: new Date()
        };
        return this.collections.users[existingUserIndex];
      } else {
        // Create new user
        const id = `user_${Date.now()}`;
        const user = {
          _id: id,
          ...userData,
          createdAt: new Date()
        };
        
        this.collections.users.push(user);
        return user;
      }
    } catch (error) {
      console.error("Error saving user data:", error);
      throw error;
    }
  }
}

export const mongoDBService = new MongoDBService();
export default mongoDBService;
