import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'
import CartHeaderButton from '@/components/CartHeaderButton'

export const metadata: Metadata = {
  title: 'FoodApp — Teste Técnico',
  description: 'Mini plataforma de pedidos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          <header className="header">
            <div className="container header-inner">
              <Link href="/" className="header-logo">🍔 FoodApp</Link>
              <CartHeaderButton />
            </div>
          </header>
          <main className="container">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
