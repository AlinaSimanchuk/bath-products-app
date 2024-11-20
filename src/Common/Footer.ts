import { Component } from "../Abstract/Componets";

export class Footer extends Component {
    constructor(parent: HTMLElement) {
    super(parent, "footer", ["footer"]);
    
    new Component(this.root, "h2", ['footer_title'], 'Контакты');
    

    const gridDiv = new Component(this.root, "div", ["footer__grid"], null);

    new Component(gridDiv.root, "h3", ['phone'], 'Номер телефона:');
    new Component(gridDiv.root, "h3", ['phoneNumber'], '+375336388288');
    new Component(gridDiv.root, "h3", ['email'], 'Email:');
    new Component(gridDiv.root, "h3", ['emailNumber'], 'em000418@g.bstu.by');
    new Component(gridDiv.root, "h3", ['adress'], 'Адрес:');
    new Component(gridDiv.root, "h3", ['adressNumber'], 'г. Брест, ул. Машерова 21 ');
    new Component(gridDiv.root, "h3", ['social'], 'Социальные сети:');

    const photoDiv = new Component(gridDiv.root, "div", ["footer__photoDiv"], null);

    new Component(photoDiv.root, "img", ["instagram"], null, ["src",'alt'], ["../assets/instagram.png",'cart']);
    new Component(photoDiv.root, "img", ["telegram"], null, ["src",'alt'], ["../assets/telegram.png",'cart']);
    new Component(photoDiv.root, "img", ["vk"], null, ["src",'alt'], ["../assets/vk.png",'cart']);


    new Component(gridDiv.root, "h3", ['footer__post'], 'Симончук Алина Вячеславовна ЭМ-4',);
    }
}
