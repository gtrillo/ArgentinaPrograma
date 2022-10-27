import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-lexperiencia',
  templateUrl: './lexperiencia.component.html',
  styleUrls: ['./lexperiencia.component.css']
})
export class LexperienciaComponent implements OnInit {
  experienciaList:any;
  
  
  constructor(private datosPorfolio:PortfolioService){
  }
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      console.log(data.experiencia);
      this.experienciaList=data.experiencia;
    });
  }
  

}
