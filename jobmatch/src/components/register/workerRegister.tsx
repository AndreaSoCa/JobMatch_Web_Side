import React, { FormEvent, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./workerRegister.css";

interface State {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

const WorkerRegister: React.FC = () => {
  const [state, setState] = useState<State>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { name, lastName, email, phone, address } = state;

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

  return (
    <div>
      <h2>Worker Register</h2>
      <Link to="/home">Back</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={state.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={state.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            name="address"
            value={state.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default WorkerRegister;
