export const useStyles = {
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