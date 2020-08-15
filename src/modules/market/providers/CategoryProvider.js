import axios from "axios";

let user = JSON.parse(localStorage.getItem('user'))

let headers = {
  "Content-Type": "application/json",
};

if (user) {
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
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};


export const getCategories = (user) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        process.env.REACT_APP_BACK_URL + "/api/categories", {
        'Authorization': `Bearer ${user.token}`,
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
  console.log(form)
  return new Promise((resolve, reject) => {
    axios
      .put(process.env.REACT_APP_BACK_URL + "/api/category/" + form._id, form, { headers })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
