import PropTypes from "prop-types"

const UserLogin = (props) => {
    const { user } = props
    const {login: {username, password}} = user
  return (
    <>
      <h2 className="login-label">Login </h2>
      <p className="userdata">Username: {username}</p>
      <p className="userdata">Password: {password}</p>
    </>
  );
};

UserLogin.defaultProps = {
  username: "HolyGrail",
  password: "12345678"
}

UserLogin.propTypes = {
  user: PropTypes.object,
  username: PropTypes.string,
  password: PropTypes.string
}


export default UserLogin;