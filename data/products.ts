import { Product } from '@/types'

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'X-Burguer Clássico',
    description: 'Pão brioche, carne 150g, queijo cheddar, alface, tomate e maionese especial',
    price: 2490,
    category: 'Hambúrgueres',
    emoji: '🍔',
  },
  {
    id: 'p2',
    name: 'X-Bacon Duplo',
    description: 'Pão brioche, duas carnes 150g, bacon crocante, queijo, cebola caramelizada',
    price: 3490,
    category: 'Hambúrgueres',
    emoji: '🥓',
  },
  {
    id: 'p3',
    name: 'Pizza Margherita',
    description: 'Molho de tomate artesanal, mussarela, manjericão fresco, fio de azeite',
    price: 4290,
    category: 'Pizzas',
    emoji: '🍕',
  },
  {
    id: 'p4',
    name: 'Pizza Pepperoni',
    description: 'Molho de tomate, mussarela generosa, pepperoni importado',
    price: 4890,
    category: 'Pizzas',
    emoji: '🍕',
  },
  {
    id: 'p5',
    name: 'Açaí 500ml',
    description: 'Açaí puro com granola, banana e leite condensado',
    price: 1890,
    category: 'Sobremesas',
    emoji: '🫐',
  },
  {
    id: 'p6',
    name: 'Batata Frita Grande',
    description: 'Porção generosa de batata frita crocante com molho especial da casa',
    price: 1490,
    category: 'Acompanhamentos',
    emoji: '🍟',
  },
]

export const CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))]
