import { useContext, useState } from "react";
import { AppContext } from "../../lib/Context";

// Bootstrap Imports
import { Button, Container, Image } from "react-bootstrap";
import { arrowDown, exitIcon, groupIcon } from "../../assets";
import { tabs } from "../../lib/constants";

const Filters = () => {
  const { isMobile } = useContext(AppContext);
  const [joined, setJoined] = useState(false);

  return (
    <Container className="border-md-bottom px-0 py-3 mt-3 d-flex justify-content-between items-center">
      {!isMobile ? (
        <>
          {/* Tabs  */}
          <div>
            <ul className="nav nav-underline">
              {tabs.map((tab) => (
                <li className="nav-item" key={tab.id}>
                  <a
                    className={`nav-link ${tab.active ? "active" : ""}`}
                    aria-current="page"
                    href="#"
                  >
                    {tab.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="d-flex gap-3">
            <button className="p-2 shadow-sm bg-body-secondary rounded border-0">
              Write a Post
              <Image
                src={arrowDown}
                className="bg-body-secondary ms-3"
                style={{ objectFit: "contain" }}
              />
            </button>
            <Button
              variant={`${joined ? "light" : "primary"}`}
              className={`d-flex gap-2 align-items-center ${
                joined ? "bg-body-secondary" : ""
              }`}
              onClick={() => setJoined(!joined)}
            >
              <Image src={joined ? exitIcon : groupIcon} />
              {joined ? "Leave Group" : "Join Group"}
            </Button>
          </div>
        </>
      ) : (
        <div className="px-2 w-100 d-flex align-items-baseline justify-content-between">
          <p className="fs-6 fw-semibold">Posts(368)</p>
          <button className="py-2 px-3 shadow-sm bg-body-secondary rounded border-0">
            Filter: All
            <Image
              src={arrowDown}
              className="bg-body-secondary ms-3"
              style={{ objectFit: "contain" }}
            />
          </button>
        </div>
      )}
    </Container>
  );
};

export default Filters;
