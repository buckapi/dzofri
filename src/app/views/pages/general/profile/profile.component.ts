import { Component, OnInit,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, UntypedFormGroup, UntypedFormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthRESTService } from '@services/authREST.service';
import { Butler } from '@services/butler.service';
import { DataApiService } from '@services/data-api.service'; 
import{NgxUiLoaderService} from 'ngx-ui-loader';
import { HttpClient } from  '@angular/common/http';
import { DemoFilePickerAdapter } from  './file-picker.adapter';
import { WizardComponent as BaseWizardComponent } from 'angular-archwizard';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  returnUrl: any;

  submitted = false;
  public isError = false;
  public user:any={};
  public newPart:any={};
  cards$:any=[];
  defaultNavActiveId = 1;
  partImages:any[]=[];
  tittle1:string="Datos de empresa";
  tittle2:string="Datos de administrador";
  adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  validationForm1: UntypedFormGroup;
  validationForm2: UntypedFormGroup;

  isForm1Submitted: Boolean;
  isForm2Submitted: Boolean;
    @ViewChild('wizardForm') wizardForm: BaseWizardComponent;
  constructor(
      private http: HttpClient,
      private route: ActivatedRoute,
      private ngxService: NgxUiLoaderService,
      private router: Router,
      public _butler:Butler,
      public dataApiService: DataApiService,
      public AuthRESTService:AuthRESTService,
      public formBuilder: UntypedFormBuilder
    ) { }
 
  onSubmit(){

  }
 
  ngOnInit(): void {

    /**
     * form1 value validation
     */
    this.validationForm1 = this.formBuilder.group({
      direction : ['', Validators.required],
      rut : ['', Validators.required],
      phone : ['', Validators.required],
      facebook : ['', ],
      instagram : ['', ]
    });

    /**
     * formw value validation
     */
    this.validationForm2 = this.formBuilder.group({
      adminName : ['', Validators.required],
      adminPhone : ['', Validators.required]
    });

    this.isForm1Submitted = false;
    this.isForm2Submitted = false;

  }

  /**
   * Wizard finish function
   */
  finishFunction() {
    alert('Successfully Completed');
  }

  /**
   * Returns form
   */
  get form1() {
    return this.validationForm1.controls;
  }

  /**
   * Returns form
   */
  get form2() {
    return this.validationForm2.controls;
  }

  /**
   * Go to next step while form value is valid
   */
  form1Submit() {
    if(this.validationForm1.valid) {
      this.wizardForm.goToNextStep();
    }
    this.isForm1Submitted = true;
  }

  /**
   * Go to next step while form value is valid
   */
  form2Submit() {
    if(this.validationForm2.valid) {
      this.wizardForm.goToNextStep();
    }
    this.isForm2Submitted = true;
  }


}
