import styles from "./ButtonForm.module.sass";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonForm = ({ children, ...props }: Props) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
