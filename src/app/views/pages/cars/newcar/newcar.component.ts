import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthRESTService } from '@services/authREST.service';
import { Butler } from '@services/butler.service';
import { DataApiService } from '@services/data-api.service'; 
import{NgxUiLoaderService} from 'ngx-ui-loader';
import { HttpClient } from  '@angular/common/http';
import { DemoFilePickerAdapter } from  './file-picker.adapter';
import {VEHICLES} from '@services/vehicles.service';


@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.scss']
})
export class NewcarComponent implements OnInit, AfterViewInit {
  returnUrl: any;

  vehicles: any;

   carType="Seleccione una!";

  form: FormGroup = new FormGroup({
    brand: new FormControl(''),
    carType: new FormControl(''),
    cod: new FormControl(''),
    description: new FormControl(''),
    displacement: new FormControl(''),
    fuelType: new FormControl(''),
    mileage: new FormControl(''),
    name: new FormControl(''),
    new: new FormControl(''),
    model: new FormControl(''),
    price: new FormControl(''),
    transmision: new FormControl(''),
    year: new FormControl(''),
  });

  submitted = false;
  public isError = false;
  public user:any={};
  public newCar:any={};
  cards$:any=[];
  defaultNavActiveId = 1;
  carImages:any[]=[];
  adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService,
    private router: Router,
    public _butler:Butler,
    private formBuilder: FormBuilder,
    public dataApiService: DataApiService,
    public AuthRESTService:AuthRESTService
    ) {

    this.vehicles=VEHICLES
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnInit(): void { 
  }
  setVehicle(selected:any){
    console.log("selected: "+this.vehicles[selected].name);
  }
  public saveCar(){  
    this.dataApiService.saveCar(this.newCar).subscribe(respose=>{
      this.router.navigate(['cars/carslist']);
    }, 
    error => {
          if(error.status==422){
          this.isError = true;
          // this.ngxService.stop("loader-01");
        }
      }
    );
  }
  public onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.carImages=this._butler.carImages; 
    this.newCar=this.form.value; 
    this.newCar.images=this.carImages;; 
    this.newCar.userId=this._butler.userd; 
    this.saveCar();
  }
  getCards(){
    this.dataApiService.getAllCards().subscribe(response => {
    this.cards$ = response
    });
  }

  ngAfterViewInit(): void {
    this.form = this.formBuilder.group(
      {        
        brand: ['', Validators.required],
        model: ['', Validators.required],
        name: ['', Validators.required],
        carType: ['', Validators.required],
        description: ['', Validators.required],
        cod: ['', Validators.required],
        price: [0, Validators.required],
      }    
    );
    this.getCards();
    // Show chat-content when clicking on chat-item for tablet and mobile devices
    document.querySelectorAll('.chat-list .chat-item').forEach(item => {
      item.addEventListener('click', event => {
        document.querySelector('.chat-content')!.classList.toggle('show');
      })
    });
  }

  backToChatList() {
    document.querySelector('.chat-content')!.classList.toggle('show');
  }

  save() {
    console.log('passs');
    
  }
}
