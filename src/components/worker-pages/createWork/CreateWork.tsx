import React, { useState } from "react";
import {
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  Box,
  Divider,
  Paper,
} from "@mui/material";
import { Footer } from "../../materialUI-common";
import { addWork } from "../../../services/work-service";
import { TJobOfferedCreate, IWorkCreateData, IWorkWithId } from "../../../types";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { useAppSelector } from "../../../hooks/store";
import { addJobOffered } from "../../../services/job-offered-service";

const CreateWork: React.FC = () => {
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user);

  const [work, setWork] = useState<IWorkCreateData>({
    work_name: "",
    work_description: "",
    worker_amount: 0,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(work);
    try {
      const response: IWorkWithId = await addWork(work);
      console.log('res', response);
      await addJob(response);
        setTimeout(() => {
          toast.success("Trabajo creado y agregado a tu lista de servicios")
          navigate(`/worker/`);
        },1000);
    } catch (e) {
      toast.error("Error al crear el trabajo y agregarlo a tu lista")
    }
  };

  const addJob = async (service: IWorkWithId) => {
    const jobOffered: TJobOfferedCreate = {
      worker_email: user.email,
      worker_phone_number: user.phone_number,
      cost_per_service: service.worker_amount,
      work_id: service.work_id
    };

    try {
      const response = await addJobOffered(jobOffered);
      console.log('response', response);
      toast.success('Trabajo ofrecido agregado con éxito');
    } catch (error) {
      toast.error('Error al agregar el trabajo ofrecido');
    }
  }

  return (
    <main
        style={{
          backgroundImage: `url('/src/assets/Principal.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
      <Container maxWidth="xl">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Edita tu trabajo
        </Typography>
      </Container>

      <Container
        sx={{
          py: 8,
          width: "20%", 
          margin: "0 auto", 
          textAlign: "center",
        }}
      >
        <Typography variant="body2">Cargando trabajos...</Typography>
        <Grid container spacing={9}>
          <Box component={Paper} elevation={5} p={5}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Nombre del trabajo"
                variant="outlined"
                fullWidth
                name="work_name"
                value={work?.work_name}
                onChange={(event) => {
                  setWork({
                    ...work,
                    work_name: event.target.value
                  })
                }}
              />
              <Divider sx={{ my: 2 }} />
              <TextField
                label="Descripción del trabajo"
                variant="outlined"
                fullWidth
                name="work_description"
                multiline
                rows={4}
                value={work?.work_description}
                onChange={(event) => {
                  setWork({
                    ...work,
                    work_description: event.target.value
                  })
                }}
              />
              <Divider sx={{ my: 2 }} />
              <TextField
                label="Precio por hora"
                variant="outlined"
                fullWidth
                name="work_amount"
                value={work?.worker_amount}
                onChange={(event) => {
                  setWork({
                    ...work,
                    worker_amount: parseInt(event.target.value)
                  })
                }}
              />
              <Divider sx={{ my: 2 }} />
              <Button variant="contained" color="primary" type="submit">
                Guardar cambios
              </Button>
            </form>
          </Box>
        </Grid>
        <Toaster />
      </Container>
      <Footer>
        <Container maxWidth="md">
          <Typography variant="body2">
            © {new Date().getFullYear()} Job Match. Todos los derechos
            reservados.
          </Typography>
          <Typography variant="body2">
            Proyecto universitario - Desarrollo de Software II
          </Typography>
        </Container>
      </Footer>
    </main>
  );
};
export default CreateWork;