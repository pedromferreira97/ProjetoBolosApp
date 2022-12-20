import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { ReadStream } from 'fs';
import { Receitas } from 'src/app/model/receitas.model';
import { DatabaseService } from 'src/app/servico/database.service';
import { UtilityService } from 'src/app/servico/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  receitas: Receitas[] = [];
  imagem = "https://nicopaneteria.com.br/wp-content/uploads/2022/09/BOLO-DE-BEIJINHO-616x411.jpeg"
  constructor(private datab: DatabaseService,
    private alert: AlertController,
    private util: UtilityService,
    private action: ActionSheetController) {}
  
  ngOnInit(): void {
    this.util.mensagemCarregando("Aguarde...", 1500);
    this.datab.getReceita().subscribe(results => this.receitas = results);
  }

  mostrarReceita(){
    
  }
}
