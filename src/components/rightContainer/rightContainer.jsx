import UserPersonalInfo from "./UserpersonalInfo";
import UserAddress from "./userAddress";
import RightContainerHeading from "./rightContainerHeading";

const RightContainer = (props) => {
  const { user, handleRefresh } = props;

  return (
    <>
      <div className="right-container-heading">
        <RightContainerHeading user={user} handleRefresh={handleRefresh} />
      </div>

      <div className="personal-info-container">
        <UserPersonalInfo user={user} />
      </div>

      <div className="address-container">
        <UserAddress user={user} />
      </div>
    </>
  );
};

export default RightContainer;
