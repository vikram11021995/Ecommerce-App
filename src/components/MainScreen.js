import React, {useState} from 'react';
import UserSignup from './Signup';

const MainScreen = () =>{

    const afterSignup = (user) =>{
        alert(user + 'signedup successfully')
    }

    const [screen, setScreen] = useState(<UserSignup afterSignup={afterSignup}/>)

    return(
        <div>
            {screen}
        </div>
    )
}

export default MainScreen;