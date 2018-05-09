import { Component, OnInit } from '@angular/core';
import { ShowPostService } from '../services/show-post.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss'],
  providers: [ ShowPostService ]
})
export class ShowPostComponent implements OnInit {
  public posts: any [];

  constructor(private showPostService: ShowPostService, private commonService: CommonService) { }

  ngOnInit() {
    this.getAllPost();
    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });
  }

  getAllPost() {
    this.showPostService.getAllPost().subscribe(result => {
      this.posts = result['data'];
    });
  }

}
