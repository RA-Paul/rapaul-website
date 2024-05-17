import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/classes/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  articleList: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.getArticleList();
  }

  getArticleList() {
    this.articleList = this.articleService.getArticleList();
  }
}
