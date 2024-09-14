import { Collapse, Nav, NavItem, Navbar } from "reactstrap";
import Link from "next/link";
import { links } from "../../../../constants";

import './darkIcon.scss';
import { useContext } from "react";
import { LocalContext } from "@/app/hooks/Context";

export default function DarkIcon({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) {
  const [setItem, getItem] = useContext(LocalContext);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen((prevState: any) => !prevState);
    setItem(!isOpen);
  };
  
  const handleLinkClick = () => {
    setIsOpen(false);
    setItem(isOpen);
  };
  
  return (
    <Navbar expand="md" className={`small ${isOpen ? 'bc-dark' : ''}`}>
      <div className="menuToggle" onClick={toggleMobileMenu}>
        <span className={`${isOpen ? 'close-dark-icon close' : 'hamburger-dark-icon'}`}>
          <label for="icon" />
          <input type="checkbox" id="icon" />
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="menu" navbar>
          {links.map((element, i) => {
            return (isOpen && <NavItem
              onClick={(e) => {
                const target = e.target as Element;
                target && target?.classList.toggle('active');
                handleLinkClick();
              }}
              key={i}>
              <Link href={element.to}>
                {element.name}
              </Link>
            </NavItem>)
          })}
        </Nav>
      </Collapse>
    </Navbar>
  )
}