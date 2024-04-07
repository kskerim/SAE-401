import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import { sections } from '../sectionsArray';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#009246',
    },
    secondary: {
      main: '#ce2b37',
    },
  },
});

export default function Enseignant() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
      <Header title="" imagePath={imagePath} sections={sections} />
        <main>
          <Typography variant="h5" component="h2" gutterBottom>
            Document informatif : comment devenir enseignant
          </Typography>
          <Typography paragraph>
            La première étape, pour devenir enseignant, est avoir une licence (Bac+3). Dès la licence, des parcours ou options de préparation aux métiers de l'enseignement sont proposés aux étudiants qui désirent s'engager dans cette voie.
          </Typography>
          <Typography paragraph>
            La première étape, pour devenir enseignant, est avoir une licence (Bac+3). 
            Dès la licence, des parcours ou options de préparation aux métiers de l'enseignement sont proposés 
            aux étudiants qui désirent s'engager dans cette voie.
          </Typography>
          <Typography paragraph>
          La première année du master MEEF est surtout axée sur la préparation du concours de recrutement, 
          qui a lieu à la fin de l’année, mais il faudra valider également la deuxième année car l’obtention du diplôme est indispensable pour exercer le métier.
          </Typography>
          <Typography paragraph>
          Ces masters sont organisés par les ESPE (écoles supérieures du professorat et de l’éducation) au sein des universités.
          </Typography>
          <Typography paragraph>
          À noter que les universités et instituts catholiques proposent aussi des masters MEEF, tout indiqués si vous envisagez une carrière de professeur dans le privé.
          </Typography>
          <Typography paragraph>
          Au programme de tous ces concours : deux épreuves écrites d’admissibilité et deux épreuves orales (une mise en situation professionnelle et un entretien).
          Si tout se passe bien (vous êtes admis au concours et vous avez décroché votre M1), vous poursuivez vos études en seconde année de MEEF 
          (si vous échouez au M1 mais pas au concours, vous gardez le bénéfice du concours une année).
          </Typography>
          <Typography paragraph>
          En cas d’échec au concours, vous avez la possibilité de le repasser ou vous pouvez envisager une réorientation dans un autre master 
          (au niveau M1 ou M2 selon que vous avez réussi ou non vos examens).
          La seconde année du master MEEF est considérée comme une année de formation en alternance : les étudiants deviennent fonctionnaires stagiaires 
          et suivent des cours à l’ESPE tout en effectuant un stage en responsabilité équivalant 
          à un mi-temps devant les élèves. Durant cette période, les enseignants stagiaires sont rémunérés entre 1.600 € et 1.700 € brut par mois.
          </Typography>
          




          <Link href="http://www.devenirenseignant.gouv.fr/pid33985/enseigner-au-college-ou-au-lycee-general-le-capes.html" target="_blank" rel="noopener">
            Pour en savoir davantage
          </Link>
        </main>
      </Container>
      <Footer
        title=""
        description="APIRP - Site de l'Association des Professeurs d'Italien de la Région Parisienne"
      />
    </ThemeProvider>
  );
}
