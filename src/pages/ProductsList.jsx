import { Link } from "react-router-dom";
import { products } from "../data/products";

function ProductsList() {
  return (
    <div className="grid">
      {products.map(product => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={`/products/${product.id}`} className="btn">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;