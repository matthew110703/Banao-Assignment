import { useState, useContext } from "react";
import { AppContext } from "../../lib/Context";

// Bootstrap Imports
import { Button, Form, Image } from "react-bootstrap";
import {
  locationIcon,
  editIcon,
  infoIcon,
  clear,
  thumbUpIcon,
} from "../../assets";
import GroupCard from "../ui/GroupCard";
import { recommendedGroups } from "../../lib/constants";

const Recommended = () => {
  const [location, setLocation] = useState("");
  const [editLocation, setEditLocation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditLocation(false);
  };

  const { isMobile, isLogined } = useContext(AppContext);
  if (isMobile) {
    return null;
  }

  return (
    <section>
      {/* Location  */}
      <div className="p-2 border-bottom d-flex justify-content-between align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center">
            <Image src={locationIcon} width={18} height={18} />
            <Form.Control
              type="text"
              placeholder={
                editLocation ? "Enter your location" : "Your Location"
              }
              className="border-0"
              readOnly={!editLocation}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            />
          </div>
        </form>

        {/* Clear input Button */}
        {editLocation && location && (
          <Button variant="outline-light" onClick={() => setLocation("")}>
            <Image src={clear} width={16} height={16} />
          </Button>
        )}

        {/* Edit Button */}
        <Button
          variant="outline-light"
          hidden={editLocation}
          onClick={() => setEditLocation(true)}
        >
          <Image src={editIcon} width={20} height={20} />
        </Button>
      </div>

      {/* Info  */}
      <div className="mt-4 pt-2 d-flex gap-2 align-items-start">
        <Image
          src={infoIcon}
          width={16}
          height={16}
          style={{ opacity: "50%" }}
        />
        <p className="fw-lighter" style={{ fontSize: "0.8rem" }}>
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>

      {isLogined && (
        <>
          {/* Recommended Groups */}
          <div className="mt-5">
            <div className="d-flex gap-2 align-items-center">
              <Image src={thumbUpIcon} width={18} height={18} />
              <span className="fs-6 text-uppercase">Recommended Groups</span>
            </div>

            {/* Groups  */}
            <div className="mt-4 d-flex flex-column gap-4">
              {recommendedGroups.map((group) => (
                <GroupCard
                  key={group.id}
                  name={group.name}
                  image={group.image}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Recommended;
