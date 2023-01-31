import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "store/slice/userSlice";
import { FormInput } from "./Form/FormInput";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/MovieSpace-Project");
      })
      .catch(console.error);
  };

  return (
    <div className="main">
      <div className="main_content">
        <div>
          <FormInput title="Register" handleClick={handleRegister} />
          <div class="alert" role="alert">
            <a href="/" class="alert-link">
              I have an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SignUp };
