import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardPrincipal } from '../../types';
import { Footer, Root } from '../materialUI-common';
import { useStyles } from './PrincipalPageStyle';
import { Link } from 'react-router-dom';

const cardsTwo: CardPrincipal[] = [
  {
    title: 'Contrata',
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
  {
    title: 'Editar los servicios que presto',
    description: 'Conecta con cualquier trabajador local o alrededor del mundo',
    path_url: '/connect',
    path_image: 'src/assets/edit-work-principal.jpg',
  },
  {
    title: 'Historial de contratos',
    description: 'Conecta con cualquier trabajador local o alrededor del mundo',
    path_url: '/connect',
    path_image: 'src/assets/hire-principal.jpg',
  }
];

export default function PrincipalPage() {
  return (
    <Root>
      <AppBar position="static" sx={useStyles.appBar}>
        <Toolbar>
          <Typography variant="h6" color={'black'}>Job-Match</Typography>
          <img
            src="src/assets/tortuga.png"
            alt="Descripción de la imagen"
            style={{ width: '50px', height: '30px', filter: 'invert(1)'}}
          />
        </Toolbar>
      </AppBar>
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
                <Link to={card.path_url}>
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
    </Root>
  );
}