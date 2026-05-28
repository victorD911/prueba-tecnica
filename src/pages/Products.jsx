const [products, setProducts] = useState([]);

useEffect(() => {
  loadProducts();
}, []);

const loadProducts = async () => {
  const data = await getProducts();
  setProducts(data);
};

{
  products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ));
}

if (precio < 0 || stock < 0) {
  Swal.fire({
    icon: "error",
    title: "Valores inválidos",
    text: "Precio y stock no pueden ser negativos",
  });

  return;
}

await createProduct(formData);

await updateProduct(product.id, formData);

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