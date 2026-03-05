import { Link } from "react-router-dom";
import { products } from "../data/products";

function ProductsList() {
  return (
    <div className="grid">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <div className="card-content">
            <span className="badge">{product.category}</span>
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <Link to={`/products/${product.id}`} className="btn">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;