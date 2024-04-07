


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import {sections} from '../sectionsArray';



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

export default function Association() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
      <Header title="" imagePath={imagePath} sections={sections} />
        <main>
          <p>L'association et ses statuts</p>
          
          <h2 style={{ textAlign: 'center', color: '#009246' }}>Présentation de l'APIRP: Association des Professeurs d'Italien de la Région Parisienne</h2>

          <p style={{ textAlign: 'left' }}>Le <strong>9 mai 1977</strong> était déclarée à la Préfecture de Police de Paris la création de <strong>« L'Amicale des professeurs d'italien de la région parisienne »</strong>. Rebaptisée <strong>« Association des professeurs d'italien de la région parisienne » (APIRP) en 1984</strong>, elle eut pour président(e)s successifs(ives) des professeurs de Collège et de Lycée de l'Éducation Nationale, Jean Constantin, Pierre Méthivier, Anne Mazire, Gabrielle Kerleroux, Ketty Zanforlini et depuis janvier 2017, Romina De Lucia. <br/><br/>
          Quarante ans après  sa création, sa vocation originelle (<strong>« établir et développer des liens de solidarité et d'amitié entre les italianistes de la région parisienne »</strong>) reste toujours d'actualité. Mais l'APIRP a évolué avec le temps. De nouvelles actions sont en effet apparues nécessaires : tout d'abord, la collecte d'informations fiables au sujet des implantations de postes dans les trois académies; ensuite, la mise en commun d'informations culturelles, de ressources pédagogiques, d'idées pour les cours; et enfin, l'entre-aide en cas de mutation, de fragilisation de poste, etc. Pour ce faire, l'APIRP entretient un dialogue régulier et constructif avec l'Inspection d'italien, en toute indépendance.<br/><br/>
          L'APIRP a <strong>élaboré une plaquette de promotion de la langue italienne</strong> à destination des parents et des élèves en situation de choix, <strong>publie un bulletin par an</strong>, réunit ses adhérents en <strong>assemblée générale</strong> au début et à la fin de chaque année scolaire et a également créé <strong>un site Internet et une page Facebook.</strong> <br/><br/>
          Elle est <strong>présente lors de manifestations culturelles italo-françaises</strong> (Forum des association italiennes du XIIIè arrondissement, Festa del libro des Blancs Manteaux, réceptions au Centre culturel et à l'Ambassade d'Italie, entre autres). <strong>Elle représente aussi tous les professeurs d'italien de l'Ile de France au Congrès annuel de la FNAI</strong> (Fédération Nationale des Associations d'Italianistes).
          <strong>Pour nous contacter : apirp.association@gmail.com</strong>
          </p>

          <h2 style={{ textAlign: 'center', color: '#009246' }}>STATUTS VOTES EN ASSEMBLÉE GÉNÉRALE EXTRAORDINAIRE DU 9 MAI 2007 ET MODIFIÉS LE 24 JANVIER 2014</h2>

          <p style={{ textAlign: 'left' }}>
          <strong>Art .1 DÉNOMINATION</strong> <br/><br/>

          Il est fondé entre les adhérents aux présents statuts une association régie par la loi du 1er juillet 1901 et le décret du 16 août 1901, sous la dénomination de « Association des Professeurs d'Italien de la Région Parisienne » dite, en abrégé, « A.P.I.R.P. »

          <br/><br/><strong>Art.2 OBJET</strong><br/><br/>

          Cette association a pour objet d'établir et de développer des liens de solidarité et d'amitié entre les italianistes de la région parisienne, et de leur permettre, au cours de réunions périodiques, d'examiner les problèmes spécifiques à leur discipline .
          <br/>
          Peuvent faire partie de l'Association tous les professeurs d'italien de la région parisienne en activité ou à la retraite, quel que soit l'ordre d'enseignement auquel ils appartiennent. Le bureau se réserve le droit d'examiner la candidature de toute autre personne désireuse d'adhérer à l'Association.

          <br/><br/><strong>Art.3. SIÈGE SOCIAL</strong><br/><br/>

          Le siège social de l'association est fixé à PARIS (75). Le siège social sera transféré par simple décision du bureau.

          <br/><br/><strong>Art.4. COMPOSITION</strong><br/><br/>

          L'association se compose :
          <br/>
          1. de membres d'honneur. Ce titre honorifique peut être conféré par le Conseil d'Administration aux personnes n'ayant pas adhéré à l'association, qui ont rendu ou rendent des services notables à celle-ci. Ils peuvent assister aux assemblées générales avec voix consultative. Ils ne sont ni électeurs, ni éligibles.
          <br/>
          2. de membres honoraires. Ce titre honorifique est conféré par le Conseil d'administration aux anciens dirigeants de l'association.
          <br/>
          3. de membres bienfaiteurs. Ce sont les personnes, physiques ou morales, qui ont apporté une contribution financière importante à l'Association. Ils participent aux assemblées générales avec voix consultatives.
          <br/>
          4. de membres actifs. Ils participent aux activités de l'Association et versent annuellement une cotisation dont le montant est fixé chaque année par le Conseil d'administration. Ils participent aux assemblées générales avec voix délibérative.

          <br/><br/><strong>Art.5. PERTE DE LA QUALITÉ DE MEMBRE</strong><br/><br/>

          La qualité de membre de l'Association se perd :
          <br/>
          par démission adressée par lettre
          <br/>
          par non-paiement de la cotisation, après 3 rappels consécutifs
          <br/>
          par radiation décidée par le Conseil d'Administration, pour motif grave, le membre intéressé ayant été invité au préalable à fournir des explications devant le Conseil d'Administration

          <br/><br/><strong>Art.6. RESSOURCES DE L'ASSOCIATION</strong><br/><br/>

          Les ressources de l'Association se composent :
          <br/>
          des cotisations versées par les membres qui en sont redevables
          <br/>
          de toute autre ressource autorisée par la loi

          <br/><br/> <strong>Art.7. CONSEIL D'ADMINISTRATION</strong><br/><br/>

          L'Association est administrée par un Conseil d'Administration élus tous les 2 ans par l'Assemblée Générale, à la majorité des présents ou représentés. Le vote par procuration est autorisé sans limitation de mandat.
          <br/>
          Le Conseil se renouvelle par moitié, tous les deux ans, les membres sortants sont rééligibles.
          <br/>
          En cas de vacance, le conseil pourvoit au remplacement du ( ou des) membre(s).
          <br/>
          Le nombre d'élus au Conseil d'Administration est décidé, lors des élections, par l'Assemblée Générale.

          <br/><br/><strong>Art.8. RÉUNIONS DU CONSEIL</strong><br/><br/>

          Le Conseil d'Administration se réunit toutes les fois que cela est nécessaire, et au moins une fois tous les 6 mois, sur convocation du président, ou sur la demande du ¼ de ses membres.
          <br/>
          Les décisions sont prises à la majorité simple des voix.
          <br/>
          En cas de partage, la voix du président est prépondérante.
          <br/>
          Les membres absents peuvent être représentés par un autre membre du conseil.
          <br/>
          Tout membre qui, sans excuse, n'aura pas assisté à 3 réunions consécutives, pourra être considéré comme démissionnaire.

          <br/><br/><strong>Art.9. LE BUREAU</strong><br/><br/>

          Le Conseil d'Administration choisit lui-même en son sein les membres du bureau composé de :
          <br/>
          Un président, si nécessaire de 3 vice-présidents (un par académie Créteil, Paris, Versailles),
          <br/>
          Un secrétaire général, si nécessaire de 2 secrétaires généraux adjoints
          <br/>
          Un trésorier, si nécessaire un trésorier adjoint
          <br/>
          Les membres du bureau sont élus pour 2 ans et les membres sortants sont rééligibles
          <br/>
          Le bureau se réunit chaque fois que nécessaire sur convocation du président ou du ¼ de ses membres.
          <br/>
          Tout membre qui, sans excuse, n'aura pas assisté à 3 réunions consécutives, pourra être considéré comme démissionnaire.
          <br/>
          Les modifications devront être adoptées à la majorité des membres présents.

          <br/><br/><strong>Art.10. ASSEMBLÉE GÉNÉRALE ORDINAIRE</strong><br/><br/>

          L'Assemblée Générale ordinaire est convoquée ordinairement une fois par an, et extraordinairement chaque fois nécessaire, par le président ou à la demande du ¼ au moins de ses membres.
          <br/>
          L'ordre du jour est fixé par le Conseil d'Administration et est indiqué sur les convocations.
          <br/>
          Les convocations doivent être envoyées au moins 15 jours à l'avance , par courrier simple par les soins du bureau.
          <br/>
          L'Assemblé Générale entend les rapports sur la gestion du Conseil d'Administration et la situation financière et morale de l'association.
          <br/>
          Elle approuve les comptes de l'exercice clos et pourvoit, s'il y a lieu au renouvellement des membres du Conseil d'Administration.
          <br/>
          Les décisions sont prises à la majorité des membres présents ou représentés.
          <br/>
          Le vote par procuration est autorisé sans limitation de mandat.
          <br/>
          Les délibérations de l'Assemblée Générale sont prises à main levée. Le scrutin à bulletin secret peut être demandé par le Conseil d'Administration ou par ¼ des membres présents.

          <br/><br/> <strong>Art.11. ASSEMBLÉE GÉNÉRALE EXTRAORDINAIRE</strong><br/><br/>

          L'Assemblée Générale Extraordinaire a seule compétence pour modifier les statuts, décider la dissolution de l'Association et l'attribution des biens de l'Association.
          <br/>
          Les décisions sont prises à la majorité des 2/3 des présents.
          <br/>
          Elle doit être convoquée spécialement à cet effet, par le président ou le 1/3 des membres de l'Association dans un délai de 15 jours avant la date fixée.
          <br/>
          La convocation doit indiquer l'ordre du jour et comporter en annexe le texte de la modification proposé.
          <br/>
          Les délibérations sont prises à main levée.

          <br/><br/> <strong>Art.12 DISSOLUTION</strong><br/><br/>

          En cas de dissolution volontaire, statutaire ou judiciaire, l'Assemblée Générale Extraordinaire, désigne un ou plusieurs liquidateurs et l'actif, s'il y a lieu, est dévolu à des œuvres ayant un caractère analogue.

          <br/><br/><strong>Art.13. RÈGLEMENT INTÉRIEUR</strong><br/><br/><br/>

          Le Conseil d'Administration peut, s'il le juge nécessaire, établir un règlement intérieur destiné à déterminer les détails d'exécution des présents statuts.

          <br/><br/> <strong>ART.14. FORMALITÉS</strong><br/><br/>

          Le Conseil d'Administration peut donner mandat exprès à toute personne en son sein pour accomplir les formalités de déclarations et de publications prévues par la loi du 1er juillet 1901 et par le décret du 16 août 1901
          <br/>
          La présidente, Les secrétaires de séance, Anne MAZIRE, Edmée N'GATOUM Olivier MORIN
          </p>

        </main>
      </Container>
      <Footer
        title=""
        description="APIRP - Site de l'Association des Professeurs d'Italien de la Région Parisienne"
      />
    </ThemeProvider>
  );
}
