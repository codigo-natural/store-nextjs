"use client";

import { handleLogin } from "app/actions";
import styles from "./LoginForm.module.sass";
import { FormEvent, useState } from "react";
import { LoaderButtons } from "../shared/Loader/LoaderButtons";
import { ButtonForm } from "../shared/ButtonForm/ButtonForm";

export const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    try {
      await handleLogin(formData);
    } catch (error) {
      console.log("Login Error:", error);
    }
  };

  return (
    <div className={styles.NewAccountForm}>
      <h1 className={styles.NewAccountForm__title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.NewAccountForm__form}>
        <input
          type="text"
          name="email"
          placeholder="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <input type="password" name="password" placeholder="password" />
        <ButtonForm type="submit" disabled={isLoading}>
          {isLoading ? <LoaderButtons /> : "Login"}
        </ButtonForm>
      </form>
    </div>
  );
};
