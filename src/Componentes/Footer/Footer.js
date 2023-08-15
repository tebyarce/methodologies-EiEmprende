import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


import "./Footer.css"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className='footer-content'>
        <div className='logo-una'>
          <center><img
            src="logouna.webp"
            witdh="80px"
            height="70px"
            alt='logo UNA'>
          </img></center>
        </div>
        <div className='copyright'>
          <p>{`Copyright © ${year}. Todos los derechos reservados. USTDS-Escuela de Informática-UNA`}</p>
        </div>
        <div className='socials'>
          <center>
            <ul>
              <li><a href='https://www.facebook.com/EmprendeEIF'><FacebookIcon /></a></li>
              <li><a href='https://www.instagram.com/ei_emprende_una/'><InstagramIcon /></a></li>
              <li><a href='https://api.whatsapp.com/send?phone=50687602703'><WhatsAppIcon /></a></li>
              <li><a href='mailto:infoemprende@una.cr'><MailOutlineIcon /></a></li>
            </ul>
          </center>
        </div>
      </div>
    </footer>);
};

export default Footer;