import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Entrar = () => {
  return (
    <div className={` animeRight ${styles.loginForm} `}>
      <h1>Login</h1>
      <form>
        <Input label="Email" type="email" name="email" />
        <Input label="Senha" type="password" name="senha" />
        <Button>ENTRAR</Button>
      </form>
      <p>Não possui conta? tá esperando oque? </p>
      <Link to="/login/cadastro">Cadastre-se!</Link>
    </div>
  );
};

export default Entrar;
