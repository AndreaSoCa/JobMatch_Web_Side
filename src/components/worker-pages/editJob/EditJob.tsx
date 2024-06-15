import React, { useState, useEffect } from "react";
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
import { getWorkById, updateWork } from "../../../services/work-service";
import { WorkProps } from "../../../types";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const EditJobWorker: React.FC = () => {
  const { workId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [work, setWork] = useState<WorkProps>({
    worker_amount: 0,
    work_id: "",
    work_name: "",
    work_description: "",
    work_image: "",
  });

  useEffect(() => {
    const fetchWorkById = async () => {
      setLoading(true);
      if (workId === undefined) {
        return;
      }
      const workData = await getWorkById(workId);
      if (workData === null) {
        setLoading(false);
        return;
      }
      setWork(workData[0]);
      setLoading(false);
    };
    fetchWorkById();
  }, [workId]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(work);
    if (work && workId) {
      const success = await updateWork(work);
      if (success) {
        setTimeout(() => {
          toast.success("Trabajo agregado a tu lista de servicios")
          navigate(`/worker/`);
        },1000);
      } else {
        console.log("Error al agregar servicio");
      }
    }
  };

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
        {loading ? (
          <Typography variant="body2">Cargando trabajos...</Typography>
        ) : (
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
        )}
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
export default EditJobWorker;