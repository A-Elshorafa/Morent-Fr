import { Injectable, signal } from "@angular/core";

Injectable()
export class FilterLayoutService {
  open = signal(false);

  toggle() {
    this.open.update(v => !v);
  }

  openPanel() {
    this.open.set(true);
  }

  close() {
    this.open.set(false);
  }
}
