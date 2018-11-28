import React from 'react';
import Link from 'next/link';
import { Button } from 'rmwc/Button';
import gtagEvent from '../../utilities/analytics/gtag-event';

import './landing-pages.css';
import '@material/button/dist/mdc.button.min.css';

const heroUri =
  'https://firebasestorage.googleapis.com/v0/b/chris-esplin.appspot.com/o/assets%2Fchrisesplin-headshot-5.jpg?alt=media&token=8571adac-254b-4221-b712-71d5dfb9a330';
const calligraphyUri = 'https://goo.gl/YVYk8h';
const fullStackFirebaseUri =
  'https://firebasestorage.googleapis.com/v0/b/chris-esplin.appspot.com/o/assets%2Ffull-stack-firebase.jpg?alt=media&token=09fca576-ecac-4596-9640-b2b2b62cd477';
const githubUri =
  'https://firebasestorage.googleapis.com/v0/b/chris-esplin.appspot.com/o/assets%2Fgithub-contributions.png?alt=media&token=76bcd8a9-3083-43c5-a7c9-c025fe7401df';
const howToFirebaseUri =
  'https://firebasestorage.googleapis.com/v0/b/chris-esplin.appspot.com/o/assets%2Fhow-to-firebase-orange.png?alt=media&token=0f97e7a3-c526-4d62-a7ed-fe4b76c5e065';
const resumeUri =
  'https://firebasestorage.googleapis.com/v0/b/chris-esplin.appspot.com/o/assets%2FEsplin-Christopher-Resume-2018.pdf?alt=media&token=49a73102-ca37-4a2e-9ab6-2958737f7447';
const emailUri = encodeURI(`mailto:chris@christopheresplin?subject=Consulting Inquiry&body=Hey Chris,

Let's talk about JavaScript, Firebase and apps!


`);
const familyPictureUri =
  'https://firebasestorage.googleapis.com/v0/b/chris-esplin.appspot.com/o/assets%2Fesplin-family-2015.jpg?alt=media&token=4edba376-0517-4e98-ad71-eb5cfcc86339';

