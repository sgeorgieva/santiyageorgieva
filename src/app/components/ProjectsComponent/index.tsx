"use client";

import { Suspense, useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Row } from "reactstrap";
import { LocalContext } from "@/app/hooks/Context";
import Loader from "../../../../loader";
import PokrivalaNetLogo from "../../../../public/images/pokrivalanet-logo.webp";
import VigLogo from "../../../../public/images/vig-logo.webp";
import ChimtexLogo from "../../../../public/images/chimtex.webp";
import AcrostiaLogo from "../../../../public/images/acrostia.webp";
import AviataLogo from "../../../../public/images/aviata.webp";
import RomaProjectLogo from "../../../../public/images/romaproject.webp";
import GoogleLogo from "../../../../public/images/google.webp";
import WeatherLogo from "../../../../public/images/weather.webp";
import ResidentEvilLogo from "../../../../public/images/resident-evil.webp";
import BookLogo from "../../../../public/images/above_beyond_title.webp";
import BookCover from "../../../../public/images/Book_Cover_Mockup.webp";
import CDCoverTitleLogo from "../../../../public/images/cd-covers-title.webp";
import SecondChanceLogo from "../../../../public/images/second_chance.png";
import VekoOilLogo from "../../../../public/images/veko-oil-logo.png";

import detectVersion from "../../../../utils/functions";

import "./projectsComponent.scss";

export default function ProjectsComponent() {
  const isMobile = detectVersion();
  const [setItem, getItem] = useContext(LocalContext);
  const [isOpen, setIsOpen] = useState(setItem(false));

  useEffect(() => {
    isMobile && setIsOpen(getItem("isOpen"));
  }, [isOpen]);

  var i = 0;
  function expandFE() {
    if (i == 0) {
      document.getElementById("menu-fe").style.transform = "scale(3)";
      document.getElementById("plus").style.transform = "rotate(45deg)";
      i = 1;
    } else {
      document.getElementById("menu-fe").style.transform = "scale(0)";
      document.getElementById("plus").style.transform = "rotate(0deg)";
      i = 0;
    }
  }

  function expandDesign() {
    if (i == 0) {
      document.getElementById("menu-design").style.transform = "scale(3)";
      document.getElementById("design").style.transform = "rotate(45deg)";
      i = 1;
    } else {
      document.getElementById("menu-design").style.transform = "scale(0)";
      document.getElementById("design").style.transform = "rotate(0deg)";
      i = 0;
    }
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className="projects-wrapper">
        <div className="title-projects pageHeader">
          <h1>
            Pro<span>j</span>
            ects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h1>
        </div>
        {isMobile ? (
          <>
            <Row>
              <Col>
                <Link href="https://searchx-z9tm.onrender.com" target="_blank">
                  <Image priority src={GoogleLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link href="https://viggroup-bg.com" target="_blank">
                  <Image priority src={VigLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link href="https://project-exam.onrender.com" target="_blank">
                  <Image priority src={AviataLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link
                  href="https://weather-app-0v61.onrender.com"
                  target="_blank"
                >
                  <Image priority src={WeatherLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link href="https://pokrivalanet.onrender.com" target="_blank">
                  <Image priority src={PokrivalaNetLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link href="https://chimtex.onrender.com" target="_blank">
                  <Image priority src={ChimtexLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link href="https://acrostia.onrender.com" target="_blank">
                  <Image priority src={AcrostiaLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link href="https://romaproject.onrender.com" target="_blank">
                  <Image priority src={RomaProjectLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link href="https://veko-oil.eu" target="_blank">
                  <Image priority src={VekoOilLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link href={BookCover.src} target="_blank">
                  <Image priority src={BookLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link
                  href="https://second-chance-book-cover.onrender.com"
                  target="_blank"
                >
                  <Image priority src={SecondChanceLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link
                  href="https://cd-covers-generator-52d5.onrender.com"
                  target="_blank"
                >
                  <Image priority src={CDCoverTitleLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link href="https://resident-evil-book-cover.on">
                  <Image priority src={ResidentEvilLogo} alt="logo" />
                </Link>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <div>
              <div>
                <div className="toggle" id="toggle" onClick={() => expandFE()}>
                  <span className="plus" id="plus">
                    FE
                  </span>
                </div>
                <div className="menu-fe" id="menu-fe">
                  <Link
                    href="https://searchx-z9tm.onrender.com"
                    target="_blank"
                  >
                    <Image priority src={GoogleLogo} alt="logo" />
                  </Link>
                  <Link href="https://viggroup-bg.com" target="_blank">
                    <Image priority src={VigLogo} alt="logo" />
                  </Link>
                  <Link
                    href="https://project-exam.onrender.com"
                    target="_blank"
                  >
                    <Image priority src={AviataLogo} alt="logo" />
                  </Link>
                  <Link
                    href="https://weather-app-0v61.onrender.com"
                    target="_blank"
                  >
                    <Image priority src={WeatherLogo} alt="logo" />
                  </Link>
                  <Link
                    href="https://pokrivalanet.onrender.com/"
                    target="_blank"
                  >
                    <Image priority src={PokrivalaNetLogo} alt="logo" />
                  </Link>
                  <Link href="https://chimtex.onrender.com" target="_blank">
                    <Image priority src={ChimtexLogo} alt="logo" />
                  </Link>
                  <Link href="https://acrostia.onrender.com" target="_blank">
                    <Image priority src={AcrostiaLogo} alt="logo" />
                  </Link>
                  <Link href="https://romaproject.onrender.com" target="_blank">
                    <Image priority src={RomaProjectLogo} alt="logo" />
                  </Link>
                  <Link href="https://veko-oil.eu" target="_blank">
                    <Image priority src={VekoOilLogo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div>
                <div
                  className="toggle-design"
                  id="toggleDesign"
                  onClick={() => expandDesign()}
                >
                  <span className="design-button" id="design">
                    Design
                  </span>
                  <div className="menu-design" id="menu-design">
                    <Link
                      href="https://book-cover-generator-9b5c.onrender.com"
                      target="_blank"
                    >
                      <Image priority src={BookLogo} alt="logo" />
                    </Link>
                    <Link
                      href="https://second-chance-book-cover.onrender.com"
                      target="_blank"
                    >
                      <Image priority src={SecondChanceLogo} alt="logo" />
                    </Link>
                    <Link
                      href="https://cd-covers-generator-52d5.onrender.com"
                      target="_blank"
                    >
                      <Image priority src={CDCoverTitleLogo} alt="logo" />
                    </Link>
                    <Link href="https://resident-evil-book-cover.on">
                      <Image priority src={ResidentEvilLogo} alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Suspense>
  );
}
