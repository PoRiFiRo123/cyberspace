import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import styles from "@/styles/SubGovernance.module.css";

const RiskManagement = () => {
  const router = useRouter();

  const tabs = [
    { label: "Policies and Frameworks", path: "/governance/policies-frameworks" },
    { label: "Risk Management", path: "/governance/risk-management" },
    { label: "Incident Response", path: "/governance/incident-response" }
  ];

  const reorderedTabs = tabs.sort((a, b) =>
    a.path === "/governance/risk-management" ? -1 : b.path === "/governance/risk-management" ? 1 : 0
  );

  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />

      <main className={styles.content}>
        <h2 className={styles.title} onClick={() => router.push("/governance")}>
          Governance and Policies
        </h2>

        <div className={styles.navTabs}>
          {reorderedTabs.map((tab) => (
            <button
              key={tab.path}
              className={tab.path === "/governance/risk-management" ? styles.activeTab : styles.inactiveTab}
              onClick={() => router.push(tab.path)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.scrollableBox}>
          <p><strong>How does the organization assess cybersecurity risks?</strong></p>
          <p><strong>What risk mitigation strategies are in place?</strong></p>
          <p><strong>How are risks continuously monitored?</strong></p>
        </div>
      </main>
    </div>
  );
};

export default RiskManagement;
