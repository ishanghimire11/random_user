import { useState } from "react";

const RightContainerHeading = (props) => {
  const { user, handleRefresh } = props;
  const { name: { first, last } } = user;
  
  return (
    <>
      <p className="user-fullname">
        {first} {last}
      </p>

      <div>
        <button onClick={handleRefresh} id="refresh-button">
          + Get new user
        </button>
      </div>
    </>
  );
};

export default RightContainerHeading;
