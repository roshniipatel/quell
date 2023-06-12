import React from 'react';
import '../assets/css/Podcast.css';

const Podcast = () => {
  const podcasts = [
    {
      title: 'We Can Do Hard Things',
      description: 'For general mental health.',
      link: 'http://wecandohardthingspodcast.com/'
    },
    {
      title: 'iWeigh',
      description: 'For body positivity.',
      link: 'https://iweighcommunity.com/podcasts/'
    },
    {
      title: 'The Mental Illness Happy Hour',
      description: 'For heavy topics.',
      link: 'https://mentalpod.com/'
    },
    {
      title: 'The Hilarious World of Depression',
      description: 'For depression.',
      link: 'https://podcasts.apple.com/us/podcast/the-hilarious-world-of-depression/id1181589175'
    },
    {
      title: 'Feel Better, Live More With Dr. Chatterjee',
      description: 'For Variety.',
      link: 'https://podcasts.apple.com/gb/podcast/feel-better-live-more-with-dr-rangan-chatterjee/id1333552422'
    },
    {
      title: ' Happier: With Gretchen Rubin',
      description: 'For boosting happiness.',
      link: 'https://podcasts.apple.com/us/podcast/happier-with-gretchen-rubin/id969519520'
    }
  ];

    return (
      <div className="podcasts">
        <h2>Podcasts</h2>
        <ul className="podcast-list">
          {podcasts.map((podcast, index) => (
            <li key={index}>
              <h3>{podcast.title}</h3>
              <p>{podcast.description}</p>
              <a href={podcast.link} target="_blank" rel="noopener noreferrer">Visit Podcast</a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Podcast;
