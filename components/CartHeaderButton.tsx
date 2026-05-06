'use client'

import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

export default function CartHeaderButton() {
  const { itemCount } = useCart()

  return (
    <Link href="/cart">
      <button className="header-cart-btn">
        🛒 Carrinho{itemCount > 0 && <span>({itemCount})</span>}
      </button>
    </Link>
  )
}
