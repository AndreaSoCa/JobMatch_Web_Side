// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import WorkerRegister from './WorkerRegister';

//  describe('WorkerRegister', () => {
//   it('renders without errors', () => {
//     render(<WorkerRegister />);
//     const signUpButton = screen.getByText('Sign Up');
//     expect(signUpButton).toBeInTheDocument();
//   });

//   it('submits the form with valid data', async () => {
//     render(<WorkerRegister />);
    
//     // Simula el llenado del formulario con datos válidos
//     fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John' } });
//     fireEvent.change(screen.getByLabelText('Last name'), { target: { value: 'Doe' } });
//     // Completa los demás campos aquí
    
//     fireEvent.click(screen.getByText('Sign Up'));

//     // Espera a que se muestre la alerta de éxito (ajusta esto según tu componente)
//     await waitFor(() => {
//       const successAlert = screen.getByText('Successful registration as a worker.');
//       expect(successAlert).toBeInTheDocument();
//     });
//   });

//   it('shows an error message on form submission with invalid data', async () => {
//     render(<WorkerRegister />);
    
//     // Simula el llenado del formulario con datos inválidos
//     fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'J' } });
//     fireEvent.change(screen.getByLabelText('Last name'), { target: { value: 'Doe' } });
//     // Completa los demás campos aquí
    
//     fireEvent.click(screen.getByText('Sign Up'));

//     // Espera a que se muestre la alerta de error (ajusta esto según tu componente)
//     await waitFor(() => {
//       const errorAlert = screen.getByText('Error in registration.');
//       expect(errorAlert).toBeInTheDocument();
//     });
//   });
// });
