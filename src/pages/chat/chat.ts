import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChatService} from "../../app/chat.service";
import {AngularFireDatabase} from "angularfire2/database";

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
  conversaChat;
  sala;
  iconSelect;
  constructor(public navCtrl: NavController, public navParams: NavParams, public chatSevice: ChatService,private db: AngularFireDatabase) {
    this.sala = this.navParams.get("salaSelecionada");
    console.log(db);

    this.chatParam = this.navParams.get("chatParam");
    this.usuarioParam = this.navParams.get("usuarioParam");
    this.iconSelect = this.navParams.get("icon");
  }

  ngOnInit (){
    this.conversaChat = this.chatSevice.fetchNotes(this.sala);
  }
  addMensagem() {
    this.db.list("/conversaChat/").push({
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
