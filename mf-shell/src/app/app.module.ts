import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { getManifest } from '@angular-architects/module-federation';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomManifest } from 'src/utils/config';
import { buildRoutes } from 'src/utils/routes';

const manifest = getManifest<CustomManifest>();
const routes = buildRoutes(manifest);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}