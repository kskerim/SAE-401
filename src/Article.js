import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

const Article = ({ title, content, image }) => {
  const link = 'https://padlet.com/apirpassociation/apirp2020';
  const contentParts = content ? content.split('\n\n').map((part, index) => {
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
  }): null;
  
  return (
    <div>
      <h2 style={{ textAlign: 'left', color: '#009246' }}>{title}</h2>
      <div style={{ display: 'flex'}}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={image} alt={title} style={{ marginRight: '20px', width: '100%', height: 'auto' }}/>
          </Grid>
          <Grid item xs={8}>
            <p style={{ textAlign: 'left'}}>
              {contentParts}
            </p>
          </Grid>
        </Grid>
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