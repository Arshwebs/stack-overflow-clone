import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  console.log(params);
  return <div>Profile</div>;
}

export default Profile;