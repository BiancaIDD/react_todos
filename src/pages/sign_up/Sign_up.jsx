import Navbar from "../../components/navbar/Navbar";
import "./Sign_up.css";
import DinoN from "./img/naranja.png";

export default function SignUp() {
  return (
    <div className="sign__conteiner">
      <Navbar />
      <div className="sign__box">
        <div className="sign__title">
          <img className="sign__dino" src={DinoN} />
          <h1>Sign Up</h1>
        </div>
        <form>
          <input className="sign__form" placeholder="Enter your name" type="text" />
          <input className="sign__form"placeholder="Enter your email" type="email" />
          <input className="sign__form"placeholder="Enter your password" type="password" />
          <input className="sign__form"
            placeholder="please enter your password again"
            type="password"/>
          <div className="sign__other">
            <span>Other ways to enter:</span>
            <ul className="sign__redes">
              <li>
                <svg
                  width="41"
                  height="36"
                  viewBox="0 0 41 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M36.9 31.3906H32.8V11.7715L20.5 20.1797L8.2 11.7715V31.3906H4.1V4.48438H6.56L20.5 14.0137L34.44 4.48438H36.9M36.9 0H4.1C1.8245 0 0 1.99555 0 4.48438V31.3906C0 32.58 0.431963 33.7206 1.20086 34.5616C1.96976 35.4025 3.01261 35.875 4.1 35.875H36.9C37.9874 35.875 39.0302 35.4025 39.7991 34.5616C40.568 33.7206 41 32.58 41 31.3906V4.48438C41 1.99555 39.155 0 36.9 0Z"
                    fill="black"/>
                </svg>
              </li>
              <li>
                <svg
                  width="41"
                  height="38"
                  viewBox="0 0 41 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.48635 0C3.33924 0 0 3.0949 0 6.93856V31.0614C0 34.9051 3.33924 38 7.48635 38H21.5929V23.1443H17.3546V17.7959H21.5929V13.2264C21.5929 9.63632 24.0972 6.34006 29.866 6.34006C32.2016 6.34006 33.9288 6.54788 33.9288 6.54788L33.793 11.5425C33.793 11.5425 32.0315 11.5271 30.1094 11.5271C28.0291 11.5271 27.6955 12.4154 27.6955 13.8902V17.7959H33.9583L33.6854 23.1444H27.6955V38H33.5136C37.6608 38 41 34.9051 41 31.0614V6.9386C41 3.09494 37.6608 3.79999e-05 33.5136 3.79999e-05H7.48631L7.48635 0Z"
                    fill="black"/>
                </svg>
              </li>
            </ul>
          </div>
          <input className="buton" type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}
