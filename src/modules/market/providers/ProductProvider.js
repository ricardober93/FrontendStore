import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(process.env.REACT_APP_BACK_URL + "/api/products", {
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
      .get(process.env.REACT_APP_BACK_URL + "/api/product/" + productId, {
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

export const addProduct = (form) => {
<<<<<<< HEAD
<<<<<<< HEAD
  console.log(form);
=======
>>>>>>> e2b2a4bcb794f1e1db6d6198e5d19a6c63e38162
=======
>>>>>>> 2f0b5ae0670a5d67817372d43a0e0f958ac1f065
  return new Promise((resolve, reject) => {
    axios
      .post(process.env.REACT_APP_BACK_URL + "/api/product", form, { headers })
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export const updateProduct = (form) => {
  return new Promise((resolve, reject) => {
    axios
      .put(process.env.REACT_APP_BACK_URL + "/api/product/"+form._id, form, { headers })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
