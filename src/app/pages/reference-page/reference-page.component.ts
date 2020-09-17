import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reference-page',
  templateUrl: './reference-page.component.html',
  styleUrls: ['./reference-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
