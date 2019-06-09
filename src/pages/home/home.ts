import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {ChatService} from "../../app/chat.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public iconUser: string;
  public opcao: string;
  public usuario: string;
  public userExistent:boolean;
  notes;
  icons;
  constructor(public navCtrl: NavController, public chatSevice: ChatService){
    this.notes = this.chatSevice.notes;
    this.icons = this.chatSevice.icons;
  }

  onSelectChat() {
    this.userExistent = false;
    for (let item of this.chatSevice.conversaChat) {
      if (item.Usuario == this.usuario && item.sala == this.opcao){
        alert("Username já existente no chat");
        this.userExistent = true;
        break;
      }
    }

    if(!this.userExistent){
      this.navCtrl.push('ChatPage', {
        salaSelecionada:this.opcao,
        usuarioParam: this.usuario,
        chatParam: this.opcao,
        icon: this.iconUser
      });
    }
  }
}
