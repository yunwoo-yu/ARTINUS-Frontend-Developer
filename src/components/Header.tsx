import { LogoTop } from '../assets/Icons';

export const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-5xl py-8 mx-auto">
        <h1 className="max-w-40">
          <span className="sr-only">Artinus 과제 </span>
          <LogoTop className="w-full" />
        </h1>
      </div>
    </header>
  );
};
