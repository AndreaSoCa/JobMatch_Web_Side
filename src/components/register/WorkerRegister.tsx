import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './workerRegister.css'
import { Link } from 'react-router-dom';
import { registerWorker } from '../../services/worker-service'

type Inputs = {
  name: string
  lastName: string
  email: string
  password: string
  phone: string
  address: string
  profile_pic: FileList
}

const WorkerRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    registerWorker(data);
    console.log(data);
  };

  return (
    <div>
      <h2>Registro de Trabajador</h2>
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
        <div className="form-div-input">
          <label htmlFor="image">Imagen de Perfil: </label>
          <input
            {...register('image', { required: true })}
            type="file"
            id="image"
          />
          {errors.image && <span>Este campo es requerido</span>}
        </div>
        <button type="submit">Register</button>
      </form>
  </div>
  );
};

export default WorkerRegistrationForm;
