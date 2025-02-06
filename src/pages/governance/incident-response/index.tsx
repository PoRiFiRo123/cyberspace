import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/SubGovernance.module.css";

const IncidentResponse = () => {
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
      text: "Is there a documented incident response plan (IRP) that aligns with industry standards?",
      options: [
        "No incident response plan exists.",
        "A basic IRP exists but does not align with industry standards.",
        "The IRP is documented and aligns with one industry standard (e.g., NIST, ISO).",
        "The IRP is comprehensive, regularly updated, and aligns with multiple standards."
      ]
    },
    {
      text: "Who is responsible for activating and managing the IRP during an incident?",
      options: [
        "No clear roles or responsibilities are defined.",
        "Responsibility lies informally with the IT team or leadership.",
        "Specific individuals or teams are assigned but lack formal documentation.",
        "A dedicated incident response team (IRT) with documented roles is responsible."
      ]
    },
    {
      text: "How often is the IRP reviewed and updated?",
      options: [
        "The IRP is never reviewed or updated.",
        "The IRP is reviewed sporadically or after major incidents.",
        "The IRP is reviewed and updated annually.",
        "The IRP is reviewed quarterly or after every significant change or incident."
      ]
    },
    {
      text: "Are employees trained on their roles and responsibilities during an incident?",
      options: [
        "Employees are not trained on incident response roles.",
        "Limited training is provided to key personnel.",
        "Employees are trained periodically on their roles and responsibilities.",
        "Regular, comprehensive training is provided to all relevant personnel, including simulations."
      ]
    },
    {
      text: "What tools or systems support incident detection, logging, and response?",
      options: [
        "No tools or systems are in place for incident detection or response.",
        "Basic tools (e.g., antivirus or firewalls) are used for incident detection.",
        "Specialized tools (e.g., SIEM, EDR) are used but are not fully integrated.",
        "Advanced, integrated systems with automation capabilities (e.g., SOAR) support incident response."
      ]
    },
    {
      text: "Is there a designated incident response team (IRT) with clear roles?",
      options: [
        "No designated IRT exists.",
        "An informal or ad-hoc team handles incidents.",
        "A designated IRT exists but lacks comprehensive training or role definitions.",
        "A fully trained and well-documented IRT is in place with clear roles and responsibilities."
      ]
    },
    {
      text: "How is information about incidents shared with relevant stakeholders?",
      options: [
        "Incident information is not shared systematically.",
        "Information is shared informally or only with internal teams.",
        "Incident information is shared through established channels but lacks timeliness or consistency.",
        "A structured process ensures timely communication with internal and external stakeholders."
      ]
    },
    {
      text: "Are incidents categorized by severity, and how is escalation handled?",
      options: [
        "Incidents are not categorized or escalated.",
        "Basic categorization exists, but escalation processes are informal.",
        "Incidents are categorized by severity, and escalation follows a documented process.",
        "A comprehensive framework categorizes incidents and ensures prompt escalation based on impact."
      ]
    },
    {
      text: "How are lessons learned from past incidents documented and applied?",
      options: [
        "Lessons learned are not documented.",
        "Some lessons are documented informally but are not consistently applied.",
        "Lessons learned are documented and reviewed periodically for process improvements.",
        "Lessons are systematically documented, reviewed, and incorporated into policies and training."
      ]
    },
    {
      text: "Is there coordination with external agencies (e.g., law enforcement, CERTs) during incidents?",
      options: [
        "No coordination occurs with external agencies during incidents.",
        "Coordination occurs informally and only during major incidents.",
        "Formal relationships exist with external agencies for incident support.",
        "Comprehensive partnerships and predefined protocols guide collaboration with external agencies."
      ]
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
          <button className={styles.inactiveTab} onClick={() => router.push("/governance/policies-frameworks")}>
            Policies and Frameworks
          </button>
          <button className={styles.inactiveTab} onClick={() => router.push("/governance/risk-management")}>
            Risk Management
          </button>
          <button className={styles.activeTab}>Incident Response</button>
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

export default IncidentResponse;
