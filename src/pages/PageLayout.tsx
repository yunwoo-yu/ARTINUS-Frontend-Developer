import type { PropsWithChildren } from "react";
import { Header } from "../components/Header";

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      {children}
    </div>
  );
};
