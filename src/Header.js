import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PeopleIcon from "@material-ui/icons/People";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1613887149~hmac=876a0fd8cc12607759b2e9d190522aad"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>{" "}
      </div>{" "}
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={PeopleIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notification" Icon={NotificationsIcon} />
        <HeaderOption
          title="me"
          avatar="https://scontent.fdac37-1.fna.fbcdn.net/v/t1.0-9/150094741_10215272710129463_3678105310006621486_o.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_ohc=Ee3zMy8nIH4AX_Y3Kh7&_nc_ht=scontent.fdac37-1.fna&oh=fe823a4b1ebadea8297b31854e0d1abb&oe=605666AB"
        />
      </div>
    </div>
  );
}

export default Header;
