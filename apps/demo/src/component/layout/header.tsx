/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <section className="logo-banner">
        <Image
          className="logo"
          src="/banner.svg"
          alt="me"
          width="120"
          height="120"
        />
      </section>
      <section className="top-nav">
        <label htmlFor="checkbox" id="topnav" className="topnav">
          <span style={{ fontSize: '2rem', cursor: 'pointer' }}>&#9776;</span>
        </label>
        <input type="checkbox" name="" id="checkbox" className="topnav" />

        <div className="navigation">
          <section className="logo-banner logo-banner-mobile">
            <Image
              className="logo"
              src="/banner.svg"
              alt="me"
              width="120"
              height="120"
            />
          </section>
          <label htmlFor="checkbox" id="topnav" className="close">
            <span
              style={{ fontSize: '3rem', cursor: 'pointer', color: '#f3f4f6' }}
            >
              &times;
            </span>
          </label>
          <nav className="responsive">
            <li className="navigation-items">
              <Link
                as="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJob21lIn0.cLjB8RbUDERzJIUDmbsIDzNTlnDJ4MeB-GkdLMgxJ0E"
                href="/home"
              >
                <a>Home</a>
              </Link>
            </li>

            <li className="navigation-items">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>

            <li className="navigation-items">
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </nav>
        </div>
      </section>
    </header>
  );
}
