import axios from 'axios'

const URL = process.env.REACT_APP_BACK_URL;

export const AuthLoginfn = async(values) => {
  let res = await axios.post(`http://localhost:8000/signin`, {
        email:values.email,
        password:values.password,
    }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)

      return  res.data.data
}

export const AuthSignUpfn = async ( values ) => {
  let res = await axios.post(`${URL}/signup`, {
    name:values.name,
    lastname:values.lastname,
    email:values.email,
    password:values.password
  })
}