import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: "<h1>Hellp Geeks from inline template!</h1>", // If you want to add multiple lines then use `` instead of ''.
  styleUrls: ['./app.component.scss']
  // styles: [`h1{color: red}`]
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
