import styles from "./Button.module.css";

type Props = {
  title: string;
};

export const Button = ({ title }: Props) => {
  return (
    <button className={styles.container}>
      <h1 className={styles.content}>{title}</h1>
    </button>
  );
};
