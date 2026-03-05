import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container">
        <h2>Product not found</h2>
        <button onClick={() => navigate("/products")} className="btn">
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="details-card">
        <img src={product.image} alt={product.name} />

        <div className="details-content">
          <span className="badge">{product.category}</span>
          <h2>{product.name}</h2>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>

          <button onClick={() => navigate(-1)} className="btn">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;