import { useState } from "react";
import StepTwo from "./StepTwo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// console.log(checkPassWord);
const Form = ({
  name,
  setName,
  mail,
  setEmail,
  pass,
  setPass,
  conf,
  setConf,
  title,
}) => {
  //   console.log(mail);
  //   console.log(pass);
  //   console.log(conf);
  const [contain, setContain] = useState("visible");
  const [contain2, setContain2] = useState("hidden");
  const [contain3, setContain3] = useState("inactive");
  const [seeOrNot, setSeeOrNot] = useState("password");
  const [seeOrNot1, setSeeOrNot1] = useState("password");
  //   console.log(contain, contain2);
  const [message, setMessage] = useState("");
  console.log(contain3);
  //   console.log(name);
  const seePasswordOrNot = () => {
    seeOrNot === "password" ? setSeeOrNot("text") : setSeeOrNot("password");
  };
  const seePasswordOrNot1 = () => {
    seeOrNot1 === "password" ? setSeeOrNot1("text") : setSeeOrNot1("password");
  };
  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          //   console.log(pass);
          //   console.log(conf);
          //   console.log("ceci est ====>", message);
          if (contain3 === "inactive") {
            if (pass !== conf) {
              setMessage("Les mots de passe ne sont pas identiques");
            } else {
              setMessage("");
              setContain("hidden");
              setContain2("visible");
              // setContain3("")
              title("Results");
            }
          } else {
            setMessage("");
            setContain("visible");
            setContain2("hidden");
            // setContain3("")
            title("Create account");
            setContain3("inactive");
          }
        }}
      >
        <div className={`box1 ${contain}`}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="nom prénom"
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="mail">Email</label>
          <input
            type="email"
            id="mail"
            placeholder="email@lereacteur.io"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <div className="containPassIcon">
            <input
              className={
                message === "Les mots de passe ne sont pas identiques" &&
                "passError"
              }
              type={seeOrNot}
              id="password"
              placeholder="EEEiii444R2022"
              onChange={(event) => setPass(event.target.value)}
            />
            <FontAwesomeIcon
              className="icon"
              icon="eye"
              onClick={seePasswordOrNot}
            />
          </div>
          <label htmlFor="confirm">Confirm password </label>
          <div className="containPassIcon">
            <input
              className={
                message === "Les mots de passe ne sont pas identiques" &&
                "passError"
              }
              type={seeOrNot1}
              id="confirm"
              placeholder="EEEiii444R2022"
              onChange={(event) => setConf(event.target.value)}
            />
            <FontAwesomeIcon
              className="icon"
              icon="eye"
              onClick={seePasswordOrNot1}
            />
          </div>
          {/* ternaire compare password est indique si pas identiques  est affiche div */}
          <div>{message}</div>
          <button>Register</button>
        </div>

        {/* <div className={`box2 ${contain2}`}>
          <div>
            <p>Name: {name}</p>
            <p>Email: {mail}</p>
            <p>Password: {pass}</p>
          </div>
          <button
            onClick={() => {
              //   console.log("here it's change");
              setContain3("active");
            }}
          >
            Edit your information
          </button>
        </div> */}
        <StepTwo
          name={name}
          mail={mail}
          pass={pass}
          contain2={contain2}
          setContain3={setContain3}
        ></StepTwo>
      </form>
    </section>
  );
};

export default Form;
