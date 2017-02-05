import {Component, OnInit, Input} from '@angular/core';
import {ReferenceInfo} from "../reference-info.model";

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.css']
})
export class ConnectorComponent implements OnInit {

  @Input() startX: number;
  @Input() startY: number;
  @Input() endX: number;
  @Input() endY: number;
  width: number;
  constructor() { }

  ngOnInit() {
    this.width = 4;
  }

  isLeftToRight() {
    return this.endX > this.startX;
  }

  isTopToBottom() {
    return this.endY > this.startY;
  }

  isVertical() {
    return this.startX == this.endX;
  }

  isHorizontal() {
    return this.startY == this.endY;
  }

  getLeft() {
    return this.isLeftToRight() ? this.startX : this.endX;
  }

  getWidth() {
    return this.isLeftToRight() ? this.endX - this.startX : this.startX - this.endX;
  }

  getLeftTop() {
    return this.isLeftToRight() ? this.startY : this.endY;
  }

  getRightTop() {
    return this.isLeftToRight() ? this.endY : this.startY;
  }

  getHorizontalCenter() {
    return (this.endX + this.startX) / 2.0
  }

  getVerticalTop() {
    return this.isTopToBottom() ? this.startY : this.endY;
  }

  getHeight() {
    return this.isTopToBottom() ? this.endY - this.startY :  this.startY - this.endY;
  }
}
