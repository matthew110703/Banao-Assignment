import { useState } from "react";
import { Button } from "react-bootstrap";

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <Button
      size="sm"
      variant="light"
      className="rounded-pill bg-body-secondary px-3 py-1"
      onClick={() => setIsFollowing(!isFollowing)}
    >
      {isFollowing ? "Following" : "Follow"}
    </Button>
  );
};

export default FollowButton;
