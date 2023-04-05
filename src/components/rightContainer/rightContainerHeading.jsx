import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faPlus} /> Get new user
        </button>
      </div>
    </>
  );
};

export default RightContainerHeading;
