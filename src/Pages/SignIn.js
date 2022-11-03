import React from "react";
import "../Styles/Login.css";
import SignInInputs from "../Components/Forms/SignInInputs";
import Navbar from "../Components/Geral/Navbar";
//import axios from 'axios';
import lapis from "../Images/Lapis.svg";
import historico from "../Images/Historico.svg";
import event from "../Images/Event.svg";
import pessoas from "../Images/Pessoas.svg";
import rotina from "../Images/Rotina.svg";
import house from "../Images/House.svg";
import sino from "../Images/Sino.svg";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  /*api() {
        const ola = 'https://geo-navsafety.ua.pt:81/localFigueira';
        const batatas = '997b0ec3-81df-4263-84c6-e5c67b9cc407';

        axios.default.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        axios.get(ola, {
            
        }).then((response) => {
            console.warn(response.data);
        })
    }*/

  render() {
    return (
      <div className="mainBody container">
        <Navbar />
        <div className="login-page">
          <div className="login-form">
            <SignInInputs />
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
