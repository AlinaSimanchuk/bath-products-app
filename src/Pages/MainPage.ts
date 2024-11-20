import { Component } from "../Abstract/Componets";

export class MainPage extends Component {
  stateUpdate: boolean = false;
  constructor(parent: HTMLElement) {
    super(parent, "main", ["main_pages"]);


    new Component(this.root, "p", ["main_title"], 'Будущие коллекции',);

    const imageDiv = new Component(this.root, "div", ["main_imageBlock"], null);

    new Component(imageDiv.root, "img", ["imageBlock_image"], null, ["src",'alt'], ["../assets/mainPage1.png",'cart']);
    new Component(imageDiv.root, "img", ["imageBlock_image"], null, ["src",'alt'], ["../assets/mainPage2.png",'cart']);


}
renderWithUpdate(): void {
  if (!this.stateUpdate) {
    this.update();
    this.stateUpdate = true;
  }
  this.Render();
}

update(): void {}

}
