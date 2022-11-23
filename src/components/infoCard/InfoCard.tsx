import { CalendarIcon, EmailIcon, LocationIcon } from "../../assets";
import { User } from "../../interfaces/user";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";
import { IconText } from "../iconText/IconText";
import styles from "./InfoCard.module.css";

interface Props extends Omit<User, "avatar"> {}

export const InfoCard = (props: Props) => {
  const { name, email, location, date } = props;

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1 className={styles.title}>{name}</h1>
        <Badge />
      </div>
      <hr />
      <div className={styles.infoContainer}>
        <IconText icon={EmailIcon} text={email} />
        <IconText icon={LocationIcon} text={location} />
        <IconText icon={CalendarIcon} text={date} />
      </div>
      <div className={styles.buttonContainer}>
        <Button title="Contact" />
      </div>
    </div>
  );
};
