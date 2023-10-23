import { Alert, Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginWorker } from "../../services/worker-service";
import { loginUser } from "../../services/user-service";
import { useNavigate } from 'react-router-dom';
import { Root } from "../materialUI-common";
import { LoginType, TokenUser } from "../../types";
import { useStyles } from "./LoginFormStyle";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const [typeLogin, setTypeLogin] = useState('');


  const handleChangeTypeLogin = (event: SelectChangeEvent) => {
    setTypeLogin(event.target.value as string);
  };

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    console.log("dataInit", data);
    try {
      if (typeLogin === 'user') {
        const {token}: TokenUser = await loginUser(data);
        console.log('token user', token);
        setAlert({
          type: "success",
          message: "Successful login",
        });
      } else if (typeLogin === 'worker') {
        const {token}: TokenUser = await loginWorker(data);
        console.log('token worker', token);
        setAlert({
          type: "success",
          message: "Successful login",
        });
      }
      navigate('/principal');
      
    } catch (e) {
      setAlert({
        type: "error",
        message: "Error: Invalid credentials",
      });
      console.error('Error en el login');
    }
  };

  return (
    <Root>
      <Grid container component="main" sx={{ height: "100vh"}}>
        <Grid item xs={12} sm={12} md={12}
          sx={{display: 'flex', justifyContent: 'center',
            alignItems: 'center' }}>
          <Box
            sx={useStyles.form_container}
          >
            <img
              src="src/assets/tortuga.png"
              alt="Image description"
              style={{ width: '150px', height: '100px' }}
            />
            <Typography component="h1" variant="h5" sx={useStyles.title}>
              Come in and connect now
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    margin="normal"
                    type="text"
                    fullWidth
                    label="Email"
                    sx={{ mt: 2, mb: 1.5 }}
                    required
                    {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })}
                  />
                  {errors.email?.type === 'required' && <Typography sx={{color: 'black'}}>This field is required</Typography>}
                  {errors.email?.type === 'pattern' && <Typography sx={{color: 'black'}}>This field must be email format</Typography>}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    margin="normal"
                    type="password"
                    fullWidth
                    label="Password"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                    {...register("password", { required: true, minLength: 8 })}
                  />
                  {errors.password?.type === 'required' && <Typography sx={{color: 'black'}}>This field is required</Typography>}
                  {errors.password?.type === 'minLength' && <Typography sx={{color: 'black'}}>This field must be minimun 8 chars</Typography>}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                    <InputLabel id="login-type-select">
                      Login type
                    </InputLabel>
                    <Select
                      labelId="login-type-select"
                      id="login-type-select"
                      label="Type of login"
                      value={typeLogin}
                      defaultValue="user"
                      onChange={handleChangeTypeLogin}
                    >
                      <MenuItem value={"user"}>User</MenuItem>
                      <MenuItem value={"worker"}>Worker</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                //disabled={!isValid}
              >
                Log in
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/register">You don't have an account? create one now</Link>
                </Grid>
              </Grid>
              {alert.type === "success" && (
                <Alert severity="success">{alert.message}</Alert>
              )}
              {alert.type === "error" && (
                <Alert severity="error">{alert.message}</Alert>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
      
    </Root>
  );
};

export default LoginForm;
