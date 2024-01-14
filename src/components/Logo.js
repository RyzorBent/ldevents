import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
export default function Logo() {
  // You can't use a prop passed into the parent component
  return (
      <StaticImage src='../images/logo-small.png' layout='fullWidth' />
  );
}
