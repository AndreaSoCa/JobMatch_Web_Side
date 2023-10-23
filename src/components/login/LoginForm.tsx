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
        
      </Grid>
      
    </Root>
  );
};

export default LoginForm;
