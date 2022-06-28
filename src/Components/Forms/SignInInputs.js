import { async } from "@firebase/util";
import React, { Component, useState, useRef } from "react";
import { createUser } from "../../firebase";
import "../../Styles/Login.css";

export default function SignInInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ref_email = useRef();
  const ref_password = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      setError("Conta criada.");
      ref_email.current.value = "";
      ref_password.current.value = "";
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className='pb-3'>Registar</h3>
      <div className='pb-3'>{error}</div>
      <div className='mb-3'>
        <input ref={ref_email} onChange={(e) => setEmail(e.target.value)} type='email' className='form-control' placeholder='Email' />
      </div>
      <div className='mb-3'>
        <input
          ref={ref_password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          className='form-control'
          placeholder='Password'
        />
      </div>
      <div className='d-grid'>
        <button type='submit' className='btn btn-primary button-control'>
          Criar Conta
        </button>
      </div>
    </form>
  );
}
