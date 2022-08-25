import './App.css';
import Profile from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <div className="appMain" >
      <Header />
      <Nav />
      <div className='appContent'>
        <Routes>
          <Route path="/" element={<Profile data={props.data.profile} addPost={props.addPost} updateTextArea={props.updateTextArea} />} />
          <Route path="/dialogs/*" element={<Dialogs data={props.data.dialogs} addDialog={props.addDialog} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}




export default App;
