import React, { ReactNode } from 'react';
import NextLink from 'next/link';

type Props = {
  children?: ReactNode
  href?: string
}

export default function Link({ children, href = '', ...props}: Props) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}