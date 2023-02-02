import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// import { Button } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import { Header } from './Components/Header';
import { FeaturedPost } from './Components/FeaturedPost';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <Container maxWidth='lg' >
      <Header/>
      <FeaturedPost/>
    </Container>
    </ThemeProvider>
  );
}

export default App;


