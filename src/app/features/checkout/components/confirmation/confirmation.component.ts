import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmation',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent {
  @Input({ required: true }) group!: FormGroup;

}
