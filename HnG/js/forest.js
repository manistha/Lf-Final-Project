
 class Forest {
     constructor() {
         this.element = utils.createElem('div', '902px', S_HEIGHT, 'images/witch-house.jpg');
         screen.components.push(this.element);
         this.toWRoom = utils.createElem('div', '100px', '100px', 'images/blank.png');
         this.element.appendChild(this.toWRoom);
         this.toWRoom.style.position = 'absolute';
         this.toWRoom.style.top = '550px';
         this.toWRoom.style.left = '575px';
         this.toWRoom.style.cursor = 'pointer';
         this.gretel = utils.createElem('div', '42px', '92px', 'images/Sgretel.png');
         this.gretel.style.position = 'absolute';
         this.gretel.style.top = '570px';
         this.gretel.style.left = '280px';
         this.element.appendChild(this.gretel);
         this.breadcrumb = utils.createElem('div', '40px', '40px', 'images/bread-crumb.png');
         this.breadcrumb.style.position = 'absolute';
         this.breadcrumb.style.top = '630px';
         this.breadcrumb.style.left = '320px';
         this.element.appendChild(this.breadcrumb);
         this.breadcrumb.onmouseover = () => {
             this.breadcrumb.style.cursor = 'pointer';
         }

         this.breadcrumb.onclick = () => {
             this.gretel.style.background = "url('images/gretel-bend.png')";
             this.gretel.style.top = '600px';
             this.gretel.style.left = '290px';
             this.gretel.style.width = '65px';
             this.gretel.style.height = '62px';
             this.showconvo(jData.forest.speech1 + jData.forest.speech2);
         }


     }

     showconvo(data) {
         this.speech = utils.createConvo(data);
         this.element.appendChild(this.speech);
         setTimeout(() => this.element.removeChild(this.speech), 5000);

     }
 }