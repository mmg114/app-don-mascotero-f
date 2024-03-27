import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
FormsModule
@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [SliderModule,FormsModule],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})
export class FiltrosComponent {

  rangeValues: number[] = [20, 80];
}
