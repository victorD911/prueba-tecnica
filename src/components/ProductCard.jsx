function ProductCard({ product, onDelete }) {
  return (
    <div className="border rounded-lg p-4 shadow">

      <img
  src={
    product.imagen?.startsWith("http")
      ? product.imagen
      : "https://via.placeholder.com/300"
  }
  alt={product.nombre}
  className="w-full h-40 object-cover rounded"

      />

      <h2 className="text-xl font-bold mt-3">
        {product.nombre}
      </h2>

      <p className="text-gray-600">
        Categoría: {product.categoria}
      </p>

      <p className="font-semibold">
        Precio: ${product.precio}
      </p>

      <p>
        Stock: {product.stock}
      </p>

      <button
        onClick={() => onDelete(product.id)}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Eliminar
      </button>

    </div>
  );
}

export default ProductCard;