import { Component, NgModule } from '@angular/core';
import { LucideAngularModule, Cross } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Cross })],
  exports: [LucideAngularModule],
})
export class LandingIconsModule {}

@Component({
  selector: 'app-footer',
  imports: [LandingIconsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
