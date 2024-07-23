import { FaRankingStar } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { ImRoad } from "react-icons/im";
import { BiCalendarExclamation } from "react-icons/bi";
import { NavbarContainer, LeftItems, MyLink } from "./NarbarStyles";
import { IoMdHome } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <NavbarContainer>
        <LeftItems>
          <p>
            <MyLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              <IoMdHome /> HOME
            </MyLink>
          </p>
          <p>
            <MyLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/your-standing"
            >
              <FaRankingStar /> YOUR STANDINGS
            </MyLink>
          </p>
          <p>
            <MyLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/champions"
            >
              <FaTrophy /> CHAMPIONS
            </MyLink>
          </p>
          <p>
            <MyLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/team-champs"
            >
              <RiTeamLine /> TEAM CHAMPS
            </MyLink>
          </p>
          <p>
            <MyLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/shop"
            >
              <FaShoppingCart /> SHOP
            </MyLink>
          </p>
          <p>
            <MyLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/practice-tracks"
            >
              <ImRoad /> PRACTICE TRACKS
            </MyLink>
          </p>
          <p>
            <MyLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/challenges"
            >
              <BiCalendarExclamation /> CHALLENGES
            </MyLink>
          </p>

          <p>
            <MyLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/pitstop"
            >
              <BiCalendarExclamation /> PITSTOP
            </MyLink>
          </p>
        </LeftItems>
      </NavbarContainer>
    </>
  );
}
