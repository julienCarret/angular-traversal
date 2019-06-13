import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FullPathNormalizer } from './normalizer';
import { TypeMarker } from './marker';

import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { FolderComponent } from './folder/folder.component';
import { FileInfoComponent } from './file-info/file-info.component';
import {
  BasicHttpResolver,
  BACKEND_BASE_URL,
  TraversalModule,
  Resolver,
  Marker,
  Normalizer
} from '../../projects/traversal/src/public-api';


@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    FolderComponent,
    FileInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TraversalModule,
  ],
  entryComponents: [
    FileComponent,
    FolderComponent,
    FileInfoComponent
  ],
  providers: [
    {provide: Resolver, useClass: BasicHttpResolver},
    {provide: BACKEND_BASE_URL, useValue: 'https://api.github.com/repos'},
    {provide: Marker, useClass: TypeMarker},
    {provide: Normalizer, useClass: FullPathNormalizer},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
