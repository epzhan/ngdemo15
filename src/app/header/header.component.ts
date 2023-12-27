import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

const NAVIGATION_LINK = [
  { name: 'about', label: 'About', path: 'about' },
  { name: 'employee', label: 'Employee', path: 'employee' },
  { name: 'employeeDetail', label: 'Employee Detail', path: 'employee', value: '12' },
  { name: 'waveform', label: 'Waveform', path: 'waveform' }
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  navigationLinks = NAVIGATION_LINK;

  constructor(
    private router: Router
  ) { }

  redirect(name: string) {
    const linkitem = this.navigationLinks.find(i => i.name === name);

    if (!linkitem.value)
      this.router.navigate([`/${linkitem.path}`]);
    else
      this.router.navigate([`/${linkitem.path}`, linkitem.value])
  }
}
