import { Image } from "react-bootstrap";
import FollowButton from "./FollowButton";

const GroupCard = ({ name, image }) => {
  return (
    <div className="d-flex justify-content-between border-0 align-items-center">
      <div className="d-flex gap-2 align-items-center">
        <Image src={image} width={36} height={36} />
        <span>{name}</span>
      </div>
      <FollowButton />
    </div>
  );
};

export default GroupCard;
