import { useContext } from "react";
import { AppContext } from "../../lib/Context";

// Bootstrap imports
import {
  Button,
  Alert,
  Row,
  Col,
  ModalBody,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";
import { cancelDark, facebook, google, visibilityIcon } from "../../assets";

const SignUpForm = () => {
  const { isMobile, setShowModal, closeModal, setIsLogined } =
    useContext(AppContext);

  return (
    <>
      {!isMobile && (
        <Alert
          variant="success"
          className="text-success fw-semibold text-center"
        >
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </Alert>
      )}

      <ModalBody>
        <Row>
          <Col lg={6} className="px-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <h4 className="fw-bold">
                {isMobile ? "Sign In" : "Welcome Back!"}
              </h4>
              <Button
                variant="secondary"
                className="border-0 rounded-full bg-transparent p-0"
                hidden={!isMobile}
                onClick={closeModal}
              >
                <Image src={cancelDark} width={24} height={24} />
              </Button>
            </div>

            <form className="mt-4 d-flex flex-column gap-1">
              <FormControl
                type="email"
                placeholder="Email"
                className="rounded-0"
              />

              <InputGroup>
                <FormControl
                  type="password"
                  placeholder="Password"
                  className="rounded-0"
                />
                <InputGroup.Text>
                  <Image src={visibilityIcon} />
                </InputGroup.Text>
              </InputGroup>

              {/* Actions  */}
              {/* Submit */}
              <div className="mt-3 d-flex justify-content-between align-items-center">
                <Button
                  variant="primary"
                  type="submit"
                  className={`rounded-pill ${!isMobile ? "w-100" : "w-50"} p-2`}
                  onClick={() => {
                    setIsLogined(true);
                    closeModal();
                  }}
                >
                  Sign In
                </Button>
                {isMobile && (
                  <a
                    href="#"
                    style={{ fontSize: "0.9rem" }}
                    onClick={() => setShowModal({ login: false, signup: true })}
                  >
                    or, Create Account
                  </a>
                )}
              </div>

              {/* OAuth */}
              <div className="d-flex flex-column gap-2 mt-4">
                {/* Facebook  */}
                <Button
                  variant="light"
                  className="border w-100 gap-2 d-flex align-items-center justify-content-center"
                >
                  <Image src={facebook} width={16} height={16} />
                  <span>Sign in with Facebook</span>
                </Button>
                {/* Google  */}
                <Button
                  variant="light"
                  className="border w-100 gap-2 d-flex align-items-center justify-content-center"
                >
                  <Image src={google} width={16} height={16} />
                  <span>Sign in with Google</span>
                </Button>
                <a
                  href="#"
                  className="text-decoration-none mt-3 text-center text-dark w-75 mx-auto fw-semibold"
                  style={{ fontSize: "0.85rem" }}
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </Col>

          {!isMobile && (
            <Col md={6}>
              <p className="text-end " style={{ fontSize: "0.9rem" }}>
                Don't have an account yet?{" "}
                <a
                  href="#"
                  className="fw-semibold text-decoration-none"
                  onClick={() => setShowModal({ login: false, signup: true })}
                >
                  Create new for free!
                </a>
              </p>
              <Image src="/banner.png" />
            </Col>
          )}
        </Row>
      </ModalBody>
    </>
  );
};

export default SignUpForm;
