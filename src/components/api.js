export const fetchProduct = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const refinedData = await data.json();
    return refinedData;
  } catch (error) {
    console.log(error);
    throw new Error("500 internal server error");
  }
};

export default fetchProduct;
