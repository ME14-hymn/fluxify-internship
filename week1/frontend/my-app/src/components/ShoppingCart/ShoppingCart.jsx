// ShoppingCart.jsx — Task 7: parent with lifted state, passes handler down
import { useState } from 'react'
import ProductCard from './ProductCard'
import CartSummary from './CartSummary'

const PRODUCTS = [
  { id: 1, name: 'Noise-Cancel Headphones', price: 79.99, emoji: '🎧' },
  { id: 2, name: 'Mechanical Keyboard',     price: 129.99, emoji: '⌨️' },
  { id: 3, name: 'USB-C Hub',              price: 39.99, emoji: '🔌' },
  { id: 4, name: 'Webcam HD',              price: 59.99, emoji: '📷' },
]

export default function ShoppingCart() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = () => {
    setCartCount((c) => c + 1)
  }

  return (
    <div className="space-y-4">
      <CartSummary count={cartCount} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}
