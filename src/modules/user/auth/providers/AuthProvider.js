import axios from 'axios';

export const AuthLoginfn = async (values) => {
  return new Promise((resolve, reject) => {
    axios
<<<<<<< HEAD
      .post(process.env.REACT_APP_BACK_URL + "/signin", values)
=======
      .post(process.env.REACT_APP_BACK_URL + "/api/auth", values )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

export const authGoogle = async (form) => {

  return new Promise((resolve, reject) => {
    axios
      .post(process.env.REACT_APP_BACK_URL + "/api/auth-method", form )
>>>>>>> e2b2a4bcb794f1e1db6d6198e5d19a6c63e38162
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

export const AuthSignUpfn = async (user) => {
  const { name, lastname, email, password } = user
  let res = await axios.post(`${URL}/signup`,
    {
      name,
      lastname,
      email,
      password
    })

  // headers: {"Content-Type": "application/x-www-form-urlencoded"}
  return res.data
}