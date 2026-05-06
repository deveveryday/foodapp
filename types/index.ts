export interface Product {
  id: string
  name: string
  description: string
  price: number // in cents (e.g., 2490 = R$24,90)
  category: string
  emoji: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface Order {
  id: string
  items: CartItem[]
  subtotal: number
  total: number
  customerName: string
  address: string
  paymentMethod: PaymentMethod
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
}

export type PaymentMethod = 'pix' | 'credit_card'

export interface CreateOrderPayload {
  items: CartItem[]
  subtotal: number
  total: number
  customerName: string
  address: string
  paymentMethod: PaymentMethod
}
