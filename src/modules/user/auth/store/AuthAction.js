export const signInAction = (token, user) => ({
        type: 'SING_IN',
        payload:{token,user} ,
})

export const signUpAction = (user) => ({
        type: 'SING_Up',
        payload:{user} ,
})
