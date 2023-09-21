import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ElementService } from "../../service/element.service";
import { Element } from "../../model/element";


@Component({
  selector: 'app-sorting-page',
  templateUrl: './sorting-page.component.html',
  styleUrls: ['./sorting-page.component.css']
})
export class SortingPageComponent implements OnInit {

  enterSearchId: number;

  enterStr: string;
  currArray: number[];
  sortedArray: number[];

  maxArr: number;

  showArray = false;
  isCreated = false;

  arrayForShow: any[];

  constructor(private elementService: ElementService) {

  }

  ngOnInit(): void {
    this.getMaxArr();
  }

  showSort(enterSearchId: number) {
    this.elementService.getElementsByArrId(enterSearchId).subscribe(
      (elements) => {
        this.arrayForShow = elements;
      }
    )
    this.showArray = true;
  }

  onSubmit() {
    this.currArray = (this.enterStr.replace(/\s/g,'')).split(',').map(Number);
    this.sortedArray = this.bubbleSort(this.currArray);

    this.sendArrayToBackend(this.sortedArray);

    this.isCreated = true;
    this.getMaxArr();
  }

  sendArrayToBackend(arr: number[]) {
    for (let n = 0; n < arr.length; n++) {
      let currElem = new Element();
      currElem.elem = arr[n];
      currElem.arr = this.maxArr + 1;
      currElem.sorting = n + 1;

      this.elementService.postElement(currElem).subscribe(
        () => { }
      );
    }
  }

  getMaxArr() {
    this.elementService.getMaxArr().subscribe(
      (maxArr) => {
        this.maxArr = maxArr;
      }
    )
  }


  bubbleSort(arr: number[]) {
    for (let n = 0; n < arr.length; n++) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr;
  }
}
