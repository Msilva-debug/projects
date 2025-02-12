import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character-interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public character: Character[] = [
    {
      name: 'Trunks',
      power: 9999,
    }
  ];
}
