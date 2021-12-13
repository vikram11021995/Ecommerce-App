import React, {useState} from 'react';
import UserSignup from './Signup';


const MainScreen = () =>{
    const afterSignup = (user) =>{
        alert(user + " " + 'signedup successfully')
    }

    return(
        <div>
            <UserSignup afterSignup={afterSignup}/>
        </div>
    )
}

export default MainScreen;