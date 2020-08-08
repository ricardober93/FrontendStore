import axios from "axios";



export const addCategory = (form) => {
  return new Promise((resolve, reject) => {
    axios
      .post(process.env.REACT_APP_BACK_URL + "/api/category", form)
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

export const allCategory = (user) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        process.env.REACT_APP_BACK_URL + "/api/categories", {
        'Authorization': `Bearer ${user.token}`,
      })
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

export const updateCategory = (formData, token) => {
  return new Promise((resolve, reject) => {
    axios
      .put(
        process.env.REACT_APP_BACK_URL + `/api/category/${formData.id}`, formData,
        { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` })
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
