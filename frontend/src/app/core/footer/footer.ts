import { Component, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Cross, MapPin, Phone, Mail, Clock } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Cross, MapPin, Phone, Mail, Clock })],
  exports: [LucideAngularModule],
})
export class FooterIconsModule {}

@Component({
  selector: 'app-footer',
  imports: [FooterIconsModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
