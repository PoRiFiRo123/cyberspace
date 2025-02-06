import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Header.module.css";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div
        className={styles.logoContainer}
        onClick={() => router.push("/")}
      >
        <Image src="/icons/logo.svg" alt="Cyber Sense Logo" width={40} height={40} />
        <h1 className={styles.title}>CYBER SENSE</h1>
      </div>
    </header>
  );
};

export default Header;
