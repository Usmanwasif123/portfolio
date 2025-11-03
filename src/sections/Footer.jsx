import { BASE_PATH } from '../utils/basepath'
const Footer = () => {
  return (
    <footer className="c-space pt-3 pb-6 border-t border-black-300 flex flex-col items-center text-center gap-5 md:flex-row md:justify-between md:items-center md:text-left xl:max-w-[1600px] 2xl:max-w-[2000px] mx-auto w-full relative z-10 mt-5 2xl:mt-7">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/Usmanwasif123" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={`${BASE_PATH}assets/github.svg`} alt="GitHub" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={`${BASE_PATH}assets/twitter.svg`} alt="twitter" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/usman-wasif-800b8718b/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={`${BASE_PATH}assets/linkedin.svg`} alt="linkedin" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Usman Wasif. All rights reserved.</p>
    </footer>
  );
};

export default Footer;