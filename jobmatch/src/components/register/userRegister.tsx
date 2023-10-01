import React, { Component, FormEvent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./userRegister.css";

interface State {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

class UserRegister extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { name, lastName, email, phone, address } = this.state;

    try {
      const data = {
        name,
        lastName,
        email,
        phone,
        address,
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
    const { name, lastName, email, phone, address } = this.state;

    return (
      <div>
        <h2>User Register</h2>
        <Link to="/home">Back</Link>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
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
            <label htmlFor="phone">Phone: </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default UserRegister;
