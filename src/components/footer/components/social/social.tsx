import Facebook from '../../../../assets/images/facebook.svg';
import Instagram from '../../../../assets/images/instagram.svg';
import Linkedin from '../../../../assets/images/linkedin.svg';
import Twitter from '../../../../assets/images/twitter.svg';
import Youtube from '../../../../assets/images/youtube.svg';
import social from './social.module.scss';

export function Social() {
  return (
    <div className={social.cont}>
      <a href="">
        <Youtube />
      </a>
      <a href="">
        <Facebook />
      </a>
      <a href="">
        <Twitter />
      </a>
      <a href="">
        <Instagram />
      </a>
      <a href="">
        <Linkedin />
      </a>
    </div>
  );
}
