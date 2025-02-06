import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* First row: 4 items */}
          <button className={styles.card} onClick={() => router.push("/governance")}>
            <Image src="/icons/governance.svg" alt="Governance" width={55} height={55} />
            <p>Governance and Policies</p>
          </button>

          <button className={styles.card} onClick={() => router.push("/technical")}>
            <Image src="/icons/technical.svg" alt="Technical" width={55} height={55} />
            <p>Technical</p>
          </button>

          <button className={styles.card} onClick={() => router.push("/data-security")}>
            <Image src="/icons/data-security.svg" alt="Data Security" width={55} height={55} />
            <p>Data Security</p>
          </button>

          <button className={styles.card} onClick={() => router.push("/access-control")}>
            <Image src="/icons/access-control.svg" alt="Access Control" width={55} height={55} />
            <p>Access Control</p>
          </button>

          {/* Second row: Threat Detection below Technical */}
          <button className={styles.card} onClick={() => router.push("/threat-detection")}>
            <Image src="/icons/threat-detection.svg" alt="Threat Detection" width={55} height={55} />
            <p>Threat Detection</p>
          </button>

          {/* Second row: Training Awareness below Data Security */}
          <button className={styles.card} onClick={() => router.push("/training-awareness")}>
            <Image src="/icons/training-awareness.svg" alt="Training" width={55} height={55} />
            <p>Training and Awareness</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
