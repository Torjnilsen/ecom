import React, { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";
 
interface Props {
  children: ReactElement;
}
 
const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
 
export default RootLayout;
 