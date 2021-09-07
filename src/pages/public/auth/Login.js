import React from 'react'
import { TextField, Button, Link } from '@material-ui/core'

const Login = () => {
    return (
        <div className="login-wrapper d-flex vh-center vh-100 login-bg">
            <div className="login-content">
                <h2 className="h2">Sign in</h2>
                <form>
                    <TextField id="standard-basic" label="Email" className="mb-4" />
                    <TextField id="standard-basic" label="Password" className="mb-4" />
                    <Button
                        variant="contained"
                        color="primary"
                        // endIcon={<Icon>send</Icon>}
                        className="mt-4 gradient-45deg-purple-deep-orange fw-btn"
                    >
                        Sign in
                    </Button>
                </form>
                <div className="login-other-links mt-3 d-flex">
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                    >
                        Register Now!
                    </Link>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                    >
                        Forgot password ?
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
