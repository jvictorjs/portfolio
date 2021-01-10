
import { Project } from './../project.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
// import { ProductRead2DataSource, ProductRead2Item } from './product-read2-datasource';
import { ProjectDataSource } from './projects-table.datasource';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
/*
export class ProjectsTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
export class ProjectsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<ProductRead2Item>;
  @ViewChild(MatTable) table: MatTable<Project>;
  dataSource: ProjectDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name','platform','launched_year','category','website','techs'];

  ngOnInit() {
    this.dataSource = new ProjectDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
