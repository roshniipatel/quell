import React from 'react';
import '../assets/css/Resources.css';

const Resources = () => {
  const resources = [
    {
      title: 'Find a Psychiatrist',
      description: 'Connect with a psychiatrist in your area for mental health support and treatment.',
      link: 'http://finder.psychiatry.org/?_ga=1.178573348.1294726899.1456165962'
    },
    {
      title: 'Mental Health Services Search',
      description: 'Find a local mental health or behavioral health authority in your area to get connected to services.',
      link: 'https://resources.hhs.texas.gov/pages/find-services'
    },
    {
      title: 'Now Matters Now',
      description: 'Skills and support for coping with suicidal thoughts.',
      link: 'https://nowmattersnow.org/about'
    },
    {
      title: '988 Suicide & Crisis Lifeline',
      description: 'Visit the website and call the phone number provided.',
      link: 'https://nowmattersnow.org/about'
    },
    {
      title: 'Disaster Distress Helpline',
      description: '24/7 crisis counseling for emotional distress related to a disaster.',
      link: 'https://www.samhsa.gov/find-help/disaster-distress-helpline'
    },
    {
      title: 'The Dinner Party',
      description: 'If you are grieving the loss of a loved one',
      link: 'https://www.thedinnerparty.org/'
    }
  ];

  return (
    <div className="resources">
      <h2>Resources</h2>
      <ul className="resource-list">
        {resources.map((resource, index) => (
          <li key={index}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Visit Resource</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;