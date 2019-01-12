class Idea {
  constructor(title, content, quality) {
    this.title = title;
    this.content = content;
    this.id = Date.now();
    this.quality = quality || 'swill';
  }


  static addIdea(idea) {
    let ideasArray = JSON.parse(localStorage.getItem('ideas')) || [];
    ideasArray = [...ideasArray, idea];
    localStorage.setItem('ideas', JSON.stringify(ideasArray));
  }

  static deleteIdea(id) {
    let ideasArray = JSON.parse(localStorage.getItem('ideas'));
    ideasArray = ideasArray.filter(idea => idea.id != id);
    localStorage.setItem('ideas', JSON.stringify(ideasArray));
  }

  static updateQuality(e) {
    const upArrow = {
      'swill': 'great',
      'great': 'extraordinary',
      'extraordinary': 'extraordinary'
    };
    const downArrow = {
      'extraordinary': 'great',
      'great': 'swill',
      'swill': 'swill'
    };

    let ideasArray = JSON.parse(localStorage.getItem('ideas'));
    let newQuality;
    ideasArray.forEach(idea => {
      if (idea.id == e.target.parentElement.dataset.id) {
        switch(e.target.className) {
          case 'upvote':
            newQuality = upArrow[idea.quality];
            idea.quality = upArrow[idea.quality];
            break;
          case 'downvote':
            newQuality = downArrow[idea.quality];
            idea.quality = downArrow[idea.quality];
            break;
          default:
            return;
        }
      }
    })
    localStorage.setItem('ideas', JSON.stringify(ideasArray));
    return newQuality;
  }
}