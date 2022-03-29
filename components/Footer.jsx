import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" objectFit='cover'/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            WE MADE THE BEST FOOD FOR YOU, WE WILL MAKE YOU SMILE.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR LOCATIONS</h1>
          <p className={styles.text}>
            1996 R. Max Road #305.
            <br /> NewYork, 85022
            <br /> (602) 398-1024
          </p>
          <p className={styles.text}>
            1364 M. Erwin St #107.
            <br /> NewYork, 85022
            <br /> (602) 398-1023
          </p>
          <p className={styles.text}>
            1654 W. Caroll St #206.
            <br /> NewYork, 85022
            <br /> (602) 398-1022
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 21:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11:30 - 23:30
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;