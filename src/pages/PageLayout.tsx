import { Outlet } from 'react-router';
import { Header } from '../components/Header';

export const PageLayout = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto py-10 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};
