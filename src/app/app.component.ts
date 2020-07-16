import { Component } from "@angular/core";
import { LoadingService } from "./loading/loading.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  constructor(private _loading: LoadingService) {}

  start() {
    this._loading.start();
    setTimeout(() => {
      this._loading.stop();
    }, 3000);
  }
}
