 class WitchRoom {
     constructor() {
         this.element = utils.createElem('div', '902px', S_HEIGHT, 'images/witchroom.png');
         screen.components.push(this.element);
         this.toWRoom = utils.createElem('div', '85px', '45px', 'images/playbtn.png');
         this.element.appendChild(this.toWRoom);
         this.toWRoom.style.position = 'absolute';
         this.toWRoom.style.top = '550px';
         this.toWRoom.style.left = '475px';
         this.gretel = utils.createElem('div', '82px', '177px', 'images/Mgretel.png');
         this.gretel.style.position = 'absolute';
         this.gretel.style.top = '500px';
         this.gretel.style.left = '350px';
         this.element.appendChild(this.gretel);

     }
 }