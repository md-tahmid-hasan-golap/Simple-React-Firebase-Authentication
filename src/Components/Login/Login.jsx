import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleWithGoggle = () => {
    console.log("ok");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Please login</h2>
      <button onClick={handleWithGoggle}>Sign In With Goggle</button>
      {user && (
        <div>
          <h2>{user?.displayName}</h2>
          <h4>{user?.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
