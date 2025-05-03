
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  CircleUserRound, 
  Shirt, 
  Palette, 
  Footprints, // Заменил Pants на Footprints
  Sparkles, 
  Gift, 
  ShoppingCart
} from "lucide-react";

const Avatar = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Настройка аватара</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Avatar Preview */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-tibux-light rounded-lg p-4 mb-4 flex items-center justify-center">
                <div className="relative w-56 h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1575908539614-ff89490f4a78?auto=format&fit=crop&q=80&w=1342&ixlib=rb-4.0.3" 
                    alt="Character" 
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
                    src="https://images.unsplash.com/photo-1611604548018-d56bbd85d681?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3" 
                    alt="Pose 1" 
                    className="w-full h-16 object-cover rounded"
                  />
                </Button>
                <Button variant="outline" className="p-3 h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1599447292180-45a5f58de320?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3" 
                    alt="Pose 2" 
                    className="w-full h-16 object-cover rounded"
                  />
                </Button>
                <Button variant="outline" className="p-3 h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1623428283566-f103c0e8845e?auto=format&fit=crop&q=80&w=1288&ixlib=rb-4.0.3" 
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
                    <CircleUserRound size={16} /> Тело
                  </TabsTrigger>
                  <TabsTrigger value="clothing" className="flex items-center gap-1 data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <Shirt size={16} /> Одежда
                  </TabsTrigger>
                  <TabsTrigger value="pants" className="flex items-center gap-1 data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <Footprints size={16} /> Штаны
                  </TabsTrigger>
                  <TabsTrigger value="accessories" className="flex items-center gap-1 data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <Sparkles size={16} /> Аксессуары
                  </TabsTrigger>
                  <TabsTrigger value="special" className="flex items-center gap-1 data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <Gift size={16} /> Уникальные
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="body" className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800">Выбор головы</h3>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <ShoppingCart size={14} /> Магазин
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                      <div key={item} className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${item === 1 ? 'border-tibux-primary' : 'border-transparent'} transition-all hover:shadow-md`}>
                        <div className="bg-tibux-light p-2 aspect-square flex items-center justify-center">
                          <img 
                            src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3`} 
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
                    <h3 className="text-lg font-bold text-gray-800">Тип тела</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${item === 2 ? 'border-tibux-primary' : 'border-transparent'} transition-all hover:shadow-md`}>
                        <div className="bg-tibux-light p-2 aspect-square flex items-center justify-center">
                          <img 
                            src={`https://images.unsplash.com/photo-1569913486515-b74bf7751574?auto=format&fit=crop&q=80&w=989&ixlib=rb-4.0.3`} 
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
                            src={`https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3`} 
                            alt={`Clothing ${item}`} 
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
                  <div className="p-8 flex flex-col items-center justify-center text-center text-gray-500">
                    <Footprints size={48} className="mb-4 opacity-30" />
                    <h3 className="text-xl font-medium mb-2">Скоро будет доступно</h3>
                    <p className="max-w-md">Мы работаем над добавлением новых предметов. Заходите позже!</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="accessories">
                  <div className="p-8 flex flex-col items-center justify-center text-center text-gray-500">
                    <Sparkles size={48} className="mb-4 opacity-30" />
                    <h3 className="text-xl font-medium mb-2">Скоро будет доступно</h3>
                    <p className="max-w-md">Мы работаем над добавлением новых предметов. Заходите позже!</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="special">
                  <div className="p-8 flex flex-col items-center justify-center text-center text-gray-500">
                    <Gift size={48} className="mb-4 opacity-30" />
                    <h3 className="text-xl font-medium mb-2">Доступно только для VIP</h3>
                    <p className="max-w-md mb-4">Получите VIP, чтобы разблокировать эксклюзивные предметы для вашего аватара!</p>
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
