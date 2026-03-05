import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/products")} className="btn">
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>

      <button onClick={() => navigate(-1)} className="btn">
        Back
      </button>
    </div>
  );
}

export default ProductDetails;