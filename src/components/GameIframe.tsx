
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, X } from "lucide-react";
import { useState } from "react";

interface GameIframeProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  gameUrl: string;
}

const GameIframe = ({ isOpen, onClose, title, gameUrl }: GameIframeProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

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
          <DialogTitle>{title}</DialogTitle>
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
        <div className={`${isFullscreen ? 'h-[calc(100vh-3.5rem)]' : 'h-[70vh]'} w-full`}>
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
