const url = window.location

export const API_URL =
  url.port !== '' ? `${url.protocol}//${url.hostname}:5000/api/v1/` : `${url.origin}/api/v1/`

export const ENDPOINTS = {
  tags: 'tags/'
}

export const mockedTags = [
  { name: 'Maryla Rodowicz', amount: 40 },
  { name: 'Odmrażanie trupa', amount: 35 },
  { name: 'Festiwal w Opolu', amount: 32 },
  { name: 'Legendy polskiej sceny muzycznej', amount: 30 },
  { name: 'Przeboje lat 70', amount: 26 },
  { name: 'Ikonka popkultury', amount: 25 },
  { name: 'Polska muzyka', amount: 17 },
  { name: 'Kabaret', amount: 12 },
  { name: 'Mariusz Kamiński', amount: 8 },
  { name: 'Sejm', amount: 7 }
]
