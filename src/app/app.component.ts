import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MensajeRepartoComponent } from './components/mensaje-reparto/mensaje-reparto.component';
import { FiltrosComponent } from './components/filtros/filtros.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule, 
    StyleClassModule,
    RippleModule,
    NavBarComponent,
    MensajeRepartoComponent,
    FiltrosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'don-mascotero';
}
