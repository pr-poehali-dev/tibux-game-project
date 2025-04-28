
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GameCardProps {
  id: string;
  title: string;
  imageUrl: string;
  playersCount: number;
  rating: number;
  isFavorite?: boolean;
  category?: string;
}

const GameCard = ({ 
  id, 
  title, 
  imageUrl, 
  playersCount, 
  rating, 
  isFavorite = false,
  category 
}: GameCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </AspectRatio>
        
        {category && (
          <div className="absolute top-2 left-2 bg-tibux-primary text-white px-2 py-0.5 rounded text-xs font-semibold">
            {category}
          </div>
        )}
        
        {isFavorite && (
          <div className="absolute top-2 right-2 bg-tibux-green text-white p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        )}
      </div>
      
      <div className="p-3">
        <h3 className="font-bold text-gray-800 mb-1 truncate">{title}</h3>
        
        <div className="flex justify-between items-center mb-3">
          <div className="text-xs text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            {playersCount.toLocaleString()}
          </div>
          
          <div className="text-xs flex items-center text-yellow-500">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg 
                key={idx} 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-3.5 w-3.5 ${idx < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        
        <Button className="w-full bg-tibux-primary hover:bg-tibux-primary/90">
          Играть
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
