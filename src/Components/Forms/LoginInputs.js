import React, { Component } from "react";
import "../../Styles/Login.css";

export default class LoginInputs extends Component {
  render() {
    return (
      <form>
        <h3 className='pb-3'>OverTV — Plataforma de Notificações</h3>
        <div className='mb-3'>
          <input type='email' className='form-control' placeholder='Email' />
        </div>
        <div className='mb-3'>
          <input type='password' className='form-control' placeholder='Password' />
        </div>
        <div className='d-grid'>
          <button type='submit' className='btn btn-primary button-control'>
            Iniciar Sessão
          </button>
        </div>
      </form>
    );
  }
}
