import { Component, Input, Output, EventEmitter, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-carousel3d',
  imports: [NgStyle],
  templateUrl: './carousel3d.html',
  styleUrl: './carousel3d.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Carousel3d {
  @Input() images: string[] = [];
  @Output() imageClick = new EventEmitter<number>();

  // Must match --panel-w in carousel3d.css (400px)
  private readonly PANEL_W = 400;

  rotation = signal(0);
  dragging = signal(false);

  private _startX = 0;
  private _startRotation = 0;
  private _wasDragged = false;

  get n() { return this.images.length; }
  get step() { return 360 / this.n; }
  get radius() {
    return Math.round((this.PANEL_W / 2) / Math.tan(Math.PI / this.n));
  }

  sceneStyle() {
    return { transform: `rotateY(${this.rotation()}deg)` };
  }

  panelStyle(i: number) {
    return { transform: `rotateY(${this.step * i}deg) translateZ(${this.radius}px)` };
  }

  rotate(dir: 1 | -1) {
    this.rotation.update(r => r + dir * this.step);
  }

  onPanelClick(i: number) {
    if (!this._wasDragged) {
      this.imageClick.emit(i);
    }
  }

  private startDrag(x: number) {
    this._wasDragged = false;
    this.dragging.set(true);
    this._startX = x;
    this._startRotation = this.rotation();
  }

  private moveDrag(x: number) {
    if (!this.dragging()) return;
    const delta = x - this._startX;
    if (Math.abs(delta) > 5) this._wasDragged = true;
    this.rotation.set(this._startRotation + delta * 0.3);
  }

  private endDrag() {
    if (!this.dragging()) return;
    this.dragging.set(false);
    this.rotation.set(Math.round(this.rotation() / this.step) * this.step);
  }

  onMouseDown(e: MouseEvent) { this.startDrag(e.clientX); }
  onMouseMove(e: MouseEvent) { this.moveDrag(e.clientX); }
  onMouseUp()               { this.endDrag(); }

  onTouchStart(e: TouchEvent) { this.startDrag(e.touches[0].clientX); }
  onTouchMove(e: TouchEvent)  { this.moveDrag(e.touches[0].clientX); }
  onTouchEnd()                { this.endDrag(); }
}
