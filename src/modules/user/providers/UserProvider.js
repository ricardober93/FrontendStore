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
    });
};
  
//Actualizar usuario
export const updateUser = ({
    id,
    name,
    username,
    email,
    address,
    latitude,
    longitude
    }) => {
    return axios.put(process.env.REACT_APP_BACK_URL + "/api/user/" + id, {
        name: name,
        username: username,
        email: email,
        address: address,
        latitude: latitude,
        longitude: longitude
    });
};

//Eliminar usuario
export const deleteUser = (id) => {
    return axios.delete(process.env.REACT_APP_BACK_URL + "/api/user", id);
    };

    export const updatePasswordUser = ({ id, password }) => {
    return axios.put(
        process.env.REACT_APP_BACK_URL + "/api/users/password/" + id,
        {
        password: password,
        }
    );
};
