import PropTypes from "prop-types"

const UserAddress = (props) => {
    const { user } = props
    const {
        location:{city, state, country, postcode, street:{number,name}},
      } = user;
  return (
    <>
      <h2>Address</h2>
      <p className="userdata">
        <span className="label">Street</span>
        <span className="label-data">
          {number} {name}
        </span>
      </p>

      <p className="userdata">
        <span className="label">City</span>
        <span className="label-data">{city}</span>
      </p>

      <p className="userdata">
        <span className="label">State</span>
        <span className="label-data">{state}</span>
      </p>

      <p className="userdata">
        <span className="label">Country</span>
        <span className="label-data">{country}</span>
      </p>
      
      <p className="userdata">
        <span className="label">Postcode</span>
        <span className="label-data">{postcode}</span>
      </p>
    </>
  );
};

UserAddress.defaultProps = {
  city: "Kathmandu",
  state: "Bagmati",
  country: "Nepal",
  postcode:"44600",
  number: 9,
  name: "Kageshwori manahara"
}

UserAddress.propTypes = {
  user: PropTypes.object,
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string,
  postcode: PropTypes.string,
  number: PropTypes.number,
  name: PropTypes.string
}

export default UserAddress;
