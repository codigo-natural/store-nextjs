"use client";
import { FormEvent, useState } from "react";
import styles from "./NewAccountForm.module.sass";
import { handleCreateUser } from "app/actions";
import { ButtonForm } from "app/components/shared/ButtonForm/ButtonForm";
import { LoaderButtons } from "app/components/shared/Loader/LoaderButtons";

type CustomError = {
  errors: string[];
};

export const NewAccountForm = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrors([]);
    const formData = new FormData(event.currentTarget);
    try {
      await handleCreateUser(formData);
    } catch (error) {
      setErrors((error as CustomError).errors);
    }
  };

  return (
    <div className={styles.NewAccountForm}>
      <h1 className={styles.NewAccountForm__title}>New Account</h1>
      <form className={styles.NewAccountForm__form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Name"
          required
          disabled={loading}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Lastname"
          required
          disabled={loading}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          disabled={loading}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone number"
          pattern="^[0-9]*$"
          disabled={loading}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          disabled={loading}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="re-type password"
          required
          disabled={loading}
        />
        <ButtonForm type="submit" disabled={loading}>
          {loading ? <LoaderButtons /> : "Crear cuenta"}
        </ButtonForm>
      </form>
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => {
            return (
              <p key={index} className={styles.NewAccountForm__error}>
                {error}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
