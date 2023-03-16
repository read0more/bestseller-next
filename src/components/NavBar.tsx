import React from "react";
import Link from 'next/link'

export default function NavBar() {
  return (
    <>
      <h2>HOME</h2>
      <Link href="/about"><h2>ABOUT</h2></Link>
    </>
  );
}
