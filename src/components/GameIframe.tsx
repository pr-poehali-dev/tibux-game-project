
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, X } from "lucide-react";
import { useState, useEffect } from "react";

interface GameIframeProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  gameUrl: string;
}

const GameIframe = ({ isOpen, onClose, title, gameUrl }: GameIframeProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Reset loading state whenever dialog opens
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, gameUrl]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleClose = () => {
    setIsFullscreen(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className={`p-0 ${isFullscreen ? 'max-w-[100vw] w-[100vw] h-[100vh] rounded-none' : 'max-w-5xl'}`}
        style={{ overflow: "hidden" }}
      >
        <DialogHeader className="px-4 py-2 flex-row flex justify-between items-center border-b">
          <DialogTitle className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
            {title}
          </DialogTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={toggleFullscreen} className="h-8 w-8">
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </Button>
            <DialogClose asChild>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <X size={16} />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        <div className={`${isFullscreen ? 'h-[calc(100vh-3.5rem)]' : 'h-[70vh]'} w-full relative bg-gray-900`}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
              <div className="text-center">
                <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-tibux-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Загрузка...</span>
                </div>
                <p className="mt-4 text-white">Загрузка 3D игры...</p>
              </div>
            </div>
          )}
          <iframe 
            src={gameUrl} 
            className="w-full h-full border-none" 
            title={title}
            allowFullScreen 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GameIframe;
