import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Grid, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const From = () => {
    const [loginData, setLoginData] = useState({});
    const [value, setValue] = React.useState(null);
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
                                        name="Fristname"
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
                                    {/* Pasword */}
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Password"
                                        name="Password "
                                        type="password"
                                        variant="standard"
                                        onBlur={handleOnchange}

                                    />
                                    {/* Phone Number */}
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Phone Number"
                                        name=" Phone Number"
                                        type="number"
                                        variant="standard"
                                        onBlur={handleOnchange}

                                    />
                                    {/* Date */}
                                    <LocalizationProvider sx={{ width: '100%', m: 1 }} dateAdapter={AdapterDateFns}>

                                        <DatePicker
                                            label="Date Of Birth"
                                            value={value}
                                            onBlur={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField
                                                onBlur={handleOnchange}
                                                name=" dateOfBirth"
                                                {...params} />}


                                        />
                                    </LocalizationProvider>
                                    {/* Start Date */}
                                    <LocalizationProvider sx={{ width: '100%', m: 1 }} dateAdapter={AdapterDateFns}>

                                        <DatePicker
                                            label="Start Date"
                                            value={value}
                                            onBlur={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField
                                                onBlur={handleOnchange}
                                                name=" Start Date"
                                                {...params} />}


                                        />
                                    </LocalizationProvider>
                                    {/* select */}
                                    <div sx={{ width: '100%', m: 1 }}>
                                        <InputLabel id="demo-simple-select-standard-label">degree type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={value}
                                            onChange={handleOnchange}
                                            label="Degree type"
                                            name="Degree type "
                                        >
                                            <MenuItem value="">
                                                <em>B Tech</em>
                                            </MenuItem>
                                            <MenuItem value={'B Tech '}>B Tech </MenuItem>
                                            <MenuItem value={"M Tech"}>M Tech </MenuItem>
                                            <MenuItem value={'Others'}>Others</MenuItem>
                                        </Select>

                                    </div>


                                </Grid>
                                <Grid md={6} xs={4}>
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Last  Name"
                                        name="LastName"
                                        type="text"
                                        variant="standard"
                                        onBlur={handleOnchange}
                                    />
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="User Name"
                                        name="User Name "
                                        type="text"
                                        variant="standard"
                                        onBlur={handleOnchange}


                                    />
                                    {/* Pas */}
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Confarm Password"
                                        name="conpassword "
                                        type="password"
                                        variant="standard"
                                        onBlur={handleOnchange}

                                    />
                                    {/* University */}

                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="University"
                                        name="University"
                                        type="text"
                                        onBlur={handleOnchange}

                                        variant="standard" />
                                    {/* Graduation Year */}
                                    <LocalizationProvider sx={{ width: '100%', my: 1 }} dateAdapter={AdapterDateFns}>

                                        <DatePicker
                                            label="Graduation year"
                                            value={value}
                                            onBlur={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField
                                                onBlur={handleOnchange}
                                                name=" Graduation year"
                                                {...params} />}


                                        />
                                    </LocalizationProvider>
                                    {/* End Date */}
                                    <LocalizationProvider sx={{ width: '100%', m: 1, my: 2 }} dateAdapter={AdapterDateFns}>

                                        <DatePicker
                                            label="End Date"
                                            value={value}
                                            onBlur={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField
                                                onBlur={handleOnchange}
                                                name=" End Date"
                                                {...params} />}


                                        />
                                    </LocalizationProvider>

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