import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import styles from "@/styles/SubGovernance.module.css";
import { useState } from "react";

const RiskManagement = () => {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});

  const handleOptionSelect = (question: string, option: string) => {
    setSelectedOptions((prev) => {
      const updatedOptions = { ...prev };
      if (!updatedOptions[question]) {
        updatedOptions[question] = [];
      }
      if (updatedOptions[question].includes(option)) {
        updatedOptions[question] = updatedOptions[question].filter((opt) => opt !== option);
      } else {
        updatedOptions[question].push(option);
      }
      return updatedOptions;
    });
  };

  const questions = [
    {
      text: "How frequently are cybersecurity risks assessed within the organization?",
      options: ["Risks are not formally assessed.", "Risk assessments are conducted annually.", "Risk assessments are conducted semi-annually or quarterly.", "Continuous risk assessment is integrated into operations."]
    },
    {
      text: "Are risks categorized by impact, likelihood, or other factors?",
      options: ["Risks are not categorized.", "Risks are categorized informally or inconsistently.", "Risks are systematically categorized by impact and likelihood.", "Risks are categorized using advanced metrics, including business impact analysis and threat modeling."]
    },
    {
      text: "Is there a risk register or centralized repository for tracking risks?",
      options: ["No risk registers or repository exists.", "Risks are tracked informally using basic tools (e.g., spreadsheets).", "A formal risk register exists but is not regularly updated.", "A centralized, regularly updated risk register is integrated with risk management tools."]
    },
    {
      text: "What tools or methodologies are used for risk assessment?",
      options: ["No specific tools or methodologies are used.", "Basic tools or frameworks (e.g., spreadsheets, simple checklists) are employed.", "Recognized methodologies (e.g., NIST RMF, FAIR, ISO 31000) are applied.", "Advanced tools (e.g., automated risk platforms, AI-driven analytics) and methodologies are fully integrated."]
    },
    {
      text: "How are emerging threats incorporated into the risk management process?",
      options: ["Emerging threats are not considered.", "Emerging threats are considered reactively after incidents occur.", "Threat intelligence feeds and periodic reviews address emerging threats.", "A proactive approach uses real-time threat intelligence and scenario planning."]
    },
    {
      text: "Are risk mitigation strategies prioritized based on business impact?",
      options: ["Mitigation strategies are not prioritized.", "Strategies are prioritized informally without clear criteria.", "Strategies are prioritized using impact assessments and cost-benefit analysis.", "Mitigation is fully prioritized based on detailed business impact analysis and alignment with organizational goals."]
    },
    {
      text: "Is there a budget specifically allocated for cybersecurity risk management?",
      options: ["No budget is allocated for cybersecurity risk management.", "A limited budget is available but insufficient for comprehensive coverage.", "A dedicated budget exists but is subject to annual constraints.", "A robust and flexible budget is allocated, aligned with organizational risk priorities."]
    },
    {
      text: "Are employees trained to recognize and mitigate cybersecurity risks?",
      options: ["Employees receive no training on cybersecurity risks.", "Basic training is provided, but it is infrequent and not role-specific.", "Regular training programs include role-specific content.", "Comprehensive, continuous training is conducted, including real-world simulations and customized modules."]
    },
    {
      text: "How is the effectiveness of risk controls evaluated?",
      options: ["Risk controls are not evaluated for effectiveness.", "Effectiveness is assessed informally or sporadically.", "Regular reviews and audits evaluate the effectiveness of controls.", "Continuous monitoring and metrics-driven evaluation ensure the effectiveness of risk controls."]
    },
    {
      text: "Is there a formal escalation process for high-risk findings?",
      options: ["No escalation process exists for high-risk findings.", "Escalation occurs informally without a documented process.", "A formal process exists but is inconsistently applied.", "A well-defined and consistently followed escalation process ensures timely resolution of high-risk findings."]
    }
  ];

  const tabs = [
    { label: "Policies and Frameworks", path: "/governance/policies-frameworks" },
    { label: "Risk Management", path: "/governance/risk-management" },
    { label: "Incident Response", path: "/governance/incident-response" }
  ];

  const handleSubmit = () => {
    let selectedAnswers = "";

    // Loop through all questions and their selected options
    for (const [question, options] of Object.entries(selectedOptions)) {
      selectedAnswers += `${question}:\n`;
      options.forEach((option, index) => {
        selectedAnswers += `  ${String.fromCharCode(65 + index)}. ${option}\n`;
      });
      selectedAnswers += "\n";
    }

    if (selectedAnswers === "") {
      alert("No options selected.");
    } else {
      alert(`Selected Options:\n\n${selectedAnswers}`);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />

      <main className={styles.content}>
        <h2 className={styles.title} onClick={() => router.push("/governance")}>
          Governance and Policies
        </h2>

        <div className={styles.navTabs}>
          {tabs.map((tab) => (
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
          <ol>
            {questions.map((q, index) => (
              <li key={index}>
                {index + 1}. {q.text}
                <ul className={styles.hiddenList}>
                  {q.options.map((option, optIndex) => (
                    <li key={optIndex}>
                      <label className={styles.optionLabel}>
                        <strong>{String.fromCharCode(65 + optIndex)}.</strong>
                        <input
                          type="checkbox"
                          name={`question-${index}`}
                          value={option}
                          checked={selectedOptions[`question-${index}`]?.includes(option) || false}
                          onChange={() => handleOptionSelect(`question-${index}`, option)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <button className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </main>
    </div>
  );
};

export default RiskManagement;
