'use client'

import { usePathname } from "next/navigation";
import { Button } from "reactstrap";
import AnimatedLink from "../AnimatedLink";

export default function HomeContactButton() {
  const pathname = usePathname();

  return (
    <AnimatedLink href="/contact" hasActiveClass={pathname == '/contact' ? true : false}>
      <Button type="button" className="mb-3 button light-button dark-text buttonHeader">
        Contact me
      </Button>
    </AnimatedLink>
  )
}