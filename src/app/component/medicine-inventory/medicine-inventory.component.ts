import { Component, OnInit, ViewChild } from '@angular/core';
import { medicine } from '../../_model/user.model';
import { medicineService } from '../../_service/medicine.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-medicine-inventory',
  templateUrl: './medicine-inventory.component.html',
  styleUrl: './medicine-inventory.component.scss'
})
export class MedicineInventoryComponent implements OnInit{

  medicineList!: medicine[];
  displayedColumns: string[] = ["productName","type","pricePerPack","stock","expiryDate","manufacturer","action"];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public service: medicineService, ){}

  ngOnInit(): void {
    this.LoadAllMedicine();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  LoadAllMedicine(){
    this.service.GetAllMedicines().subscribe(
      item => {
        this.medicineList = item;
        this.dataSource = new MatTableDataSource<medicine>(this.medicineList);
      },
      error => {
        console.error('Error loading all medicines:', error);
      }
    )
  }


}


