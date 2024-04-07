


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import {sections} from '../sectionsArray';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#009246',
    },
    },
    secondary: {
      main: '#ce2b37',
  },
});

export default function Agenda() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
      <Header title="" imagePath={imagePath} sections={sections} />
        <main>
            <p> Agenda page </p>
            <div>
              <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={[
                  {
                    title: 'Rendu',
                    start: new Date(moment().add(1, 'days')),
                    end: new Date(moment().add(0, 'days')),
                    color: defaultTheme.palette.primary.main, // Use primary color from theme
                  },
                  {
                    title: 'Stage de Kerim',
                    start: new Date(moment().add(1, 'days')),
                    end: new Date(moment().add(4, 'months')),
                    color: '#ce2b37', // Use secondary color from theme
                  },
                ]}
                style={{ height: '100vh' }}
                eventPropGetter={event => ({
                  style: {
                    backgroundColor: event.color,
                  },
                })}
              />
            </div>

        </main>
      </Container>
      <Footer
        title=""
        description="APIRP - Site de l'Association des Professeurs d'Italien de la Région Parisienne"
      />
    </ThemeProvider>
  );
}
