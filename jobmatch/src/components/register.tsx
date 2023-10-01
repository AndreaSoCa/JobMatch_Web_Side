import React, { Component, FormEvent } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom

interface State {
  username: string;
  email: string;
  password: string;
}

class Register extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { username, email, password } = this.state;

    try {
      const data = {
        username,
        email,
        password,
      };

      const response = await axios.post("Mi Endpoint boff", data);

      if (response.status === 200) {
        console.log("Registro exitoso:", response.data);
      } else {
        console.error("Error en el registro:", response.data);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <div>
        <h2>Registro</h2>
        {/* Botonsiki */}
        <Link to="/home">Regresar a la página de inicio</Link>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Nombre de usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  }
}

export default Register;
