import React from "react";
import Logo from "./Img/Logo.svg?react";
import Loading from "../Components/Loading";
import styles from "./LoadingScreen.module.css";
import { useNavigate } from "react-router-dom";

const LoadingScreen = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/home");
  }, 4000);
  return (
    <div className={styles.container}>
      <Logo />
      <p>Preparando seu painel financeiro. Quase lá!</p>
      <Loading animate="pulse" />
    </div>
  );
};

export default LoadingScreen;
