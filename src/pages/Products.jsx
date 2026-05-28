import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import ProductCard from "../components/ProductCard";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/products";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron cargar los productos",
      });
    }
  };

  const handleCreate = async (formData) => {
    const { precio, stock } = formData;

    if (precio < 0 || stock < 0) {
      Swal.fire({
        icon: "error",
        title: "Valores inválidos",
        text: "Precio y stock no pueden ser negativos",
      });

      return;
    }

    await createProduct(formData);

    Swal.fire({
      icon: "success",
      title: "Producto creado",
    });

    loadProducts();
  };

  const handleUpdate = async (product, formData) => {
    await updateProduct(product.id, formData);

    Swal.fire({
      icon: "success",
      title: "Producto actualizado",
    });

    loadProducts();
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "¿Eliminar producto?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
    });

    if (result.isConfirmed) {
      await deleteProduct(id);

      Swal.fire({
        icon: "success",
        title: "Producto eliminado",
      });

      loadProducts();
    }
  };

  return (
  <div className="products-container">

    <h1>Productos</h1>

    <div className="products-grid">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}

    </div>

  </div>
);
}

export default Products;