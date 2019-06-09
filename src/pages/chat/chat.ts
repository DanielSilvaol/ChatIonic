import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChatService} from "../../app/chat.service";

// import {ChatService} from '../../app/chat.service'
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more chatParam on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  msg;
  user;
  chatParam;
  usuarioParam;
  conversaChat=[];
  sala;
  iconSelect;
  constructor(public navCtrl: NavController, public navParams: NavParams, public chatSevice: ChatService) {
    this.sala = this.navParams.get("salaSelecionada");
    for (let item of this.chatSevice.conversaChat) {
      if(item.sala == this.sala){

        this.conversaChat.push({
          sala: item.sala,
          mensagem: item.mensagem,
          Usuario: item.Usuario,
          Icon:item.Icon
        })

      }
    }
    this.chatParam = this.navParams.get("chatParam");
    this.usuarioParam = this.navParams.get("usuarioParam");
    this.iconSelect = this.navParams.get("icon");
  }

  addMensagem() {
    this.conversaChat.push({
      sala: this.sala,
      mensagem: this.msg,
      Usuario: this.usuarioParam,
      Icon:this.iconSelect
    });
    this.msg = ""
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    console.log(this.chatParam);
    console.log(this.usuarioParam);
  }

}
