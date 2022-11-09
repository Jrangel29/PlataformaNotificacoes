import { async } from "@firebase/util";
import React, { Component, useState } from "react";
import { resetPassword } from "../../firebase";
import "../../Styles/Login.css";
import { logOut } from "../../firebase";

export default function LogoutBtn() {
  

  return (
    <>
      <div className="d-grid">
        <button onClick={logOut} type="submit" className="btn btn-danger button-control botaoSessao">
          Terminar sessão
        </button>
      </div>
    </>
  );
}
