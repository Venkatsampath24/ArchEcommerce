import ProductCard from './ProductCard';

export default function ProductList({ products, onAddToCart }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
