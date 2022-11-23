import { User } from "../../interfaces/user";
import { InfoCard } from "../infoCard/InfoCard";
import styles from "./ProfileCard.module.css";

interface Props extends User {}

export const ProfileCard = (props: Props) => {
  const { avatar } = props;
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${avatar})`,
      }}
    >
      <div className={styles.infoContainer}>
        <InfoCard {...props} />
      </div>
    </div>
  );
};
