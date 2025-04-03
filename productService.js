export const fetchProducts = async () => {
  try {
    const response = await fetch("/api/products");
    if (!response.ok) throw new Error("Failed to fetch products");

    const data = await response.json();
    return Array.isArray(data) ? data : []; // Ensure an array is returned
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array if the fetch fails
  }
};
