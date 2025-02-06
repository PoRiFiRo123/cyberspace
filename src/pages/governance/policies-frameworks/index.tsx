import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import styles from "@/styles/SubGovernance.module.css";

const PoliciesFrameworks = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />

      <main className={styles.content}>
        {/* Clickable Title */}
        <h2 className={styles.title} onClick={() => router.push("/governance")}>
          Governance and Policies
        </h2>

        {/* Navigation Tabs */}
        <div className={styles.navTabs}>
          <button className={styles.activeTab} onClick={() => router.push("/governance/policies-frameworks")}>
            Policies and Frameworks
          </button>
          <button className={styles.inactiveTab} onClick={() => router.push("/governance/risk-management")}>
            Risk Management
          </button>
          <button className={styles.inactiveTab} onClick={() => router.push("/governance/incident-response")}>
            Incident Response
          </button>
        </div>

        {/* Scrollable Content Box */}
        <div className={styles.scrollableBox}>
          <p><strong>What cybersecurity policies and frameworks are currently in place?</strong> (e.g., ISO 27001, NIST, GDPR)</p>
          <p><strong>How often are these policies reviewed and updated?</strong></p>
          <p><strong>Who oversees compliance with these policies?</strong></p>
        </div>
      </main>
    </div>
  );
};

export default PoliciesFrameworks;
