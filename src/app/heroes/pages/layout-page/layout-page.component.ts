import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent implements OnInit {

  public SidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Nuevo', icon: 'add', url: './nuevo' },
    { label: 'Buscar', icon: 'search', url: './search' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
