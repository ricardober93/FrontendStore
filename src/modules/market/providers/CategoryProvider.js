import axios from "axios";

<<<<<<< HEAD
<<<<<<< HEAD


export const addCategory = (form) => {
  return new Promise((resolve, reject) => {
    axios
      .post(process.env.REACT_APP_BACK_URL + "/api/category", form)
      .then((response) => {
        console.log(response);
=======
const headers = {
=======
let user = JSON.parse(localStorage.getItem('user'))

let headers = {
>>>>>>> 2f0b5ae0670a5d67817372d43a0e0f958ac1f065
  "Content-Type": "application/json",
};

if(user){
  headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${user.token}`,
  };
}

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
<<<<<<< HEAD
export const allCategory = (user) => {
=======
export const getCategories = (user) => {
>>>>>>> 2f0b5ae0670a5d67817372d43a0e0f958ac1f065
  return new Promise((resolve, reject) => {
    axios
      .get(
        process.env.REACT_APP_BACK_URL + "/api/categories", {
        'Authorization': `Bearer ${user.token}`,
      })
      .then((response) => {
        console.log(response);
<<<<<<< HEAD
=======
export const getCategoryId = (categoryId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(process.env.REACT_APP_BACK_URL + "/api/category/" + categoryId, {
        headers,
      })
      .then((response) => {
>>>>>>> e2b2a4bcb794f1e1db6d6198e5d19a6c63e38162
=======
>>>>>>> 2f0b5ae0670a5d67817372d43a0e0f958ac1f065
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

<<<<<<< HEAD
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
=======
>>>>>>> 2f0b5ae0670a5d67817372d43a0e0f958ac1f065
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
<<<<<<< HEAD
>>>>>>> e2b2a4bcb794f1e1db6d6198e5d19a6c63e38162
=======
>>>>>>> 2f0b5ae0670a5d67817372d43a0e0f958ac1f065
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
