import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import DashboardHeader from '@/components/DashboardHeader';
import DashboardSidebar from '@/components/DashboardSidebar';

// Step components
import StepOne from '@/components/steps/StepOne';
import StepTwo from '@/components/steps/StepTwo';
import StepThree from '@/components/steps/StepThree';

// My Creations component
import CreationsGallery from '@/components/creations/CreationsGallery';

// Sample generated image
const sampleGeneratedImage = "/lovable-uploads/5920f396-0660-48f6-8ae3-7895df22813d.png";

const Dashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("influencerVideos");
  
  // State for step-by-step workflow
  const [currentStep, setCurrentStep] = useState("step1");
  const [workflowData, setWorkflowData] = useState({
    selectedInfluencer: "",
    uploadedImages: [],
    uploadedImagePreviews: [],
    promptText: "",
    scriptText: "",
    selectedVoice: "",
    selectedAspectRatio: "16:9",
    generatedAudioUrl: "",
    selectedImage: sampleGeneratedImage,
    generatedVideo: null
  });

  // Check if user chose "remember me" on login
  useEffect(() => {
    const rememberedUser = localStorage.getItem("rememberedUser");
    if (rememberedUser) {
      const userData = JSON.parse(rememberedUser);
      toast({
        title: "Welcome back",
        description: `Logged in as ${userData.email}`
      });
    }
  }, [toast]);
  
  const handleStepOneComplete = (data: any) => {
    // In a real app, you would probably send this data to an API
    // and get back the generated image to use in step 2
    
    // For demo purposes, we'll simulate a generated image
    setWorkflowData({
      ...workflowData,
      ...data,
      selectedImage: sampleGeneratedImage
    });
    
    setCurrentStep("step2");
    toast({
      title: "Image Generated",
      description: "Your image has been successfully generated."
    });
  };
  
  const handleStepTwoComplete = (data: any) => {
    // Similarly, in a real app you'd handle video generation here
    
    setWorkflowData({
      ...workflowData,
      ...data
    });
    
    setCurrentStep("step3");
    toast({
      title: "Video Processing",
      description: "Your video is now being processed."
    });
    
    // Simulate video processing
    setTimeout(() => {
      setWorkflowData(prev => ({
        ...prev,
        generatedVideo: "/lovable-uploads/d7e56406-f041-44e5-9e1e-38ae5532b408.png"
      }));
      
      toast({
        title: "Video Ready",
        description: "Your video has been successfully created."
      });
    }, 2000);
  };
  
  const handleStepThreeComplete = (data: any) => {
    setWorkflowData({
      ...workflowData,
      ...data
    });
    
    toast({
      title: "Success",
      description: "Your content has been finalized and downloaded."
    });
    
    // Reset the workflow or navigate to creations
    setActiveTab("creations");
  };

  const handleResetWorkflow = () => {
    // Reset workflow data and go back to step 1
    setWorkflowData({
      selectedInfluencer: "",
      uploadedImages: [],
      uploadedImagePreviews: [],
      promptText: "",
      scriptText: "",
      selectedVoice: "",
      selectedAspectRatio: "16:9",
      generatedAudioUrl: "",
      selectedImage: sampleGeneratedImage,
      generatedVideo: null
    });
    setCurrentStep("step1");
  };
  
  const handleBackToStepOne = () => {
    setCurrentStep("step1");
  };
  
  const handleBackToStepTwo = () => {
    setCurrentStep("step2");
  };
  
  const handleEditCreation = (type: string, item: any) => {
    if (type === 'edit' && item) {
      // Pre-populate data based on the creation being edited
      if ('prompt' in item) {
        // It's an image
        setWorkflowData({
          ...workflowData,
          selectedInfluencer: item.influencerId || "",
          promptText: item.prompt || "",
          selectedImage: item.url,
          selectedAspectRatio: item.aspectRatio || "16:9"
        });
      } else if ('script' in item) {
        // It's a video
        setWorkflowData({
          ...workflowData,
          selectedInfluencer: item.influencerId || "",
          scriptText: item.script || "",
          selectedVoice: item.voiceId || "",
          generatedVideo: item.thumbnailUrl,
          selectedAspectRatio: item.aspectRatio || "16:9"
        });
      } else if ('voiceText' in item) {
        // It's a voice generation
        setWorkflowData({
          ...workflowData,
          scriptText: item.voiceText || "",
          selectedVoice: item.voiceId || "",
          generatedAudioUrl: item.audioUrl
        });
      }
    }
    
    setActiveTab("influencerVideos");
    setCurrentStep("step1");
  };

  const renderContent = () => {
    // Main content based on the active tab and current step
    if (activeTab === "influencerVideos") {
      switch(currentStep) {
        case "step1":
          return <StepOne 
            onNext={handleStepOneComplete} 
            initialData={workflowData} 
          />;
          
        case "step2":
          return <StepTwo 
            onBack={handleBackToStepOne} 
            onNext={handleStepTwoComplete} 
            initialData={workflowData}
          />;
          
        case "step3":
          return <StepThree 
            onBack={handleBackToStepTwo} 
            onFinish={handleStepThreeComplete}
            onCreateNew={handleResetWorkflow} 
            initialData={workflowData}
          />;
          
        default:
          return <StepOne onNext={handleStepOneComplete} />;
      }
    } else if (activeTab === "creations") {
      return <CreationsGallery onEditCreation={handleEditCreation} />;
    }
    
    return null;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6">
          <div className="w-full max-w-6xl mx-auto bg-white rounded-xl p-6 shadow-lg">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
