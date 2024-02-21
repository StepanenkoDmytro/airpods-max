import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-choose-color',
  templateUrl: './choose-color.component.html',
  styleUrls: ['./choose-color.component.css']
})
export class ChooseColorComponent {
  public colors: string[] = ['black', 'white', 'green', 'red', 'blue'];

  @Input()
  public activeColor: string;
  @Output()
  public changeColorAction: EventEmitter<string> = new EventEmitter<string>();

  public selectColor(color: string): void {
    this.changeColorAction.emit(color);
  }
}
