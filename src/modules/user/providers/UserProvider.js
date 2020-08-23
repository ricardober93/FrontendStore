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

//Agregar un usuario
export const addUser = ({
    name,
    username,
    email,
    password,
    address,
    latitude,
    longitude,
    role,
    state,
  }) => {
    return axios.post(process.env.REACT_APP_BACK_URL + "/api/user", {
      name: name,
      username: username,
      email: email,
      password: password,
      address: address,
      latitude: latitude,
      longitude: longitude,
      role: role,
      state: state,
    }, {headers});
};
  
//Actualizar usuario
export const updateUser = ({
    id,
    name,
    lastname,
    email,
    phone,
    address,
    latitude,
    longitude
    }) => {
    return axios.put(process.env.REACT_APP_BACK_URL + "/api/user/" + id, {
      name,
      lastname,
      email,
      phone,
      address: address,
      latitude: latitude,
      longitude: longitude
    }, {headers});
};


// Update Password
export const updatePasswordUser = ({
  currentPassword,
  newPassword
  }) => { 
  console.log(currentPassword,
    newPassword);
  return axios.put(process.env.REACT_APP_BACK_URL + "/api/user/password", {
    currentPassword,
    newPassword
  }, {headers});
};
