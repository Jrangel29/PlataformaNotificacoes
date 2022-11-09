import React from "react";
import "../Styles/Login.css";
import UpdatePasswordInputs from "../Components/Forms/UpdatePasswordInputs";
import LogoutBtn from "../Components/Forms/Logout";
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

class UpdatePassword extends React.Component {
  render() {
    return (
      <div>
        <div className="mainBodyForm container p-0">
          <Navbar />
          <div className="login-page">
            <div className="login-form vertical">
              <UpdatePasswordInputs />
            </div>
            <div className="login-form">
              <LogoutBtn/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdatePassword;
