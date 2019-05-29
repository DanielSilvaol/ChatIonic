import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public opcao: string;
  public usuario: string;

  notes = [
    {
      id: '1',
      title: 'Cinema',
    },
    {
      id: '2',
      title: 'Curiosidades',
    },
    {
      id: '3',
      title: 'Esportes',
    }
  ];


  constructor(public navCtrl: NavController) {
  }

  onSelectChat() {
    console.log(this.usuario);
    console.log(this.opcao);
    this.navCtrl.push('ChatPage', {
      usuarioParam: this.usuario,
      chatParam: this.opcao
    });

  }
}
