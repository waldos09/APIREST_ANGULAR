import { Component, OnInit } from '@angular/core';
import { Frase } from '../frase';
import { FraseService } from '../frase.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent implements OnInit {
  //Variable de tipo JSON
 
  listaDeFrases: Frase[]=[]
     /*
    {
      idFrase:1,
      texto: "Hola que hace",
      autor:"Jose Luis"
    },
    {
      idFrase:2,
      texto: "otra frase",
      autor:"Abarcas"
    },
    {
      idFrase:3,
      texto: "otra frase 2",
      autor:"Yo Diego"
    },
    {
      idFrase:4,
      texto: "otra frase 3",
      autor:"Perez"
    },
    {
      idFrase:5,
      texto: "otra frase 5",
      autor:"Yo Alexis"
    }
  ];
*/
  constructor(private fraseService:FraseService){}

  ngOnInit(): void {
      this.fraseService.mostrarFrases().subscribe((frases)=>(this.listaDeFrases=frases))
  }

  delete(frase:Frase):void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.fraseService.eliminarFrase(frase.idFrase).subscribe((response)=>this.fraseService.mostrarFrases()
        .subscribe((frases)=>(this.listaDeFrases=frases)))
        swalWithBootstrapButtons.fire(
          'Deleted!',
          `La frase ${frase.texto} fue eliminada.`,
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}
