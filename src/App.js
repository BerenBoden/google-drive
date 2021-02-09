import { useState } from "react";
import "./App.css";
import Header from "../src/components/header";
import Sidebar from "../src/components/sidebar";
import FilesView from "./components/filesView/FilesView";
import SideIcons from "./components/sideIcons";
import GDriveLogo from './media/google-drive.png';
import { auth, provider } from './firebase';

function App() {
  //Authentication with Firebase
  const [user, setUser] = useState();

  const handleLogin = () => {
    if(!user){
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
      })
    }
  }

  return (
    <div className="App">
    {
      user ? (
        <>
        <Header userPhoto={user.photoURL} />
        <div className="app__main">
          <Sidebar />
          <FilesView />
        </div>
        </>
      ) : (
        <div className="app__login">
          <img src={GDriveLogo} alt="Google Drive" />
          <button onClick={handleLogin}>Log into Google Drive</button>
        </div>
      )
    }

      {/** If user not authenticated: Log in */}
    </div>
  );
}

export default App;
