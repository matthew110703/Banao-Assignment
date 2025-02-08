import { useContext, useState } from "react";
import { AppContext } from "../../lib/Context";

// Bootsrap imports
import { Button, Container, Image } from "react-bootstrap";
import { arrowBack } from "../../assets";

const Hero = () => {
  const { isMobile } = useContext(AppContext);
  const [joined, setJoined] = useState(false);
  return (
    <section>
      <div
        className="w-100 position-relative"
        style={{
          minHeight: isMobile ? "40vh" : "45vh",
          minWidth: "100%",
          backgroundImage: isMobile
            ? "url(/hero-mobile.png)"
            : "url(/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Backdrop */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)",
          }}
        ></div>

        {/* Content */}
        <Container className="mb-lg-5 mb-3  position-absolute bottom-0 start-50 translate-middle">
          <div className="text-white lh-1">
            <p className="fs-2 fw-semibold">Computer Engineering</p>
            <span className="fs-6 fw-lighter">
              142,765 Computer Engineers follow this
            </span>
          </div>
        </Container>
        {/* Action Only for Mobile */}

        {isMobile && (
          <div className="position-absolute top-0 z-1 justify-content-between w-100 p-3 z-1 d-flex">
            <Image src={arrowBack} width={24} height={24} />
            <Button variant="outline-light" onClick={() => setJoined(!joined)}>
              {joined ? "Leave Group" : "Join Group"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
