const API_URL = "https://6a1659f11b90031f81b0ef2a.mockapi.io/prueba/api/v1/products";

export const getProducts = async () => {
  const response = await fetch("https://6a1659f11b90031f81b0ef2a.mockapi.io/prueba/api/v1/products");
  return await response.json();
};

export const createProduct = async (product) => {
  const response = await fetch("https://6a1659f11b90031f81b0ef2a.mockapi.io/prueba/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return await response.json();
};

export const updateProduct = async (id, product) => {
  const response = await fetch(`https://6a1659f11b90031f81b0ef2a.mockapi.io/prueba/api/v1/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return await response.json();
};

export const deleteProduct = async (id) => {
  await fetch(`https://6a1659f11b90031f81b0ef2a.mockapi.io/prueba/api/v1/products/${id}`, {
    method: "DELETE",
  });
};