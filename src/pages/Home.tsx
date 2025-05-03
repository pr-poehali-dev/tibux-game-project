
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
  LayoutGrid,
  Gamepad2
} from "lucide-react";

const featuredGames = [
  {
    id: "1",
    title: "Minecraft",
    imageUrl: "https://i.postimg.cc/G36rfcC6/11.png",
    playersCount: 548752,
    rating: 4.9,
    isFavorite: true,
    category: "3D Песочница",
    gameUrl: "https://eaglercraft.com/mc/1.12.2/"
  },
  {
    id: "2",
    title: "Танки Онлайн",
    imageUrl: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3",
    playersCount: 235478,
    rating: 4.7,
    category: "3D Экшн",
    gameUrl: "https://tankionline.com/play/?lang=ru&utm_source=zorka&yclid=8230763533852475391"
  },
  {
    id: "3",
    title: "Car Simulator",
    imageUrl: "https://images.unsplash.com/photo-1546446393-a75d0d64f7a2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    playersCount: 189456,
    rating: 4.6,
    category: "3D Гонки",
    gameUrl: "https://yandex.ru/games/app/288626#app-id=288626&catalog-session-uid=catalog-8a806250-04fe-5675-85a8-36a96a4c0ec0-1746231957245-13a0&rtx-reqid=3891988100108729698&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22race%22%7D&redir-data=%7B%22block%22%3A%22cat_race%22%2C%22block_index%22%3A0%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A4%2C%22first_screen%22%3A1%2C%22page%22%3A%22cat_race%22%2C%22rn%22%3A385151934%2C%22row%22%3A0%2C%22rtx_reqid%22%3A%223891988100108729698%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221746231956897883-13623647633428813223-lxhwgumgg6wio6r6-BAL%22%2C%22games_request_id%22%3A%221746231956879607-162040330300167283-balancer-l7leveler-kubr-yp-vla-239-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252Fcategory%252Frace%22%7D"
  },
  {
    id: "4",
    title: "Человек-паук",
    imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
    playersCount: 423567,
    rating: 4.8,
    isFavorite: true,
    category: "3D Супергерои",
    gameUrl: "https://yandex.ru/games/app/293587#app-id=293587&catalog-session-uid=catalog-8a806250-04fe-5675-85a8-36a96a4c0ec0-1746232013812-abd4&rtx-reqid=831589019064317280&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22tag%22%7D&redir-data=%7B%22block%22%3A%22tag_301%22%2C%22block_index%22%3A1%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A1%2C%22first_screen%22%3A1%2C%22page%22%3A%22tag_301%22%2C%22rn%22%3A891416293%2C%22row%22%3A0%2C%22rtx_reqid%22%3A%22831589019064317280%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221746232013619214-559350446965033741-c72hlbrbxiusc7tx-BAL%22%2C%22games_request_id%22%3A%221746232013577516-13039469020805294104-balancer-l7leveler-kubr-yp-vla-239-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252Ftag%252Fchelovek_pauk_301%22%7D"
  },
  {
    id: "5",
    title: "Fortnite 3D",
    imageUrl: "https://images.unsplash.com/photo-1580327344541-c95e02a59461?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    playersCount: 315789,
    rating: 4.7,
    category: "3D Шутер",
    gameUrl: "https://krunker.io/"
  }
];

const allGames = [
  ...featuredGames,
  {
    id: "6",
    title: "Roblox",
    imageUrl: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
    playersCount: 275346,
    rating: 4.5,
    category: "3D Песочница",
    gameUrl: "https://now.gg/apps/roblox-corporation/5349/roblox.html"
  },
  {
    id: "7",
    title: "CS:GO",
    imageUrl: "https://images.unsplash.com/photo-1649180556628-9ba704115795?auto=format&fit=crop&q=80&w=2062&ixlib=rb-4.0.3",
    playersCount: 192457,
    rating: 4.8,
    category: "3D Шутер",
    gameUrl: "https://1v1.lol/"
  },
  {
    id: "8", 
    title: "SkyBlock",
    imageUrl: "https://images.unsplash.com/photo-1624557011655-8d193989da68?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    playersCount: 156789,
    rating: 4.4,
    category: "3D Выживание",
    gameUrl: "https://bonk.io"
  },
  {
    id: "9",
    title: "Just Fall",
    imageUrl: "https://images.unsplash.com/photo-1634891392970-7bd9fed481aa?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3",
    playersCount: 283541,
    rating: 4.6,
    category: "3D Аркада",
    gameUrl: "https://just-fall.io"
  },
  {
    id: "10",
    title: "Among Us 3D",
    imageUrl: "https://images.unsplash.com/photo-1648483424607-f8da5be14325?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3",
    playersCount: 345891,
    rating: 4.7,
    isFavorite: true,
    category: "3D Социальная",
    gameUrl: "https://www.y8.com/games/impostor"
  }
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
              Исследуй множество 3D игр, создавай и настраивай своего робота, и играй с друзьями в мире Tibux.
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
              src="https://images.unsplash.com/photo-1581226324075-a1b40e7060e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3" 
              alt="Robot Character" 
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
            <div className="flex items-center gap-2">
              <Gamepad2 size={24} className="text-tibux-primary" />
              <h2 className="text-2xl font-bold text-gray-800">Популярные 3D игры</h2>
            </div>
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
          <div className="flex items-center gap-2 mb-4">
            <LayoutGrid size={24} className="text-tibux-primary" />
            <h2 className="text-2xl font-bold text-gray-800">Категории 3D игр</h2>
          </div>
          
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
              {allGames.slice(0, 5).map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </TabsContent>
            
            <TabsContent value="new">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {allGames.slice(5, 10).map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="top">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {allGames.slice().sort((a, b) => b.rating - a.rating).map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="favorites">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {allGames.filter(game => game.isFavorite).map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {allGames.map((game) => (
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
            <p className="text-white/90 max-w-xl">Разблокируй эксклюзивные 3D игры, получи особые модули для своего робота и множество других преимуществ с VIP-статусом.</p>
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
