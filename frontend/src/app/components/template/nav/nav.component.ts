import { MediaMatcher } from '@angular/cdk/layout';
import { NavService } from './nav.service'
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt, faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({  // DECORATOR é o @
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  faYoutube = faYoutube
  faLinkedin = faLinkedin
  faGithub = faGithub
  faEnvelope = faEnvelope
  faFileAlt = faFileAlt

  events: string[] = [];
  opened: boolean = true;

  showOnlineUsers = false;

  ngOnInit(): void {
    if (this.mobileQuery.matches) {
      this.opened = false;
    }
  }

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private navService: NavService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher) {

    this.mobileQuery = media.matchMedia('(max-width: 800px)');

    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  switchShowOnlineUsers(): void {
    this.navService.switchShowOnlineUsers()
  }

  // STACKOVERFLOW https://stackoverflow.com/questions/53730983/angular-updating-component-value-when-service-value-changes
  get numberOfOnlineUsers(): number {
    return this.navService.numberOfOnlineUsers;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  ifMobileAndClosesSideNav(): void {
    if (this.mobileQuery.matches) {
      this.opened = false;
    }
    console.log('clicou ')
    console.log('this.mobileQuery.matches = ' + this.mobileQuery.matches)
    console.log('this.opened = ' + this.opened)
  }


  get title(): string {
    if (this.mobileQuery.matches) {
      this.opened = false;
    } else {
      this.opened = true;
    }
    return this.navService.navData.title
  }

  get icon(): string {
    return this.navService.navData.icon
  }

  get routeUrl(): string {
    return this.navService.navData.routeUrl
  }
}
