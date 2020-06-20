import Axios from 'axios';

const URL = "http://localhost:8000";

export const AuthLoginfn = async (values) => {
  const { email, password } = values
  return await Axios.post(`${URL}/signin`,
    {
      email,
      password
    })
}

export const AuthSignUpfn = async (user) => {
  const { name, lastname, email, password } = user
  let res =  await Axios.post(`${URL}/signup`,
    {
      name,
      lastname,
      email,
      password
    })
  // headers: {"Content-Type": "application/x-www-form-urlencoded"}
  return res.data
}