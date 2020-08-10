import axios from "axios";

let user = JSON.parse(localStorage.getItem('user'))

let headers = {
  "Content-Type": "application/json",
};

if(user){
  headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${user.token}`,
  };
}

export const getCarts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(process.env.REACT_APP_BACK_URL + "/carts/all", {
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

export const getCartsByUser = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(process.env.REACT_APP_BACK_URL + "/api/carts/user", {
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

export const newCart = (form) => {

  return new Promise((resolve, reject) => {
    axios
      .post(process.env.REACT_APP_BACK_URL + "/cart/add", form, { headers })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
  