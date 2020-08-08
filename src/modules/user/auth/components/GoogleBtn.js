import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { authGoogle } from './../providers/AuthProvider'

const CLIENT_ID = '204470833493-t6f3poqcq90579iqr2545ku6srainf1o.apps.googleusercontent.com';


const GoogleBtn = (props) => {

    const [isLogined, setIsLogined] = useState(false)
    const [accessToken, setAccessToken] = useState('')

    const login = async (response) => {
        if(response.accessToken){
            let data = await authGoogle(response.profileObj)
            props.loginSuccessGoogle(data)
            setIsLogined(true)
            setAccessToken(response.accessToken)
        }
    }
    
    const logout = (response) => {
        setIsLogined(false)
        setAccessToken('')
    }
    
    const handleLoginFailure = (response) => {
        console.log('Failed to log in')
    }
    
    const handleLogoutFailure = (response) => {
        console.log('Failed to log out')
    }

    return ( 
        <div>
            { isLogined ?
                <GoogleLogout
                clientId={ CLIENT_ID }
                buttonText='Logout'
                onLogoutSuccess={ logout }
                onFailure={ handleLogoutFailure }
                >
                </GoogleLogout> : <GoogleLogin
                clientId={ CLIENT_ID }
                buttonText='Login'
                onSuccess={ login }
                onFailure={ handleLoginFailure }
                cookiePolicy={ 'single_host_origin' }
                responseType='code,token'
                />
            }
            { accessToken ? <h5>Your Access Token: <br/><br/> { accessToken }</h5> : null }
        </div>
    );
}
 
export default GoogleBtn;