'use client'

import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'
import { formatCurrency } from '@/utils/format'

export default function CartPage() {
  const { items, updateQuantity, removeItem, total, itemCount } = useCart()

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <p>Seu carrinho está vazio.</p>
        <Link href="/">
          <button className="btn-secondary">Ver cardápio</button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <h1 className="page-title">Carrinho ({itemCount} {itemCount === 1 ? 'item' : 'itens'})</h1>

      <div className="cart-list">
        {items.map((item, index) => (
          <div key={`${item.id}-${index}`} className="cart-item">
            <span className="cart-item-emoji">{item.emoji}</span>
            <div className="cart-item-info">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">{formatCurrency(item.price)} cada</div>
            </div>
            <div className="cart-item-controls">
              <button
                className="qty-btn"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                −
              </button>
              <span className="qty-value">{item.quantity}</span>
              <button
                className="qty-btn"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <span className="cart-item-total">
              {formatCurrency(item.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-summary-row">
          <span>Subtotal</span>
          <span>{formatCurrency(total)}</span>
        </div>
        <div className="cart-summary-row">
          <span>Entrega</span>
          <span>Grátis</span>
        </div>
        <div className="cart-summary-row total">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
        <Link href="/">
          <button className="btn-secondary">Continuar comprando</button>
        </Link>
        <Link href="/checkout">
          <button className="btn-add" style={{ padding: '0.6rem 1.5rem' }}>
            Finalizar pedido →
          </button>
        </Link>
      </div>
    </>
  )
}
