import ServerStatus from "@/modules/ServerStatus";
import { Component } from "solid-js";

const Main: Component = () => {
    return (
        <main>
            im the page
            <ServerStatus />
        </main>
    );
  };
  
  export default Main;