import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  templateUrl: './ex10.component.html',
  styleUrls: ['./ex10.component.css']
})
export class Ex10Component {
  showMore: boolean = false;
  text: string = 'mais';

  toggleShowMore() {
    this.showMore = !this.showMore;
    if (this.showMore) {
      this.text = 'menos';
    }
    else {
      this.text = 'mais';
    }
  }
}
