import React from 'react';
import Link from 'next/link';
import { Button } from 'rmwc/Button';
import gtagEvent from '../../utilities/analytics/gtag-event';

import './landing-pages.css';
import '@material/button/dist/mdc.button.min.css';

const heroUri = 'https://goo.gl/3iX4qW';
const suppliesUri = 'https://goo.gl/rxgMKD';
const fundamentalsUri = 'https://goo.gl/xcMjoF';
const personalAlphabetUri = 'https://goo.gl/Wu8YkH';
const whatsnextUri = 'https://goo.gl/PyEQAk';

export default props => {
  return (
    <article id="i-want-to-learn-calligraphy" className="static-landing-page" role="main">
      <section className="centered">
        <div className="row">
          <div className="hide-small">
            <img src={heroUri} alt="Melissa Esplin headshot" />
          </div>
          <div className="flex">
            <h1 className="headline-text">You can learn calligraphy</h1>
            <p className="primary-text">
              Join <strong>8,537</strong> beginning and intermediate calligraphers learning online
              since 2009
            </p>
            <p className="secondary-text">
              <strong>Free Bonus</strong>: A cheat sheet on the best supplies for beginning
              calligraphers
            </p>
            <Link href="/sign-up">
              <a>
                <Button
                  className="cta-button"
                  raised
                  onClick={() =>
                    gtagEvent('cta-click', {
                      page: 'i-want-to-learn-calligraphy',
                      position: 'primary',
                    })
                  }
                >
                  Yes, I want to learn calligraphy
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="background">
        <h2 className="secondary-headline-text">This is what you'll learn</h2>

        <div className="details">
          <div>
            <img src={suppliesUri} alt="calligraphy supplies" />
            <h3 className="title">Tools & Supplies</h3>
            <p>Poor tools will hold you back.</p>
            <p>Learn the ink, nib and paper combinations that play well together.</p>
          </div>
          <div>
            <img src={fundamentalsUri} alt="learn fundamentals" />
            <h3 className="title">Fundamentals</h3>
            <p>Build your technique with centuries-old fundamentals</p>
          </div>
          <div>
            <img src={personalAlphabetUri} alt="unique flourishes" />
            <h3 className="title">Personal Alphabet</h3>
            <p>Make every stroke your own with unique flourishes and alphabets</p>
          </div>
          <div>
            <img src={whatsnextUri} alt="personalized envelopes" />
            <h3 className="title">Learn forever</h3>
            <p>Keep learning with unlimited feedback</p>
          </div>
          <div>
            <Link href="/sign-up">
              <a>
                <Button
                  className="cta-button"
                  raised
                  onClick={() =>
                    gtagEvent('cta-click', {
                      page: 'i-want-to-learn-calligraphy',
                      position: 'secondary',
                    })
                  }
                >
                  Get started for free
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="lots-of-text">
        <h2 className="secondary-headline-text">
          Join over 8,537 students who have learned calligraphy with us since 2009
        </h2>

        <p>
          You will learn to letter beautiful envelopes, invitations, save-the-dates, love letters
          and scrapbook layouts. Our students have used calligraphy to supplement their design,
          photography and event planning businesses.
        </p>
        <p>
          There is no easy way to learn calligraphy. It requires consistent practice like every
          other valuable skill. However, calligraphy is not nearly as difficult as it first appears.
          We've taught over 8,537 students how to letter since 2009, and our online teaching
          methodology has proven to be an efficient way for students to start lettering immediately.
        </p>
        <p>
          Our beginner course starts with an overview of the supplies that you will need to get
          started. Then you'll use our custom practice guides to trace the letterforms with a
          pencil. From the pencil, you progress to pointed pen work, tracing letterforms and
          eventually forming words and positioning those words on the page.
        </p>
        <p>
          Our platform's secret sauce is our unique feedback system. As you complete your
          assignments, you will upload snapshots of your work to your personal feedback gallery. You
          can use the gallery to ask your instructor any questions that you have. Your instructor
          will review your work, answer your questions and give you suggestions for improvement.
          This form of one-on-one coaching will accelerate your learning far faster than reading and
          practice guides alone.
        </p>
      </section>
    </article>
  );
};
