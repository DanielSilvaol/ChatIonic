import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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
  conversaChat = [
    {
      mensagem: 'Olá pessoal',
      Usuario: 'Shalom'
    },
    {
      mensagem: 'Fala Shalom.',
      Usuario: 'Daniel'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chatParam = this.navParams.get("chatParam");
    this.usuarioParam = this.navParams.get("usuarioParam");
  }

  addMensagem(){
    console.log(this.msg);
    console.log(this.usuarioParam);
    this.conversaChat.push({
      mensagem: this.msg,
      Usuario: this.usuarioParam
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    console.log(this.chatParam);
    console.log(this.usuarioParam);
  }

}
