import { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Card,
  Button,
  CardHeader,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Footer } from "../../materialUI-common";
import { IWorkWithId, JobOfferedData } from "../../../types";
import { useNavigate } from "react-router-dom";
import { deleteJobOffered, getJobOfferedByWorkerEmail } from "../../../services/job-offered-service";
import { Toaster, toast } from "sonner";
import { useAppSelector } from "../../../hooks/store";
import DeleteIcon from '@mui/icons-material/Delete';
import { getWorkById } from "../../../services/work-service";


export default function ActiveServices() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [jobOfferedsByWorker, setJobOfferedsByWorker] = useState<JobOfferedData[]>([]);

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    const getAllJobOffered = async () => {
      setLoading(true);
      const jobOfferedResponse: JobOfferedData[] = await getJobOfferedByWorkerEmail(user.email);
      console.log('jobs', jobOfferedResponse);
      if (jobOfferedResponse === null) {
        setLoading(false);
        return;
      }

      const jobOfferedWithWorkNames = await Promise.all(
        jobOfferedResponse.map(async (job) => {
          const workResponse: IWorkWithId = await getWorkById(job.work_id);
          return {
            ...job,
            work_name: workResponse.work_name,
            work_description: workResponse.work_description
          };
        })
      );

      setJobOfferedsByWorker(jobOfferedWithWorkNames);
      setLoading(false);
    };
    getAllJobOffered();
  }, []);

  const handleDeleteJob = async (jobOfferedId: number) => {
    try {
      await deleteJobOffered(jobOfferedId);
      setJobOfferedsByWorker((prevJobOffereds) => {
        return prevJobOffereds.filter(job => job.job_offered_id !== jobOfferedId);
      })
      toast.success("Servicio eliminado con éxtio")
    } catch (e) {
      toast.error("Error eliminando el trabajo ofertado")
    }

  }

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
            <Card >
              <CardHeader
                title={`Servicios ofertados por ${user.worker_name}`}
              />
              <TableContainer >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre del trabajo</TableCell>
                      <TableCell>Descripción</TableCell>
                      <TableCell>Costo por hora</TableCell>
                      <TableCell>Acciones</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {jobOfferedsByWorker
                      .map((job, index) => (
                      <TableRow key={index}>
                        <TableCell>{job.work_name}</TableCell>
                        <TableCell>{job.work_description}</TableCell>
                        <TableCell>{job.cost_per_service}</TableCell>
                        <TableCell>
                          <Button variant="outlined" onClick={() => handleDeleteJob(job.job_offered_id)}>
                            <DeleteIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
            </Card>
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
