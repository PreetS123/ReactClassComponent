import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// import { Button } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import { Header } from './Components/Header';
import { FeaturedPost } from './Components/FeaturedPost';
import { Grid } from '@mui/material';
import { featuredPosts, sidebar } from './Data/Data';
import { PostCard } from './Components/PostCard';
import { Sidebar } from './Components/Sidebar';
import { Main } from './Components/Main';
import { makeStyles } from '@mui/styles';
import { Footer } from './Components/Footer';


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
      <br/>
      <Grid item xs={12} md={8} spacing={4} lg={12}>
          {
            featuredPosts.map((post)=>(
              <PostCard post={post} key={post.title}/>
            ))
          }
      </Grid>
      <Grid container spacing={5} style={{marginTop:'20px'}}>
        <Main title='From the Firehouse'/>
        <Sidebar title={sidebar.title}
         description={sidebar.description}
         archives={sidebar.archives}
         social={sidebar.social}
        />
      </Grid>
    </Container>
    <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;


