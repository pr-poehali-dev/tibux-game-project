
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  CircleUserRound, 
  Shirt, 
  Palette, 
  Footprints, 
  Sparkles, 
  Gift, 
  ShoppingCart,
  Cpu,
  Cog,
  Wrench,
  Shield,
  Eye
} from "lucide-react";

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
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3" 
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
                    src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3" 
                    alt="Pose 1" 
                    className="w-full h-16 object-cover rounded"
                  />
                </Button>
                <Button variant="outline" className="p-3 h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&q=80&w=1212&ixlib=rb-4.0.3" 
                    alt="Pose 2" 
                    className="w-full h-16 object-cover rounded"
                  />
                </Button>
                <Button variant="outline" className="p-3 h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1558137623-ce933996c730?auto=format&fit=crop&q=80&w=1256&ixlib=rb-4.0.3" 
                    alt="Pose 3" 
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
                  <TabsTrigger value="pants" className="flex items-center gap-1 data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
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
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                      <div key={item} className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${item === 1 ? 'border-tibux-primary' : 'border-transparent'} transition-all hover:shadow-md`}>
                        <div className="bg-tibux-light p-2 aspect-square flex items-center justify-center">
                          <img 
                            src={`https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=1256&ixlib=rb-4.0.3`} 
                            alt={`Head ${item}`} 
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        {item === 3 && (
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
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${item === 2 ? 'border-tibux-primary' : 'border-transparent'} transition-all hover:shadow-md`}>
                        <div className="bg-tibux-light p-2 aspect-square flex items-center justify-center">
                          <img 
                            src={`https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=1289&ixlib=rb-4.0.3`} 
                            alt={`Body ${item}`} 
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="clothing">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                      <div key={item} className="relative cursor-pointer rounded-lg overflow-hidden border-2 border-transparent transition-all hover:shadow-md">
                        <div className="bg-tibux-light p-2 aspect-square flex items-center justify-center">
                          <img 
                            src={`https://images.unsplash.com/photo-1519241643001-e0b474838c9d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3`} 
                            alt={`Armor ${item}`} 
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        {item === 2 && (
                          <div className="absolute top-2 right-2 bg-tibux-green text-white px-1.5 py-0.5 rounded text-xs">
                            Новое
                          </div>
                        )}
                        {item === 5 && (
                          <div className="absolute top-2 right-2 bg-tibux-primary text-white px-1.5 py-0.5 rounded text-xs">
                            VIP
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="pants">
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Модули улучшений</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="relative cursor-pointer rounded-lg overflow-hidden border-2 border-transparent transition-all hover:shadow-md">
                          <div className="bg-tibux-light p-2 aspect-square flex items-center justify-center">
                            <img 
                              src={`https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3`} 
                              alt={`Module ${item}`} 
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div className="p-2 text-center">
                            <p className="font-medium text-sm">Модуль скорости {item}</p>
                            <p className="text-xs text-gray-500">+{item * 15}% к скорости</p>
                          </div>
                          {item === 5 && (
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
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="relative cursor-pointer rounded-lg overflow-hidden border-2 border-transparent transition-all hover:shadow-md">
                          <div className="bg-tibux-light p-2 aspect-square flex items-center justify-center">
                            <img 
                              src={`https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=1220&ixlib=rb-4.0.3`} 
                              alt={`Tool ${item}`} 
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div className="p-2 text-center">
                            <p className="font-medium text-sm">Инструмент {item}</p>
                          </div>
                          {item === 3 && (
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
                    <Gift size={48} className="mb-4 opacity-30" />
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
