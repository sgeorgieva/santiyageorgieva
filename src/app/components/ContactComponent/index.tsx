'use client'

import { Suspense, useContext, useEffect, useState } from "react"
import { LocalContext } from "@/app/hooks/Context"
import Link from "next/link"
import Loader from "../../../../loader"
import detectVersion from "../../../../utils/functions"

import './contactComponent.scss'

export default function ContactComponent() {
  const isMobile = detectVersion();
  const [setItem, getItem] = useContext(LocalContext);
  const [isOpen, setIsOpen] = useState(setItem(false));

  useEffect(() => {
    isMobile && setIsOpen(getItem('isOpen'));
  }, [isOpen])

  return (
    <Suspense fallback={<Loader />}>
      <div className="contact-wrapper">
        <div className="title-contact">
          <h1 className="pageHeader">Hello.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        </div>
        <div className="description-contact pageContent">
          <div className={`${isMobile ? 'w-75vw' : ''}`}>
            <p>Need a beautiful, well-structured website or mobile application ?</p>
            <p className="mb-3">Don`t hesitate to contact me via the links below.</p>
          </div>
          <p>Email:&nbsp;<Link href="mailto:santiyageorgieva@yahoo.com" passHref={true} className="light-text">santiyageorgieva@yahoo.com</Link></p>
          <p>On the Internet:&nbsp;
            <Link href="https://www.linkedin.com/in/santiya-georgieva-919674281" target="_blank" passHref={true} className="light-text">LinkedIn</Link>&nbsp;/&nbsp;
            <Link href="https://github.com/sgeorgieva" target="_blank" passHref={true} className="light-text">Github</Link>
          </p>
        </div>
      </div>
    </Suspense>
  )
}