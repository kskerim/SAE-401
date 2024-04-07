import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, content, image }) => {
  const link = 'https://padlet.com/apirpassociation/apirp2020';
  const contentParts = content.split('\n\n').map((part, index) => {
    const subParts = part.split(link);
    return (
      <React.Fragment key={index}>
        {subParts[0]}
        {subParts.length > 1 && (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#ce2b37' }}>
            {link}
          </a>
        )}
        {subParts[1]}
        <br />
        <br />
      </React.Fragment>
    );
  });
  
  return (
    <div>
      <h2 style={{ textAlign: 'left', color: '#009246' }}>{title}</h2>
      <div style={{ display: 'flex'}}>
        <img src={image} alt={title} style={{ marginRight: '20px', width: '100%', height: '50%' }}/>
        <p style={{ textAlign: 'left'}}>
          {contentParts}
        </p>
      </div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Article;