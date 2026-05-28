function ProductCard({
  product,
  onDelete,
  onEdit,
}) {
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

      <div className="actions">

        <button
          onClick={() => onEdit(product)}
          className="edit-btn"
        >
          Editar
        </button>

        <button
          onClick={() => onDelete(product.id)}
          className="delete-btn"
        >
          Eliminar
        </button>

      </div>

    </div>
  );
}

export default ProductCard;