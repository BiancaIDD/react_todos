import Navbar from "../../components/navbar/Navbar";
import Azul from "./img/azul.png";
import "./Sign_in.css";

export default function SignIn() {
  return (
    <div className="sign__conteiner">
      <Navbar />
      <div className="sign__box">
        <div className="sign__title">
          <h1>Sign In</h1>
          <img className="sign__azul" src={Azul} />
        </div>
        <form>
          <label for="Username">Username: </label>
          <input type="Text" id="Username" />
          <label for="Password">Password: </label>
          <input type="password" id="Password" />
          <input className="buton" type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  );
}
