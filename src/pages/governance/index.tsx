import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import styles from "@/styles/Governance.module.css";

const Governance = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />

      <main className={styles.content}>
        <h2 className={styles.title}>Governance and Policies</h2>

        <div className={styles.grid}>
          <button className={`${styles.box} ${styles.left}`} onClick={() => router.push("/governance/policies-frameworks")}>
            Policies and Frameworks
          </button>

          <button className={`${styles.box} ${styles.center}`} onClick={() => router.push("/governance/risk-management")}>
            Risk Management
          </button>

          <button className={`${styles.box} ${styles.right}`} onClick={() => router.push("/governance/incident-response")}>
            Incident Response
          </button>
        </div>
      </main>
    </div>
  );
};

export default Governance;
