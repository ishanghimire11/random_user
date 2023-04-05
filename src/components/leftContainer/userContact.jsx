const UserContact = (props) => {
  const { user } = props;
  const {phone, email, cell} = user

  return (
    <>
      <h2>Contact</h2>
      <p className="userdata">Email: {email}</p>
      <p className="userdata">Phone: +{phone}</p>
      <p className="userdata">Cell: +{cell}</p>
    </>
  );
};

export default UserContact;