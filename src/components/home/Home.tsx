import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Link,
  styled,
} from '@mui/material';
import { Image } from '@mui/icons-material';

const Root = styled('div')({
  flexGrow: 1,
});

const Footer = styled('footer')({
  backgroundColor: '#333',
  color: '#fff',
  padding: 2,
  textAlign: 'center',
  marginTop: 4,
});

const useStyles = {
  appBar: {
    backgroundColor: '#2196F3',
  },
  container: {
    marginTop: 3,
    marginBottom: 3,
  },
  heroImage: {
    backgroundImage: 'url("src/assets/tortuga.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroText: {
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    marginTop: 2,
  },
};

function Home() {
  return (
    <Root>
      <AppBar position="static" sx={useStyles.appBar}>
        <Toolbar>
          <Typography variant="h6">My App</Typography>
          <IconButton edge="end" color="inherit">
            <Image />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Paper sx={useStyles.heroImage}>
        <Container maxWidth="sm">
          <Typography variant="h3" sx={useStyles.heroText}>
            Bienvenido a My App
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={useStyles.button}
          >
            Registrarse
          </Button>
        </Container>
      </Paper>

      <Container sx={useStyles.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Image />
              <Typography variant="h6">Título 1</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Image />
              <Typography variant="h6">Título 2</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer>
        <Container maxWidth="md">
          <Typography variant="body2">
            © {new Date().getFullYear()} My App. Todos los derechos reservados.
          </Typography>
          <Box mt={2}>
            <Link color="inherit" href="/terms">
              Términos de servicio
            </Link>{' '}
            |{' '}
            <Link color="inherit" href="/privacy">
              Política de privacidad
            </Link>
          </Box>
        </Container>
      </Footer>
    </Root>
  );
}

export default Home;
