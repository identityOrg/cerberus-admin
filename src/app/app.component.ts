import {Component} from '@angular/core';
import {ScopePage, ScopeService} from '../../dist/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cerberus-admin';
  scopes: ScopePage | null;

  constructor(private scopeService: ScopeService) {
    scopeService.getScopes().subscribe(next => {
      this.scopes = next;
    });
  }
}
