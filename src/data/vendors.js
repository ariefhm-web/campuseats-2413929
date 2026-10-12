const vendors = [
  {
    id: 'kafe-Faruq',
    name: 'Pasta Street',
    location: 'Mahallah Faruq, Block ...',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { id: 'my-1', name: 'Spaghetti Aglio Olio', description: 'Simple Italian dish of fresh garlic, olive oil, and Parmesan cheese tossed with freshly cooked spaghetti with custom add-ons', price: 13, category: 'Pasta', 
available: true },
      { id: 'my-2', name: 'Spaghetti Bolognese', description: 'A popular pasta dish made with long strands of spaghetti topped with a rich, slow-cooked meat and tomato sauce', price: 14, category: 'Pasta',
available: true },
      { id: 'my-3', name: 'Mac n Cheese', description: 'A classic comfort food made of cooked macaroni pasta mixed with a rich, melted cheese sauce', price: 14, category: 'Pasta',
available: false },
    ],
  },
  {
    id: 'kafe-aminah',
    name: 'Kafe Mahallah Aminah',
    location: 'Mahallah Aminah, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
      { id: 'ami-1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9, category: 'Rice', available: true },
      { id: 'ami-2', name: 'Air Bandung', description: 'Rose syrup with milk', price: 3, category: 'Drinks', available: true },
    ],
  },
]
 
export default vendors