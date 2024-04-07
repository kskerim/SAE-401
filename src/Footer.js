import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

function Copyright() {
  return (
    <Typography variant="body1" color="text.secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={4}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src='https://cdn.discordapp.com/attachments/1069605959858663455/1226639071116394516/Kerim-1.jpg?ex=66257fa8&is=66130aa8&hm=3d2bf6ffe662719d18aa50af2fc048bf1cb5afc86ea9d19b07d98c0a63bd7361&' alt='Kerim' style={{ borderRadius: '50%', width: '30%', height: '30%' }} />
            <Link color="inherit" href="https://github.com/kskerim">
              Kerim Kasikci
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src='https://cdn.discordapp.com/attachments/1069605959858663455/1226640560635248660/Yann_FINALE.jpg?ex=6625810b&is=66130c0b&hm=5d4011b640713d0d89714ded25355513bf0d04d0456467eb8a0bcf67b154380d&' alt='Yann' style={{ borderRadius: '50%', width: '30%', height: '30%' }} />
            <Link color="inherit" href="https://github.com/Dromach">
              Yann Tauron
            </Link>
          </div>
        </Grid>
      </Grid>{' '}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
