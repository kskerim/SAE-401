import React from 'react';
import { Button, Menu, MenuItem, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

function DropdownMenu({ title, items, handleMenuClick, maxWidth, maxHeight }) {
  const defaultTheme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: 'white', maxWidth, maxHeight }}
      >
        {title}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: defaultTheme.palette.primary.main,
            color: 'white',
          },
        }}
      >
        {items.map((item, index) => (
          <MenuItem 
            key={index} 
            onClick={() => handleMenuClick(item)}
            style={{ display: 'flex', flexDirection: 'column', padding: '10px', color: 'text.primary', bgcolor: 'background.paper' }}
          >
            <Link to={item.url} style={{ color: 'inherit', textDecoration: 'none' }}>
              {item.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default DropdownMenu;