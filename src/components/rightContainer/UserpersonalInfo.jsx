const UserPersonalInfo = (props) => {
  const { user } = props;
  const {gender, name: { title, first, last }, dob: { age, date }, registered, nat } = user;

  return (
    <>
      <h2>Personal Information</h2>
      <p className="userdata">
        <span className="label">Title</span>
        <span className="label-data">{title}</span>
      </p>
      
      <p className="userdata">
        <span className="label">First Name</span>
        <span className="label-data">{first}</span>
      </p>

      <p className="userdata">
        <span className="label">Last Name</span>
        <span className="label-data">{last}</span>
      </p>

      <p className="userdata">
        <span className="label">Gender</span>
        <span className="user-gender label-data">{gender}</span>
      </p>

      <p className="userdata">
        <span className="label">Date of birth</span>
        <span className="label-data">{date.slice(0, 10)}</span>
      </p>

      <p className="userdata">
        <span className="label">Age</span>
        <span className="label-data">{age}</span>
      </p>

      <p className="userdata">
        <span className="label">Nationality</span>
        <span className="label-data">{nat}</span>
      </p>
      
      <p className="user-joinedDate userdata">
        <span>Joined On </span>
        <span className="label-data">{registered.date.slice(0, 10)}</span>
      </p>
    </>
  );
};

export default UserPersonalInfo;
