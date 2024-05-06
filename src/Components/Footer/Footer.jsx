import "./footer.css";
import img from '../Images';
import { useState } from "react";
const Footer = () => {
  const [email,setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
  };
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  return (
     <footer id="footer">
      <div className="container">
        <div className="footernav">
          <div className="logo_social block_column">
            <div className="logo">
              <a href="#">
                <img src={img.FooterLogo} alt />
              </a>
            </div>
            <ul>
              <li>
                <a href="#">
                  <img src={img.Facebook} alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={img.Linkedin} alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={img.Twitter} alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={img.Youtube} alt />
                </a>
              </li>
            </ul>
          </div>
          <div className="footernewslater block_column">
            <form  id="signup-form" onSubmit={handleSubmit}>
              <div className="form-control">
                <input type="text" placeholder="Enter Your Email" id="email" value={email}
                      onChange={handleInputChange} />
                <input type="submit" className="btn btn-primary" defaultValue="Sign Up" />
              </div>
              {emailError && <div id="email-error" className="error-message">{emailError}</div>}
            </form>
            <p>
              We care about your data in our privacy policy.
            </p>
          </div>
        </div>
        <div className="footer_bottom">
          <p>
            © 2024 Copy Rights. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>

  )
}

export default Footer
