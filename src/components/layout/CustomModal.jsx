import { useContext } from "react";
import { AppContext } from "../../lib/Context";

// Bootstrap components
import { Modal, Button, Image } from "react-bootstrap";
import { cancelLight } from "../../assets";

const CustomModal = ({ children, show }) => {
  const { isMobile, closeModal } = useContext(AppContext);

  return (
    <Modal show={show} centered size="lg">
      <Button
        variant="secondary"
        className="border-0 rounded-full bg-transparent p-0"
        style={{
          position: "absolute",
          top: "-3rem",
          right: 0,
          zIndex: 9999,
        }}
        hidden={isMobile}
        onClick={closeModal}
      >
        <Image src={cancelLight} width={24} height={24} />
      </Button>
      {children}
    </Modal>
  );
};

export default CustomModal;
