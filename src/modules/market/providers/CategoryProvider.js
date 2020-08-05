import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

export const addCategory = (form) => {
    console.log(form)
    return new Promise((resolve, reject) => {
      axios
        .post(process.env.REACT_APP_BACK_URL + "/category/add", form)
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