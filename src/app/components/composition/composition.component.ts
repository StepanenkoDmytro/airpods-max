import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.css']
})
export class CompositionComponent {

  @Input()
  public color: string;

  public getImagePath(): string {
    return 'assets/images/side-' + this.color + '.jpg';
  }
}
