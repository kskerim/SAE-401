


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import {sections} from '../sectionsArray'
import GridTable from '../GridTable';
import { useEffect, useState } from 'react';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Technology() 
{

  const [responseServiceWeb, setResponse] = useState([]);


  useEffect(() => {
   
  
   /* const url = "https://api.open-meteo.com/v1/forecast"+
                 "?latitude=52.52&longitude=13.41&"+
                 "past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
   */

    const url = "http://localhost/restAPI_CRUD_PHP/getItems.php"

    fetch(url,{ method: "POST"})
                        .then(response => {return response.json();})
                        .catch(err => {console.log("error: "+err);})
                        .then(jsonArr => {setResponse(jsonArr);} );
            
  });


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
            <p> Technology page </p>
            <GridTable result = {responseServiceWeb}/>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
