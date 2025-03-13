import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${isDarkMode && "dark"}`}>
      <footer className="w-full bg-white drop-shadow-md bottom-0 left-0 right-0 z-10 dark:bg-gray-800">
        <br />
        <br />
        <p className="text-black text-center dark:text-white mb-2">
          Cinemarker
        </p>
        <p className="text-black text-center dark:text-white">
          This site does not store any files on our server, we are only linked
          to the media which is hosted on 3rd party services.
        </p>
        <br />
        <br />
      </footer>
    </div>
  );
}

export default Footer;
