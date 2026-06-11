import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//import AOS from 'aos';
// @ts-ignore: No type declarations for CSS import
// import 'aos/dist/aos.css';

// AOS.init({
//   duration: 1000,
//   once: true
// });

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
