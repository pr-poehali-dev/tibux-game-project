
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Gem, ShieldCheck, Star, Zap } from "lucide-react";

const VipPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-yellow-400 to-yellow-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-xl z-10">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="text-white h-8 w-8" />
              <h1 className="text-4xl md:text-5xl text-white font-bold">
                Tibux VIP
              </h1>
            </div>
            <p className="text-white/90 text-lg mb-6">
              Получите эксклюзивные преимущества, предметы и статус VIP-игрока в Tibux!
            </p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto py-8">
        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Basic Plan */}
          <Card className="border-2 border-gray-200 hover:border-yellow-400 transition-all">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                Базовый VIP
              </CardTitle>
              <p className="text-3xl font-bold mt-2">
                199 ₽ <span className="text-gray-500 text-base font-normal">/месяц</span>
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Доступ к 10 эксклюзивным играм</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Особый VIP-значок рядом с именем</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Бонус 500 Tibux-монет ежемесячно</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Доступ к базовым VIP-предметам</span>
                </li>
              </ul>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white">Купить Базовый VIP</Button>
            </CardContent>
          </Card>
          
          {/* Premium Plan - Highlighted */}
          <Card className="border-2 border-yellow-500 bg-gradient-to-b from-yellow-50 to-white relative">
            <div className="absolute top-0 left-0 w-full bg-yellow-500 text-white text-center py-1 text-sm font-medium">
              Лучший выбор
            </div>
            <CardHeader className="text-center pb-2 pt-6">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Crown className="h-5 w-5 text-yellow-500" />
                Премиум VIP
              </CardTitle>
              <p className="text-3xl font-bold mt-2">
                499 ₽ <span className="text-gray-500 text-base font-normal">/месяц</span>
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Доступ ко <strong>всем</strong> эксклюзивным играм</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Золотой VIP-значок и именная рамка</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Бонус 1500 Tibux-монет ежемесячно</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Все премиум VIP-предметы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Приоритетное подключение к серверам</span>
                </li>
              </ul>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">Купить Премиум VIP</Button>
            </CardContent>
          </Card>
          
          {/* Ultimate Plan */}
          <Card className="border-2 border-gray-200 hover:border-yellow-400 transition-all">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Gem className="h-5 w-5 text-purple-500" />
                Ультимативный VIP
              </CardTitle>
              <p className="text-3xl font-bold mt-2">
                999 ₽ <span className="text-gray-500 text-base font-normal">/месяц</span>
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Все преимущества Премиум VIP</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Бриллиантовый VIP-значок с анимацией</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Бонус 3000 Tibux-монет ежемесячно</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Эксклюзивные анимации и эффекты</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Создание приватных серверов</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Купить Ультимативный VIP</Button>
            </CardContent>
          </Card>
        </div>
        
        {/* VIP Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Преимущества VIP-статуса</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <Gem className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Эксклюзивные игры</h3>
              <p className="text-gray-600">Получите доступ к играм, доступным только для VIP-пользователей Tibux.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Особые предметы</h3>
              <p className="text-gray-600">Украсьте своего персонажа редкими и уникальными предметами и аксессуарами.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрый доступ</h3>
              <p className="text-gray-600">Приоритетный доступ к серверам и новым функциям платформы Tibux.</p>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Часто задаваемые вопросы</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Как мне активировать VIP-статус?</h3>
              <p className="text-gray-600">После оплаты VIP-статус активируется автоматически на вашем аккаунте. Все преимущества станут доступны мгновенно.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Могу ли я отменить подписку?</h3>
              <p className="text-gray-600">Да, вы можете отменить подписку в любое время в настройках своего аккаунта. Ваш VIP-статус сохранится до окончания оплаченного периода.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Получу ли я дополнительные предметы при переходе на более высокий уровень VIP?</h3>
              <p className="text-gray-600">Да, при переходе на более высокий уровень VIP вы получите все преимущества и предметы, доступные на этом уровне, включая те, которые были доступны на предыдущих уровнях.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipPage;
