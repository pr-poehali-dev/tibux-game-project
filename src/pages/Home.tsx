
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
    title: "Minecraft 3D",
    imageUrl: "https://i.postimg.cc/G36rfcC6/11.png",
    playersCount: 548752,
    rating: 4.9,
    isFavorite: true,
    category: "3D Песочница",
    gameUrl: "https://classic.minecraft.net/"
  },
  {
    id: "2",
    title: "Танки Онлайн 3D",
    imageUrl: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3",
    playersCount: 235478,
    rating: 4.7,
    category: "3D Экшн",
    gameUrl: "https://1v1.lol/"
  },
  {
    id: "3",
    title: "Car Simulator 3D",
    imageUrl: "https://images.unsplash.com/photo-1546446393-a75d0d64f7a2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    playersCount: 189456,
    rating: 4.6,
    category: "3D Гонки",
    gameUrl: "https://krunker.io/"
  },
  {
    id: "4",
    title: "Человек-паук 3D",
    imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
    playersCount: 423567,
    rating: 4.8,
    isFavorite: true,
    category: "3D Супергерои",
    gameUrl: "https://play.gamesnacks.com/mighty-spidey/r/local/"
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
    title: "Roblox 3D",
    imageUrl: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
    playersCount: 275346,
    rating: 4.5,
    category: "3D Песочница",
    gameUrl: "https://now.gg/play/roblox-corporation/5349/roblox"
  },
  {
    id: "7",
    title: "CS:GO 3D",
    imageUrl: "https://images.unsplash.com/photo-1649180556628-9ba704115795?auto=format&fit=crop&q=80&w=2062&ixlib=rb-4.0.3",
    playersCount: 192457,
    rating: 4.8,
    category: "3D Шутер",
    gameUrl: "https://1v1.lol/"
  },
  {
    id: "8", 
    title: "SkyBlock 3D",
    imageUrl: "https://images.unsplash.com/photo-1624557011655-8d193989da68?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    playersCount: 156789,
    rating: 4.4,
    category: "3D Выживание",
    gameUrl: "https://classic.minecraft.net/"
  },
  {
    id: "9",
    title: "Fall Guys 3D",
    imageUrl: "https://images.unsplash.com/photo-1634891392970-7bd9fed481aa?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3",
    playersCount: 283541,
    rating: 4.6,
    category: "3D Аркада",
    gameUrl: "https://play.gamesnacks.com/slope-run/r/local/"
  },
  {
    id: "10",
    title: "Among Us 3D",
    imageUrl: "https://images.unsplash.com/photo-1648483424607-f8da5be14325?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3",
    playersCount: 345891,
    rating: 4.7,
    isFavorite: true,
    category: "3D Социальная",
    gameUrl: "https://play.gamesnacks.com/impostor/r/local/"
  },
  {
    id: "11",
    title: "3D Cтрелялка",
    imageUrl: "https://images.unsplash.com/photo-1570303363992-7f95ee20ebdb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    playersCount: 198345,
    rating: 4.2,
    category: "3D Экшн",
    gameUrl: "https://yandex.ru/games/app/384601#app-id=384601"
  },
  {
    id: "12",
    title: "Смешарики: Дом с Привидениями",
    imageUrl: "https://images.unsplash.com/photo-1603991888694-0339fb86db31?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3",
    playersCount: 425123,
    rating: 4.9,
    isFavorite: true,
    category: "3D Хоррор",
    gameUrl: "https://play.gamesnacks.com/slither-io/r/local/"
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
              {[...featuredGames, allGames[10], allGames[11]].map((game) => (
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
                {[allGames[10], allGames[11], ...allGames.slice(5, 8)].map((game) => (
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
        
        {/* Смешарики Game Promo */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-6 mb-10 overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-xl z-10">
              <span className="inline-block bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
                НОВИНКА
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">Смешарики: Переполох в Доме с Привидениями</h3>
              <p className="text-white/90 mb-4">
                Лосяш, попав под влияние безумной нейросети, заточил Смешариков в своем кошмарном доме! 
                Играйте за Кроша (или другого персонажа) и помогите ему сбежать, избегая зловещих Лосяша, 
                Нюшу, Карыча и Совунью, и разгадывая хитроумные головоломки.
              </p>
              <ul className="text-white/80 mb-4">
                <li className="flex items-center mb-1">
                  <div className="h-2 w-2 bg-green-400 rounded-full mr-2"></div>
                  <span>Выбор персонажа с уникальными способностями</span>
                </li>
                <li className="flex items-center mb-1">
                  <div className="h-2 w-2 bg-green-400 rounded-full mr-2"></div>
                  <span>Стелс-механики и продвинутые головоломки</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-green-400 rounded-full mr-2"></div>
                  <span>Случайная генерация уровней для каждой игры</span>
                </li>
              </ul>
              <Button 
                onClick={() => window.open("/game/smeshariki", "_blank")} 
                className="bg-white text-indigo-700 hover:bg-white/90 font-semibold px-6"
              >
                Играть прямо сейчас
              </Button>
            </div>
            <div className="md:w-96 z-10">
              <img 
                src="https://images.unsplash.com/photo-1603991888694-0339fb86db31?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3" 
                alt="Смешарики: Дом с Привидениями" 
                className="w-full h-auto rounded-lg shadow-xl transform transition-transform hover:scale-105" 
              />
            </div>
          </div>
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-400 rounded-full filter blur-3xl"></div>
          </div>
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
