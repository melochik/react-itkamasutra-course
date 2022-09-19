import './App.css';
import Profile from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { UsersContainer } from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className="appMain" >
      <Header />
      <Nav />
      <div className='appContent'>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}




export default App;
