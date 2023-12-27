import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) { }

  redirect(path: string) {
    this.router.navigate(['/' + path]);
  }

  redirectDetail(path: string, id: string) {
    this.router.navigate(['/' + path, id])
  }
}
