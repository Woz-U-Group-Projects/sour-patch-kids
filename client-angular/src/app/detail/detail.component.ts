import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params["id"];
        console.log(params["id"]);
  });
  }
}
