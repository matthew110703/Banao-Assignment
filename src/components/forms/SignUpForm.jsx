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
              <h4 className="fw-bold">Create Account</h4>
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
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="First Name"
                  className="rounded-0"
                />
                <FormControl
                  type="text"
                  placeholder="Last Name"
                  className="rounded-0"
                />
              </InputGroup>
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

              <FormControl
                type="passsword"
                placeholder="Confirm Password"
                className="rounded-0"
              />

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
                  Create Account
                </Button>
                {isMobile && (
                  <a
                    href="#"
                    style={{ fontSize: "0.9rem" }}
                    onClick={() => setShowModal({ login: true, signup: false })}
                  >
                    or, Sign In
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
                  <span>Sign up with Facebook</span>
                </Button>
                {/* Google  */}
                <Button
                  variant="light"
                  className="border w-100 gap-2 d-flex align-items-center justify-content-center"
                >
                  <Image src={google} width={16} height={16} />
                  <span>Sign up with Google</span>
                </Button>
                {isMobile && (
                  <p
                    className="mt-3 text-center w-75 mx-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                )}
              </div>
            </form>
          </Col>

          {!isMobile && (
            <Col md={6}>
              <p className="text-end " style={{ fontSize: "0.9rem" }}>
                Already have an account?{" "}
                <a
                  href="#"
                  className="fw-semibold text-decoration-none"
                  onClick={() => setShowModal({ login: true, signup: false })}
                >
                  Sign In
                </a>
              </p>
              <Image src="/banner.png" />
              <p className="mt-3" style={{ fontSize: "0.75rem" }}>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </Col>
          )}
        </Row>
      </ModalBody>
    </>
  );
};

export default SignUpForm;
