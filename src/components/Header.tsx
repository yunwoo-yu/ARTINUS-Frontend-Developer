import { Link } from 'react-router';
import { LogoTop } from '../assets/Icons';
import { WEB_PATH } from '../pages/Routes';

export const Header = () => {
  return (
    <header className="w-full shadow-md">
      <div className="max-w-5xl py-8 mx-auto">
        <h1 className="max-w-40">
          <Link to={WEB_PATH.home()} className="block">
            <span className="sr-only">Artinus 과제 </span>
            <LogoTop className="w-full" />
          </Link>
        </h1>
      </div>
    </header>
  );
};
