import { useState } from "react";
import Swal from "sweetalert2";

function ProductForm({ onCreate }) {
  const [formData, setFormData] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    stock: "",
    imagen: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      Number(formData.precio) < 0 ||
      Number(formData.stock) < 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Valores inválidos",
        text: "Precio y stock no pueden ser negativos",
      });

      return;
    }

    await onCreate(formData);

    Swal.fire({
      icon: "success",
      title: "Producto creado",
    });

    setFormData({
      nombre: "",
      categoria: "",
      precio: "",
      stock: "",
      imagen: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="product-form"
    >

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={formData.categoria}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={formData.precio}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="text"
        name="imagen"
        placeholder="URL Imagen"
        value={formData.imagen}
        onChange={handleChange}
        className="input"
      />

      <button
        type="submit"
        className="btn btn-primary"
      >
        Crear producto
      </button>

    </form>
  );
}

export default ProductForm;