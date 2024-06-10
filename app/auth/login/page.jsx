import React from "react";
import Input from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
const pages = () => {
  return (
    <div>
      <form action="">
        <h1>Learn Academy</h1>
        <h2>Log in to Learn Academy</h2>
        <div>
          <Input />
          <Input type="password" placeholder="password" />
        </div>
        <Button variant="outline">Login</Button>
        <div>Don't have an account? sign up</div>
      </form>
    </div>
  );
};

export default pages;
