import { Component, OnInit } from '@angular/core';
import { FabricaService } from '../fabrica.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vova',
  templateUrl: './vova.component.html',
  styleUrls: ['./vova.component.css']
})
export class VovaComponent implements OnInit {
  arr: string[] = [];

  constructor(public fabricaService: FabricaService) {
  }

  ngOnInit(): void {
    this.fabricaService.getData().subscribe((arr) => {
      this.arr = arr;
    });
  }

}
