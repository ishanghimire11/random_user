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

export default UserLogin;