import { createContext, useState, useEffect, useMemo } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [showModal, setShowModal] = useState({
    login: false,
    signup: isMobile || false,
  });
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);

    window.addEventListener("resize", handleResize);
    handleResize(); // Ensure correct initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openModal = (modalType) => {
    setShowModal({ ...showModal, [modalType]: true });
  };

  const closeModal = () => {
    setShowModal({ login: false, signup: false });
  };

  const contextValue = useMemo(
    () => ({
      isMobile,
      openModal,
      closeModal,
      modal: showModal,
      setShowModal,
      isLogined,
      setIsLogined,
    }),
    [isMobile, openModal, closeModal, showModal, isLogined, setIsLogined]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
