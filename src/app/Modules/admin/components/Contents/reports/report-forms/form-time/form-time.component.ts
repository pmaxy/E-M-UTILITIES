import { Component } from '@angular/core';

@Component({
 selector: 'app-form-time',
 templateUrl: './form-time.component.html',
 styleUrls: ['./form-time.component.css']
})
export class FormTimeComponent {
 fromDate!: string
 toDate!: string;

 onSubmit(): void {
    console.log(`Selected date range: ${this.fromDate} to ${this.toDate}`);
    // Placeholder for future logic to handle report filtering
 }
}
