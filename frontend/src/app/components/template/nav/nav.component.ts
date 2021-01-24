import { MediaMatcher } from '@angular/cdk/layout';
import { HeaderService } from './nav.service'
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({  // DECORATOR é o @
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;



  ngOnInit(): void {
  }




  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private HeaderService: HeaderService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }



  get title(): string {
    return this.HeaderService.headerData.title
  }

  get icon(): string {
    return this.HeaderService.headerData.icon
  }

  get routeUrl(): string {
    return this.HeaderService.headerData.routeUrl
  }
}