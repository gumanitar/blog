import styles from "../styles/banner.module.scss";
import bannerImg from "../assets/banner.jpg";
export default function Banner() {
  return <img src={bannerImg} alt="Banner" className={styles.banner} />;
}
