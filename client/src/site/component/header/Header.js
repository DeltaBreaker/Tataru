import { useEffect } from "react";
import HeaderMenu from "./HeaderMenu";

const NAME = "Endwalkers";
const SUBTEXT = "The end may be nigh, but our bond lasts forever";

export default function Header() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./scripts/header.js";
    script.async = true;

    document.body.append(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div class="header p-2 shadow" id="header">
      <h1 class="text-center main-header">{NAME}</h1>
      <h2 class="text-center sub-header">{SUBTEXT}</h2>
      <div id="header-menu">
        <HeaderMenu />
        <a href="/">
          <img class="header-icon" id="header-icon" src="./icon.png"></img>
        </a>
      </div>
    </div>
  );
}
