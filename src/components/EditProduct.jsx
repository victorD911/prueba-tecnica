import { useState, useEffect } from "react";


function EditProduct({
  product,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState({
  nombre: "",
  categoria: "",
  precio: "",
  stock: "",
  imagen: "",
});

  useEffect(() => {
  if (product) {
    setFormData(product);
  }
}, [product]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);
  };

  if (!product) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Editar producto</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="input"
          />

          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            className="input"
          />

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            className="input"
          />

          <div className="modal-actions">

            <button
              type="button"
              onClick={onClose}
              className="cancel-btn"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Guardar
            </button>

          </div>

        </form>

      </div>

        
    </div>
  );
}

export default EditProduct;