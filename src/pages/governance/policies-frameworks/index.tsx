import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import styles from "@/styles/SubGovernance.module.css";
import { useState } from "react";

const PoliciesFrameworks = () => {
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

  const questions = [
    {
      text: "Which cybersecurity frameworks (e.g., NIST CSF, COBIT, CIS Controls) are implemented?",
      options: ["No frameworks are implemented.", "One framework is partially implemented.", "Multiple frameworks are implemented but not fully integrated.", "Comprehensive implementation and integration of multiple frameworks."]
    },
    {
      text: "Are policies aligned with legal requirements such as GDPR, CCPA, or HIPAA?",
      options: ["No alignment with legal requirements.", "Basic alignment exists, but gaps remain in compliance.", "Most requirements are met, with periodic reviews to ensure compliance.", "Fully aligned with all applicable regulations, with regular audits and updates."]
    },
    {
      text: "What is the process for adopting new frameworks or adapting to evolving regulations?",
      options: ["No formal process for adopting frameworks or regulations.", "Ad hoc adoption based on immediate needs or external pressures.", "A defined process exists but is not consistently followed.", "A formal, well-documented process ensures timely adoption and adaptation."]
    },
    {
      text: "How is adherence to cybersecurity frameworks audited?",
      options: ["No auditing of adherence to frameworks.", "Audits are conducted informally or sporadically.", "Regular audits are conducted by internal teams.", "Independent audits are performed regularly, with actionable recommendations."]
    },
    {
      text: "Are there policies for mobile device management and BYOD (Bring Your Own Device)?",
      options: ["No policies exist for mobile devices or BYOD.", "Basic policies exist but lack enforcement mechanisms.", "Comprehensive policies are in place but only partially enforced.", "Well-defined policies are enforced with tools like MDM solutions and regular audits."]
    },
    {
      text: "Is there a formal process to decommission outdated policies?",
      options: ["No process for decommissioning outdated policies.", "Policies are retired informally, without clear documentation.", "A formal process exists but is inconsistently followed.", "A robust, documented process ensures timely and thorough decommissioning."]
    },
    {
      text: "How are framework updates or changes communicated across the organization?",
      options: ["Updates or changes are not communicated to employees.", "Changes are communicated informally, without structured channels.", "Updates are shared via official channels but lack training or follow-ups.", "Updates are communicated through structured channels, training sessions, and regular briefings."]
    },
    {
      text: "Are policies integrated with enterprise-wide risk management processes?",
      options: ["Policies are not integrated with risk management processes.", "Partial integration exists, but silos remain between teams.", "Policies are mostly integrated with periodic reviews.", "Policies are fully integrated with risk management, including real-time updates and reporting."]
    },
    {
      text: "Is policy enforcement automated, or does it rely on manual oversight?",
      options: ["Policy enforcement is entirely manual.", "Enforcement is partially automated with significant manual intervention.", "Automation is implemented for key policies, with manual oversight for exceptions.", "Policy enforcement is fully automated, with advanced tools ensuring compliance."]
    },
    {
      text: "How are exemptions or exceptions to policies handled and documented?",
      options: ["No process exists for handling exemptions or exceptions.", "Exemptions are handled informally, with limited documentation.", "A formal process exists but is inconsistently applied.", "A well-documented process ensures transparency and accountability for all exemptions."]
    }
  ];

  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />

      <main className={styles.content}>
        <h2 className={styles.title} onClick={() => router.push("/governance")}>
          Governance and Policies
        </h2>

        <div className={styles.navTabs}>
          <button className={styles.activeTab}>Policies and Frameworks</button>
          <button className={styles.inactiveTab} onClick={() => router.push("/governance/risk-management")}>
            Risk Management
          </button>
          <button className={styles.inactiveTab} onClick={() => router.push("/governance/incident-response")}>
            Incident Response
          </button>
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
                        <strong>{String.fromCharCode(65 + optIndex)}.</strong> {/* Convert 0 → A, 1 → B, etc. */}
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

export default PoliciesFrameworks;
