import axios from 'axios'

export const getCustomization = () => {
    return new Promise((resolve, reject) => {
        axios.get(process.env.REACT_APP_BACK_URL+'/api/customization')
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export const updateColors = (colorPicker) => {
    let data = {
        "color_primary": colorPicker.colorPrimary,
        "color_secondary": colorPicker.colorSecondary,
        "text_primary": colorPicker.textPrimary,
        "text_secondary": colorPicker.textSecondary,
    }
    return new Promise((resolve, reject) => {
        axios.put(process.env.REACT_APP_BACK_URL+'/api/colors', data,
        {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export const updateLanguage = (language) => {
    let data = {
        "language": language,
    }
    return new Promise((resolve, reject) => {
        axios.put(process.env.REACT_APP_BACK_URL+'/api/language', data,
        {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export const updateLogoPreview = avatar => {
    return new Promise((resolve, reject) => {
        axios.post(process.env.REACT_APP_BACK_URL + '/api/logo-preview', avatar,
        { headers: { 'authorization': 'Bearer ' + localStorage.getItem('token'), 'content-type': 'multipart/form-data' } })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
        })

}

export const updateLogo = avatar => {
    return new Promise((resolve, reject) => {
        axios.post(process.env.REACT_APP_BACK_URL + '/api/logo', avatar,
        { headers: { 'authorization': 'Bearer ' + localStorage.getItem('token'), 'content-type': 'multipart/form-data' } })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
        })

}


