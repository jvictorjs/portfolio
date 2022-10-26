
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
  displayedColumns = ['name', 'platform', 'launched_year', 'total_apis', 'total_apis_owned', 'category', 'website', 'techs', 'github_link'];

  ANGULAR_DESCRIPTION: string = "Angular - Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop."
  REACT_NATIVE_DESCRIPTION: string = "React Native - Create native apps for Android and iOS using React"
  TELEGRAM_DESCRIPTION: string = "The Telegram Bot API - Allows you to create and manage Chatbots. Just simple to interact with text messages and chat buttons as we use it on a daily basis."
  GOOGLE_SHEETS_DESCRIPTION: string = "Google Sheets - Easy way to explore and organize data. Integrated With Google Apps Scripts you can automate workflows and boost productivity."
  GOOGLE_APPS_DESCRIPTION: string = "Google Apps Script - A modern JavaScript cloud-based platform to build solutions integrating all Google Services and external APIs."
  DIGITALOCEAN_DESCRIPTION: string = "Digital Ocean - One of the best cloud infrastructure provider in the world."
  TWITTER_API_DESCRIPTION: string = "Twitter API - The Twitter API enables programmatic access to Twitter in unique and advanced ways. Use it to analyze, learn from, and interact with Tweets, Direct Messages, users, and other key Twitter resources."

  ngOnInit() {
    this.dataSource = new ProjectDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  getPlatformDescription(platform: string): string {
    switch (platform) {
      case 'Web':
        console.log('platform = ' + platform)
        return 'Web: accessible via web browser'
        break;
      case 'Mobile':
        console.log('platform = ' + platform)
        return 'Mobile: mobile phone application'
        break;
      case 'Telegram Chatbot':
        console.log('platform = ' + platform)
        return 'Telegram Chatbot: services available via instant messages and commands. All my Telegram Bots are integrated with Google Apps Script and Google Sheet.'
        break;
      default:
        console.log('platform = ' + platform)
        return 'description default'
        break;
    }
  }

  getPlatformIcon(platform: string): string {
    switch (platform) {
      case 'Web':
        return 'desktop_windows'
      case 'Mobile':
        return 'phone_android'
      case 'Telegram Chatbot':
        return 'chat'
      default:
        return 'icon default'
    }
  }

  getCategoryDescription(category: string): string {
    switch (category) {
      case '⭐️':
        console.log('category = ' + category)
        return '⭐️ Basic project'
        break;
      case '⭐️⭐️':
        console.log('category = ' + category)
        return '⭐️⭐️ Modest project'
        break;
      case '⭐️⭐️⭐️':
        console.log('category = ' + category)
        return '⭐️⭐️⭐️ Advanced project'
        break;
      default:
        console.log('category = ' + category)
        return 'category default'
        break;
    }
  }

  getGithubDivClass(github_link: string): string {
    switch (github_link) {
      case '':
        return 'hide'
      default:
        return 'div-github_link'
    }
  }

  getWebsiteText(website: string, website_text: string): string {
    switch (website_text) {
      case '':
        return website
      default:
        return website_text
    }
  }
}
