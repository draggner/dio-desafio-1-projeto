import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  tweetMenssage: string = ""
  
  tweeMaxLength: number = 240
  tweetRemain: number = this.tweeMaxLength

  changeTweet() {
    this.tweetRemain = 240 - this.tweetMenssage.length
  }

  sendTweet() {
    alert(this.tweetMenssage)
  }
}
