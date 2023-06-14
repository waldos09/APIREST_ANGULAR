import { Component, OnInit } from '@angular/core';
import { Frase } from '../frase';
import { FraseService } from '../frase.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-frase-form',
  templateUrl: './frase-form.component.html',
  styleUrls: ['./frase-form.component.css']
})

export class FraseFormComponent implements OnInit{
  titulo:string="Frases Form";
  texto: Frase=new Frase();

  constructor(private fraseService:FraseService,private router:Router,
    private activatedRoute:ActivatedRoute){
    
  }

  ngOnInit(): void {
      this.mostrarFrase()
  }

  mostrarFrase():void{
    let id;
    this.activatedRoute.params.subscribe(params=>{id=params['id']})
    if(id){
      this.fraseService.leerFrase(id).subscribe((frase)=>this.texto=(frase))
    }
  }

  create():void{
    this.fraseService.crearFrase(this.texto).subscribe((frase)=>{
      this.router.navigate(["/apiFrases/frases"])
    })
  }


}