export const signInAction = (token) => ({
        type: 'SING_IN',
        payload:token ,
})

export const signUpAction = (user) => ({
        type: 'SING_Up',
        payload:user ,
})
