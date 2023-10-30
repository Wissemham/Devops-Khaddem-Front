import { Component, OnInit } from '@angular/core';
import { DepartementServiceService } from './departement-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Devops-Angular';

  departements !: any[];

  constructor(private departementService: DepartementServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.loadDepartements();
  }

  loadDepartements(): void {

    this.departementService.getDepartements().subscribe(
      (data) => {
        this.departements = data;
      }
      //,
      /*(error) => {
        console.error('Error loading departements:', error);
      }*/
    );
  }

}
