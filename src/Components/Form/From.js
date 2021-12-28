import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Grid, Typography } from '@mui/material';
const From = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnchange = (e) => {
        const feild = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[feild] = value;
        setLoginData(newLoginData);
        // console.log(loginData);
        const result = JSON.stringify(loginData);
        console.log(result)
    }
    const handleLoginSubmit = e => {
        alert('Hello World')
        e.preventDefault();

    }
    return (
        <div>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={10}>
                        <Typography variant="body1" gutterBottom>Register</Typography>

                        <form onSubmit={handleLoginSubmit}>
                            <Grid container spacing={1}>
                                <Grid md={6} xs={8}>
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Frist Name"
                                        name="name"
                                        type="text"
                                        onBlur={handleOnchange}

                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Email"
                                        name="email "
                                        type="email"
                                        variant="standard"
                                        onBlur={handleOnchange}

                                    />

                                </Grid>
                                <Grid md={6} xs={4}>
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Last  Name"
                                        name="name"
                                        type="text"
                                        variant="standard"
                                        onBlur={handleOnchange}
                                    />
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Email"
                                        name="User Name "
                                        type="text"
                                        variant="standard"
                                        onBlur={handleOnchange}

                                    />
                                </Grid>

                            </Grid>
                        </form>


                    </Grid>
                    <Grid item xs={12} md={2}>
                        {/* <img style={{ width: '100%' }} alt="" /> */}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default From;


{/* <form onSubmit={handleLoginSubmit}>
    <TextField
        sx={{ width: '75%', m: 1 }}
        id="standard-basic"
        label="Frist Name"
        name="name"
        type="text"
        onBlur={handleOnchange}

        variant="standard" />
    <TextField
        sx={{ width: '75%', m: 1 }}
        id="standard-basic"
        label="Last  Name"
        name="name"
        type="text"
        variant="standard"
        onBlur={handleOnchange}
    />
    <TextField
        sx={{ width: '75%', m: 1 }}
        id="standard-basic"
        label="Your Email"
        name="email "
        type="email"
        variant="standard"
        onBlur={handleOnchange}

    />


    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>

</form> */}