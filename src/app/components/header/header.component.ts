import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  public color: string;

  public getImagePath(): string {
    return `assets/images/airpods-${this.color}.png`;
  }
}
