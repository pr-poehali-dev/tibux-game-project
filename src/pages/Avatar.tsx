
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Sparkles, 
  Gift, 
  ShoppingCart,
  Cpu,
  Cog,
  Wrench,
  Shield,
  Rocket
} from "lucide-react";

const ROBOT_PARTS = {
  heads: [
    "https://images.unsplash.com/photo-1581226324075-a1b40e7060e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=1912&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1868&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1594038302254-1d7df7f75359?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3"
  ],
  bodies: [
    "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1549616775-6e9a414b809e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1591024762048-a1cbfa17aa6b?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1157&ixlib=rb-4.0.3"
  ],
  arms: [
    "https://images.unsplash.com/photo-1596455607563-adf9ef84dea7?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1558137623-752d9111cde5?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1585837575652-267f382bb759?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3"
  ]
};

const Avatar = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Настройка робота-аватара</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Avatar Preview */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-tibux-light rounded-lg p-4 mb-4 flex items-center justify-center">
                <div className="relative w-56 h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1558137623-752d9111cde5?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3" 
                    alt="Robot Character" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="flex justify-center gap-4 mb-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <span className="flex items-center gap-1">
                    <Palette size={16} /> Цвета
                  </span>
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <span className="flex items-center gap-1">
                    <Sparkles size={16} /> Анимация
                  </span>
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" className="p-3 h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3" 
                    alt="Robot Pose 1" 
                    className="w-full h-16 object-cover rounded"
                  />
                </Button>
                <Button variant="outline" className="p-3 h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=1510&ixlib=rb-4.0.3" 
                    alt="Robot Pose 2" 
                    className="w-full h-16 object-cover rounded"
                  />
                </Button>
                <Button variant="outline" className="p-3 h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3" 
                    alt="Robot Pose 3" 
                    className="w-full h-16 object-cover rounded"
                  />
                </Button>
              </div>
              
              <hr className="my-4" />
              
              <div className="flex justify-between gap-4">
                <Button variant="outline" className="flex-1 bg-white">
                  Сохранить
                </Button>
                <Button className="flex-1 bg-tibux-primary hover:bg-tibux-primary/90">
                  Применить
                </Button>
              </div>
            </div>
          </div>
          
          {/* Customization Panel */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Tabs defaultValue="body">
                <TabsList className="mb-6 w-full justify-start border-b pb-1 rounded-none">
                  <TabsTrigger value="body" className="flex items-center gap-1 data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <Cpu size={16} /> Корпус
                  </TabsTrigger>
                  <TabsTrigger value="clothing" className="flex items-center gap-1 data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <Shield size={16} /> Броня
                  </TabsTrigger>
                  <TabsTrigger value="modules" className="flex items-center gap-1 data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <Cog size={16} /> Модули
                  </TabsTrigger>
                  <TabsTrigger value="accessories" className="flex items-center gap-1 data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <Wrench size={16} /> Инструменты
                  </TabsTrigger>
                  <TabsTrigger value="special" className="flex items-center gap-1 data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <Gift size={16} /> Уникальные
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="body" className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800">Выбор головы робота</h3>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <ShoppingCart size={14} /> Магазин
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                    {ROBOT_PARTS.heads.map((imageUrl, index) => (
                      <div key={index} className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${index === 0 ? 'border-tibux-primary' : 'border-transparent'} transition-all hover:shadow-md`}>
                        <div className="bg-tibux-light p-2 aspect-square flex items-center justify-center">
                          <img 
                            src={imageUrl} 
                            alt={`Robot Head ${index + 1}`} 
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        {index === 2 && (
                          <div className="absolute top-2 right-2 bg-tibux-primary text-white px-1.5 py-0.5 rounded text-xs">
                            VIP
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 mb-2">
                    <h3 className="text-lg font-bold text-gray-800">Тип корпуса</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                    {ROBOT_PARTS.bodies.map((imageUrl, index) => (
                      <div key={index} className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${index === 1 ? 'border-tibux-primary' : 'border-transparent'} transition-all hover:shadow-md`}>
                        <div className="bg-tibux-light p-2 aspect-square flex items-center justify-center">
                          <img 
                            src={imageUrl} 
                            alt={`Robot Body ${index + 1}`} 
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        {index === 3 && (
                          <div className="absolute top-2 right-2 bg-tibux-green text-white px-1.5 py-0.5 rounded text-xs">
                            Новое
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="clothing">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                    {ROBOT_PARTS.arms.map((imageUrl, index) => (
                      <div key={index} className="relative cursor-pointer rounded-lg overflow-hidden border-2 border-transparent transition-all hover:shadow-md">
                        <div className="bg-tibux-light p-2 aspect-square flex items-center justify-center">
                          <img 
                            src={imageUrl} 
                            alt={`Robot Armor ${index + 1}`} 
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        {index === 1 && (
                          <div className="absolute top-2 right-2 bg-tibux-green text-white px-1.5 py-0.5 rounded text-xs">
                            Новое
                          </div>
                        )}
                        {index === 4 && (
                          <div className="absolute top-2 right-2 bg-tibux-primary text-white px-1.5 py-0.5 rounded text-xs">
                            VIP
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="modules">
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Модули улучшений</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                      {[
                        "https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
                        "https://images.unsplash.com/photo-1517464916049-eee216a03dc9?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
                        "https://images.unsplash.com/photo-1565799286230-bf5b11ac4478?auto=format&fit=crop&q=80&w=893&ixlib=rb-4.0.3",
                        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
                        "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&q=80&w=1229&ixlib=rb-4.0.3"
                      ].map((imageUrl, index) => (
                        <div key={index} className="relative cursor-pointer rounded-lg overflow-hidden border-2 border-transparent transition-all hover:shadow-md">
                          <div className="bg-tibux-light p-2 aspect-square flex items-center justify-center">
                            <img 
                              src={imageUrl} 
                              alt={`Module ${index + 1}`} 
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div className="p-2 text-center">
                            <p className="font-medium text-sm">Модуль {["скорости", "защиты", "атаки", "энергии", "стелс"][index]} {index + 1}</p>
                            <p className="text-xs text-gray-500">+{(index + 1) * 15}% к {["скорости", "защите", "атаке", "энергии", "невидимости"][index]}</p>
                          </div>
                          {index === 4 && (
                            <div className="absolute top-2 right-2 bg-tibux-primary text-white px-1.5 py-0.5 rounded text-xs">
                              VIP
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="accessories">
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Инструменты робота</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                      {[
                        "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
                        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
                        "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
                        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1120&ixlib=rb-4.0.3",
                        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
                        "https://images.unsplash.com/photo-1588336271629-1704e27ef8be?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3"
                      ].map((imageUrl, index) => (
                        <div key={index} className="relative cursor-pointer rounded-lg overflow-hidden border-2 border-transparent transition-all hover:shadow-md">
                          <div className="bg-tibux-light p-2 aspect-square flex items-center justify-center">
                            <img 
                              src={imageUrl} 
                              alt={`Tool ${index + 1}`} 
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div className="p-2 text-center">
                            <p className="font-medium text-sm">Инструмент {["лазер", "бур", "щит", "сканер", "джетпак", "маскировка"][index]}</p>
                          </div>
                          {index === 3 && (
                            <div className="absolute top-2 right-2 bg-tibux-green text-white px-1.5 py-0.5 rounded text-xs">
                              Новое
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="special">
                  <div className="p-8 flex flex-col items-center justify-center text-center text-gray-500">
                    <Rocket size={48} className="mb-4 opacity-30" />
                    <h3 className="text-xl font-medium mb-2">Доступно только для VIP</h3>
                    <p className="max-w-md mb-4">Получите VIP, чтобы разблокировать эксклюзивные предметы для вашего робота!</p>
                    <Button>Получить VIP</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
