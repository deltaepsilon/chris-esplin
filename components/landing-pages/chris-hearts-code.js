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
              <strong>Hooray!</strong> Chris can sometimes help
            </p>
            <Link href="/sign-up">
              <a>
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
            </Link>
          </div>
        </div>
      </section>
      <section className="background">
        <h2 className="secondary-headline-text">Recent Projects</h2>

        <div className="details">
          <div>
            <img className="margin" src={calligraphyUri} alt="calligraphy supplies" />
            <p>Chris runs Calligraphy.org with his wife Melissa.</p>
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
            <a href="mailto:chris@christopheresplin.com">
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
        <p>
          <strong>Greetings!</strong>
        </p>
        <p>I got my start with a double-major in Finance and Economics from BYU.</p>
        <p>
          Working in economics was a great experience, and it opened a lot of doors... but it soon
          became clear that finance/econ wasn't where the market wanted to deploy my talents :)
        </p>
        <p>I pivoted to code, particularly JavaScript, beginning in 2010.</p>
        <p>
          I've done a huge variety of work. Some has been at tech companies. Some has been for big
          corporations that I don't get to talk about. Much of my work has been building
          businesses for myself and others.
        </p>
        <p>
          I love startups; however, I've done enough of them be well acquainted with pain and failure. I wouldn't say that I'm gunshy... but I'm no longer interested in unfunded projects. I bootstrap companies for myself, not for other people.
        </p>

        <p>
          Sincerely, <br />
          <strong>Chris Esplin</strong>
        </p>
      </section>
    </article>
  );
};
