
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, X, RotateCw } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface GameIframeProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  gameUrl: string;
}

const GameIframe = ({ isOpen, onClose, title, gameUrl }: GameIframeProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setLoadingProgress(0);
      
      // Simulate loading progress
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          const next = prev + Math.random() * 15;
          return next > 90 ? 90 : next;
        });
      }, 300);
      
      // Complete loading after timeout
      const timer = setTimeout(() => {
        clearInterval(interval);
        setLoadingProgress(100);
        setIsLoading(false);
      }, 3500);
      
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [isOpen, gameUrl]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleClose = () => {
    setIsFullscreen(false);
    onClose();
  };
  
  const reloadGame = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      setLoadingProgress(0);
      iframeRef.current.src = gameUrl;
      
      // Simulate loading progress again
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          const next = prev + Math.random() * 15;
          return next > 90 ? 90 : next;
        });
      }, 300);
      
      // Complete loading after timeout
      const timer = setTimeout(() => {
        clearInterval(interval);
        setLoadingProgress(100);
        setIsLoading(false);
      }, 3500);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className={`p-0 ${isFullscreen ? 'max-w-[100vw] w-[100vw] h-[100vh] rounded-none' : 'max-w-5xl'}`}
        style={{ overflow: "hidden" }}
      >
        <DialogHeader className="px-4 py-2 flex-row flex justify-between items-center border-b bg-gray-900 text-white">
          <DialogTitle className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
            {title}
          </DialogTitle>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={reloadGame} className="h-8 w-8 text-white hover:bg-gray-800">
              <RotateCw size={16} />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="h-8 w-8 text-white hover:bg-gray-800">
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </Button>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-gray-800 hover:text-red-400">
                <X size={16} />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        <div className={`${isFullscreen ? 'h-[calc(100vh-3.5rem)]' : 'h-[75vh]'} w-full relative bg-gray-900`}>
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-10">
              <div className="text-center mb-4">
                <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-tibux-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Загрузка...</span>
                </div>
              </div>
              <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-tibux-primary rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              <p className="mt-4 text-white">Загрузка 3D игры... {Math.round(loadingProgress)}%</p>
              <p className="mt-2 text-gray-400 text-sm">Подготовка графических ресурсов</p>
            </div>
          )}
          <iframe 
            ref={iframeRef}
            src={gameUrl} 
            className="w-full h-full border-none" 
            title={title}
            allowFullScreen
            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation"
            allow="accelerometer; autoplay; camera; clipboard-write; encrypted-media; fullscreen; geolocation; gyroscope; microphone; midi; payment; picture-in-picture; publickey-credentials-get; screen-wake-lock; web-share; xr-spatial-tracking"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GameIframe;
