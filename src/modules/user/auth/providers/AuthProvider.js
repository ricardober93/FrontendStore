import axios from 'axios';

export const AuthLoginfn = async (values) => {
  const { email, password } = values

  return new Promise((resolve, reject) => {
    axios
      .post(process.env.REACT_APP_BACK_URL + "/signin", values )
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
  let res =  await axios.post(`${URL}/signup`,
    {
      name,
      lastname,
      email,
      password
    })
    
  // headers: {"Content-Type": "application/x-www-form-urlencoded"}
  return res.data
}