import { Component } from "../Abstract/Componets";

export class Header extends Component {
  constructor(parent: HTMLElement) {
    super(parent, "div", ["header"]);

    new Component(this.root, "img", ["header_logo"], null, ["src",'alt'], ["../assets/logo.png",'logo']);



    new Component(this.root, "a", null, "Каталог", ["href"], ["#"]);
    new Component(this.root, "a", null, "Главная", ["href"], ["#"]);
    new Component(this.root, "a", null, "Клиентам", ["href"], ["#"]);


    const Info = new Component(
      this.root,
      "div",
      ["headerProfile"],
      null
  );
    new Component(Info.root, "img", ["profile"], null, ["src",'alt'], ["../assets/headerProfile.png",'profile']);
    new Component(Info.root, "img", ["cart"], null, ["src",'alt'], ["../assets/headerCart.png",'cart']);


    
  }
}
