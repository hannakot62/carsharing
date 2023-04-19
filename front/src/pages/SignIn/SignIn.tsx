import React from 'react';
import style from './SignIn.module.css'
import {Button, TextField} from "@mui/material";

const SignIn : React.FC = () => {
    //TODO errors
    return (
        <div className={style.container}>
            <div className={style.toSignUp}>
                <h4>Don't have an account?</h4>
                <Button variant={'outlined'}>Sign Up </Button>
            </div>

            <main>
                <h1>Sign In</h1>
                <TextField required label={'Enter Login'} variant={"outlined"}/>
                <TextField required label={'Enter Password'} type='password' variant={"outlined"}/>
<Button variant={"contained"}>Sign In</Button>
            </main>

        </div>
    );
};

export default SignIn;
