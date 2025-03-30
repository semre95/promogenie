
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Camera, Image, Video, Mic, Sparkles, RefreshCw, Palette, Users, Clock, Star, PanelTop, Upload, Globe, Layers, PackageOpen, Lightbulb } from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-promogenie-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-promogenie-800 via-promogenie-600 to-promogenie-400 bg-clip-text text-transparent">
                Features That Transform Your Product Marketing
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover all the powerful tools PromoGenie offers to create stunning ad creative from simple product photos.
              </p>
            </div>
          </div>
        </section>

        {/* Main Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Features</h2>
              <p className="text-lg text-gray-600">
                Our comprehensive set of AI-powered tools give you everything you need to create professional marketing assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {/* Feature 1 */}
              <div className="flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-promogenie-100 flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-promogenie-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Simple Uploads</h3>
                <p className="text-gray-600 mb-4">
                  Upload any product photo from your smartphone or camera. No need for transparent backgrounds or professional lighting.
                </p>
                <ul className="space-y-2 mt-auto">
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Drag-and-drop interface</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Direct camera upload</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Bulk upload capability</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-promogenie-100 flex items-center justify-center mb-4">
                  <Image className="h-6 w-6 text-promogenie-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Image Creation</h3>
                <p className="text-gray-600 mb-4">
                  Transform ordinary product photos into professional studio-quality images with perfect lighting and composition.
                </p>
                <ul className="space-y-2 mt-auto">
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Auto background removal</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Studio lighting simulation</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Product enhancement</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-promogenie-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-promogenie-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Creative Scene Generation</h3>
                <p className="text-gray-600 mb-4">
                  Place your products in contextually relevant, beautiful environments that showcase their best features and uses.
                </p>
                <ul className="space-y-2 mt-auto">
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Product-aware scene selection</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Lifestyle environment creation</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Seasonal settings</span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-promogenie-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-promogenie-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Influencer Generation</h3>
                <p className="text-gray-600 mb-4">
                  Create realistic AI influencers using or wearing your product in professionally styled settings.
                </p>
                <ul className="space-y-2 mt-auto">
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Diverse influencer options</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Natural product interaction</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Custom style configuration</span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-promogenie-100 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-promogenie-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Generation</h3>
                <p className="text-gray-600 mb-4">
                  Convert static images into engaging video content with smooth transitions and professional motion effects.
                </p>
                <ul className="space-y-2 mt-auto">
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Multiple video styles</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Automatic transitions</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Platform-optimized formats</span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-promogenie-100 flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-promogenie-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lip-Sync Technology</h3>
                <p className="text-gray-600 mb-4">
                  Add voice with perfect lip synchronization to your AI influencer videos for authentic product presentations.
                </p>
                <ul className="space-y-2 mt-auto">
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Realistic speech movement</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Multiple voice options</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Custom script creation</span>
                  </li>
                </ul>
              </div>

              {/* Feature 7 */}
              <div className="flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-promogenie-100 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-promogenie-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Prompt Creation</h3>
                <p className="text-gray-600 mb-4">
                  Fine-tune your generations with custom prompts to match your specific brand vision and requirements.
                </p>
                <ul className="space-y-2 mt-auto">
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Prompt templates</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Style customization</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Brand voice integration</span>
                  </li>
                </ul>
              </div>

              {/* Feature 8 */}
              <div className="flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-promogenie-100 flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-promogenie-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Unlimited Variants</h3>
                <p className="text-gray-600 mb-4">
                  Generate multiple variations to find the perfect creative for your campaign with A/B testing capability.
                </p>
                <ul className="space-y-2 mt-auto">
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Batch generation</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Style variation</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Campaign diversification</span>
                  </li>
                </ul>
              </div>

              {/* Feature 9 */}
              <div className="flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-promogenie-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-promogenie-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">One-Click Publishing</h3>
                <p className="text-gray-600 mb-4">
                  Publish your generated content directly to major advertising platforms with a single click.
                </p>
                <ul className="space-y-2 mt-auto">
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Meta integration</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Google Ads connection</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="text-promogenie-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">TikTok & LinkedIn support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Demo */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">See the Transformation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Watch how our AI transforms a simple product photo into professional marketing assets in just minutes.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-promogenie-100 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold text-promogenie-600">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Upload Your Photo</h3>
                      <p className="text-gray-600">Simply upload your product photo, no matter the quality or background.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-promogenie-100 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold text-promogenie-600">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Select Your Options</h3>
                      <p className="text-gray-600">Choose the type of creative you want to generate or let our AI decide what works best.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-promogenie-100 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold text-promogenie-600">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Generate & Download</h3>
                      <p className="text-gray-600">Within minutes, receive multiple professional creative assets ready to use in your campaigns.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-center text-sm font-medium text-gray-600 mb-2">Original Photo</p>
                    <img 
                      src="/lovable-uploads/66b5f224-adda-4dff-9b36-4271935c7694.png" 
                      alt="Original Product" 
                      className="w-full h-40 object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                  <div>
                    <p className="text-center text-sm font-medium text-gray-600 mb-2">AI Processed</p>
                    <img 
                      src="/lovable-uploads/b5208401-363e-4a97-b8ca-f32220d76188.png" 
                      alt="AI Processed" 
                      className="w-full h-40 object-cover rounded-lg border border-promogenie-200"
                    />
                  </div>
                  <div>
                    <p className="text-center text-sm font-medium text-gray-600 mb-2">Creative Scene</p>
                    <img 
                      src="/lovable-uploads/c34afa33-cf25-449c-b085-bf4f1837ef04.png" 
                      alt="Creative Scene" 
                      className="w-full h-40 object-cover rounded-lg border border-promogenie-200"
                    />
                  </div>
                  <div>
                    <p className="text-center text-sm font-medium text-gray-600 mb-2">AI Influencer</p>
                    <img 
                      src="/lovable-uploads/7ce9dcd6-4849-4940-adbe-6865ace9cbce.png" 
                      alt="AI Influencer" 
                      className="w-full h-40 object-cover rounded-lg border border-promogenie-200"
                    />
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-center text-sm text-gray-500 mb-4">Ready to create your own transformations?</p>
                  <button className="w-full py-2 bg-promogenie-600 text-white rounded-md font-medium hover:bg-promogenie-700 transition-colors button-shine">
                    Try It Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeaturesPage;
