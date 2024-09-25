import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className={`container ${styles.page}`}>
      <h1>Villa Lia Online</h1>
    </div>
  );
}
