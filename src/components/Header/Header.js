
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import {useDispatch} from 'react-redux'
import {removeUser} from 'store/slice/userSlice'


function Header() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  const navigate = useNavigate();


  
  return isAuth ? (
        <div className="movies__filtration">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" width='120'height='40' />

          <button onClick={() => dispatch(removeUser())} class="btn btn-primary">
            Log out from {email}
          </button>
        </div> 
  ) : (
    navigate('/')
  )
}

export default Header;
