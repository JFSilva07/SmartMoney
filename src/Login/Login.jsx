import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./Login.module.css";
import Logo from "./Img/Logo.svg?react";
import LoginIMG from "./Img/LoginIMG.svg?react";
import Entrar from "./Entrar";
import Cadastro from "./Cadastro";

const Login = () => {
  return (
    <div className={`container ${styles.loginContainer}`}>
      <div className="animeLeft">
        <Logo />
        <p>
          O primeiro passo para uma vida financeira organizada é começar.
          <br /> Vamos juntos?
        </p>
        <LoginIMG className={styles.LoginIMG} />
      </div>
      <Routes>
        <Route path="entrar" element={<Entrar />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
};

export default Login;
