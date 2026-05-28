function ProductCard({ product, onDelete }) {
  return (
    <div className="table-row">

      <div className="product-info">

        <img
          src={
            product.imagen?.startsWith("http")
              ? product.imagen
              : "https://via.placeholder.com/80"
          }
          alt={product.nombre}
        />

        <span>{product.nombre}</span>

      </div>

      <span>{product.categoria}</span>

      <span>${product.precio}</span>

      <span>{product.stock}</span>

      <button
        onClick={() => onDelete(product.id)}
        className="delete-btn"
      >
        Eliminar
      </button>

    </div>
  );
}

export default ProductCard;