import { Component } from "./Abstract/Componets";
import { Footer } from "./Common/Footer";
import { Header } from "./Common/Header";
import { Router } from "./Common/Router";
import { Catalog } from "./Pages/CatalogPage";
import { Information } from "./Pages/InformationPage";

import { MainPage } from "./Pages/MainPage";

import "./sass/style.scss";

class App {
  constructor(parent: HTMLElement) {
    const wrap = new Component(parent, "div", ["wrapper"]);
    new Header(wrap.root);

    const main = new Component(wrap.root, "main");
    const links = {
      "#": new MainPage(main.root),
      "#catalog": new Catalog(main.root),
      "#information": new Information(main.root),
    };
    new Router(links);

    new Footer(wrap.root);
  }
}

declare global {
  interface Window {
    app: App;
  }
}

window.app = new App(document.body);
