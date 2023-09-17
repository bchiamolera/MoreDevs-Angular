import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  templateUrl: './ex11.component.html',
  styleUrls: ['./ex11.component.css']
})
export class Ex11Component {
  images: string[] = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/400',
    'https://picsum.photos/200/500'
  ];

  modalOpen: boolean = false;
  modalImage: any = '';

  openModal(image: string) {
    this.modalOpen = true;
    this.modalImage = image;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalImage = null;
  }
}
