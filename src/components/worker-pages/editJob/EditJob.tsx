import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { Footer } from "../../materialUI-common";
import { useStyles } from "../principal/PrincipalPageWorkerStyle";
import { getWorkById } from "../../../services/work-service";
import { WorkProps } from "../../../types";
import { useNavigate, useParams } from "react-router-dom";

const EditJobWorker: React.FC = () => {
  const { workId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [work, setWork] = useState<WorkProps>();

  useEffect(() => {
    const fetchWorkById = async () => {
      setLoading(true);
      if(workId === undefined){
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
  console.log(work);



  return (
    <>
      <main>
        <Container maxWidth="sm">
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

        <Container sx={{ py: 8 }} maxWidth="md">
          {loading ? (
            <Typography variant="body2">Cargando trabajos...</Typography>
          ) : (
            <Grid container spacing={4}>
              <Box component="form"
              // onSubmit={handleSubmit}
              >
          <TextField
            label="Nombre del trabajo"
            variant="outlined"
            fullWidth
            name="work_name"
            value={work?.work_name}
            onChange= {(event) => {
              setWork({ 
                ...work, 
                work_name: event.target.value ?? "",
              });
            }} 
          />
          <TextField
            label="Descripción del trabajo"
            variant="outlined"
            fullWidth
            name="work_description"
            multiline
            rows={4}
            value={work?.work_description }
            // onChange={handleInputChange}
          />
          <TextField
            label="Precio por hora"
            variant="outlined"
            fullWidth
            name="work_amount"
            multiline
            rows={4}
            value={work?.work_amount }
            // onChange={handleInputChange}
          />
          {/* Otros campos del trabajo... */}
          <Button variant="contained" color="primary" type="submit">
            Guardar cambios
          </Button>
        </Box>
            </Grid>
          )}
        </Container>
      </main>

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
    </>
  );
};
 export default EditJobWorker;