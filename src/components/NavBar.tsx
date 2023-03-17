import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <header>
        <Link href='/'>
          <h2>HOME</h2>
        </Link>
        <Link href='/about'>
          <h2>ABOUT</h2>
        </Link>
      </header>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid black;
          margin-bottom: 50px;
        }
        
        h2 {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
