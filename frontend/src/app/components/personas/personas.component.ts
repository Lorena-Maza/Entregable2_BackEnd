import { Component, OnInit } from '@angular/core';
import {PersonaService} from '../../services/persona.service'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas = [];
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getPersonas()
      .subscribe(
        res => {
          this.personas = res.content;       
          
        },
        err => console.log(err)
      )
  }

}
