import { FaRankingStar } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { ImRoad } from "react-icons/im";
import { BiCalendarExclamation } from "react-icons/bi";
import { NavbarContainer, LeftItems, RightItems, MyLink } from "./NarbarStyles";
import { IoMdHome } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <NavbarContainer>
        <LeftItems>
          <p>
            <IoMdHome />
            <MyLink to="/">HOME</MyLink>
          </p>
          <p>
            <FaRankingStar />
            <MyLink to="/your-standing">YOUR STANDINGS</MyLink>
          </p>
          <p>
            <FaTrophy />
            <MyLink to="/champions">CHAMPIONS</MyLink>
          </p>
          <p>
            <RiTeamLine />
            <MyLink to="/team-champs">TEAM CHAMPS</MyLink>
          </p>
          <p>
            <FaShoppingCart />
            <MyLink to="/shop">SHOP</MyLink>
          </p>
          <p>
            <ImRoad />
            <MyLink to="/practice-tracks">PRACTICE TRACKS</MyLink>
          </p>
        </LeftItems>

        <RightItems>
          <p>
            <BiCalendarExclamation />
            <MyLink to="/challenges">CHALLENGES</MyLink>
          </p>
        </RightItems>
      </NavbarContainer>
    </>
  );
}
