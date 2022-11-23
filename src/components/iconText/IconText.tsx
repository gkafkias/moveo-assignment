import Image from "next/image";
import styles from "./IconText.module.css";

type Props = {
  icon: any;
  iconSize?: number;
  text: string;
};

export const IconText = (props: Props) => {
  const { icon, iconSize = 16, text } = props;

  return (
    <div className={styles.container}>
      <Image width={iconSize} height={iconSize} src={icon} alt="icon" />
      <div className={styles.text}>{text}</div>
    </div>
  );
};
