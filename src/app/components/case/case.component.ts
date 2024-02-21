import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent {
  @Input()
  public color: string;

  public getImagePath(): string {
    return 'assets/images/case-' + this.color + '.jpg';
  }
}
