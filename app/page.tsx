'use client'

import { CATEGORIES, PRODUCTS } from '@/data/products'
import { useCart } from '@/contexts/CartContext'
import { formatCurrency } from '@/utils/format'
import { Product } from '@/types'

export default function HomePage() {
  const { addItem } = useCart()

  return (
    <>
      <h1 className="page-title">Cardápio</h1>
      {CATEGORIES.map(category => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="product-grid">
            {PRODUCTS.filter(p => p.category === category).map(product => (
              <ProductCard key={product.id} product={product} onAdd={addItem} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

function ProductCard({
  product,
  onAdd,
}: {
  product: Product
  onAdd: (p: Product) => void
}) {
  return (
    <div className="product-card">
      <div className="product-emoji">{product.emoji}</div>
      <div className="product-name">{product.name}</div>
      <div className="product-description">{product.description}</div>
      <div className="product-footer">
        <span className="product-price">{formatCurrency(product.price)}</span>
        <button className="btn-add" onClick={() => onAdd(product)}>
          + Adicionar
        </button>
      </div>
    </div>
  )
}
