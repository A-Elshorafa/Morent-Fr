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
export class LocationSelectComponent implements ControlValueAccessor, OnInit {
  @Input() title = 'Location';
  @Input() placeholder = 'Select location';

  options: SelectOption<number>[] = [];
  value: number | null = null;
  disabled = false;

  onChange = (value: number | null) => { };
  onTouched = () => { };

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe((locations) => {
      this.options = locations.map((l) => ({
        label: l.name,
        value: l.id,
      }));
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
