import { Link } from "react-router-dom";
import "./topbar.css";
import {useContext} from "react";
import { Context } from "../../context/Context";


export default function Topbar() {
  const {user, dispatch}=useContext(Context);
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className="top">
      
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <span>Hello, {user.name}</span>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      
      </div>
    </div>
  );
}
