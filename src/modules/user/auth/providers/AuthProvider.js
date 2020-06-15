import axios from 'axios'

const URL =  "http://localhost:8000" ;

export const AuthLoginfn = async(values) => {
  let res = await axios({
    method: 'post',
    url: `${URL}/signin`,
    data: {
      email:values.email,
      password:values.password,
    },
    headers:  {'Content-Type': 'application/x-www-form-urlencoded' } 
  })
    return  res.data.data
}

export const AuthSignUpfn = async ( user ) => {
  let res = await axios({
    method: 'post',
    url: `${URL}/signup`,
    data: {
      name:user.name,
      lastname:user.lastname,
      email:user.email,
      password:user.password,
      role:user.role
    },
    // headers:  {'Content-Type': 'application/json' }
  })
  
  return res.data.data
}