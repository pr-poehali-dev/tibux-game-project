
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  TrendingUp, 
  Zap, 
  Trophy, 
  Star, 
  LayoutGrid 
} from "lucide-react";

const featuredGames = [
  {
    id: "1",
    title: "Побег из Тюрьмы",
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    playersCount: 28456,
    rating: 4.8,
    isFavorite: true,
    category: "Приключения"
  },
  {
    id: "2",
    title: "Симулятор Строительства",
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3",
    playersCount: 15234,
    rating: 4.5,
    category: "Симуляторы"
  },
  {
    id: "3",
    title: "Выживание на Острове",
    imageUrl: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    playersCount: 12789,
    rating: 4.2,
    category: "Выживание"
  },
  {
    id: "4",
    title: "Гонки по Городу",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    playersCount: 9854,
    rating: 4.0,
    category: "Гонки"
  },
  {
    id: "5",
    title: "Битва за Замок",
    imageUrl: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    playersCount: 21345,
    rating: 4.7,
    isFavorite: true,
    category: "Сражения"
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-80 bg-gradient-to-r from-tibux-accent to-tibux-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1596367407372-96cb88503db6?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-xl z-10">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Добро пожаловать в Tibux!
            </h1>
            <p className="text-white/90 text-lg mb-6">
              Исследуй множество игр, создавай и настраивай своего персонажа, и играй с друзьями в мире Tibux.
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-tibux-primary hover:bg-white/90 font-semibold">
                Начать играть
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block absolute right-10 bottom-0">
            <img 
              src="https://images.unsplash.com/photo-1575908539614-ff89490f4a78?auto=format&fit=crop&q=80&w=1342&ixlib=rb-4.0.3" 
              alt="Character" 
              className="h-96 object-contain animate-float"
              style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.2))" }}
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto py-8">
        {/* Featured Carousel */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Популярные игры</h2>
            <Button variant="link" className="text-tibux-primary font-semibold flex items-center gap-1">
              Смотреть все <ArrowUpRight size={16} />
            </Button>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {featuredGames.map((game) => (
                <CarouselItem key={game.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-2">
                  <GameCard {...game} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        {/* Categories Tabs */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Категории</h2>
          
          <Tabs defaultValue="popular">
            <TabsList className="mb-4">
              <TabsTrigger value="popular" className="flex items-center gap-1">
                <TrendingUp size={16} /> Популярные
              </TabsTrigger>
              <TabsTrigger value="new" className="flex items-center gap-1">
                <Zap size={16} /> Новые
              </TabsTrigger>
              <TabsTrigger value="top" className="flex items-center gap-1">
                <Trophy size={16} /> Топ
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-1">
                <Star size={16} /> Избранное
              </TabsTrigger>
              <TabsTrigger value="all" className="flex items-center gap-1">
                <LayoutGrid size={16} /> Все игры
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="popular" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {featuredGames.map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </TabsContent>
            
            <TabsContent value="new">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {featuredGames.slice().reverse().map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="top">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {featuredGames.slice().sort((a, b) => b.rating - a.rating).map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="favorites">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {featuredGames.filter(game => game.isFavorite).map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {featuredGames.map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* VIP Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Получи VIP-доступ!</h3>
            <p className="text-white/90 max-w-xl">Разблокируй эксклюзивные игры, получи особые предметы и множество других преимуществ с VIP-статусом.</p>
          </div>
          <Button className="bg-white text-yellow-600 hover:bg-white/90 font-semibold px-6">
            Купить VIP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
