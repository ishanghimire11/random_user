import PropTypes from "prop-types"
import UserPersonalInfo from "./UserpersonalInfo";
import UserAddress from "./userAddress";
import RightContainerHeading from "./rightContainerHeading";

const RightContainer = (props) => {
  const { user, handleRefresh, buttonDisable} = props;

  return (
    <>
      <div className="right-container-heading">
        <RightContainerHeading user={user} handleRefresh={handleRefresh} buttonDisable={buttonDisable} />
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

RightContainer.defaultProps = {
  handleRefresh: null,
  buttonDisable: false
} 

RightContainer.propTypes = {
  user: PropTypes.object,
  handleRefresh: PropTypes.func
}



export default RightContainer;
