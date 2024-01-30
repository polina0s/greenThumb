import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/instagram.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import Twitter from '../../assets/images/twitter.svg';
import Youtube from '../../assets/images/youtube.svg';
import social from './social.module.scss';

export function Social() {
  return (
    <div className={social.cont}>
      <a className={social.link} href="">
        <Youtube />
      </a>
      <a className={social.link} href="">
        <Facebook />
      </a>
      <a className={social.link} href="">
        <Twitter />
      </a>
      <a className={social.link} href="">
        <Instagram />
      </a>
      <a className={social.link} href="">
        <Linkedin />
      </a>
    </div>
  );
}
