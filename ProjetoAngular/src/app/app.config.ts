import { ApplicationConfig } from '@angular/core';
import { Routes } from '@angular/router'; // Importe Routes e RouterModule
import { provideClientHydration } from '@angular/platform-browser';
import { provideRoutes } from '@angular/router'; // Importe provideRoutes para fornecer rotas


const appRoutes: Routes = [

  
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRoutes(appRoutes), // Fornecer rotas usando a função provideRoutes
    provideClientHydration()
  ]
};
