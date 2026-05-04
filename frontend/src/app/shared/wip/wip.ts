import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wip',
  imports: [RouterLink],
  templateUrl: './wip.html',
})
export class Wip {
  @Input() specialty = 'Especialidad';
}
