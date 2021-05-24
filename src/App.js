import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import UploadPage from './components/UploadPage';

const App = () => {

  const links = [
    { value: "Home", url: "/" },
    { value: "Upload", url: "/upload" },
    { value: "About", url: "/about" }
  ];

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <NavBar links={links} />
          <HomePage />
        </Route>

        <Route exact path='/upload'>
          <NavBar links={links} />
          <UploadPage />
        </Route>

        <Route path='/'>
          <NavBar links={links} />
          <ErrorPage />
        </Route>

      </Switch>
    </div>
  );
}

const ErrorPage = (props) => {
  return <h1>Error page</h1>;
}

export default App;
