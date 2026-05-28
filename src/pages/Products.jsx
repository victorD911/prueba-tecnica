import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ProductForm from "../components/ProductForm";
import ProductCard from "../components/ProductCard";
import EditProduct from "../components/EditProduct";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/products";




function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

    <div className="products-header">
      <h1>Productos</h1>
    </div>
    <ProductForm onCreate={handleCreate} />

    <div className="products-table">
      

      <div className="table-head">
        <span>Producto</span>
        <span>Categoría</span>
        <span>Precio</span>
        <span>Stock</span>
        <span>Acciones</span>
      </div>

      {products.map((product) => (
       <ProductCard
        key={product.id}
        product={product}
        onDelete={handleDelete}
        onEdit={setSelectedProduct}
      />
      ))}

    </div>
      <EditProduct
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
  onSave={async (updatedProduct) => {
    await handleUpdate(selectedProduct, updatedProduct);

    setSelectedProduct(null);
  }}
/>
  </div>
);
}

export default Products;