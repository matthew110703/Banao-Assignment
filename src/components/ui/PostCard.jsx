import { useContext } from "react";
import { AppContext } from "../../lib/Context";

// bootstrap imports
import { Button, Card, Dropdown, Image } from "react-bootstrap";
import {
  dateIcon,
  locationIcon,
  menuDots,
  orgIcon,
  shareIcon,
  visibilityIcon,
} from "../../assets";

const PostCard = ({
  title,
  description,
  category,
  date,
  location,
  image,
  org,
  splBtn = false,
  btnText,
  btnType,
  user,
  views,
}) => {
  const { isMobile } = useContext(AppContext);

  return (
    <Card>
      <Card.Img variant="top" src={image} style={{ objectFit: "contain" }} />
      <Card.Body>
        <p>{category}</p>
        <header className="d-flex justify-content-between gap-3 position-relative">
          <Card.Title className="fw-bold">{title}</Card.Title>
          {/* Menu Dropdown */}
          <Dropdown drop="start">
            <Dropdown.Toggle
              variant="outline-light"
              id="menu"
              className="dropdown-toggle no-caret p-1"
            >
              <Image src={menuDots} width={28} height={28} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </header>

        {/* Details */}
        <div className={`d-flex flex-wrap ${isMobile ? "gap-2" : "gap-5"}`}>
          {/* Organisation  */}
          {org && (
            <div
              className="d-flex gap-2 align-items-center fw-semibold text-truncate"
              style={{ fontSize: isMobile ? "0.8rem" : "1.125rem" }}
            >
              <Image src={orgIcon} width={20} height={20} />
              {org}
            </div>
          )}
          {/* Date  */}
          {date && (
            <div
              className="d-flex gap-2 align-items-center fw-semibold"
              style={{ fontSize: isMobile ? "0.8rem" : "1.125rem" }}
            >
              <Image src={dateIcon} width={20} height={20} />
              {date}
            </div>
          )}
          {/* Location  */}
          {location && (
            <div
              className="d-flex gap-1 align-items-center fw-semibold"
              style={{ fontSize: isMobile ? "0.8rem" : "1.125rem" }}
            >
              <Image src={locationIcon} width={20} height={20} />
              {location}
            </div>
          )}
        </div>

        <Card.Text className="mt-3 text-truncate">{description}</Card.Text>

        {/* Special Button */}
        {splBtn && (
          <Button
            variant={`outline-${btnType}`}
            size={`${isMobile ? "sm" : "md"}`}
            className="w-100 fw-semibold"
          >
            {btnText}
          </Button>
        )}
      </Card.Body>

      <Card.Footer className="mb-2 border-0 bg-body d-flex justify-content-between align-items-center">
        {/* User  */}
        <div className="d-flex align-items-center gap-2">
          <Image
            src={user.image}
            width={isMobile ? 36 : 48}
            height={isMobile ? 36 : 48}
          />
          <div className="d-flex flex-column lh-sm">
            <span className="fs-6 fw-semibold">{user.name}</span>

            {isMobile && (
              <span style={{ fontSize: "0.85rem" }}>
                {views ? views : "1.4k"} views
              </span>
            )}
          </div>
        </div>

        <aside className="d-flex align-items-center gap-5">
          {/* Views */}
          {!isMobile && (
            <div className="d-flex align-items-center gap-1">
              <Image src={visibilityIcon} width={18} height={18} />
              <span>{views ? views : "1.4k"} views</span>
            </div>
          )}
          {/* Share Button */}
          <button className="d-flex align-items-center btn-sm gap-1 btn btn-light bg-body-secondary shadow-sm">
            <Image src={shareIcon} width={18} height={18} />
            {isMobile && "Share"}
          </button>
        </aside>
      </Card.Footer>
    </Card>
  );
};

export default PostCard;
