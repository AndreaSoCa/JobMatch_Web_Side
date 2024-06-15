export const useStyles = {
  appBar: {
    backgroundImage: 'url("src/assets/Principal.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out, transform 0.6s ease-in-out',
    '&:hover': {
      backgroundColor: '#c6ccc9',
      transform: 'scale(1.05)', 
    },
    maxHeight: 400,
    height: '100%',

  },
}