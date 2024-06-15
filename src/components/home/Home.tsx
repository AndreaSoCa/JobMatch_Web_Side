import {
  Container,
  Typography,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';

//Icons
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Footer, Root } from '../materialUI-common';
import { useStyles } from './HomeStyles';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Root>
      <AppBar position="static" sx={useStyles.appBar}>
        <Toolbar>
          <Typography variant="h6" color={'black'}>Job-Match</Typography>
          <IconButton edge="end" color="inherit">
          </IconButton>
          <img
            src="src/assets/tortuga.png"
            alt="Descripción de la imagen"
            style={{ width: '50px', height: '30px' }}
          />
        </Toolbar>
      </AppBar>
      <Container sx={useStyles.container}>
        <Container sx={useStyles.logo_container}>
        <Typography variant="h2" sx={useStyles.title}>
            Welcome to Job Match
          </Typography>
          <img
            src="src/assets/tortuga.png"
            alt="Image description"
            style={{ width: '220px', height: '150px' }}
          />
          <Typography variant="body1" sx={useStyles.description}>
            Connecting Needs, Providing Solutions
          </Typography>
        </Container>
        <Grid container spacing={3} sx={{display: 'flex'}}>
          <Grid item xs={12} sm={6} >
            <Link to="/login">
              <Paper sx={useStyles.card}>
                <LoginIcon sx={{fontSize: 140}} />
                <Container sx={useStyles.cardContent}>
                  <Typography variant="h6">Login</Typography>
                  <Typography>
                    If you already have an account, log in with your credentials
                  </Typography>
                </Container>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Utiliza el componente Link para hacerlo cliclable y redirigir */}
            <Link to="/register">
              <Paper sx={useStyles.card}>
                <PersonAddAltIcon sx={{fontSize: 140}} />
                <Container sx={useStyles.cardContent}>
                  <Typography variant="h6">Register</Typography>
                  <Typography>
                    You do not have an account? Create one now as a worker or as a user
                  </Typography>
                </Container>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </Container>

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

export default Home;
