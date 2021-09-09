/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React, { useState, useEffect, memo } from 'react';

const Navigator = memo(function Navigator() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    console.log(window.pageYOffset);
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if ((!first && window.pageYOffset === 0) || window.pageYOffset <= 93) {
      setFirst(true);
      setSecond(false);
      setThird(false);
      setFourth(false);
      setFifth(false);
    } else if (
      !second &&
      window.pageYOffset > 93 &&
      window.pageYOffset <= 375
    ) {
      setSecond(true);
      setFirst(false);
      setThird(false);
      setFourth(false);
      setFifth(false);
    } else if (
      !third &&
      window.pageYOffset > 375 &&
      window.pageYOffset <= 616
    ) {
      setThird(true);
      setFirst(false);
      setSecond(false);
      setFourth(false);
      setFifth(false);
    } else if (
      !fourth &&
      window.pageYOffset > 616 &&
      window.pageYOffset <= 892
    ) {
      setFourth(true);
      setThird(false);
      setFirst(false);
      setSecond(false);
      setFifth(false);
    } else if (
      !fifth &&
      window.pageYOffset > 892 &&
      window.pageYOffset <= 1038
    ) {
      setFifth(true);
      setFourth(false);
      setThird(false);
      setFirst(false);
      setSecond(false);
    } else {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
      setFifth(false);
    }
  };

  return (
    <div className="navigator">
      <section className="navigator-item">
        <section className="navigator-content">
          <label className="checkedOne" htmlFor="checkOneItem">
            <Link href="#greetings">
              {first ? (
                <a
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',

                    color: '#3E6D7C',
                  }}
                  className="navigator-link"
                ></a>
              ) : (
                <a
                  style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    color: '#BCC0CA',
                  }}
                  className="navigator-link"
                ></a>
              )}
            </Link>
          </label>
          <input type="checkbox" name="checkbox" id="checkOneItem" />
          <div className="text-link">
            <span>Greetings</span>
          </div>
        </section>

        <section className="navigator-content">
          <label className="checkedOne" htmlFor="checkSecondItem">
            <Link href="#skills">
              {second ? (
                <a
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    color: 'rgba(0, 0, 0, 0.4)',
                  }}
                  className="navigator-link"
                ></a>
              ) : (
                <a
                  style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    color: 'rgba(0, 0, 0, 0.2)',
                  }}
                  className="navigator-link"
                ></a>
              )}
            </Link>
          </label>

          <input type="checkbox" name="checkbox" id="checkSecondItem" />

          <div className="text-link">
            <span>Skills</span>
          </div>
        </section>

        <section className="navigator-content">
          <label className="checkedOne" htmlFor="checkThirdItem">
            <Link href="#works">
              {third ? (
                <a
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    color: 'rgba(0, 0, 0, 0.4)',
                  }}
                  className="navigator-link"
                ></a>
              ) : (
                <a
                  style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    color: 'rgba(0, 0, 0, 0.2)',
                  }}
                  className="navigator-link"
                ></a>
              )}
            </Link>
          </label>

          <input type="checkbox" name="checkbox" id="checkThirdItem" />

          <div className="text-link">
            <span>My Work</span>
          </div>
        </section>

        <section className="navigator-content">
          <label className="checkedOne" htmlFor="checkFourthItem">
            <Link href="#progress">
              {fourth ? (
                <a
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    color: 'rgba(0, 0, 0, 0.4)',
                  }}
                  className="navigator-link"
                ></a>
              ) : (
                <a
                  style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    color: 'rgba(0, 0, 0, 0.2)',
                  }}
                  className="navigator-link"
                ></a>
              )}
            </Link>
          </label>

          <input type="checkbox" name="checkbox" id="checkFourthItem" />

          <div className="text-link">
            <span>My Progress</span>
          </div>
        </section>

        <section className="navigator-content">
          <label className="checkedOne" htmlFor="checkFifthItem">
            <Link href="#findme">
              {fifth ? (
                <a
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    color: 'rgba(0, 0, 0, 0.4)',
                  }}
                  className="navigator-link"
                ></a>
              ) : (
                <a
                  style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    color: 'rgba(0, 0, 0, 0.2)',
                  }}
                  className="navigator-link"
                ></a>
              )}
            </Link>
          </label>

          <input type="checkbox" name="checkbox" id="checkFifthItem" />

          <div className="text-link">
            <span>Find Me</span>
          </div>
        </section>
      </section>
    </div>
  );
});

export default Navigator;
