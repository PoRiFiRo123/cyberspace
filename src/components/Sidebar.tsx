import { useRouter } from "next/router";
import Image from "next/image";
import styles from "@/styles/Sidebar.module.css";

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { name: "Governance", path: "/governance", icon: "/icons/governance.svg" },
    { name: "Technical", path: "/technical", icon: "/icons/technical.svg" },
    { name: "Data Security", path: "/data-security", icon: "/icons/data-security.svg" },
    { name: "Access Control", path: "/access-control", icon: "/icons/access-control.svg" },
    { name: "Threat Detection", path: "/threat-detection", icon: "/icons/threat-detection.svg" },
    { name: "Training", path: "/training-awareness", icon: "/icons/training-awareness.svg" },
  ];

  return (
    <aside className={styles.sidebar}>
      {menuItems.map((item) => (
        <div
          key={item.name}
          className={`${styles.menuItem} ${router.pathname.startsWith(item.path) ? styles.active : ""}`}
          onClick={() => router.push(item.path)}
        >
          <Image src={item.icon} alt={item.name} width={30} height={30} />
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
