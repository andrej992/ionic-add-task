import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public language:any = "";

  constructor(private translateService: TranslateService) {
  }



  set_default_language(dLng){
      this.translateService.setDefaultLang(dLng);
  }

  set_language(){
    this.translateService.use(this.language)

  }

  get_device_language(){
      return this.translateService.getBrowserLang();
  }

  translate(key) :string{
    let value:string = "";
    this.translateService.get(key).subscribe(val=> {value = val});
    return value;
  }
}
