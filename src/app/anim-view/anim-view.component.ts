import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anim-view',
  templateUrl: './anim-view.component.html',
  styleUrls: ['./anim-view.component.css']
})
export class AnimViewComponent implements OnInit {

  @Input()
  animPath: string

  @Input()
  height: number=400;

  @Input()
  width: number=400;

  @Input()
  animSpeed:number=1.0;

  animConfig: Object;
  private anim:any;

  constructor() {
  }

  ngOnInit() {
    this.animConfig = {
      path: this.animPath,
      renderer: 'svg',
      autoplay: true,
      loop: true
    };
  }

  animationCreated(anim: any) {
    this.anim=anim;
    this.setSpeed();
  }

  setSpeed() {
    this.anim.setSpeed(this.animSpeed);
}

}
