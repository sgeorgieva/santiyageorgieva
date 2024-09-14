import { Collapse, Nav, NavItem, Navbar } from "reactstrap";
import Link from "next/link";
import { links } from "../../../../constants";

import './lightIcon.scss';

export default function LightIcon({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) {
  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen((prevState: any) => !prevState);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Navbar expand="md" className={`small ${isOpen ? 'bc-light' : ''}`}>
      <div className="menuToggle" onClick={toggleMobileMenu}>
        <span className={`${isOpen ? 'close-light-icon close' : 'hamburger-light-icon'}`}>
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