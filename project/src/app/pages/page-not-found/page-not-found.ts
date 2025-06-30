import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFound {}
