import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler  } from "react-hook-form"

type Inputs = { //todo remove
  name: string
  lastName: string
  email: string
  password: string
  phone: string
  address: string
}

const UserRegister: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    //todo fetch data
  };

  return (
    <div>
      <h2>User Register</h2>
      <Link to="/home">Back</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-div-input">
          <label htmlFor="name">Name: </label>
          <input
            {...register('name', {required: true, minLength: 4})}
            type="text"
            id="name"
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-div-input">
          <label htmlFor="lastName">Last Name: </label>
          <input
            {...register('lastName', {required: true, minLength: 4})}
            type="text"
            id="lastName"
          />
          {errors.lastName&& <span>This field is required</span>}
        </div>
        <div className="form-div-input">
          <label htmlFor="email">Email: </label>
          <input
            {...register('email', {required: true, minLength: 4})}
            type="email"
            id="email"
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-div-input">
          <label htmlFor="password">Password: </label>
          <input
            {...register('password', {required: true, minLength: 8})}
            type="password"
            id="email"
          />
          {errors.password&& <span>This field is required</span>}
        </div>
        <div className="form-div-input">
          <label htmlFor="phone">Phone: </label>
          <input
            {...register('phone', {required: true, minLength: 4})}
            type="tel"
            id="phone"
          />
          {errors.phone && <span>This field is required</span>}
        </div>
        <div className="form-div-input">
          <label htmlFor="address">Address: </label>
          <input
            {...register('address', {required: true, minLength: 4})}
            type="text"
            id="address"
          />
          {errors.address && <span>This field is required</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default UserRegister;