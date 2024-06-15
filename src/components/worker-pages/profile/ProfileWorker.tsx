import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { Root } from "../../materialUI-common";
import { TUserDataResponse, TWorkerProfile } from "../../../types";
import { Toaster, toast } from "sonner";
import { useAppSelector } from "../../../hooks/store";
import { updateWorker } from "../../../services/worker-service";
import { useUserActions } from "../../../store/user/useUserActions";

const ProfileWorker = () => {
  const user = useAppSelector((state) => state.user);
  const {updateUser} = useUserActions();

  const initialWorkerProfile: TWorkerProfile = {
    worker_name: user.name,
    worker_last_name: user.last_name,
    profile_image: "",
    worker_address: user.address,
    identification_image: "",
    password: "",
    email: user.email,
    phone_number: user.phone_number
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TWorkerProfile>({ defaultValues: initialWorkerProfile });

  const onSubmit: SubmitHandler<TWorkerProfile> = async (data) => {
    try {
      const workerProfile: TUserDataResponse = await updateWorker(data);
      updateUser(workerProfile);
      reset(workerProfile);
      toast.success("Usuario editado con éxito");
    } catch (e) {
      toast.error("Error al editar el usuario");
    }
  };

  return (
    <Root>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
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
              Editar perfil
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3, width: '50%' }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    fullWidth
                    id="worker_name"
                    label="Name"
                    autoFocus
                    {...register("worker_name", { required: true, minLength: 4 })}
                  />
                  {errors.worker_name?.type === 'required' && <p>This field is required</p>}
                  {errors.worker_name?.type === 'minLength' && <p>This field must be minimun 4 chars</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="worker_last_name"
                    label="Last name"
                    autoComplete="family-name"
                    {...register("worker_last_name", { required: true, minLength: 4 })}
                  />
                  {errors.worker_last_name?.type === 'required' && <p>This field is required</p>}
                  {errors.worker_last_name?.type === 'minLength' && <p>This field must be minimun 4 chars</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    autoComplete="address"
                    {...register("worker_address", { required: true, minLength: 6 })}
                  />
                  {errors.worker_address?.type === 'required' && <p>This field is required</p>}
                  {errors.worker_address?.type === 'minLength' && <p>This field must be minimun 6 chars</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    {...register("password", { minLength: 8 })}
                    />
                    {errors.password?.type === 'minLength' && <p>This field must be minimun 8 chars</p>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    autoComplete="email"
                    disabled={true}
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
                    disabled={true}
                    type="number"
                    {...register("phone_number", {
                      required: true,
                      minLength: 10,
                    })}
                  />
                  {errors.phone_number?.type === 'required' && <p>This field is required</p>}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Editar
              </Button>
            </Box>
          </Box>
          <Toaster />
        </Grid>
      </Grid>
    </Root>
  );
};

export default ProfileWorker;
