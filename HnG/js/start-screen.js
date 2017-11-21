class StartScreen {
     constructor() {
         this.element = utils.createElem('div', S_WIDTH, S_HEIGHT, 'images/start-page.jpg');
         this.element.style.position = 'relative';
         screen.components.push(this.element);
         this.playbtn = utils.createElem('div', '80px', '40px', 'images/playbtn.png');
         this.element.appendChild(this.playbtn);
         this.playbtn.style.position = 'absolute';
         this.playbtn.style.top = '550px';
         this.playbtn.style.left = '475px';
         this.gameName = utils.createElem('div', '270px', '50px', 'images/game-name.png');
         this.gameName.style.position = 'absolute';
         this.gameName.style.top = '480px';
         this.gameName.style.left = '375px';
         this.element.appendChild(this.gameName);
     }
 }