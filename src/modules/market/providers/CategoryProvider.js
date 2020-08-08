import axios from "axios";

<<<<<<< HEAD


export const addCategory = (form) => {
  return new Promise((resolve, reject) => {
    axios
      .post(process.env.REACT_APP_BACK_URL + "/api/category", form)
      .then((response) => {
        console.log(response);
=======
const headers = {
  "Content-Type": "application/json",
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(process.env.REACT_APP_BACK_URL + "/api/categories", {
        headers,
      })
      .then((response) => {
>>>>>>> e2b2a4bcb794f1e1db6d6198e5d19a6c63e38162
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

<<<<<<< HEAD
export const allCategory = (user) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        process.env.REACT_APP_BACK_URL + "/api/categories", {
        'Authorization': `Bearer ${user.token}`,
      })
      .then((response) => {
        console.log(response);
=======
export const getCategoryId = (categoryId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(process.env.REACT_APP_BACK_URL + "/api/category/" + categoryId, {
        headers,
      })
      .then((response) => {
>>>>>>> e2b2a4bcb794f1e1db6d6198e5d19a6c63e38162
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

<<<<<<< HEAD
export const updateCategory = (formData, token) => {
  return new Promise((resolve, reject) => {
    axios
      .put(
        process.env.REACT_APP_BACK_URL + `/api/category/${formData.id}`, formData,
        { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` })
      .then((response) => {
        console.log(response);
=======
export const addCategory = (form) => {
  console.log(form)
  return new Promise((resolve, reject) => {
    axios
      .post(process.env.REACT_APP_BACK_URL + "/api/category", form, { headers })
      .then((response) => {
        console.log(response)
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export const updateCategory = (form) => {
  return new Promise((resolve, reject) => {
    axios
      .put(process.env.REACT_APP_BACK_URL + "/api/category", form, { headers })
      .then((response) => {
>>>>>>> e2b2a4bcb794f1e1db6d6198e5d19a6c63e38162
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
