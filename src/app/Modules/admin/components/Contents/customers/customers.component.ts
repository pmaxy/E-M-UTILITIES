import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UpdateComponent } from './form/update/update.component';
import { PeriodicElement } from 'src/app/shared/components/interfaces/PeriodicElement';
import {faMobileScreen,faFileInvoiceDollar,faMoneyBillAlt,faPenToSquare,faTrashCan,faFileWord, faFileExcel,faFileCsv, faBusinessTime,faStore,faCartShopping }from '@fortawesome/free-solid-svg-icons';
import { AdminServiceService } from '../../../service/admin-service.service';

@Component({
  selector: 'app-customers',
  templateUrl:'./customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  ELEMENT_DATA!:PeriodicElement[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Action'];
  dataSource:any;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  fabusinesstime = faBusinessTime;
  faMoneyBillAlt=faMoneyBillAlt;
  faCartShopping =faCartShopping ;
  fastore=faStore;
  faFileCsv=faFileCsv;
  faFileExcel=faFileExcel;
  faFileWord=faFileWord;
  faTrashCan=faTrashCan;
  faPenToSquare=faPenToSquare;
  faFileInvoiceDollar=faFileInvoiceDollar;
  faMobileScreen=faMobileScreen;

  constructor(private dialog:MatDialog, private service:AdminServiceService){}


ngOnInit() {
  this.getAllData()
  
  
}

  // table get function
  getAllData(){
    this.service.getData().subscribe(
      (res:any)=>{
        console.log(res)
        this.ELEMENT_DATA=res
        this.dataSource=new MatTableDataSource(this.ELEMENT_DATA)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  // dialog function
  openDialog(){
    this.dialog.open(UpdateComponent,{
       enterAnimationDuration:'1000ms',
       exitAnimationDuration:'500ms',
       width:'50%',
       height:'90%',
       data:{
         
       }
     })
    }



}

