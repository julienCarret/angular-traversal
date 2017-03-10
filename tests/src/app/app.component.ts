import { Component } from '@angular/core';
import { Traverser } from '../dist';
import { FileComponent } from './file/file.component';
import { FileInfoComponent } from './file-info/file-info.component';
import { FolderComponent } from './folder/folder.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private repository: string = 'makinacorpus/angular-traversal';

  constructor(traverser:Traverser) {
    traverser.addView('view', 'file', FileComponent);
    traverser.addView('info', 'file', FileInfoComponent);
    traverser.addView('view', 'dir', FolderComponent);
  }
}
