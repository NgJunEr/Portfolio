import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8" id="contact">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div>
            <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white">
              Get in <span className="text-cyan-300">touch</span>
            </h2>
            <a
              className="md:text-7xl text-4xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-400 transition duration-300"
              href="mailto:ngjuner38@gmail.com"
            >
              ngjuner38@gmail.com
            </a>
          </div>

          <div className="text-white/50 mt-12">
            <div className="mb-8">
              <p className="text-lg mb-1">Phone</p>
              <a
                href="tel:+60126166338"
                className="text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-400 transition duration-300"
              >
                +60 12 616 6338
              </a>
            </div>
            <div className="text-lg mb-8">
              <p className="font-bold">Address</p>
              <p>Cheras</p>
              <p>Bandar Damai Perdana</p>
              <p>Kuala Lumpur, 56000</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 text-center mt-8 py-12">
          <h1 className="hidden md:block text-[10rem] md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
            Ng Jun Er
          </h1>
          <h1 className="md:hidden relative text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
            Ng <br /> JunEr
          </h1>
        </div>

        <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="text-gray-200 caption text-n-4 lg:block">© 2024. All rights reserved.</p>
          <ul className="flex gap-5 flex-wrap">
            <a
              href="http://github.com"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillGithub size={30} />
            </a>
            <a
              href="http://x.com"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiOutlineTwitter size={30} />
            </a>
            <a
              href="http://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillFacebook size={30} />
            </a>
            <a
              href="http://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillInstagram size={30} />
            </a>
            <a
              href="http://telegram.com"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <FaTelegramPlane size={30} />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
