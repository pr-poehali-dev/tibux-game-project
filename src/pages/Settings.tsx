
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Sliders, 
  UserCog, 
  Bell, 
  ShieldCheck, 
  Languages
} from "lucide-react";
import { 
  Slider 
} from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Настройки</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Tabs defaultValue="graphics" className="w-full">
            <div className="flex">
              {/* Sidebar */}
              <div className="w-64 border-r border-gray-200 p-4 hidden md:block">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Категории</h2>
                
                <TabsList className="flex flex-col w-full rounded-none justify-start items-stretch space-y-1 bg-transparent">
                  <TabsTrigger value="graphics" className="justify-start text-left px-3 py-2.5 h-auto data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <span className="flex items-center gap-2">
                      <Sliders size={16} /> Графика и звук
                    </span>
                  </TabsTrigger>
                  <TabsTrigger value="account" className="justify-start text-left px-3 py-2.5 h-auto data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <span className="flex items-center gap-2">
                      <UserCog size={16} /> Учетная запись
                    </span>
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="justify-start text-left px-3 py-2.5 h-auto data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <span className="flex items-center gap-2">
                      <Bell size={16} /> Уведомления
                    </span>
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="justify-start text-left px-3 py-2.5 h-auto data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <span className="flex items-center gap-2">
                      <ShieldCheck size={16} /> Приватность
                    </span>
                  </TabsTrigger>
                  <TabsTrigger value="language" className="justify-start text-left px-3 py-2.5 h-auto data-[state=active]:bg-tibux-primary data-[state=active]:text-white">
                    <span className="flex items-center gap-2">
                      <Languages size={16} /> Язык
                    </span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Mobile Tabs */}
              <div className="p-4 w-full block md:hidden">
                <TabsList className="w-full">
                  <TabsTrigger value="graphics" className="flex-1">
                    <Sliders size={16} />
                  </TabsTrigger>
                  <TabsTrigger value="account" className="flex-1">
                    <UserCog size={16} />
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="flex-1">
                    <Bell size={16} />
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="flex-1">
                    <ShieldCheck size={16} />
                  </TabsTrigger>
                  <TabsTrigger value="language" className="flex-1">
                    <Languages size={16} />
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Content */}
              <div className="flex-1 p-6">
                <TabsContent value="graphics" className="mt-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Графика и звук</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Графика</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-2">
                            <Label>Качество графики</Label>
                            <span className="text-sm text-tibux-primary font-medium">Высокое</span>
                          </div>
                          <Slider defaultValue={[75]} max={100} step={25} />
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-gray-500">Низкое</span>
                            <span className="text-xs text-gray-500">Высокое</span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <Label>Дальность отрисовки</Label>
                            <span className="text-sm text-tibux-primary font-medium">Средняя</span>
                          </div>
                          <Slider defaultValue={[50]} max={100} step={25} />
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-gray-500">Близко</span>
                            <span className="text-xs text-gray-500">Далеко</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label htmlFor="particles">Частицы</Label>
                            <p className="text-xs text-gray-500">Включить эффекты частиц</p>
                          </div>
                          <Switch id="particles" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label htmlFor="shadows">Тени</Label>
                            <p className="text-xs text-gray-500">Отображать тени от объектов</p>
                          </div>
                          <Switch id="shadows" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Звук</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-2">
                            <Label>Общая громкость</Label>
                            <span className="text-sm text-tibux-primary font-medium">80%</span>
                          </div>
                          <Slider defaultValue={[80]} max={100} step={1} />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <Label>Музыка</Label>
                            <span className="text-sm text-tibux-primary font-medium">60%</span>
                          </div>
                          <Slider defaultValue={[60]} max={100} step={1} />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <Label>Эффекты</Label>
                            <span className="text-sm text-tibux-primary font-medium">90%</span>
                          </div>
                          <Slider defaultValue={[90]} max={100} step={1} />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label htmlFor="mute">Звук в фоне</Label>
                            <p className="text-xs text-gray-500">Проигрывать звук когда игра в фоне</p>
                          </div>
                          <Switch id="mute" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-4 mt-8">
                    <Button variant="outline">Сбросить</Button>
                    <Button>Сохранить</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="account" className="mt-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Учетная запись</h2>
                  
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg border border-gray-200">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Имя пользователя</h3>
                        <p className="text-gray-600">TibuxPlayer123</p>
                      </div>
                      <Button variant="outline">Изменить</Button>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg border border-gray-200">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">user@example.com</p>
                      </div>
                      <Button variant="outline">Изменить</Button>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg border border-gray-200">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Пароль</h3>
                        <p className="text-gray-600">••••••••••</p>
                      </div>
                      <Button variant="outline">Изменить</Button>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg border border-gray-200">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Двухфакторная аутентификация</h3>
                        <p className="text-gray-600">Не активирована</p>
                      </div>
                      <Button>Активировать</Button>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg border border-gray-200 bg-red-50">
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-red-600">Удаление аккаунта</h3>
                        <p className="text-gray-600">Это действие невозможно отменить</p>
                      </div>
                      <Button variant="destructive">Удалить аккаунт</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="notifications" className="mt-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Уведомления</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="game-invites">Приглашения в игру</Label>
                        <p className="text-xs text-gray-500">Уведомления о приглашениях от друзей</p>
                      </div>
                      <Switch id="game-invites" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="friend-requests">Запросы в друзья</Label>
                        <p className="text-xs text-gray-500">Уведомления о новых запросах в друзья</p>
                      </div>
                      <Switch id="friend-requests" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="messages">Сообщения</Label>
                        <p className="text-xs text-gray-500">Уведомления о новых сообщениях</p>
                      </div>
                      <Switch id="messages" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="updates">Обновления</Label>
                        <p className="text-xs text-gray-500">Уведомления о новых обновлениях Tibux</p>
                      </div>
                      <Switch id="updates" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="email-notifications">Email уведомления</Label>
                        <p className="text-xs text-gray-500">Получать уведомления на email</p>
                      </div>
                      <Switch id="email-notifications" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-4 mt-8">
                    <Button>Сохранить</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="privacy" className="mt-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Приватность</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="online-status">Онлайн статус</Label>
                        <p className="text-xs text-gray-500">Показывать ваш статус другим игрокам</p>
                      </div>
                      <Switch id="online-status" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="friend-join">Присоединение друзей</Label>
                        <p className="text-xs text-gray-500">Разрешить друзьям присоединяться к вашей игре</p>
                      </div>
                      <Switch id="friend-join" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="friend-chat">Разрешить сообщения</Label>
                        <p className="text-xs text-gray-500">Разрешить сообщения от всех игроков</p>
                      </div>
                      <Switch id="friend-chat" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="data-collection">Сбор данных</Label>
                        <p className="text-xs text-gray-500">Разрешить сбор анонимных данных для улучшения игры</p>
                      </div>
                      <Switch id="data-collection" defaultChecked />
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-4 mt-8">
                    <Button>Сохранить</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="language" className="mt-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Язык</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-tibux-primary rounded-md p-4 flex items-center">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-tibux-primary flex items-center justify-center text-white">
                            RU
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium">Русский</h3>
                          <p className="text-sm text-gray-500">Текущий язык</p>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 hover:border-gray-300 cursor-pointer rounded-md p-4 flex items-center">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            EN
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium">English</h3>
                          <p className="text-sm text-gray-500">English language</p>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 hover:border-gray-300 cursor-pointer rounded-md p-4 flex items-center">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            ES
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium">Español</h3>
                          <p className="text-sm text-gray-500">Idioma español</p>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 hover:border-gray-300 cursor-pointer rounded-md p-4 flex items-center">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            DE
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium">Deutsch</h3>
                          <p className="text-sm text-gray-500">Deutsche Sprache</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-4 mt-8">
                    <Button>Сохранить</Button>
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;
