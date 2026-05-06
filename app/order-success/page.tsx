import Link from 'next/link'

interface Props {
  searchParams: { id?: string }
}

export default function OrderSuccessPage({ searchParams }: Props) {
  const orderId = searchParams.id ?? '—'

  return (
    <div className="success-page">
      <div className="success-icon">✅</div>
      <h1>Pedido confirmado!</h1>
      <p>Obrigado pelo seu pedido. Estamos preparando tudo com carinho.</p>
      <p>Tempo estimado de entrega: <strong>30–45 minutos</strong></p>
      <div className="success-order-id">Pedido #{orderId}</div>
      <br />
      <Link href="/" className="back-link">
        Fazer novo pedido
      </Link>
    </div>
  )
}
