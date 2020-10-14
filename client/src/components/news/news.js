import React, { Fragment } from 'react';

const News = () => {
  return (
    <Fragment>
      <ul className='list-unstyled'>
        <li className='media'>
          <div className='media-body'>
            <h2 className='mt-0 mb-1'>The Grand Final Dinner</h2>
            <h4 className='mt-0 mb-1'>Saturday, 24 October 2020</h4>
            Our River View Room plays host to one of Perth’s biggest AFL Grand
            Final events, able to give fans space to watch the game in style
            whilst overlooking the Matagraup Bridge and the spectacular Perth
            city skyline at night. Drop punt your worries away, we’ll look after
            you for the night. You’ll enjoy a buffet dinner prepared by our
            award-winning chefs and served by our dedicated staff, a premium
            beverage package and big screen action with great views so you don’t
            miss a thing.
          </div>
          <a
            className='btn btn-outline-success'
            href='https://optusstadium.com.au/whats-on/afl-grand-final-dinner'
            role='button'
            target='_blank'
          >
            Visit the webpage
          </a>
        </li>
        <br></br>
        <li className='media'>
          <div className='media-body'>
            <h2 className='mt-0 mb-1'>2020 Telethon Family Festival</h2>
            <h4 className='mt-0 mb-1'>Sunday, 25 October 2020</h4>
            Family fun comes to Optus Stadium this October with the Telethon
            Family Festival presented by Coles, and proudly sponsored by HBF,
            Bankwest, APM and Mobility. From 11am to 5pm Optus Stadium will be a
            sea of smiles with entertainment for all ages.
          </div>
          <a
            className='btn btn-outline-success'
            href='https://optusstadium.com.au/whats-on/2020-telethon-family-festival'
            role='button'
            target='_blank'
          >
            Visit the webpage
          </a>
        </li>
        <br></br>
        <li className='media'>
          <div className='media-body'>
            <h2 className='mt-0 mb-1'>Melbourne Cup at Optus Stadium</h2>
            <h4 className='mt-0 mb-1'>Tuesday, 3 November 2020</h4>
            The race that stops the nation returns to Optus Stadium in 2020!
            Hosted in Optus Stadium’s Sports Lounge, you’ll kick off the day at
            11am and enjoy a five-hour food and drink package as you watch the
            day’s races on the super screens. If you’re a bit of a fashionista
            or have a fascination for fascinators, you can enter the Fashions
            Over the Field of Play or admire the styles on display in our
            stunning Fashion Show.
          </div>
          <a
            className='btn btn-outline-success'
            href='https://optusstadium.com.au/whats-on/melbourne-cup-at-optus-stadium-2020'
            role='button'
            target='_blank'
          >
            Visit the webpage
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;
