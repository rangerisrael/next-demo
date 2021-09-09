/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Typewritter from '../autotyping/sample';
import Link from 'next/link';

export default function Main() {
  return (
    <>
      <main className="top-main" id="greetings">
        <div className="wrapper">
          <article className="banner">
            <section className="description">
              <Image
                className="profile"
                src="/profilePic.png"
                alt="me"
                width="250"
                height="250"
              />
            </section>
            <section className="sub-text">
              <div className="text">
                <Typewritter
                  messages={[
                    'Hello I am Israel Alisoso a web developer from philippines.',
                    'I  have an experiences in creating a good looking website.',
                  ]}
                  heading={''}
                />
              </div>
            </section>
          </article>
        </div>
      </main>
      <main className="skills" id="skills">
        <h2 className="typography">Current Skills</h2>
        <article className="bottom-main">
          <section className="pro-skills">
            <span>
              {' '}
              <Image
                className="profile"
                src="/nx2.svg"
                alt="me"
                width="250"
                height="250"
              />
            </span>
            &nbsp;
            <span>
              {' '}
              <Image
                className="profile"
                src="/react.svg"
                alt="me"
                width="250"
                height="250"
              />
            </span>
            &nbsp;
            <span>
              {' '}
              <Image
                className="profile"
                src="/nest.svg  "
                alt="me"
                width="250"
                height="250"
              />
            </span>
            &nbsp;
            <span>
              {' '}
              <Image
                className="profile"
                src="/postgres.svg  "
                alt="me"
                width="250"
                height="250"
              />
            </span>
            &nbsp;
          </section>
        </article>

        <section id="works">
          <h2 className="typography" style={{ marginTop: '1em' }}>
            Projects
          </h2>
          <article className="projects">
            <section className="bottom-main">
              <Link href="https://resumeapp-4ce23.web.app/portfolio.html">
                <a>
                  <Image
                    className="profile"
                    src="/work1.svg  "
                    alt="me"
                    width="250"
                    height="250"
                  />
                </a>
              </Link>
              <Link href="https://resumeapp-4ce23.web.app/portfolio.html">
                <a>
                  <Image
                    className="profile"
                    src="/work1.svg  "
                    alt="me"
                    width="250"
                    height="250"
                  />
                </a>
              </Link>
              <Link href="https://resumeapp-4ce23.web.app/portfolio.html">
                <a>
                  <Image
                    className="profile"
                    src="/work1.svg  "
                    alt="me"
                    width="250"
                    height="250"
                  />
                </a>
              </Link>
              <Link href="https://resumeapp-4ce23.web.app/portfolio.html">
                <a>
                  <Image
                    className="profile"
                    src="/work1.svg  "
                    alt="me"
                    width="250"
                    height="250"
                  />
                </a>
              </Link>
            </section>
          </article>
        </section>
      </main>
    </>
  );
}
