import { useState, useContext } from "react";
import { AppContext } from "../../lib/Context";
import { Container, Form, Navbar, Image, InputGroup } from "react-bootstrap";
import {
  arrowDown,
  brandLogo,
  clear,
  searchLogo,
  userIcon,
} from "../../assets";

const Header = () => {
  const [search, setSearch] = useState("");

  // If the screen size is less than or equal to 1024px, the header will not be displayed.
  const { isMobile, openModal, isLogined } = useContext(AppContext);
  if (isMobile) {
    return null;
  }

  return (
    <Navbar className="py-3 px-5">
      <Container fluid>
        {/* Brand Logo */}
        <Navbar.Brand href="#home">
          <Image src={brandLogo} height={24} />
        </Navbar.Brand>

        {/* Search Bar */}
        <Form className="d-flex" style={{ minWidth: "30%" }}>
          <InputGroup
            className="rounded-pill border bg-body-secondary"
            size="md"
          >
            <InputGroup.Text className="border-0 bg-body-secondary rounded-start-pill bg-white">
              <Image src={searchLogo} width={22} height={22} />
            </InputGroup.Text>
            <Form.Control
              className="shadow-none border-0 rounded-end-pill bg-body-secondary"
              placeholder="Search for your favorite groups in ATG"
              aria-label="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <InputGroup.Text
              className="border-0 bg-body-secondary rounded-end-pill bg-white"
              hidden={!search}
              onClick={() => setSearch("")}
            >
              <Image src={clear} width={12} height={12} />
            </InputGroup.Text>
          </InputGroup>
        </Form>

        {!isLogined ? (
          <p className="my-auto" style={{ fontSize: "1rem" }}>
            Create account.{" "}
            <span>
              <strong>
                <a
                  href="#"
                  className="text-decoration-none"
                  onClick={() => openModal("signup")}
                >
                  It's free!
                </a>
              </strong>
            </span>
            <span className="ms-2">
              <Image src={arrowDown} style={{ objectFit: "contain" }} />
            </span>
          </p>
        ) : (
          <button className="d-flex gap-2 align-items-center border-0 bg-transparent">
            <Image src={userIcon} width={36} height={36} />
            <span>Siddharth Goyal</span>
            <span className="ms-2">
              <Image src={arrowDown} style={{ objectFit: "contain" }} />
            </span>
          </button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
