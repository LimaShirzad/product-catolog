import { Outlet } from "react-router-dom";

function ProductsLayout() {
  return (
    <div className="container">
      <h1>Products</h1>
      <p>Browse our available products below.</p>

      <Outlet />
    </div>
  );
}

export default ProductsLayout;