export default props => {
  return (
    <article id="chris-hearts-code" className="static-landing-page" role="main">
      <section className="centered">
        <div className="row">
          <div className="hide-small">
            <img src={heroUri} alt="Doh!" />
          </div>
          <div className="flex">
            <h1 className="headline-text">Help!</h1>
            <p className="primary-text">Need to solve business problems ASAP?</p>
            <p className="secondary-text">
              <strong>🎉Hooray!🎉</strong> Chris can sometimes help
            </p>
            <a href={emailUri}>
              <Button
                className="cta-button"
                raised
                onClick={() =>
                  gtagEvent('cta-click', {
                    page: 'chris-hearts-code',
                    position: 'primary',
                  })
                }
              >
                Yes, I would like to improve my business
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section className="background">
        <h2 className="secondary-headline-text">Recent Projects</h2>

        <div className="details">
          <div>
            <img className="margin" src={calligraphyUri} alt="calligraphy supplies" />
            <p>Chris runs <a href="https://www.calligraphy.org">Calligraphy.org</a> with his wife Melissa.</p>
            <p>Calligraphy.org launched in 2012.</p>
            <p>He writes 100% of the code.</p>
          </div>
          <div>
            <a href="https://www.fullstackfirebase.com/">
              <img src={fullStackFirebaseUri} alt="learn fundamentals" />
            </a>
            <h3 className="title">Google Developer Expert</h3>
            <p>
              Chris is a{' '}
              <a href="https://developers.google.com/experts/people/chris-esplin">
                {' '}
                Google Developer Expert
              </a>{' '}
              (aka GDE).
            </p>
            <p>Chris specializes in Firebase and Web Technologies</p>
            <p>
              Chris teaches Firebase at{' '}
              <a href="https://www.fullstackfirebase.com/">FullStackFirebase.com</a>
            </p>
          </div>
          <div>
            <img src={githubUri} alt="github" />
            <h3 className="title">GitHub</h3>
            <p>Everything Chris codes ends up on Github.</p>
            <p>Sadly, much of it goes to private repos :(</p>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qqX0nc8mwAQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <h3 className="title">How To Firebase: YouTube</h3>
            <p>
              Chris occasionally posts Firebase-related videos to{' '}
              <a href="https://www.youtube.com/channel/UCaAByidxypZTYOj4OsKzD2Q">YouTube.com</a>!
            </p>
            <p>
              He posts the accompanying articles on{' '}
              <a href="https://howtofirebase.com/">HowToFirebase.com</a>
            </p>
          </div>
          <div style={{ background: 'none' }}>
            <a href={emailUri}>
              <Button
                className="cta-button"
                raised
                onClick={() =>
                  gtagEvent('cta-click', {
                    page: 'chris-hearts-code',
                    position: 'secondary',
                  })
                }
              >
                Send Chris a friendly note
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section className="lots-of-text">
        <img src={familyPictureUri} alt="esplin family picture" />
        <aside>Esplin Family circa 2015</aside>

        <p>
          <strong>Greetings!</strong>
        </p>
        <p>I got my start with a double-major in Finance and Economics from BYU.</p>
        <p>
          Working in economics was a great experience, and it opened a lot of doors... but it soon
          became clear that finance/econ wasn't where the market wanted to deploy my talents 😄
        </p>
        <p>I pivoted to code, particularly JavaScript, beginning in 2010.</p>
        <p>
          The majority of my work these days is in Node.js and front-end JavaScript consulting in
          and around Salt Lake City, Utah.
        </p>
        <p>
          I have many years of experience with Node.js and web technologies in general. I started
          with Polymer (1.x and 2.x) in 2016 and I've been using React since late 2017. I'm always
          happy to learn a new framework for a deserving project; however, I don't believe that I
          can produce durable work until I've spun up at least one side project in any given
          framework.
        </p>
        <p>
          My preferred back end is Firebase; however, I got my start with SQL and I am very
          comfortable with relational data. If you need relational data, consider fronting your
          database with GraphQL for a better developer experience.
        </p>
        <p>
          Firebase apps take about half the time to develop compared to traditional API-backed apps.
          Firebase provides the database, API, serverless Cloud Functions, authentication and nearly
          everything else that a modern web or mobile app needs. There are plenty of reasons to not
          use Firebase, but the vast majority of web apps are cheaper and easier to develop on the
          Firebase platform.
        </p>
        <p>
          I am obsessed with mobile-first{' '}
          <a href="https://developers.google.com/web/progressive-web-apps/">progressive web apps</a>
          , or PWAs. A PWA can be installed on an Android device's homescreen and presents itself as
          a native app... even though it's a desktop-ready website. Most startups would benefit from
          releasing a PWA first and only working on more expensive Android and iOS apps once the
          market has been proven. The trend toward PWAs is strong, especially outside of the United
          States.
        </p>
        <p>
          Visit <a href="https://www.calligraphy.org/">www.calligraphy.org</a> for an example of a
          modern PWA backed entirely by Firebase. The front end happens to be written in React,
          although PWAs and Firebase are framework-agnostic. You can install{' '}
          <a href="https://www.calligraphy.org/">www.calligraphy.org</a> to your homescreen on
          Android. You can also install it as a pseudo-native app on Windows 10. Both installations
          leverage{' '}
          <a href="https://developers.google.com/web/fundamentals/primers/service-workers/">
            Service Workers
          </a>{' '}
          to provide a fully-cached, offline-first experience.
        </p>
        <p>
          I've done a huge variety of work. Some has been at tech companies. Some has been for big
          corporations that I don't get to talk about. Much of my work has been building businesses
          for myself and others.
        </p>
        <p>
          I love startups; however, I've done enough of them be well acquainted with pain and
          failure. I wouldn't say that I'm gunshy... but I'm no longer interested in unfunded
          projects. I bootstrap companies for myself, not for other people.
        </p>

        <p>
          Sincerely, <br />
          <strong>Chris Esplin</strong>
        </p>
      </section>
      <section className="background resume">
        <h2 className="secondary-headline-text">Resume</h2>

        <div>
          <div className="header">
            <h2>CHRISTOPHER ESPLIN</h2>
            <br />
            1795 E Walnut Grove Dr, Draper, UT 84020
            <br />
            <a href="chris@christopheresplin.com">Chris@ChristopherEsplin.com</a>,{' '}
            <a href="tel:801.673.8585">801.673.8585</a>
            <br />
            GitHub: <a href="https://github.com/deltaepsilon">https://github.com/deltaepsilon</a>
          </div>

          <h3 className="with-margin">EXPERIENCE</h3>
          <h3>
            <span>2017-Present</span> <span>PLURALSIGHT</span> <span className="flex" />
            <span className="hide-small">SOUTH JORDAN, UT</span>
          </h3>
          <h4>Senior Software Engineer</h4>
          <ul>
            <li>
              Developing Node.js/React/GraphQL applications for the Pluralsight.com customer
              experience
            </li>
            <li>Utilizing test-driven development and lean methodologies</li>
            <li>
              Maintaining the legacy Pluralsight video player while developing its replacement
            </li>
            <li>
              Pair programming with a small team to design, implement and deploy app code through
              CI/CD
            </li>
            <li>Containerizing application code using Docker Compose</li>
          </ul>

          <h3>
            <span>2013-Present</span> <span>QUIVER INC</span> <span className="flex" />{' '}
            <span className="hide-small">REMOTE</span>
          </h3>
          <h4>Owner</h4>
          <ul>
            <li>
              Consulting on small and large software projects focusing on JavaScript and Firebase
              best practices
            </li>
            <li>
              Developing line-of-business applications using web technologies from design to
              production
            </li>
            <li>
              Utilizing React, Web Components (Polymer 2.0), Angular, Firebase, Node.js, Redux,
              RxJs, D3.js, Material Design and Progressive Web App (PWA) patterns
            </li>
            <li>
              Deploying to production on Google Cloud Platform using Docker and Google Cloud
              Functions
            </li>
            <li>Authored FullStackFirebase.com as a Google Developer Expert (GDE) for Firebase</li>
          </ul>

          <h3>
            <span>2013-Present</span> <span>CALLIGRAPHY.ORG</span> <span className="flex" />{' '}
            <span className="hide-small">DRAPER, UT</span>
          </h3>
          <h4>Owner/Developer</h4>
          <ul>
            <li>
              Built Calligraphy.org as a family business to over $250k/year revenue from 2013 to
              2015
            </li>
            <li>Designed Quiver CMS as an open-source project to drive Calligraphy.org</li>
            <li>
              Managing business operations, including all product sourcing, accounting and customer
              service
            </li>
            <li>
              Integrated with a fulfillment warehouse to manage all inventory and daily, worldwide
              fulfillment
            </li>
          </ul>

          <h3>
            <span>2012-2013</span> <span>ATTASK</span> <span className="flex" />{' '}
            <span className="hide-small">LEHI, UT</span>
          </h3>
          <h4>Front-End Web Developer</h4>
          <ul>
            <li>
              Drove new feature development for the core AtTask SaaS product as the lead Front-End
              Developer on an agile team, utilizing middle-tier Java, JSPs and a MooTools-based
              front end
            </li>
            <li>
              Matched UX mocks and interaction specifications to the pixel while collaborating with
              the product team to revise feature requests to fit our framework and timelines
            </li>
            <li>
              Focused on JavaScript/CSS performance with best practices including efficient vanilla
              JS and optimized CSS selectors that perform in modern browsers and corporate IE8
              environments
            </li>
          </ul>

          <h3>
            <span>2011-2012</span> <span>FREELANCE</span> <span className="flex" />{' '}
            <span className="hide-small">OREM, UT</span>
          </h3>
          <h4>LAMP-Stack Web Developer</h4>
          <ul>
            <li>
              Bootstrapped IStillLoveCalligraphy.com through product development to ramen
              profitability and continuing month-to-month growth using the Symfony2 PHP framework to
              create an integrated shopping cart/CMS with Amazon S3/CloudFront and PayPal
              integrations
            </li>
            <li>
              Implemented a Magento shopping cart and wrote a custom front end for
              FamilyStorehouse.net
            </li>
          </ul>

          <h3 className="with-margin">EDUCATION</h3>
          <h3>
            <span>2001-2007</span> <span className="hide-small">BRIGHAM YOUNG UNIVERSITY</span>{' '}
            <span className="show-small">BYU</span> <span className="flex" />
            <span className="hide-small">PROVO, UT</span>
          </h3>
          <h4>B.S. in Economics and B.S. in Business Management: Finance</h4>
          <ul>
            <li>Graduated Magna Cum Laude</li>
            <li>Full-tuition academic scholarship</li>
          </ul>
        </div>

        <div className="cta-button-wrapper">
          <a href={resumeUri} target="_blank">
            <Button
              style={{ maxWidth: '20rem' }}
              className="cta-button"
              raised
              onClick={() =>
                gtagEvent('cta-click', {
                  page: 'chris-hearts-code',
                  position: 'download-resume',
                })
              }
            >
              Download Resume PDF
            </Button>
          </a>
        </div>
      </section>
    </article>
  );
};
