import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
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

  const menuItems = ['Profile', 'Language settings', 'Log out'];

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
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
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        <ButtonGroup variant="contained" aria-label="text button group" style={{ justifyContent: 'center'}}>
        {sections.map((section) => (
          section.dropdown ? (
            <DropdownMenu title={section.title} items={section.dropdown} handleMenuClick={createHandleMenuClick} maxWidth="125px" maxHeight="50px" />
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
