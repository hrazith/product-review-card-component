import data from "./components/data";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App  px-4">
      {data.map((product) => (
        <ProductCard
          key={product.name}
          category={product.category}
          name={product.name}
          description={product.description}
          discountedPrice={product.discountedPrice}
          originalPrice={product.originalPrice}
          heroMobile={product.heroMobile}
          heroDesktop={product.heroDesktop}
        />
      ))}
    </div>
  );
}

export default App;
