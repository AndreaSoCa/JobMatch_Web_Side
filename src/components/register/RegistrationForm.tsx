import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerWorker } from "../../services/worker-service";
import { Alert } from "@mui/material";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { registerUser } from "../../services/user-service";
import { ModelToRegister, User, Worker } from "../../types";
import { Root } from "../materialUI-common";

const defaultValues: ModelToRegister = {
  email: "",
  password: "",
  phone_number: "",
  name: "",
  last_name: "",
  address: "",
  typeOfUser: "",
};

const RegistrationForm = () => {
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ModelToRegister>({ defaultValues });

  const onSubmit: SubmitHandler<ModelToRegister> = async (data) => {
    console.log("dataInit", data);
    const { email, password, phone_number, name, last_name, address } = data;
    try {
      if (data.typeOfUser === "user") {
        const user: User = {
          email,
          phone_number,
          user_name: name, // Asignar el nombre a user_name
          password,
          user_last_name: last_name, // Asignar last_name a user_last_name
          address,
        };
        await registerUser(user);
        setAlert({
          type: "success",
          message: "Successful registration as a user.",
        });
      } else if (data.typeOfUser === "worker") {
        const worker: Worker = {
          email,
          password,
          phone_number,
          worker_name: name,
          worker_last_name: last_name,
          worker_address: address,
        };
        await registerWorker(worker);
        setAlert({
          type: "success",
          message: "Successful registration as a worker.",
        });
      }
      reset();
    } catch (e) {
      //Se setea la alerta como error si NO se logra hacer el registro
      setAlert({
        type: "error",
        message: "Error in registration.",
      });
    }
  };

  return (
    <Root>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            position: "relative",
            background: `linear-gradient(
              180deg,
              rgb(22, 48, 26) 0%,
              rgb(113.41, 54.85, 208.96) 0%,
              rgb(43, 200, 200) 0.01%,
              rgb(26, 90, 134) 66.54%,
              rgb(6, 6, 6) 100%
            )`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="src/assets/turtle.png"
            alt="Turtle Image"
            style={{
              position: "absolute", 
              top: 0,
              left: 0,
              width: "100%", 
              height: "100%",
              objectFit: "cover", 
            }}
          />
        </Grid>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    fullWidth
                    id="firstName"
                    label="Name"
                    autoFocus
                    {...register("name", { required: true, minLength: 4 })}
                  />
                  {errors.name?.type === 'required' && <p>This field is required</p>}
                  {errors.name?.type === 'minLength' && <p>This field must be minimun 4 chars</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="last_name"
                    label="Last name"
                    autoComplete="family-name"
                    {...register("last_name", { required: true, minLength: 4 })}
                  />
                  {errors.last_name?.type === 'required' && <p>This field is required</p>}
                  {errors.last_name?.type === 'minLength' && <p>This field must be minimun 4 chars</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    autoComplete="address"
                    {...register("address", { required: true, minLength: 6 })}
                  />
                  {errors.address?.type === 'required' && <p>This field is required</p>}
                  {errors.address?.type === 'minLength' && <p>This field must be minimun 6 chars</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    {...register("password", { required: true, minLength: 8 })}
                  />
                  {errors.password?.type === 'required' && <p>This field is required</p>}
                  {errors.password?.type === 'minLength' && <p>This field must be minimun 8 chars</p>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    autoComplete="email"
                    {...register("email", { required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })}
                  />
                  {errors.email?.type === 'required' && <p>This field is required</p>}
                  {errors.email?.type === 'pattern' && <p>This field must be email format</p>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone_number"
                    label="Phone number"
                    autoComplete="telefono"
                    type="number"
                    {...register("phone_number", {
                      required: true,
                      minLength: 10,
                    })}
                  />
                  {errors.phone_number?.type === 'required' && <p>This field is required</p>}
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="register-type-select">
                      Register type
                    </InputLabel>
                    <Select
                      labelId="register-type-select"
                      id="register-type-select"
                      label="Type of registration"
                      defaultValue={"user"}
                      {...register("typeOfUser", {
                        required: "Selecciona un tipo de usuario",
                      })}
                    >
                      <MenuItem value={"user"}>User</MenuItem>
                      <MenuItem value={"worker"}>Worker</MenuItem>
                    </Select>
                    {errors.typeOfUser && <p>{errors.typeOfUser.message}</p>}
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
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login">Do you already have an account?</Link>
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

export default RegistrationForm;
