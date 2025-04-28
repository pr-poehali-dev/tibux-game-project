
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  User, 
  Settings, 
  Crown, 
  Search,
  Bell,
  MessageSquare,
  Users2,
  ShoppingCart
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-tibux-primary text-white p-2 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold">TIBUX</Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:opacity-80 transition-opacity flex items-center gap-1">
            <Home size={18} />
            <span>Главная</span>
          </Link>
          <Link to="/avatar" className="hover:opacity-80 transition-opacity flex items-center gap-1">
            <User size={18} />
            <span>Аватар</span>
          </Link>
          <Link to="/vip" className="hover:opacity-80 transition-opacity flex items-center gap-1">
            <Crown size={18} />
            <span>VIP</span>
          </Link>
          <Link to="/settings" className="hover:opacity-80 transition-opacity flex items-center gap-1">
            <Settings size={18} />
            <span>Настройки</span>
          </Link>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative rounded-full bg-white bg-opacity-20 px-3 py-1.5 flex items-center">
          <Search size={16} className="text-white opacity-70 mr-2" />
          <input
            type="text"
            placeholder="Поиск..."
            className="bg-transparent outline-none text-sm text-white placeholder-white placeholder-opacity-70 w-24 md:w-32"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-20">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-20">
            <MessageSquare size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-20">
            <Users2 size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-20">
            <ShoppingCart size={20} />
          </Button>
        </div>
        
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" />
          <AvatarFallback>TX</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
