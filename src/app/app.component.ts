import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Html_Css_Angular';

  public color: string = 'blue';

  public changeColor(color: string): void {
    this.color = color;
  }
}
