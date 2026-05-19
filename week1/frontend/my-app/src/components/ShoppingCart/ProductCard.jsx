// ProductCard.jsx — Task 7: child component, calls parent's onAddToCart
export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card p-4 flex flex-col gap-3">
      <div className="text-3xl text-center py-2">{product.emoji}</div>
      <div>
        <h4 className="font-semibold text-slate-800 dark:text-slate-100">{product.name}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400">${product.price.toFixed(2)}</p>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        className="btn-primary text-sm w-full"
      >
        Add to Cart
      </button>
    </div>
  )
}
