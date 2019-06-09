import {Injectable} from "@angular/core";
import {AngularFireDatabase} from 'angularfire2/database'
@Injectable()
export class ChatService {
  constructor (private db: AngularFireDatabase){
  }
  notes = [
    {
      title: 'Cinema'
    },
    {
      title: 'Curiosidades'
    },
    {
      title: 'Esportes'
    }
  ];

  icons = [
    {
      img: 'https://cdn6.f-cdn.com/contestentries/753244/20994643/57c189b564237_thumb900.jpg'
    },
    {
      img: 'https://www.userlytics.com/front/img/home-features-1.png'
    },
    {
      img: 'https://img.elo7.com.br/product/zoom/D55EB1/emoji-20x20cm-papel-fotografico.jpg'
    },
    {
      img: 'http://s2.glbimg.com/GFHUa5KeFPDTmwtAVjWl1A7oqTQ=/695x0/s.glbimg.com/po/tt2/f/original/2014/07/14/imagem0.jpg'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_960_720.png'
    },
    {
      img: 'https://gorilaclube.vteximg.com.br/arquivos/ids/186385-500-500/Mouse_Pad_Emoji_Lingua_para_Fo_802.jpg?v=636189688665400000'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?v=1480481059'
    },
    {
      img: 'http://s2.glbimg.com/bHl6X0V5DG0ifyvbudUyzRCXjyk=/695x0/s.glbimg.com/po/tt2/f/original/2016/07/15/emojione.jpg'
    },
    {
      img: 'https://www.littledayout.com/wp-content/uploads/articles/2017/07-July/20170715-WorldEmojiDay/DabEmoji.jpg'
    },
    {
      img: 'https://conteudo.imguol.com.br/blogs/8/files/2014/12/emojiconfuso-e1417810856921.jpg'
    }
  ];


  conversaChat = [
    {
      sala: 'Cinema',
      mensagem: 'Olá pessoal',
      Usuario: 'Shalom',
      Icon: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y)'
    },
    {
      sala: 'Curiosidades',
      mensagem: 'Fala Shalom.',
      Usuario: 'Daniel',
      Icon: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y)'
    }
  ];

  fetchNotes (sala){
    return this.db.list("/conversaChat",{
      query:{
        orderByChild:'sala',
        equalTo:sala
      }
    });
  }


}
