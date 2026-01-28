export interface MenuItem {
  id: string
  name: string
  price: number
  category: string
  type: 'veg' | 'egg' | 'non-veg'
  popular?: boolean
  description?: string
}

export const menuItems: MenuItem[] = [
  // Cold Beverages
  {
    id: 'cold-1',
    name: 'Cold Coffee',
    price: 80,
    category: 'Cold Beverages',
    type: 'veg',
    popular: true,
  },
  {
    id: 'cold-2',
    name: 'Cold Chocolate',
    price: 80,
    category: 'Cold Beverages',
    type: 'veg',
  },
  {
    id: 'cold-3',
    name: 'Buttermilk',
    price: 40,
    category: 'Cold Beverages',
    type: 'veg',
  },
  {
    id: 'cold-4',
    name: 'Cold Milk',
    price: 40,
    category: 'Cold Beverages',
    type: 'veg',
  },

  // Hot Beverages
  {
    id: 'hot-1',
    name: 'Irani Chai',
    price: 30,
    category: 'Hot Beverages',
    type: 'veg',
    popular: true,
    description: 'The legendary Goodluck Chai',
  },
  {
    id: 'hot-2',
    name: 'Masala Chai',
    price: 35,
    category: 'Hot Beverages',
    type: 'veg',
  },
  {
    id: 'hot-3',
    name: 'Filter Coffee',
    price: 40,
    category: 'Hot Beverages',
    type: 'veg',
  },
  {
    id: 'hot-4',
    name: 'Hot Chocolate',
    price: 50,
    category: 'Hot Beverages',
    type: 'veg',
  },
  {
    id: 'hot-5',
    name: 'Lemon Tea',
    price: 35,
    category: 'Hot Beverages',
    type: 'veg',
  },

  // Rolls
  {
    id: 'roll-1',
    name: 'Veg Cheese Roll',
    price: 50,
    category: 'Veg Rolls',
    type: 'veg',
  },
  {
    id: 'roll-2',
    name: 'Paneer Roll',
    price: 60,
    category: 'Veg Rolls',
    type: 'veg',
  },
  {
    id: 'roll-3',
    name: 'Vegetable Roll',
    price: 40,
    category: 'Veg Rolls',
    type: 'veg',
  },

  // Egg Rolls
  {
    id: 'eroll-1',
    name: 'Egg Roll',
    price: 50,
    category: 'Egg Rolls',
    type: 'egg',
    popular: true,
  },
  {
    id: 'eroll-2',
    name: 'Egg Cheese Roll',
    price: 60,
    category: 'Egg Rolls',
    type: 'egg',
  },
  {
    id: 'eroll-3',
    name: 'Egg Vegetable Roll',
    price: 50,
    category: 'Egg Rolls',
    type: 'egg',
  },

  // Non-Veg Rolls
  {
    id: 'nvroll-1',
    name: 'Chicken Roll',
    price: 80,
    category: 'Non-Veg Rolls',
    type: 'non-veg',
    popular: true,
  },
  {
    id: 'nvroll-2',
    name: 'Mutton Roll',
    price: 100,
    category: 'Non-Veg Rolls',
    type: 'non-veg',
  },
  {
    id: 'nvroll-3',
    name: 'Mixed Non-Veg Roll',
    price: 90,
    category: 'Non-Veg Rolls',
    type: 'non-veg',
  },

  // Eggs & Omelettes
  {
    id: 'egg-1',
    name: 'Omelette (2 Eggs)',
    price: 50,
    category: 'Eggs & Omelettes',
    type: 'egg',
    popular: true,
  },
  {
    id: 'egg-2',
    name: 'Cheese Omelette',
    price: 70,
    category: 'Eggs & Omelettes',
    type: 'egg',
  },
  {
    id: 'egg-3',
    name: 'Onion Omelette',
    price: 60,
    category: 'Eggs & Omelettes',
    type: 'egg',
  },
  {
    id: 'egg-4',
    name: 'Vegetable Omelette',
    price: 65,
    category: 'Eggs & Omelettes',
    type: 'egg',
  },
  {
    id: 'egg-5',
    name: 'Mixed Omelette',
    price: 80,
    category: 'Eggs & Omelettes',
    type: 'egg',
  },
  {
    id: 'egg-6',
    name: 'Fried Egg (2 Eggs)',
    price: 40,
    category: 'Eggs & Omelettes',
    type: 'egg',
  },

  // Bread & Bun Items
  {
    id: 'bread-1',
    name: 'Bun Maska',
    price: 30,
    category: 'Bread & Bun Items',
    type: 'veg',
    popular: true,
    description: 'Iconic Goodluck favorite',
  },
  {
    id: 'bread-2',
    name: 'Bun Maska with Jam',
    price: 40,
    category: 'Bread & Bun Items',
    type: 'veg',
  },
  {
    id: 'bread-3',
    name: 'Bun Pav',
    price: 20,
    category: 'Bread & Bun Items',
    type: 'veg',
  },
  {
    id: 'bread-4',
    name: 'Toast with Butter',
    price: 30,
    category: 'Bread & Bun Items',
    type: 'veg',
  },
  {
    id: 'bread-5',
    name: 'Keema Pav',
    price: 50,
    category: 'Bread & Bun Items',
    type: 'non-veg',
  },

  // Sandwiches
  {
    id: 'sand-1',
    name: 'Vegetable Sandwich',
    price: 60,
    category: 'Sandwiches',
    type: 'veg',
  },
  {
    id: 'sand-2',
    name: 'Cheese Sandwich',
    price: 80,
    category: 'Sandwiches',
    type: 'veg',
  },
  {
    id: 'sand-3',
    name: 'Egg Sandwich',
    price: 70,
    category: 'Sandwiches',
    type: 'egg',
  },

  // Grilled Sandwiches
  {
    id: 'gsand-1',
    name: 'Grilled Cheese Sandwich',
    price: 100,
    category: 'Grilled Sandwiches',
    type: 'veg',
  },
  {
    id: 'gsand-2',
    name: 'Grilled Vegetable Sandwich',
    price: 90,
    category: 'Grilled Sandwiches',
    type: 'veg',
  },
  {
    id: 'gsand-3',
    name: 'Grilled Egg & Cheese Sandwich',
    price: 110,
    category: 'Grilled Sandwiches',
    type: 'egg',
  },

  // South Indian Selections
  {
    id: 'si-1',
    name: 'Idli (2 Pieces)',
    price: 40,
    category: 'South Indian Selections',
    type: 'veg',
  },
  {
    id: 'si-2',
    name: 'Dosa',
    price: 60,
    category: 'South Indian Selections',
    type: 'veg',
    popular: true,
  },
  {
    id: 'si-3',
    name: 'Masala Dosa',
    price: 70,
    category: 'South Indian Selections',
    type: 'veg',
  },
  {
    id: 'si-4',
    name: 'Uttapam',
    price: 60,
    category: 'South Indian Selections',
    type: 'veg',
  },
  {
    id: 'si-5',
    name: 'Vada (2 Pieces)',
    price: 40,
    category: 'South Indian Selections',
    type: 'veg',
  },

  // Samosa
  {
    id: 'sam-1',
    name: 'Vegetable Samosa (1 Piece)',
    price: 15,
    category: 'Samosa',
    type: 'veg',
  },
  {
    id: 'sam-2',
    name: 'Meat Samosa (1 Piece)',
    price: 20,
    category: 'Samosa',
    type: 'non-veg',
  },
  {
    id: 'sam-3',
    name: 'Vegetable Samosa (4 Pieces)',
    price: 50,
    category: 'Samosa',
    type: 'veg',
  },

  // Sweet Dishes
  {
    id: 'sweet-1',
    name: 'Jalebi',
    price: 40,
    category: 'Sweet Dishes',
    type: 'veg',
  },
  {
    id: 'sweet-2',
    name: 'Gulab Jamun (2 Pieces)',
    price: 50,
    category: 'Sweet Dishes',
    type: 'veg',
  },
  {
    id: 'sweet-3',
    name: 'Kheer',
    price: 60,
    category: 'Sweet Dishes',
    type: 'veg',
  },
  {
    id: 'sweet-4',
    name: 'Falooda',
    price: 70,
    category: 'Sweet Dishes',
    type: 'veg',
    popular: true,
  },
]

export const categories = [
  'Hot Beverages',
  'Cold Beverages',
  'Bread & Bun Items',
  'Eggs & Omelettes',
  'Veg Rolls',
  'Egg Rolls',
  'Non-Veg Rolls',
  'Sandwiches',
  'Grilled Sandwiches',
  'South Indian Selections',
  'Samosa',
  'Sweet Dishes',
]
