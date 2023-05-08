import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  tweetMenssage: string = ""
  
  tweetMaxLength: number = 240
  tweetRemain: number = this.tweetMaxLength

  constructor(private service: MessagesService){}

  sendTweet() {
    this.service.addMessages(this.tweetMenssage)
    this.tweetMenssage = ""
    this.tweetRemain = this.tweetMaxLength

    alert(this.service.getMessages())
  }

  changeTweet() {
    this.tweetRemain = this.tweetMaxLength - this.tweetMenssage.length
  }
}
