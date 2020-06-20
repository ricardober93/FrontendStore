import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/products/all", {
        headers,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export const getProductId = (productId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/product/" + productId, {
        headers,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export const newProduct = (form) => {
  return new Promise((resolve, reject) => {
    axios
      .post(process.env.REACT_APP_API_URL + "/api/product", form, { headers })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
