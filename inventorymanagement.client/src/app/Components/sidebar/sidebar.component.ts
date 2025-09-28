import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  innerWidth = window.innerWidth;

  onCloseClick() {
    this.close.emit();
  }
}
