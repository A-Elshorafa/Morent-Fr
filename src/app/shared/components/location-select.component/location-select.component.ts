import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from '../../../core/interfaces/select-option';
import { FormSelectComponent } from "../form-select.component/form-select.component";
import { LocationService } from '../../../core/services/location.service';

@Component({
  selector: 'app-location-select',
  imports: [FormSelectComponent],
  standalone: true,
  templateUrl: './location-select.component.html',
  styleUrl: './location-select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LocationSelectComponent),
      multi: true,
    },
  ],
})
export class LocationSelectComponent implements ControlValueAccessor {
  @Input() title = 'Location';
  @Input() placeholder = 'Select location';
  @Input() variant: 'default' | 'inline' = 'default';

  options: SelectOption<number>[] = [];
  value: number | null = null;
  disabled = false;

  onChange = (value: number | null) => { };
  onTouched = () => { };

  constructor(private locationService: LocationService) {
    this.locationService.getLocations().subscribe((locations) => {
      this.options = locations.map((l) => ({
        label: l.locationName,
        value: l.locationId,
      }));
      console.log('options : ', this.options)

    });
  }


  writeValue(value: number | null): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
