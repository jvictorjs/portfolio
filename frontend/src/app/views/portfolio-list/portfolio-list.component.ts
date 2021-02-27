import { NavService } from './../../components/template/nav/nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})


export class PortfolioListComponent implements OnInit {

  TELEGRAM_PLATFORM_DESCRIPTION: string = 'Telegram Chatbot: services available via instant messages and commands. All my Telegram Bots are integrated with Google Apps Script and Google Sheet.';
  MOBILE_PLATFORM_DESCRIPTION: string = 'Mobile: mobile phone application';
  WEB_PLATFORM_DESCRIPTION: string = 'Web: accessible via web browser'

  BASIC_CAT: string = '⭐️ basic project'
  MODEST_CAT: string = '⭐️⭐️ modest / intermediate project'
  ADVANCED_CAT: string = '⭐️⭐️⭐️ advanced project'

  ANGULAR_DESCRIPTION: string = "Angular - Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop."
  REACT_NATIVE_DESCRIPTION: string = "React Native - Create native apps for Android and iOS using React"
  TELEGRAM_DESCRIPTION: string = "The Telegram Bot API - Allows you to create and manage Chatbots. Just simple to interact with text messages and chat buttons as we use it on a daily basis."
  GOOGLE_SHEETS_DESCRIPTION: string = "Google Sheets - Easy way to explore and organize data. Integrated With Google Apps Scripts you can automate workflows and boost productivity."
  GOOGLE_APPS_DESCRIPTION: string = "Google Apps Script - A modern JavaScript cloud-based platform to build solutions integrating all Google Services and external APIs."
  DIGITALOCEAN_DESCRIPTION: string = "Digital Ocean - One of the best cloud infraestructure provider in the world."
  TWITTER_API_DESCRIPTION: string = "Twitter API - The Twitter API enables programmatic access to Twitter in unique and advanced ways. Use it to analyze, learn from, and interact with Tweets, Direct Messages, users, and other key Twitter resources."

  constructor(private navService: NavService) {
    navService.navData = {
      title: 'All Projects List',
      icon: 'work',
      routeUrl: 'portfolio-list'
    }
  }

  ngOnInit(): void {
  }

}
