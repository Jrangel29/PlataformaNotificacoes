import { async } from "@firebase/util";
import React, { Component, useState } from "react";
import { login } from "../../firebase";
import "../../Styles/Login.css";

export default function LoginInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
    } catch (e) {
      setError("Informações inválidas.");
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className='pb-3'>OverTV — Plataforma de Notificações</h3>
      <div className='pb-3'>{error}</div>
      <div className='mb-3'>
        <input onChange={(e) => setEmail(e.target.value)} type='email' className='form-control' placeholder='Email' />
      </div>
      <div className='mb-3'>
        <input onChange={(e) => setPassword(e.target.value)} type='password' className='form-control' placeholder='Password' />
      </div>
      <div className='d-grid'>
        <button type='submit' className='btn btn-primary button-control'>
          Iniciar Sessão
        </button>
      </div>
    </form>
  );
}
