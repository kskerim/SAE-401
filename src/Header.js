import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ButtonGroup from '@mui/material/ButtonGroup';

import DropdownMenu from './DropdownMenu';


function Header(props) {

  const { sections, title, imagePath} = props;
  
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider',  }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
          <img src={imagePath} alt="Logo APIRP" style={{ width: '75px', height: '75px' }} />
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'center', overflowX: 'auto', width: '100%' }}
      >
        <ButtonGroup variant="contained" aria-label="text button group">
          {sections.map((section) => (
            section.dropdown ? (
              <DropdownMenu title={section.title} items={section.dropdown} handleMenuClick={createHandleMenuClick} maxWidth="250px" maxHeight="50px" />
            ) : (
              <Button style={{ maxWidth: '150px', maxHeight: '36px'}}>
                <Link
                  color="inherit"
                  noWrap
                  key={section.title}
                  variant="body2"
                  href={section.url}
                  sx={{ p: 1, flexShrink: 0 }}
                  underline="none"
                >
                  {section.title}
                </Link>
              </Button>
            )
          ))}
        </ButtonGroup>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default Header;
