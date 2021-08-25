import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditlyServicesService } from 'src/app/creditly-services.service';
declare var $: any;

@Component({
  selector: 'app-auto-lease-car-info',
  templateUrl: './auto-lease-car-info.component.html',
  styleUrls: ['./auto-lease-car-info.component.scss']
})
export class AutoLeaseCarInfoComponent implements OnInit {

  masterData = JSON.parse(localStorage.getItem('masterData'));
  userData = JSON.parse(localStorage.getItem('loginResponse'));

  vehiclesList = [];
  autoMakeList = [];
  autoModelsList = [];
  autoLeaseVehiclesForm: FormGroup;
  autoModelsMainList = [];
  vehiclesMainList = [];
  autoVehicleListFormFlag: boolean = false;
  filterItemsList = [];
  masterBanksList = [];
  autoMainsList = [];
  findCarFlag: boolean = true;

  constructor(private router: Router,
    private CreditlyServices: CreditlyServicesService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.autoMakeList = this.masterData.autoMakes;
    this.autoModelsMainList = this.masterData.autoModels;
    this.autoModelsList = this.autoModelsMainList;
    this.masterBanksList = this.masterData.banks;
    this.autoMainsList = this.masterData.autoMains;
    this.getVehiclesList();
    this.loadAutoLeaseVehiclesForm();
  }

  /* open vehicle infomation modal when we click on any of the car */
  public openVehicleInfoModal(vehicle): void {
    localStorage.setItem('selectedVehicleId', vehicle.id);
    if (vehicle.id != undefined && vehicle.id != null) {
      let url = "/#/creditly/auto-lease/vehicelInfo";
      window.open(url);
    }
  }

  public loadAutoLeaseVehiclesForm() {
    this.autoLeaseVehiclesForm = this.fb.group({
      make: [null, Validators.required],
      model: [null],
      manufacturingYear: [null]
    });
  }

  public getVehiclesList(): void {
    this.CreditlyServices.getAllVehiclesList().subscribe((vehicleListResp) => {
      console.log("vehicleListResp", vehicleListResp);
      if (vehicleListResp.responseStatusCode == 0) {
        this.vehiclesMainList = vehicleListResp.vehicle;
        localStorage.setItem('vehicleMainList', JSON.stringify(this.vehiclesMainList));
        this.vehiclesList = this.vehiclesMainList;
        this.findCarFlag = false;
      }
    })
  }

  public makeChangeHandler(eve): void {
    // this.autoLeaseVehiclesForm.reset();
    console.log("makeEventValue", eve.target.value);
    this.autoModelsList = this.autoModelsMainList;
    if (eve.target.value != null && this.autoLeaseVehiclesForm.value.make != undefined && this.autoLeaseVehiclesForm.value.make != null) {
      this.autoModelsList = this.autoModelsList.filter(item => item.makeID == eve.target.value);
      this.autoLeaseVehiclesForm.patchValue({
        model: null
      })
    } else {
      console.log("make else if case")
      this.autoLeaseVehiclesForm.reset();
      this.vehiclesList = this.vehiclesMainList;
      this.autoModelsList = this.autoModelsMainList;
    }
  }

  public modelChangeHandler(eve): void {
    console.log("modelChangeHandler", eve.target.value);
    if (eve.target.value != null) {
      console.log("model if case")
      const manufactItem = this.autoModelsList.filter(item => item.id == eve.target.value);
      console.log("manufactItem", manufactItem)
      this.autoLeaseVehiclesForm.patchValue({
        manufacturingYear: manufactItem[0]?.id
      });
    } else {
      console.log("model else case")
      this.vehiclesList = this.vehiclesMainList;
      this.autoModelsList = this.autoModelsMainList;
    }
  }

  public findCar(): void {
    this.findCarFlag = true;
    console.log("find car event");
    this.autoVehicleListFormFlag = this.autoLeaseVehiclesForm.valid ? true : false;
    this.vehiclesList = this.vehiclesMainList;
    console.log("make", this.autoLeaseVehiclesForm.value.make);
    console.log("model", this.autoLeaseVehiclesForm.value.model);
    console.log("this.autoVehicleListFormFlag", this.autoVehicleListFormFlag);
    if (this.autoLeaseVehiclesForm.value.make != undefined && this.autoLeaseVehiclesForm.value.make != null) {
      if (this.autoLeaseVehiclesForm.value.make == undefined || this.autoLeaseVehiclesForm.value.model != undefined) {
        console.log("if case")
        /* console.log("make", this.autoLeaseVehiclesForm.value.make);
        console.log("model", this.autoLeaseVehiclesForm.value.model); */
        this.autoLeaseVehiclesForm.patchValue({
          make: this.autoLeaseVehiclesForm.value.make,
          model: this.autoLeaseVehiclesForm.value.model
        })
        // item.makeID == this.autoLeaseVehiclesForm.value.make ||
        this.vehiclesList = this.vehiclesList.filter(item => (item.modelID == this.autoLeaseVehiclesForm.value.model));
        // this.autoModelsList = this.autoModelsMainList;
        this.findCarFlag =false;

      } else if (this.autoLeaseVehiclesForm.value.make != undefined && this.autoLeaseVehiclesForm.value.model != undefined
        && this.autoLeaseVehiclesForm.value.make != null && this.autoLeaseVehiclesForm.value.model != null) {
        console.log("else if case")
        this.autoLeaseVehiclesForm.patchValue({
          make: this.autoLeaseVehiclesForm.value.make,
          model: this.autoLeaseVehiclesForm.value.model
        })
        this.vehiclesList = this.vehiclesList.filter(item => (item.makeID == this.autoLeaseVehiclesForm.value.make && item.modelID == this.autoLeaseVehiclesForm.value.model));
        this.findCarFlag=false;
      } else if (this.autoLeaseVehiclesForm.value.make != undefined || this.autoLeaseVehiclesForm.value.model == undefined) {
        console.log("if case")
        /* console.log("make", this.autoLeaseVehiclesForm.value.make);
        console.log("model", this.autoLeaseVehiclesForm.value.model); */
        this.autoLeaseVehiclesForm.patchValue({
          make: this.autoLeaseVehiclesForm.value.make,
          model: this.autoLeaseVehiclesForm.value.model
        })
        // item.makeID == this.autoLeaseVehiclesForm.value.make ||
        this.vehiclesList = this.vehiclesList.filter(item => (item.makeID == this.autoLeaseVehiclesForm.value.make));
        // this.autoModelsList = this.autoModelsMainList;
        this.findCarFlag=false;
      }
      else {
        console.log("else case")
        this.vehiclesList = this.vehiclesMainList;
        this.findCarFlag=false;
      }
    } else {
      alert("select Make Type");
    }
  }

  public handleFilterItem(filterItem): void {
    // console.log("filterItem", filterItem);
    this.filterItemsList.push(filterItem);
  }

  public reomveFilterItem(item, ind): void {
    // this.filterItemsList.splice(0,item);
    // delete this.filterItemsList[item];
    console.log("item", item)
    const index: number = this.filterItemsList.indexOf(item);
    if (index !== -1) {
      this.filterItemsList.splice(index, 1);
    }
  }

}
