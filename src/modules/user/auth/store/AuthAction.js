export const signInAction = (auth) => ({
        type: 'SING_IN',
        payload: {token: auth.token, user: auth.user}
})

export const signUpAction = (user) => ({
        type: 'SING_Up',
        payload: user
})
