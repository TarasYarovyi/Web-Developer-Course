const newspaper = {
  articles: [],
  addArticle: function (title, content) {
    this.articles.push({
      title: title,
      content: content,
    });
  },
  removeArticle: function (title) {
    for (let i = 0; i < this.articles.length; i++) {
      const element = this.articles[i];
      if (element.title === title) {
        this.articles.splice(i, 1);
      }
    }
  },
  showArticles: function () {
    for (let i = 0; i < this.articles.length; i++) {
      const element = this.articles[i];
      console.log(element.title);
      console.log(element.content);
    }
  },
};

newspaper.addArticle("Tittle1", "Some content content content ");
newspaper.addArticle("Tittle2", "Some content content content ");
newspaper.addArticle("Tittle3", "Some content content content ");
newspaper.removeArticle("Tittle2");
newspaper.showArticles();
