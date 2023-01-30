import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormInput } from "./Form/FormInput";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "store/slice/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/mainSpace");
      })
      .catch(() => console.error);
  };

  return (
    <div className="main">
      <div className="main_content">
        <div className="register_part">
        <FormInput title="Log in" handleClick={handleLogin} />
          <p>if you still don't have an account click on the bottom button</p>
         <div class="alert" role="alert">
    <a href="/signUp" class="alert-link">Register</a>
          </div> 
        </div>
        </div>
      </div>
  );
};

export { Login };
