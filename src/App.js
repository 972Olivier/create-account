import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/footer";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faListAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faListAlt);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [bigTitle, setBigTitle] = useState("Create account");

  return (
    <div className="App">
      <Header title={bigTitle}></Header>
      <main>
        <Form
          title={setBigTitle}
          name={name}
          setName={setName}
          mail={email}
          setEmail={setEmail}
          pass={password}
          setPass={setPassword}
          conf={confirmPass}
          setConf={setConfirmPass}
        ></Form>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
