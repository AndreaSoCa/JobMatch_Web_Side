import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { CardPrincipal } from '../../../types';
import { Footer } from '../../materialUI-common';
import { useStyles } from './PrincipalPageWorkerStyle';

const cardsTwo: CardPrincipal[] = [
  {
    title: 'Edita tus servicios',
    description: 'Conecta con cualquier trabajador local o alrededor del mundo',
    path_url: '/connect',
    path_image: 'src/assets/hire-principal.jpg',
  },
  {
    title: 'Prestar servicios',
    description: 'Conecta con cualquier trabajador local o alrededor del mundo',
    path_url: '/connect',
    path_image: 'src/assets/worker-principal.jpg',
  },

];


export default function PrincipalPageWorker() {
  return (
    <>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 4,
            pb: 1,
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
              JOB MATCH
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cardsTwo.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Link href={card.path_url} underline='none'>
                  <Card
                    sx={useStyles.card}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image={card.path_image}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Footer>
        <Container maxWidth="md">
          <Typography variant="body2">
            © {new Date().getFullYear()} Job Match. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2">
            Proyecto universitario - Desarrollo de Software II
          </Typography>
        </Container>
      </Footer>
    </>
  );
}