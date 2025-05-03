
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Star, 
  Download, 
  Share2, 
  Flag, 
  Heart, 
  MessageCircle, 
  Play, 
  ShieldAlert, 
  UserCheck,
  Gift,
  Ghost
} from "lucide-react";
import { useState } from "react";
import GameIframe from "@/components/GameIframe";

const SmesharikiGame = () => {
  const navigate = useNavigate();
  const [isGameOpen, setIsGameOpen] = useState(false);
  
  const gameInfo = {
    id: "smeshariki",
    title: "Смешарики: Переполох в Доме с Привидениями",
    description: "Лосяш, попав под влияние безумной нейросети, заточил Смешариков в своем кошмарном доме! Играйте за Кроша (или другого персонажа) и помогите ему сбежать, избегая зловещих Лосяша, Нюшу, Карыча и Совунью, и разгадывая хитроумные головоломки.",
    rating: 4.9,
    reviews: 754,
    players: 425123,
    category: "3D Хоррор",
    developer: "Tibux Games",
    releaseDate: "2024-05-01",
    size: "175 MB",
    version: "1.2.3",
    platforms: ["Web", "Android", "iOS"],
    tags: ["Хоррор", "Головоломка", "Стелс", "3D", "Смешарики"],
    imageUrl: "https://images.unsplash.com/photo-1603991888694-0339fb86db31?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3",
    screenshots: [
      "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?auto=format&fit=crop&q=80&w=2032&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1618331833071-ce81bd50d300?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?auto=format&fit=crop&q=80&w=2032&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1628599578620-d82d79dfcc3d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3",
    ],
    gameUrl: "https://play.gamesnacks.com/slither-io/r/local/"
  };
  
  const characters = [
    {
      name: "Крош",
      role: "Главный герой",
      ability: "Высокая скорость бега",
      description: "Самый быстрый персонаж. Может убегать от противников, но плохо прячется.",
      image: "https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3"
    },
    {
      name: "Ёжик",
      role: "Специалист по укрытиям",
      ability: "Мастер маскировки",
      description: "Отлично прячется в тени, может дольше оставаться незамеченным.",
      image: "https://images.unsplash.com/photo-1534278931827-8a259344abe7?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3"
    },
    {
      name: "Лосяш",
      role: "Главный антагонист",
      ability: "Расставляет ловушки",
      description: "Сошел с ума из-за нейросети и теперь охотится на своих друзей.",
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3"
    },
    {
      name: "Нюша",
      role: "Враг-преследователь",
      ability: "Быстрое преследование",
      description: "Очень быстро бегает и преследует игрока на близком расстоянии.",
      image: "https://images.unsplash.com/photo-1566650554919-44ec6bbe2518?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto py-8">
        {/* Back button */}
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} /> Назад
        </Button>
        
        {/* Game Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src={gameInfo.imageUrl} 
                  alt={gameInfo.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button 
                    onClick={() => setIsGameOpen(true)} 
                    className="bg-tibux-primary hover:bg-tibux-primary/90 transition-transform hover:scale-105 flex items-center gap-2 px-8"
                    size="lg"
                  >
                    <Play size={20} className="fill-white" /> Играть
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {gameInfo.screenshots.map((screenshot, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={screenshot} 
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {gameInfo.category}
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center gap-1">
                  <Ghost size={12} /> Эксклюзив
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{gameInfo.title}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star 
                      key={idx} 
                      size={18} 
                      className={idx < Math.floor(gameInfo.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600">{gameInfo.rating}</span>
                </div>
                <div className="text-sm text-gray-600">
                  {gameInfo.reviews} отзывов
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <UserCheck size={16} /> {gameInfo.players.toLocaleString()} игроков
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                {gameInfo.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Разработчик</p>
                  <p className="font-medium">{gameInfo.developer}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Дата выхода</p>
                  <p className="font-medium">{new Date(gameInfo.releaseDate).toLocaleDateString('ru-RU')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Версия</p>
                  <p className="font-medium">{gameInfo.version}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Размер</p>
                  <p className="font-medium">{gameInfo.size}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {gameInfo.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => setIsGameOpen(true)} 
                  className="bg-tibux-primary hover:bg-tibux-primary/90 flex items-center gap-2"
                  size="lg"
                >
                  <Play size={18} /> Играть сейчас
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download size={18} /> Скачать
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Heart size={18} /> В избранное
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 size={18} /> Поделиться
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Game Details */}
        <Tabs defaultValue="about" className="bg-white rounded-lg shadow-md">
          <TabsList className="w-full justify-start p-0 bg-gray-100 rounded-t-lg border-b">
            <TabsTrigger value="about" className="rounded-none rounded-tl-lg data-[state=active]:bg-white">
              Об игре
            </TabsTrigger>
            <TabsTrigger value="characters" className="rounded-none data-[state=active]:bg-white">
              Персонажи
            </TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-none data-[state=active]:bg-white">
              Отзывы
            </TabsTrigger>
            <TabsTrigger value="shop" className="rounded-none data-[state=active]:bg-white">
              Магазин
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Описание игры</h2>
              <p className="text-gray-700 mb-4">
                Лосяш, попав под влияние безумной нейросети, заточил Смешариков в своем кошмарном доме! 
                Играйте за Кроша (или другого персонажа) и помогите ему сбежать, избегая зловещих преследователей 
                и разгадывая хитроумные головоломки.
              </p>
              <p className="text-gray-700 mb-4">
                В этой увлекательной 3D игре вам предстоит использовать стелс-механики, решать головоломки 
                и искать способы спасти друзей. Каждый персонаж обладает уникальными способностями, 
                что делает игровой процесс разнообразным и реиграбельным.
              </p>
              <p className="text-gray-700">
                Исследуйте зловещий дом, найдите все секреты и остановите безумного Лосяша, прежде чем будет слишком поздно!
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Особенности игры</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-800 p-2 rounded-full mt-0.5">
                    <Ghost size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Выбор персонажа</h3>
                    <p className="text-gray-700">Каждый Смешарик имеет свои уникальные способности: Крош - скорость, Ёжик - умение прятаться и т.д.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-800 p-2 rounded-full mt-0.5">
                    <ShieldAlert size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Стелс-механика</h3>
                    <p className="text-gray-700">Тихо передвигайтесь, прячьтесь и отвлекайте врагов, чтобы остаться незамеченным.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-800 p-2 rounded-full mt-0.5">
                    <Gift size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Полезные предметы</h3>
                    <p className="text-gray-700">Собирайте предметы (морковка, отмычки, шестеренки), которые помогут вам в прохождении.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-800 p-2 rounded-full mt-0.5">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Рандомизация</h3>
                    <p className="text-gray-700">Каждое прохождение уникально — расположение врагов и предметов меняется.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Системные требования</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Минимальные</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-medium">ОС:</span> Windows 7, macOS 10.13, Android 7.0, iOS 12.0</li>
                    <li><span className="font-medium">Процессор:</span> Dual Core 2 GHz</li>
                    <li><span className="font-medium">Память:</span> 2 GB RAM</li>
                    <li><span className="font-medium">Графика:</span> Intel HD Graphics 4000</li>
                    <li><span className="font-medium">Хранилище:</span> 500 MB</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Рекомендуемые</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-medium">ОС:</span> Windows 10, macOS 11.0, Android 10.0, iOS 14.0</li>
                    <li><span className="font-medium">Процессор:</span> Quad Core 2.5 GHz</li>
                    <li><span className="font-medium">Память:</span> 4 GB RAM</li>
                    <li><span className="font-medium">Графика:</span> NVIDIA GeForce GTX 660 / AMD Radeon HD 7850</li>
                    <li><span className="font-medium">Хранилище:</span> 1 GB</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="characters" className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Персонажи</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {characters.map((character, index) => (
                <div key={index} className="flex bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                  <div className="w-1/3">
                    <img 
                      src={character.image} 
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <h3 className="font-bold text-gray-800 mb-1">{character.name}</h3>
                    <p className="text-sm text-purple-600 mb-2">{character.role}</p>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Способность:</span> {character.ability}
                    </p>
                    <p className="text-sm text-gray-700">{character.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Другие персонажи</h3>
              <p className="text-gray-700 mb-4">
                Разблокируйте больше персонажей, проходя игру и выполняя особые задания:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <div className="w-20 h-20 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                    <Ghost size={28} className="text-gray-400" />
                  </div>
                  <p className="font-medium text-gray-800">Копатыч</p>
                  <p className="text-xs text-gray-500">Скоро</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <div className="w-20 h-20 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                    <Ghost size={28} className="text-gray-400" />
                  </div>
                  <p className="font-medium text-gray-800">Пин</p>
                  <p className="text-xs text-gray-500">Скоро</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center relative">
                  <div className="absolute -top-1 -right-1 bg-tibux-primary text-white text-xs px-1.5 py-0.5 rounded">
                    VIP
                  </div>
                  <div className="w-20 h-20 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                    <Ghost size={28} className="text-gray-400" />
                  </div>
                  <p className="font-medium text-gray-800">Бараш</p>
                  <p className="text-xs text-gray-500">Эксклюзив</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <div className="w-20 h-20 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                    <Ghost size={28} className="text-gray-400" />
                  </div>
                  <p className="font-medium text-gray-800">Карыч</p>
                  <p className="text-xs text-gray-500">Скоро</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Отзывы пользователей</h2>
              <Button>Написать отзыв</Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Рейтинг игры</h3>
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-bold text-gray-800">{gameInfo.rating}</div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star 
                          key={idx} 
                          size={20} 
                          className={idx < Math.floor(gameInfo.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'} 
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{gameInfo.reviews} отзывов</div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-sm text-gray-600 w-6">5★</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '85%' }}></div>
                    </div>
                    <div className="text-sm text-gray-600">85%</div>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-sm text-gray-600 w-6">4★</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400" style={{ width: '10%' }}></div>
                    </div>
                    <div className="text-sm text-gray-600">10%</div>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-sm text-gray-600 w-6">3★</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400" style={{ width: '3%' }}></div>
                    </div>
                    <div className="text-sm text-gray-600">3%</div>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-sm text-gray-600 w-6">2★</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-400" style={{ width: '1%' }}></div>
                    </div>
                    <div className="text-sm text-gray-600">1%</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-gray-600 w-6">1★</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500" style={{ width: '1%' }}></div>
                    </div>
                    <div className="text-sm text-gray-600">1%</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Sample reviews */}
              <div className="border-b pb-6">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold">
                      A
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Артем К.</p>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} size={14} className={idx < 5 ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">2 мая 2024</p>
                </div>
                <p className="text-gray-700">
                  Отличная игра! Необычное сочетание Смешариков и жанра хоррор-головоломки. Играю за Кроша, он самый быстрый. 
                  Особенно понравились разные способности персонажей и то, что каждый раз уровни генерируются по-разному.
                </p>
              </div>
              
              <div className="border-b pb-6">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold">
                      М
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Мария В.</p>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} size={14} className={idx < 4 ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">1 мая 2024</p>
                </div>
                <p className="text-gray-700">
                  Крутая задумка! Никогда не думала, что увижу Смешариков в таком необычном сеттинге. 
                  Игра реально держит в напряжении. Минус только в том, что персонажей пока маловато, 
                  но разработчики обещают добавить больше.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold">
                      С
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Сергей П.</p>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} size={14} className={idx < 5 ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">29 апреля 2024</p>
                </div>
                <p className="text-gray-700">
                  Лучшая игра с элементами хоррора, которую я играл в этом году! Головоломки очень интересные, 
                  и при этом не слишком сложные. Особенно понравилось, как реализована механика стелса. 
                  Всем рекомендую, особенно фанатам Смешариков!
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline">Загрузить еще отзывы</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="shop" className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Внутриигровой магазин</h2>
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full flex items-center gap-2">
                <Gift size={16} />
                <span>1250 монет</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Костюмы</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-100 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3" 
                      alt="Космический Крош" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-tibux-primary text-white text-xs px-1.5 py-0.5 rounded">
                      Новинка
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-gray-800 mb-1">Космический Крош</h4>
                    <div className="flex justify-between items-center">
                      <p className="text-sm flex items-center gap-1 text-yellow-800">
                        <Gift size={14} className="fill-yellow-400 text-yellow-400" /> 350
                      </p>
                      <Button variant="outline" size="sm">Купить</Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-100 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1534278931827-8a259344abe7?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3" 
                      alt="Ёжик-призрак" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-gray-800 mb-1">Ёжик-призрак</h4>
                    <div className="flex justify-between items-center">
                      <p className="text-sm flex items-center gap-1 text-yellow-800">
                        <Gift size={14} className="fill-yellow-400 text-yellow-400" /> 250
                      </p>
                      <Button variant="outline" size="sm">Купить</Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-100 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1566650554919-44ec6bbe2518?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3" 
                      alt="Нюша-охотница" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-1.5 py-0.5 rounded">
                      VIP
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-gray-800 mb-1">Нюша-охотница</h4>
                    <div className="flex justify-between items-center">
                      <p className="text-sm flex items-center gap-1 text-yellow-800">
                        <Gift size={14} className="fill-yellow-400 text-yellow-400" /> 500
                      </p>
                      <Button className="bg-yellow-500 hover:bg-yellow-600" size="sm">VIP</Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Ghost size={48} className="text-gray-300" />
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-gray-800 mb-1">Скоро будет доступно</h4>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">Следите за обновлениями</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Бустеры и предметы</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-800">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">Ускоритель передвижения</h4>
                    <p className="text-xs text-gray-500 mb-1">+50% к скорости на 5 минут</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm flex items-center gap-1 text-yellow-800">
                        <Gift size={14} className="fill-yellow-400 text-yellow-400" /> 100
                      </p>
                      <Button variant="outline" size="sm">Купить</Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">Невидимость</h4>
                    <p className="text-xs text-gray-500 mb-1">30 секунд полной невидимости</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm flex items-center gap-1 text-yellow-800">
                        <Gift size={14} className="fill-yellow-400 text-yellow-400" /> 200
                      </p>
                      <Button variant="outline" size="sm">Купить</Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-800">
                    <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">Отвлекающий шум</h4>
                    <p className="text-xs text-gray-500 mb-1">Отвлекает всех врагов на 15 секунд</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm flex items-center gap-1 text-yellow-800">
                        <Gift size={14} className="fill-yellow-400 text-yellow-400" /> 150
                      </p>
                      <Button variant="outline" size="sm">Купить</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {isGameOpen && (
        <GameIframe 
          isOpen={isGameOpen} 
          onClose={() => setIsGameOpen(false)} 
          title={gameInfo.title} 
          gameUrl={gameInfo.gameUrl} 
        />
      )}
    </div>
  );
};

export default SmesharikiGame;
