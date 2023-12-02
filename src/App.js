import Header from "./components/header/Header";
import Products from "./components/products/ProductList";
import { categories, products } from "./helper/data";
import "./App.scss";
function App() {
  return (
    <div>
      <Header data={categories} />
      <Products veri={products} />
    </div>
  );
}

export default App;
