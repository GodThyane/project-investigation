import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Router} from '@angular/router';
import {Item} from '../../models/item';
import {CommunicationService} from '../../services/communication.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  nameItem: string;
  selections: string[];
  isEvaluated: string;

  itemActual: Item;
  itemChild: Item;

  constructor(
    private router: Router, private route: ActivatedRoute, private communicationService: CommunicationService
  ) {
  }

  ngOnInit(): void {
    this.itemActual = this.communicationService.item;
    this.getName();
  }


  // tslint:disable-next-line:typedef
  getName() {
    this.route.params.forEach((params: Params) => {
      this.nameItem = params.nameItem;
      this.itemChild = this.getNameByName();
    });
  }

  getNameByName(): Item {
    for (const item of this.itemActual.items) {
      if (item.name == this.nameItem) {
        return item;
      }
    }
  }

  getScore(): number {
    let sum = 0;
    console.log(this.itemChild.items);
    for (const item of this.itemChild.items) {
      for (const item2 of item.items) {
        sum += item2.grade_scale.assestment * this.itemActual.max_grade * item2.relative_weigth;
      }
    }
    return parseFloat(sum.toFixed(2));
  }

  getPercentege(): string {
    return (this.getScore() * this.itemChild.relative_weigth).toFixed(2);
  }

}
