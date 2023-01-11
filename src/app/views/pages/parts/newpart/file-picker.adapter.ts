 import { FilePreviewModel } from 'ngx-awesome-uploader';
// import { FilePreviewModel } from '../assets/file-picker/src/lib/file-preview.model';//
import { HttpRequest, HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { FilePickerAdapter } from '../assets/file-picker/src/lib/file-picker.adapter';
import { FilePickerAdapter } from 'ngx-awesome-uploader';
import { Butler } from '@services/butler.service';

export class DemoFilePickerAdapter extends FilePickerAdapter {
  constructor(
    private http: HttpClient,
    public _butler:Butler
     ) {
    super();
  }
  public uploadFile(fileItem: FilePreviewModel) {
    const form = new FormData();
    form.append('file', fileItem.file);
    const api = 'https://db.buckapi.us:3333/api/containers/tixsImages/upload';
    const req = new HttpRequest('POST', api, form, {reportProgress: true});
    return this.http.request(req)
    .pipe(
      map( (res: HttpEvent<any>) => {
          if (res.type === HttpEventType.Response) {
         this._butler.file=res.body.result.files.file;
          console.log("Nombre: ",this._butler.file[0].name);
         this._butler.images.push('https://db.buckapi.us:80/api/server/local-storage/tixsImages'+this._butler.file[0].name);
          return res.body.id.toString();
       
        } else if (res.type ===  HttpEventType.UploadProgress && res.total  !== undefined) {
            // Compute and show the % done:
            const UploadProgress = +Math.round((100 * res.loaded) / res.total);
            return UploadProgress;
        }
      })
      );
  }
    public removeFile(fileItem:any): Observable<any> {
    const removeApi = 'https://db.buckapi.us/api/containers/tixsImages/upload';
    return this.http.post(removeApi, {});
    }
}