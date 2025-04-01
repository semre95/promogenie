
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause, RefreshCw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Sample generated image
const sampleGeneratedImage = "/lovable-uploads/5920f396-0660-48f6-8ae3-7895df22813d.png";

interface StepTwoProps {
  onBack: () => void;
  onNext: (data: any) => void;
  initialData?: any;
}

const StepTwo: React.FC<StepTwoProps> = ({ onBack, onNext, initialData = {} }) => {
  const { toast } = useToast();
  const [scriptText, setScriptText] = useState(initialData.scriptText || "");
  const [selectedVoice, setSelectedVoice] = useState(initialData.selectedVoice || "");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [generatedAudioUrl, setGeneratedAudioUrl] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // The generated image from the previous step would be passed via initialData
  const selectedImage = initialData.selectedImage || sampleGeneratedImage;
  
  const voices = [
    { id: "voice1", name: "Professional Male" },
    { id: "voice2", name: "Professional Female" },
    { id: "voice3", name: "Energetic Male" },
    { id: "voice4", name: "Energetic Female" },
    { id: "voice5", name: "Friendly Male" },
    { id: "voice6", name: "Friendly Female" },
    { id: "voice7", name: "Authoritative Male" },
    { id: "voice8", name: "Authoritative Female" }
  ];
  
  const calculateWishCost = () => {
    // Base cost for voice generation
    return 5;
  };

  const handleGenerateVoice = () => {
    if (!scriptText || !selectedVoice) {
      toast({
        title: "Missing information",
        description: "Please write a script and select a voice to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate voice generation
    setTimeout(() => {
      // In a real app, this would be the URL returned from the API
      setGeneratedAudioUrl("/path/to/generated/audio.mp3");
      setIsGenerating(false);
      
      toast({
        title: "Voice Generated",
        description: "Your voice-over has been successfully generated."
      });
    }, 2000);
  };
  
  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleContinue = () => {
    onNext({
      scriptText,
      selectedVoice,
      generatedAudioUrl,
      selectedImage
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-promogenie-700 mb-2">STEP 2/3: Dubbing</h2>
        <p className="text-promogenie-500">Add a voice-over to your influencer video</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-promogenie-700 text-xl font-semibold mb-3">Ad Script</h3>
            <textarea 
              value={scriptText}
              onChange={(e) => setScriptText(e.target.value)}
              placeholder="Write your ad script here"
              className="w-full min-h-[150px] bg-white text-promogenie-700 border-promogenie-200 p-3 rounded-md border"
            ></textarea>
            <p className="text-promogenie-500 mt-2 text-sm">
              {scriptText.split(' ').length} words (recommended: max 15 words)
            </p>
            
            <div className="mt-4">
              <Button 
                onClick={handleGenerateVoice}
                className="w-full bg-promogenie-600 hover:bg-promogenie-700 text-white"
                disabled={isGenerating || !scriptText || !selectedVoice}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Generating Voice...
                  </>
                ) : (
                  <>
                    Generate Voice (5 Wishes)
                  </>
                )}
              </Button>

              {generatedAudioUrl && (
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-promogenie-700">Generated Voice</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePlayAudio}
                      className="flex items-center"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      <span className="ml-1">{isPlaying ? "Pause" : "Play"}</span>
                    </Button>
                  </div>
                  <audio ref={audioRef} src={generatedAudioUrl} onEnded={() => setIsPlaying(false)} className="hidden" />
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-promogenie-700 text-xl font-semibold mb-3">Generated Image</h3>
            <div className="bg-gray-50 rounded-lg p-4 flex justify-center">
              <img 
                src={selectedImage} 
                alt="Selected for video" 
                className="rounded-lg max-h-64"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-promogenie-700 text-xl font-semibold mb-3">Pick Your Voice</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            {voices.map((voice) => (
              <div
                key={voice.id}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedVoice === voice.id 
                    ? 'bg-promogenie-600 text-white border-promogenie-300' 
                    : 'bg-white text-promogenie-700 border border-promogenie-200 hover:border-promogenie-400 hover:bg-promogenie-50'
                }`}
                onClick={() => setSelectedVoice(voice.id)}
              >
                <p className="font-medium text-center">{voice.name}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end items-center">
            <p className="text-promogenie-500 italic mr-4">Create your own voice... 
              <span className="ml-1 text-promogenie-700 font-medium">Coming Soon</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <div>
          <p className="text-promogenie-700">Cost: <span className="text-promogenie-600 font-semibold">{calculateWishCost()} Wishes</span></p>
        </div>
        <div className="flex space-x-4">
          <Button 
            variant="outline" 
            className="border-promogenie-300 text-promogenie-700"
            onClick={onBack}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button 
            className="bg-promogenie-600 hover:bg-promogenie-700 text-white px-8"
            onClick={handleContinue}
            disabled={!scriptText || !selectedVoice || !generatedAudioUrl}
          >
            Continue
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
