const logoImg = JSON.parse(localStorage.getItem("logo"));

//cada reducer tiene su propio state
const initialState = {
    logo : logoImg ? logoImg : {},
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_LOGO':
            return {
                ...state, 
                logo:action.payload
            }
        default:
            return state;
    }
}