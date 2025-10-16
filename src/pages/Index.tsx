import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCity, setSelectedCity] = useState('moscow');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'dogs', name: 'Собаки', icon: 'Dog' },
    { id: 'cats', name: 'Кошки', icon: 'Cat' },
    { id: 'birds', name: 'Птицы', icon: 'Bird' },
    { id: 'fish', name: 'Рыбы', icon: 'Fish' },
    { id: 'rodents', name: 'Грызуны', icon: 'Rabbit' },
    { id: 'reptiles', name: 'Рептилии', icon: 'Bug' },
  ];

  const products = [
    { id: 1, name: 'Корм Royal Canin для щенков', price: 2499, category: 'dogs', brand: 'Royal Canin', discount: 15 },
    { id: 2, name: 'Наполнитель для кошачьего туалета', price: 899, category: 'cats', brand: 'Catsan', discount: 0 },
    { id: 3, name: 'Игрушка-мышка с кошачьей мятой', price: 299, category: 'cats', brand: 'Petstages', discount: 20 },
    { id: 4, name: 'Корм Whiskas для взрослых кошек', price: 1299, category: 'cats', brand: 'Whiskas', discount: 10 },
    { id: 5, name: 'Поводок-рулетка для собак', price: 1499, category: 'dogs', brand: 'Flexi', discount: 0 },
    { id: 6, name: 'Корм для попугаев премиум класса', price: 599, category: 'birds', brand: 'Vitakraft', discount: 0 },
  ];

  const vetServices = [
    { name: 'Первичный осмотр', price: 800 },
    { name: 'Вакцинация комплексная', price: 1500 },
    { name: 'Стерилизация кошки', price: 3500 },
    { name: 'УЗИ диагностика', price: 2000 },
  ];

  const groomingServices = [
    { name: 'Стрижка собак мелких пород', price: 1800 },
    { name: 'Стрижка собак крупных пород', price: 3500 },
    { name: 'Мытье и сушка', price: 1200 },
    { name: 'Стрижка когтей', price: 400 },
  ];

  const brands = ['Royal Canin', 'Whiskas', 'Pedigree', 'Catsan', 'Petstages', 'Flexi', 'Vitakraft', 'Hill\'s'];

  const articles = [
    { title: 'Как выбрать корм для щенка', date: '15 октября 2025' },
    { title: 'Уход за шерстью длинношерстных кошек', date: '10 октября 2025' },
    { title: 'Витамины для домашних животных', date: '5 октября 2025' },
  ];

  const reviews = [
    { name: 'Анна М.', rating: 5, text: 'Отличный магазин! Всегда свежие корма и приятные цены.' },
    { name: 'Дмитрий К.', rating: 5, text: 'Ветеринар очень внимательный, кот доволен после груминга.' },
    { name: 'Елена П.', rating: 4, text: 'Большой выбор товаров, быстрая доставка.' },
  ];

  const faq = [
    { q: 'Какие способы оплаты вы принимаете?', a: 'Мы принимаем наличные, банковские карты, электронные кошельки и безналичный расчет.' },
    { q: 'Есть ли доставка по области?', a: 'Да, доставляем по всей Московской области. Стоимость рассчитывается индивидуально.' },
    { q: 'Можно ли вернуть товар?', a: 'Да, в течение 14 дней с сохранением товарного вида и чека.' },
    { q: 'Нужна ли запись к ветеринару?', a: 'Рекомендуем записаться заранее, но принимаем и без записи при наличии свободного времени.' },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <header className="bg-primary/10 border-b sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🐾</div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Мокрый нос</h1>
                <p className="text-xs text-muted-foreground">Зоомагазин и ветеринария</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="moscow">Москва</SelectItem>
                  <SelectItem value="spb">Санкт-Петербург</SelectItem>
                  <SelectItem value="kazan">Казань</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Input 
                  placeholder="Поиск товаров..." 
                  className="pr-10"
                />
                <Icon name="Search" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Icon name="User" size={20} />
                <span className="ml-2 hidden sm:inline">Войти</span>
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Icon name="Heart" size={20} />
                {favorites.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {favorites.length}
                  </Badge>
                )}
              </Button>
              <Sheet open={cartOpen} onOpenChange={setCartOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Icon name="ShoppingCart" size={20} />
                    <span className="ml-2 hidden sm:inline">Корзина</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="text-center py-8">
                    <Icon name="ShoppingCart" size={48} className="mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Корзина пока пуста</p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <nav className="mt-4 flex gap-4 overflow-x-auto pb-2">
            <Button variant="ghost" size="sm">Каталог</Button>
            <Button variant="ghost" size="sm">Ветеринария</Button>
            <Button variant="ghost" size="sm">Груминг</Button>
            <Button variant="ghost" size="sm">Акции</Button>
            <Button variant="ghost" size="sm">Статьи</Button>
            <Button variant="ghost" size="sm">Контакты</Button>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-primary via-secondary to-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🐕</div>
          <div className="absolute bottom-10 right-10 text-6xl">🐈</div>
          <div className="absolute top-1/2 left-1/4 text-4xl">🦜</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Специальное предложение</Badge>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Скидки до 30% на все корма!</h2>
            <p className="text-xl mb-6 text-foreground/90">Забота о ваших питомцах начинается здесь</p>
            <div className="flex gap-3">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Перейти в каталог
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Записаться к врачу
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold mb-2">Быстрая доставка</h3>
              <p className="text-sm text-muted-foreground">Доставим заказ за 2 часа по городу</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-bold mb-2">Ветеринарный кабинет</h3>
              <p className="text-sm text-muted-foreground">Опытные врачи и современное оборудование</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl mb-3">✂️</div>
              <h3 className="font-bold mb-2">Груминг-салон</h3>
              <p className="text-sm text-muted-foreground">Профессиональный уход за шерстью</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12" id="catalog">
        <h2 className="text-4xl font-bold mb-8">Каталог товаров</h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-8">
          <Button
            variant={activeCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveCategory('all')}
            className="flex flex-col h-auto py-4"
          >
            <Icon name="Store" size={32} className="mb-2" />
            <span className="text-xs">Все товары</span>
          </Button>
          {categories.map(cat => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(cat.id)}
              className="flex flex-col h-auto py-4"
            >
              <Icon name={cat.icon as any} size={32} className="mb-2" />
              <span className="text-xs">{cat.name}</span>
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="hover:shadow-xl transition-all group">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-6xl">
                    {product.category === 'dogs' ? '🐕' : product.category === 'cats' ? '🐈' : '🐦'}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-white/90 hover:bg-white"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Icon 
                      name="Heart" 
                      size={20} 
                      className={favorites.includes(product.id) ? 'fill-red-500 text-red-500' : ''} 
                    />
                  </Button>
                  {product.discount > 0 && (
                    <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
                      -{product.discount}%
                    </Badge>
                  )}
                </div>
                <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{product.brand}</p>
                <div className="flex items-center justify-between">
                  <div>
                    {product.discount > 0 ? (
                      <>
                        <p className="text-2xl font-bold text-primary">
                          {Math.round(product.price * (1 - product.discount / 100))} ₽
                        </p>
                        <p className="text-sm text-muted-foreground line-through">{product.price} ₽</p>
                      </>
                    ) : (
                      <p className="text-2xl font-bold">{product.price} ₽</p>
                    )}
                  </div>
                  <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Icon name="ShoppingCart" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Наши бренды</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brands.map(brand => (
              <Card key={brand} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold">{brand}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12" id="services">
        <h2 className="text-4xl font-bold mb-8">Ветеринария и груминг</h2>
        <Tabs defaultValue="vet" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="vet">Ветеринария</TabsTrigger>
            <TabsTrigger value="grooming">Груминг</TabsTrigger>
          </TabsList>
          <TabsContent value="vet" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Услуги ветеринарного кабинета</h3>
                <p className="text-muted-foreground mb-6">
                  Наши опытные ветеринары помогут вашему питомцу оставаться здоровым. 
                  Современное оборудование и индивидуальный подход к каждому пациенту.
                </p>
                <div className="space-y-3">
                  {vetServices.map((service, idx) => (
                    <Card key={idx}>
                      <CardContent className="p-4 flex justify-between items-center">
                        <span className="font-semibold">{service.name}</span>
                        <span className="text-lg font-bold text-primary">{service.price} ₽</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Записаться на прием</h3>
                  <div className="space-y-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" type="tel" />
                    <Input placeholder="Имя питомца" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {vetServices.map((service, idx) => (
                          <SelectItem key={idx} value={service.name}>{service.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Дополнительная информация" />
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="grooming" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Услуги груминга</h3>
                <p className="text-muted-foreground mb-6">
                  Профессиональный груминг для собак и кошек. Стрижки, мытье, укладка, 
                  стрижка когтей и чистка ушей.
                </p>
                <div className="space-y-3">
                  {groomingServices.map((service, idx) => (
                    <Card key={idx}>
                      <CardContent className="p-4 flex justify-between items-center">
                        <span className="font-semibold">{service.name}</span>
                        <span className="text-lg font-bold text-primary">{service.price} ₽</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center text-5xl">
                    {i % 2 === 0 ? '✂️' : '🐕'}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8">Полезные статьи</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center text-5xl">
                  📝
                </div>
                <p className="text-xs text-muted-foreground mb-2">{article.date}</p>
                <h3 className="font-bold text-lg">{article.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm mb-3">{review.text}</p>
                  <p className="font-semibold text-sm">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8">Часто задаваемые вопросы</h2>
        <Accordion type="single" collapsible className="max-w-3xl">
          {faq.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-muted-foreground mb-6">Напишите нам, и мы обязательно ответим!</p>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Email или телефон" />
                  <Textarea placeholder="Ваше сообщение" rows={4} />
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Отправить сообщение
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8 text-center">Наши магазины в Новосибирске</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Дуси Ковальчук, 260</h3>
                    <p className="text-sm text-muted-foreground mb-2">ТЦ "Сибирский Молл"</p>
                    <p className="text-sm mb-1">📞 +7 (383) 123-45-67</p>
                    <p className="text-sm">⏰ Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">1905 года, 69</h3>
                    <p className="text-sm text-muted-foreground mb-2">Рядом с метро</p>
                    <p className="text-sm mb-1">📞 +7 (383) 123-45-68</p>
                    <p className="text-sm">⏰ Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Шевченко, 34/1</h3>
                    <p className="text-sm text-muted-foreground mb-2">Левобережный район</p>
                    <p className="text-sm mb-1">📞 +7 (383) 123-45-69</p>
                    <p className="text-sm">⏰ Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A8c8e3e8e8e8e8e8e8e8e8e8e8e8e8e8e&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full"
              title="Карта магазинов"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <span>🐾</span> Мокрый нос
              </h3>
              <p className="text-sm opacity-80">Зоомагазин и ветеринарная клиника</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>📞 +7 (495) 123-45-67</p>
                <p>📧 info@mokrynos.ru</p>
                <p>📍 Москва, ул. Примерная, 123</p>
                <p>⏰ Пн-Вс: 9:00 - 21:00</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="cursor-pointer hover:opacity-100">Доставка и оплата</p>
                <p className="cursor-pointer hover:opacity-100">Возврат товара</p>
                <p className="cursor-pointer hover:opacity-100">О компании</p>
                <p className="cursor-pointer hover:opacity-100">Вакансии</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3 mb-4">
                <Button size="sm" variant="ghost" className="bg-background/10 hover:bg-background/20">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="bg-background/10 hover:bg-background/20">
                  <Icon name="Send" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="bg-background/10 hover:bg-background/20">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
              <p className="text-sm opacity-80 mb-2">Скачайте наше приложение:</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="text-xs">
                  <Icon name="Apple" size={16} className="mr-1" /> iOS
                </Button>
                <Button size="sm" variant="outline" className="text-xs">
                  <Icon name="Smartphone" size={16} className="mr-1" /> Android
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>© 2025 Мокрый нос. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;