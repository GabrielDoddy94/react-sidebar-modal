import { FaBars } from "react-icons/fa";

import { useGlobalContext } from "./context";

export function Home() {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
}
