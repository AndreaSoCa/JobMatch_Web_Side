import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Box,
  Button,
  TextField,
} from "@mui/material";
import { Footer } from "../../materialUI-common";
import { useStyles } from "../principal/PrincipalPageWorkerStyle";
import { getWorks } from "../../../services/work-service";
import { JobOfferedData, TJobOfferedCreate, WorkProps } from "../../../types";
import { useNavigate } from "react-router-dom";
import { addJobOffered, getJobOfferedByWorkerEmail } from "../../../services/job-offered-service";
import { Toaster, toast } from "sonner";
import { useAppSelector } from "../../../hooks/store";

export default function AddJobWorker() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [works, setWorks] = useState<WorkProps[]>([]);
  const [selectedServices, setSelectedServices] = useState<WorkProps[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    const getAllWorks = async () => {
      setLoading(true);
      const works: WorkProps[] = await getWorks();
      const jobOfferedsByWorker: JobOfferedData[] = await getJobOfferedByWorkerEmail(user.email);
      console.log('jobs', jobOfferedsByWorker);
      if (works === null) {
        setLoading(false);
        return;
      }

      const availableWorks = works.filter((work) => {
        return !jobOfferedsByWorker.some((jobOffered) => jobOffered.work_id === parseInt(work.work_id));
      });

      setWorks(availableWorks);
      setLoading(false);
    };
    getAllWorks();
  }, []);

  const handleServiceSelection = (work: WorkProps) => {
    if (selectedServices.includes(work)) {
      // Si el servicio ya está seleccionado, lo deseleccionamos
      setSelectedCards(selectedCards.filter(id => id !== work.work_id));
      setSelectedServices(selectedServices.filter(workSelected => workSelected.work_id !== work.work_id));
    } else {
      // Si el servicio no está seleccionado, lo seleccionamos
      setSelectedCards([...selectedCards, work.work_id]);
      setSelectedServices([...selectedServices, work]);
    }
  };

  useEffect(() => {
    console.log('servi',selectedServices);
  }, [selectedServices])

  const handleAddJobOffered = async () => {
    if (selectedServices.length === 0) {
      toast.error('Debes seleccionar al menos un servicio');
      throw new Error('Debes seleccionar al menos un servicio');
    }

    selectedServices.map(async service => {
      if (!service.worker_amount) {
        toast.error('Ingresa el costo por hora.');
        throw new Error('Ingresa el costo por hora');
      }

      const jobOffered: TJobOfferedCreate = {
        worker_email: user.email,
        worker_phone_number: user.phone_number,
        cost_per_service: service.worker_amount,
        work_id: parseInt(service.work_id, 10),
      };

      try {
        const response = await addJobOffered(jobOffered);
        console.log('response', response);
        navigate('/worker')
        toast.success('Trabajo ofrecido agregado con éxito');
      } catch (error) {
        toast.error('Error al agregar el trabajo ofrecido');
      }
    })
  };
  
  useEffect(() => {
    console.log('user', user);
  }, [user])

  return (
    <>
      <main
        style={{
          backgroundImage: `url('/src/assets/Principal.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Selecciona los servicios que deseas ofrecer
          </Typography>
        </Container>

        <Container sx={{ py: 8 }} maxWidth="md">
          {loading ? (
            <Typography variant="body2">Cargando trabajos...</Typography>
          ) : (
            <Grid container spacing={4}>
              {works.map((work, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card
                    onClick={() => handleServiceSelection(work)}
                    sx={{
                      ...useStyles.card,
                      backgroundColor: selectedCards.includes(work.work_id) ? "lightblue" : "white",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="h2"
                      sx={{fontWeight: 'bolder', letterSpacing: 3, textAlign: 'center'}}>
                      {work.work_name}
                    </Typography>
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "40%",
                      }}
                      image={"/src/assets/hire-principal.jpg"}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{
                        maxHeight: "100px", // Ajusta la altura máxima según tus necesidades
                        overflowY: "auto", // Habilita el desplazamiento vertical cuando sea necesario
                      }}>
                        <Typography
                          sx={{fontWeight: 'bold', textAlign: 'center'}}
                        >
                          Breve descripción
                        </Typography>
                        <Typography>{work.work_description}</Typography>
                      </Box>
                      <TextField
                        sx={{ width: '50px', fontSize: '10px' }}
                        onChange={(event) => {
                          work.worker_amount = parseInt(event.target.value);
                        }}
                        type="number"
                        placeholder="Ingrese su precio por hora"
                        >
                        {work.worker_amount}
                      </TextField>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              <Grid item xs={12} sm={6} md={4}>
                  <Card
                    onClick={() => {navigate(`/worker/create-job`)}}
                    sx={useStyles.card}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "40%",
                      }}
                      image={"/src/assets/hire-principal.jpg"}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Crea un nuevo servicio
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h4">
                        Puedes añadir un nuevo trabajo a nuestra aplicación y ofrecerlo
                      </Typography>
                    </CardContent>
                  </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={handleAddJobOffered}
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{
                    borderRadius: '20px', 
                    textTransform: 'none',
                  }}
                >
                  Añadir estos servicios
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={() => navigate('/worker')}
                  variant="contained"
                  color="info"
                  size="large"
                  style={{
                    borderRadius: '20px', 
                    textTransform: 'none',
                  }}
                >
                  Volver al inicio
                </Button>
              </Grid>
            </Grid>
          )}
        </Container>
        <Toaster />
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
}
