import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service'
@Component({
  selector: 'app-lheader',
  templateUrl: './lheader.component.html',
  styleUrls: ['./lheader.component.css']
})
export class LheaderComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
  this.datosPorfolio.obtenerDatos().subscribe(data=>{
    console.log(data);
    this.miPorfolio=data;
  });
  }
}
