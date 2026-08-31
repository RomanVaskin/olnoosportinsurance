export type FeaturedSport = {
  name: string
  image: string
  span?: boolean
}

// 8 photographic categories — the visual anchors of the sports section.
export const featuredSports: FeaturedSport[] = [
  { name: 'Футбол', image: '/images/sport-football.png', span: true },
  { name: 'Хоккей', image: '/images/sport-hockey.png' },
  { name: 'Бег и лёгкая атлетика', image: '/images/sport-running.png' },
  { name: 'Единоборства', image: '/images/sport-martial.png' },
  { name: 'Гимнастика', image: '/images/sport-gymnastics.png' },
  { name: 'Плавание', image: '/images/sport-swimming.png' },
  { name: 'Велоспорт', image: '/images/sport-cycling.png' },
  { name: 'Теннис', image: '/images/sport-tennis.png' },
]

// The rest appear as a clean text list to avoid visual overload.
export const otherSports: string[] = [
  'Дзюдо',
  'Бокс',
  'Фигурное катание',
  'Баскетбол',
  'Волейбол',
  'Лыжи',
  'Сноуборд',
  'Настольный теннис',
  'Борьба',
  'Регби',
  'Гандбол',
  'Скалолазание',
]

export type Competition = {
  slug: string
  name: string
  date: string
  shortDate: string
  location: string
  sport: string
  format: string
  description: string
  requirements: string[]
  price: string
}

export const competitions: Competition[] = [
  {
    slug: 'moscow-junior-cup',
    name: 'Открытый юношеский кубок по футболу',
    date: '18 мая 2026',
    shortDate: '18.05',
    location: 'Москва, СК «Лужники»',
    sport: 'Футбол',
    format: 'Командное первенство, U-14',
    description:
      'Ежегодный турнир среди детско-юношеских команд. Участие возможно только при наличии действующего полиса страхования от несчастного случая на время соревнования.',
    requirements: [
      'Полис страхования от несчастного случая',
      'Страховая сумма от 100 000 ₽',
      'Действие полиса на даты турнира',
      'Медицинский допуск',
    ],
    price: 'от 190 ₽',
  },
  {
    slug: 'open-judo-championship',
    name: 'Первенство по дзюдо «Северный ветер»',
    date: '2 июня 2026',
    shortDate: '02.06',
    location: 'Санкт-Петербург, Дворец спорта',
    sport: 'Дзюдо',
    format: 'Индивидуальные соревнования',
    description:
      'Открытое первенство для спортсменов любительского и профессионального уровня. Полис оформляется онлайн и действует на весь период соревнований.',
    requirements: [
      'Полис страхования от несчастного случая',
      'Страховая сумма от 150 000 ₽',
      'Действие полиса на даты первенства',
      'Согласие законного представителя для участников до 18 лет',
    ],
    price: 'от 240 ₽',
  },
  {
    slug: 'city-swim-meet',
    name: 'Городской заплыв «Быстрая вода»',
    date: '14 июня 2026',
    shortDate: '14.06',
    location: 'Казань, Дворец водных видов спорта',
    sport: 'Плавание',
    format: 'Индивидуальные заплывы, все возрасты',
    description:
      'Массовое соревнование по плаванию для любителей и спортивных школ. Оформление полиса занимает несколько минут, документ приходит на электронную почту.',
    requirements: [
      'Полис страхования от несчастного случая',
      'Страховая сумма от 100 000 ₽',
      'Действие полиса на дату заплыва',
      'Медицинская справка о допуске',
    ],
    price: 'от 190 ₽',
  },
]

export const navLinks = [
  { label: 'Продукты', href: '#products' },
  { label: 'Виды спорта', href: '#sports' },
  { label: 'Соревнования', href: '#competitions' },
  { label: 'Федерациям', href: '#federations' },
  { label: 'Вопросы', href: '#faq' },
]
