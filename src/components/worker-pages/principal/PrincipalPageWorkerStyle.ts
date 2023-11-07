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
    maxHeight: 300,
    height: '100%',
    padding: '16px', // Agregar espaciado alrededor del contenido de la tarjeta
    borderRadius: '8px', // Agregar bordes redondeados
  
    // Estilos específicos para la imagen
    '& .MuiCardMedia-root': {
      flex: '1', // La imagen ocupa todo el espacio vertical disponible
    },
  
    // Estilos específicos para el contenido
    '& .MuiCardContent-root': {
      flex: '1', // El contenido ocupa todo el espacio vertical disponible
    },
  
    // Estilos específicos para el texto
    '& .MuiTypography-root': {
      fontSize: '16px', // Tamaño de fuente del texto
    },
    
    // Estilos específicos para el campo de entrada
    '& .MuiTextField-root': {
      marginTop: '8px', // Espacio superior entre el texto y el campo de entrada
      width: '100%', // Ancho completo del campo de entrada
    },
  },
}