/* eslint-disable jsx-a11y/anchor-is-valid */
import ScrollTopArrow from '../scroltoTop';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <h1>Contact Me</h1>
      <h2>Social Media Account</h2>
      <section className="social-link">
        <Link
          as="JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJodHRwczovL3dlYi5mYWNlYm9vay5jb20vZGV2aXNyYWVsMjgvIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pITQ__PqLGcWhs25x--ho2f9OEMZR0iCxWHlM-AePBQ"
          href="https://web.facebook.com/devisrael28/"
        >
          <span className="social-item1 social-list"></span>
        </Link>
        <Link
          as="JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJodHRwczovL3R3aXR0ZXIuY29tL0lzcmFlbEFsaXNvc28iLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.Gq2hR7NQluoQrtQ_kzStyLH22r0dSzLFADhGY-4Dou0"
          href="https://twitter.com/IsraelAlisoso"
        >
          <span className="social-item2 social-list"></span>
        </Link>
        <Link
          as="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJodHRwczovL2dpdGh1Yi5jb20vcmFuZ2VyaXNyYWVsIn0.gTrj4galM7jpynoTEgi3yF2eBxUTxRN-GgB1P20H4rE"
          href="https://github.com/rangerisrael"
        >
          <span className="social-item3 social-list"></span>
        </Link>
        <Link
          as="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaXNyYWVsLWFsaXNvc28tYjAwNzUyMWIyIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.x8bdzFoJ43P30_qhbhmIY-dKsj8RVywzb8OSoZPsJdI"
          href="https://www.linkedin.com/in/israel-alisoso-b007521b2/"
        >
          <span className="social-item4 social-list"></span>
        </Link>
      </section>
      <h4 id="findme">&copy; Published August 2021 </h4>
      <ScrollTopArrow />
    </footer>
  );
}
