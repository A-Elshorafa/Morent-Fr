import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationSelectComponent } from "../../../../shared/components/location-select.component/location-select.component";
import { FormTimeComponent } from '../../../../shared/components/time-select.component/time-select.component';
import { FormDateComponent } from '../../../../shared/components/date-select.component/date-select.component';

@Component({
  selector: 'app-rental-info',
  imports: [ReactiveFormsModule, LocationSelectComponent, FormTimeComponent, FormDateComponent],
  standalone: true,
  templateUrl: './rental-info.component.html',
  styleUrl: './rental-info.component.css',
})
export class RentalInfoComponent {
  @Input({ required: true }) group!: FormGroup;

  get pickUp(): FormGroup {
    return this.group.get('pickUp') as FormGroup;
  }

  get dropOff(): FormGroup {
    return this.group.get('dropOff') as FormGroup;
  }
}
