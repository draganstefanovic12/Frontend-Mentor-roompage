import logo from "../assets/logo.svg";
import mobileBar from "../assets/icon-hamburger.svg";

export const Nav = () => {
  return (
    <nav className="nav">
      <img className="hmg" src={mobileBar} alt="hmg" />
      <img className="logo" src={logo} alt="logo" />
      <a href="/">home</a>
      <a href="/">shop</a>
      <a href="/">about</a>
      <a href="/">contact</a>
    </nav>
  );
};
