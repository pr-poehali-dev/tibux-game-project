
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, X, RotateCw, Volume2, VolumeX } from "lucide-react";
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
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setLoadingProgress(0);
      setHasError(false);
      
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
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
        // Fallback for browsers where fullscreen API is not available
        setIsFullscreen(!isFullscreen);
      });
    } else if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => {
        console.error(`Error attempting to exit fullscreen: ${err.message}`);
        setIsFullscreen(!isFullscreen);
      });
    }
    
    // Fallback toggle for non-fullscreen API scenario
    if (!document.fullscreenEnabled) {
      setIsFullscreen(!isFullscreen);
    }
  };

  const handleClose = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => {
        console.error(`Error attempting to exit fullscreen: ${err.message}`);
      });
    }
    setIsFullscreen(false);
    onClose();
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (iframeRef.current) {
      try {
        const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
        if (iframeDoc) {
          const audioElements = iframeDoc.querySelectorAll('audio, video');
          audioElements.forEach((el: HTMLMediaElement) => {
            el.muted = !isMuted;
          });
        }
      } catch (e) {
        console.log('Cannot access iframe content to mute/unmute due to cross-origin policy');
      }
    }
  };
  
  const reloadGame = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      setLoadingProgress(0);
      setHasError(false);
      
      // Store current src
      const currentSrc = iframeRef.current.src;
      
      // Reset src to trigger reload
      iframeRef.current.src = "";
      
      // Set timeout to allow iframe to clear
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = currentSrc;
        }
      }, 100);
      
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
  
  const handleIframeError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className={`p-0 ${isFullscreen ? 'max-w-[100vw] w-[100vw] h-[100vh] rounded-none' : 'max-w-6xl'}`}
        style={{ overflow: "hidden" }}
      >
        <DialogHeader className="px-4 py-2 flex-row flex justify-between items-center border-b bg-gray-900 text-white">
          <DialogTitle className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
            {title}
          </DialogTitle>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleMute} className="h-8 w-8 text-white hover:bg-gray-800">
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </Button>
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
        <div 
          ref={containerRef}
          className={`${isFullscreen ? 'h-[calc(100vh-3.5rem)]' : 'h-[75vh]'} w-full relative bg-gray-900`}
        >
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
          
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-10">
              <div className="text-center mb-6">
                <div className="inline-block h-16 w-16 text-red-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Не удалось загрузить игру</h3>
                <p className="text-gray-300 mb-6">Произошла ошибка при загрузке игры. Пожалуйста, попробуйте перезагрузить страницу или проверьте соединение с интернетом.</p>
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={reloadGame} className="text-white border-white hover:bg-gray-800">
                    <RotateCw size={16} className="mr-2" /> Попробовать снова
                  </Button>
                  <Button onClick={handleClose} className="bg-tibux-primary hover:bg-tibux-primary/90">
                    Закрыть
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          <iframe 
            ref={iframeRef}
            src={gameUrl} 
            className="w-full h-full border-none" 
            title={title}
            allowFullScreen
            onError={handleIframeError}
            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation"
            allow="accelerometer; autoplay; camera; clipboard-write; encrypted-media; fullscreen; geolocation; gyroscope; microphone; midi; payment; picture-in-picture; publickey-credentials-get; screen-wake-lock; web-share; xr-spatial-tracking"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GameIframe;
