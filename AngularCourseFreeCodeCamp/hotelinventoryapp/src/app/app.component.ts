import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: "<h1>Hellp Geeks from inline template!</h1>", // If you want to add multiple lines then use `` instead of ''.
  styleUrls: ['./app.component.scss'],
  // styles: [`h1{color: red}`]
})
export class AppComponent {
  // ! (Definite Assignment Assertion)
  // This is the "definite assignment assertion operator" in TypeScript. It tells the compiler:
  // "Trust me, I will assign a value to this property before it’s used, even if it doesn't look like it right now."
  // Normally, TypeScript would complain if you don’t initialize a non-optional field:
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  // ViewContainerRef is a class in Angular that represents a container within the view, where you can dynamically add,
  // remove, or manipulate components or templates at runtime.
  // It is Angular’s way of giving you programmatic control over part of the DOM.
  // * It's typically obtained using @ViewChild() or @ViewChildren() with { read: ViewContainerRef }.
  // With ViewContainerRef, you can programmatically say:
  // * “Insert this component here”
  // * “Clear everything in the container”
  // * “Create this piece of template on the fly”
  title = 'hotelinventoryapp';
  role = 'Admin';

  // You need ngAfterViewInit() when you want to interact with child components or DOM elements that Angular has rendered using @ViewChild() or @ViewChildren().
  // * Angular will automatically populate reference property of type @ViewChild after ngAfterViewInit() lifecycle hook.
  // * @ViewChild typically used when you want to access methods, properties, or DOM elements of a child component from the parent component's TypeScript class.
  // * If you try to use a @ViewChild reference before the view is initialized (e.g., in the constructor or ngOnInit()), the reference will be undefined.
  // @ViewChild(HeaderComponent, { static: true })
  // The { static: true } or { static: false } option tells Angular when to resolve the @ViewChild reference during the component’s lifecycle.
  // Setting static: true means:
  // Resolve the view query before Angular runs ngOnInit() — during the component's initialization phase.
  // This makes the @ViewChild available early, inside ngOnInit().
  // { static: true }: It indicates that this component(@ViewChild) is actually safe to use inside ngOnInit() lifecycle hook.
  // Use when the element/component is always present in the template (i.e., not inside *ngIf, *ngFor, etc.).
  // Setting static: true only when you ensure that your @ViewChild component does't contain any asynchronous code inside ngOnInit().

  // Setting static: false means:
  // Resolve the view query after Angular has fully initialized the view — after ngAfterViewInit().
  // The @ViewChild reference will not be available in ngOnInit(), only in ngAfterViewInit().
  // Use when the element/component is conditionally rendered, e.g., inside *ngIf, *ngFor, etc.
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   // Accessing and manipulating property of 'RoomsComponent' component using 'componentRef'.
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
