import { useState } from "react";
import "./App.css";
import Header from "../src/components/header";
import Sidebar from "../src/components/sidebar";

function App() {
  //Authentication with Firebase
  const [user, setUser] = useState({
    displayName: "Beren Boden",
    email: "beren.boden@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL:
      "https://yt3.ggpht.com/yti/ANoDKi7Q6BTSUGkX5Y9CrCk6bI1GmpXpqWMFpZ38p4rElw=s88-c-k-c0x00ffffff-no-rj-mo",
  });

  return (
    <div className="App">
      <Header userPhoto={user.photoURL} />
      <Sidebar />
      {/** If user authenticated: Show sidebar & files */}

      {/** If user not authenticated: Log in */}
    </div>
  );
}

export default App;
