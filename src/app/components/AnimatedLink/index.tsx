import useAnimatedRouter from "@/app/hooks/useAnimatedRouter";
import Link from "next/link";
import React from "react";

import './animatedLink.scss';

type Props = {
  href: string;
  hasActiveClass: boolean;
  children: React.ReactNode;
};
export default function AnimatedLink({ href, hasActiveClass, children }: Props) {
  const { animatedRoute } = useAnimatedRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        animatedRoute(href);
      }}
      passHref
      className={hasActiveClass ? 'active' : ''}
      // prefetch={true}
    >
      {children}
    </Link>
  );
}