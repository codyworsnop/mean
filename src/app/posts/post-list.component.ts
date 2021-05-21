import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {

  // posts = [
  //   { title: "first", content: "some random content lol" },
  //   { title: "second", content: "some random content lol" },
  //   { title: "third", content: "some random content lol" },
  // ]

  @Input() posts = []
}
