import React from "react";
import Container from "../Container";
import Logo from "./Logo"
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Categories from "./Categories";

interface NavbarProps {
  currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps>= ({currentUser}) => {
  console.log({currentUser});
  
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      
      <Categories/>
    </div>
  );
};

export default Navbar;
