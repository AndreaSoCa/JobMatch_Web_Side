import {
  Container,
  Typography,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Link,
  styled,
} from '@mui/material';

//Icons
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const Root = styled(Box)({
  minHeight: '100vh',
  minWidth: '100vw',
  backgroundImage: 'url("src/assets/Principal.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
});

const Footer = styled('footer')({
  backgroundColor: 'whitesmoke',
  color: 'black',
  padding: 2,
  textAlign: 'center',
  marginTop: 4,
});

const useStyles = {
  appBar: {
    backgroundColor: 'whitesmoke',
  },
  container: {
    marginTop: 5,
    marginBottom: 10,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out, transform 0.6s ease-in-out',
    '&:hover': {
      backgroundColor: '#c6ccc9',
      transform: 'scale(1.05)', 
    },
    padding: 5,
    maxHeight: 150,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo_container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 5,
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    letterSpacing: 5,
    textTransform: 'uppercase',
  },
  description: {
    fontSize: '18px',
    color: 'whitesmoke',
    letterSpacing: 5,
  },
};

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
            <Link href="/register" underline='none'>
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
            <Link href="/register" underline='none'>
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
