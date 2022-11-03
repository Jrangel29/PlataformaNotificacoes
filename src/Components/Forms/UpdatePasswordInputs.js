import { async } from "@firebase/util";
import React, { Component, useState } from "react";
import { resetPassword } from "../../firebase";
import "../../Styles/Login.css";

export default function UpdatePasswordInputs() {
  const [inputs, setInputs] = useState({});

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const result = await resetPassword(
        inputs.oldpassword,
        inputs.newpassword,
        inputs.confirmnewpassword
      );
      if (result) {
        setInputs({});
        setMessage("Palavras-passe atualizada com sucesso.");
      }
    } catch (e) {
      setMessage(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="pb-3">Alterar Palavra-Passe</h3>
      <div className="pb-3">{message}</div>
      <div className="mb-3">
        <input
          onChange={handleChange}
          type="password"
          className="form-control"
          placeholder="Palavra-passe atual"
          name="oldpassword"
          value={inputs.oldpassword || ""}
        />
      </div>
      <hr></hr>
      <div className="mb-3">
        <input
          onChange={handleChange}
          type="password"
          className="form-control"
          placeholder="Nova palavra-passe"
          name="newpassword"
          value={inputs.newpassword || ""}
        />
      </div>
      <div className="mb-3">
        <input
          onChange={handleChange}
          type="password"
          className="form-control"
          placeholder="Confirmar nova palavra-passe"
          name="confirmnewpassword"
          value={inputs.confirmnewpassword || ""}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary button-control">
          Confirmar
        </button>
      </div>
    </form>
  );
}
