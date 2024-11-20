import { Page } from "../Abstract/Inteface";

export class Router {
  constructor(public links: Record<string, Page>) {
    window.onhashchange = () => {
      this.openPage();
    };

    this.openPage();
  }

  openPage(): void {
    Object.values(this.links).forEach((el) => el.Remove());

    const url = window.location.hash.slice(1);

    if (url === "catalog") {
      this.links["#catalog"].renderWithUpdate();
    } else if (url === "information") {
      this.links["#information"].renderWithUpdate();
    } else {
      this.links["#"].renderWithUpdate();
    }
  }
}
