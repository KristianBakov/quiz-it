import React, { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar/navbar";
interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
