import axios from 'axios'

const URL =  "http://localhost:8000";

export const AuthLoginfn = async(values) => {
  let res = await axios({
    method: 'post',
    url: 'http://localhost:8000/signin',
    data: {
      email:values.email,
      password:values.password,
    },
    headers:  {'Content-Type': 'application/x-www-form-urlencoded' } 
  })
    return  res.data.data
}

export const AuthSignUpfn = async ( values ) => {
  let res = await axios({
    method: 'post',
    url: 'http://localhost:8000/signup',
    data: {
      name:values.name,
      lastname:values.lastname,
      email:values.email,
      password:values.password
    },
    headers:  {'Content-Type': 'application/json' }
  })
  
  return res.data.data
}