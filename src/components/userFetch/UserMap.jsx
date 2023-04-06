import PropTypes from "prop-types"
import LeftContainer from "../leftContainer/leftContainer";
import RightContainer from "../rightContainer/rightContainer";

const UserMap = (props) => {
  const { userDetails, handleRefresh, buttonDisable } = props;
  const userDescriptions = userDetails.results;

  return (
    <>
      {userDescriptions &&
        userDescriptions.map((user) => {
          const { login: { uuid } } = user;

          return (
            <div key={uuid} className="userdata-container">
              <div className="left-container">
                <LeftContainer user={user} />
              </div>

              <div className="right-container">
                <RightContainer user={user} handleRefresh={handleRefresh} buttonDisable={buttonDisable} />
              </div>
            </div>
          );
        })}
    </>
  );
};

UserMap.defaultProps =  {
  handleRefresh: null,
  buttonDisable: false
}

UserMap.propTypes = {
  userDetails : PropTypes.object,
  handleRefresh: PropTypes.func, 
  buttonDisable:PropTypes.bool
}

export default UserMap;
