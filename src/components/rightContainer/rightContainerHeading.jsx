import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const RightContainerHeading = (props) => {
  const { user, handleRefresh, buttonDisable } = props;
  const { name: { first, last } } = user;
  
  return (
    <>
      <p className="user-fullname">
        {first} {last}
      </p>

      <div>
        <button onClick={handleRefresh} id="refresh-button" type="button" disabled={buttonDisable}>
          <FontAwesomeIcon icon={faPlus} /> Get new user
        </button>
      </div>
    </>
  );
};

RightContainerHeading.defaultProps = {
  first: "Ishan",
  last: "Ghimire",
  buttonDisable: false,
}

RightContainerHeading.propTypes = {
  user: PropTypes.object,
  handleRefresh: PropTypes.func
}

export default RightContainerHeading;
