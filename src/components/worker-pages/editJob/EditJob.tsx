import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Footer } from "../../materialUI-common";
import { useStyles } from "../principal/PrincipalPageWorkerStyle";
import { getWorks } from "../../../services/work-service";
import { WorkProps } from "../../../types";
import { useParams } from "react-router-dom";

const EditJobWorker: React.FC = () => {
  const { workId } = useParams();
  console.log(workId);
  const [loading, setLoading] = useState(false);
  const [works, setWorks] = useState<WorkProps[]>([]);

  useEffect(() => {
    const getAllWorks = async () => {
      setLoading(true);
      const works = await getWorks();
      if (works === null) {
        setLoading(false);
        return;
      }
      setWorks(works);
      setLoading(false);
    };
    getAllWorks();
  }, []);

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
            Selecciona el trabajo que deseas ofrecer
          </Typography>
        </Container>

        <Container sx={{ py: 8 }} maxWidth="md">
          {loading ? (
            <Typography variant="body2">Cargando trabajos...</Typography>
          ) : (
            <Grid container spacing={4}>
              {works.map((work, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card sx={useStyles.card}>
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "56.25%",
                      }}
                      image={"/src/assets/"}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {work.work_name}
                      </Typography>
                      <Typography>{work.work_description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
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