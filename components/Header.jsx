import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <div className="logo font-bold text-2xl ml-12 ">LearnAcademy</div>
      <div className="btns mr-12 gap-8">
        {
          // need to add logic that does conditional rendering
        }
        <Button variant="primary">Create Community</Button>
        <Button variant="primary">Profile</Button>
        <Button variant="primary">Login</Button>
      </div>
    </div>
  );
};

export default Header;
