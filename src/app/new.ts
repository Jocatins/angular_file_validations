import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sphinx-resto';

  servers = [];
  fileSize;
  file;

  fileSelected($event) {
    //Property 'files' does not exist on type 'HTMLElement'
    let file = $event.target.files[0];
    this.file = file;

    if (file) {
      let fileSize = 0;
      if (file.size > 1024 * 1024)
        this.fileSize =
          (Math.round((file.size * 100) / (1024 * 1024)) / 100).toString() +
          'MB';
      else
        this.fileSize =
          (Math.round((file.size * 100) / 1024) / 100).toString() + 'KB';
    }
  }

  fileSuccess() {
    let input = document.querySelector('input');
    let span = document.querySelector('span');

    input.addEventListener('change', () => {
      let files = input.files;

      if (files.length > 0) {
        if (files[0].size > 10 * 1024) {
          span.innerText = 'File size exceeds 10kb';
          return;
        }
      }
      span.innerText = '';
    });
  }

  // onAddServer() {
  //   this.servers.push('Another Server');
  // }
  // onRemoveServer(id: number) {
  //   const position = id + 1;
  //   this.servers.splice(position, 1);
  // }
}
if (file) {
  let fileSize = 0;
  if (file.size > 100 * 1024) this.fileSize = 'file size exceeded';
  else
    this.fileSize =
      (Math.round((file.size * 100) / (1024 * 1024)) / 100).toString() + 'MB';
}
