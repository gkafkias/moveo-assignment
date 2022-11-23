import styles from "./Button.module.css";

type Props = {
  title: string;
};

export const Button = ({ title }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.content}>{title}</h1>
    </div>
  );
};
