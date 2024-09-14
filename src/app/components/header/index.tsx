'use client'

import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import AnimatedLink from '../AnimatedLink';
import detectVersion from '../../../../utils/functions';
import LightLogo from '../../../../public/light-logo.svg';
import DarkLogo from '../../../../public/dark-logo.svg';
import LightIcon from '../LightIcon';
import DarkIcon from '../DarkIcon';

import './header.scss';

export default function Header({ classname, isOpen, setIsOpen }: { classname: string, isOpen: boolean, setIsOpen: object }) {
  const isMobile = detectVersion();

  const pathname = usePathname();
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
    const isExistsDarkClass = !!document.querySelector('.bc-dark');
    const isExistsLightClass = !!document.querySelector('.bc-light');
    
    if (isExistsDarkClass || isExistsLightClass) {
      document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
    } else {
      document.getElementsByTagName('html')[0].style.overflowY = 'auto';
    }
  }, [isOpen])
  
  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 50 ? "scrollbar" : "";
    setSticky(stickyClass);
  };

  return (
    <div className={`container-fluid ${classname === 'light-background' ? 'about-header-links' : ''}`}>
      <Row className={`align-items-center ${sticky ? 'scrollbar' : ''} ${!isMobile ? 'pt-30' : ''} ${isMobile && !isOpen && pathname !== '/projects' ? 'pt-30' : ''} ${isMobile && !isOpen && pathname === '/projects' ? 'pt-140' : ''}`}>
        {isMobile ? 
        <div className={`mobile-header-links ${pathname === '/projects' ? 'mb-ps' : '' }`}>
          {(classname === 'dark-background' || classname === 'image-background') && <LightIcon isOpen={isOpen} setIsOpen={setIsOpen} />}
          {classname === 'light-background' && <DarkIcon isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
        : <Col className="text-start">
          <div className="header-links">
            <AnimatedLink href="/projects" hasActiveClass={pathname == '/projects' ? true : false}>projects</AnimatedLink>
            <AnimatedLink href="/about" hasActiveClass={pathname == '/about' ? true : false}>about</AnimatedLink>
            <AnimatedLink href="/contact" hasActiveClass={pathname == '/contact' ? true : false}>contact</AnimatedLink>
            {pathname !== '/' && <AnimatedLink hasActiveClass={false} href="/">
              <Image
                priority
                src={pathname !== '/about' ? LightLogo : DarkLogo}
                alt="logo"
                className="logo"
              />
            </AnimatedLink>}
          </div>
          <hr className={isMobile ? 'line-xs' : "line"} data-content="&nbsp;&nbsp;" />
        </Col>
        }
      </Row>
    </div>
  )
}