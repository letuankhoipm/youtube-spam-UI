import { Component, OnInit } from '@angular/core';
import { HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) public platformId: string) { }

  public scrolled: boolean = false;
  public awake: boolean = false;
  public display: boolean = false;
  public stretching: boolean = false;
  public fuelsLogo = 'assets/icons/b.png';
  public fuelsLogoW = 'assets/icons/w.png';

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled = window.scrollY > 30;
      this.awake = window.scrollY > 100;
      if (window.scrollY > 30) {
        this.display = true;
        this.fuelsLogo = '/assets/icons/w.png';
      } else {
        this.fuelsLogo = '/assets/icons/b.png';
        this.display = false;
      }
    }
  }

  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  showMobileNav() {
    this.stretching = !this.stretching;
  }

  hiddenMobileNav() {
    this.stretching = !this.stretching;
  }

  ngOnInit() {
  }




}
