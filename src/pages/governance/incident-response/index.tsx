import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import styles from "@/styles/SubGovernance.module.css";

const IncidentResponse = () => {
  const router = useRouter();

  // Define tab options
  const tabs = [
    { label: "Policies and Frameworks", path: "/governance/policies-frameworks" },
    { label: "Risk Management", path: "/governance/risk-management" },
    { label: "Incident Response", path: "/governance/incident-response" }
  ];

  // Move the selected tab (Incident Response) to the first position
  const reorderedTabs = tabs.sort((a, b) =>
    a.path === "/governance/incident-response" ? -1 : b.path === "/governance/incident-response" ? 1 : 0
  );

  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />

      <main className={styles.content}>
        {/* Clickable Title to navigate back */}
        <h2 className={styles.title} onClick={() => router.push("/governance")}>
          Governance and Policies
        </h2>

        {/* Dynamic Navigation Tabs (Selected tab appears first) */}
        <div className={styles.navTabs}>
          {reorderedTabs.map((tab) => (
            <button
              key={tab.path}
              className={tab.path === "/governance/incident-response" ? styles.activeTab : styles.inactiveTab}
              onClick={() => router.push(tab.path)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Question Box */}
        <div className={styles.scrollableBox}>
          <p><strong>What is the organization's incident response plan?</strong></p>
          <p><strong>How quickly can incidents be detected and mitigated?</strong></p>
          <p><strong>What post-incident analysis is conducted?</strong></p>
        </div>
      </main>
    </div>
  );
};

export default IncidentResponse;
