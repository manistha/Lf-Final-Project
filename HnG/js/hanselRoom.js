 class HanselsRoom {
     constructor() {
         this.element = utils.createElem('div', '902px', S_HEIGHT, 'images/hansels-room.jpg');
         screen.components.push(this.element);
         this.toForest = utils.createElem('div', '85px', '45px', 'images/playbtn.png');
         this.element.appendChild(this.toForest);
         this.toForest.style.position = 'absolute';
         this.toForest.style.top = '550px';
         this.toForest.style.left = '475px';
         this.note = utils.createElem('div', '40px', '40px', 'images/playbtn.png');
         this.element.appendChild(this.note);
         this.note.style.position = 'absolute';
         this.note.style.top = '450px';
         this.note.style.left = '290px';
         this.note.state = 0;
         this.note.opened = false;
         this.bread = utils.createElem('div', '38px', '26px', 'images/Sbread.png');
         this.bread.style.position = 'absolute';
         this.bread.style.top = '425px';
         this.bread.style.left = '710px';
         this.element.appendChild(this.bread);
         screen.pickables.push(this.bread);
         this.gretel = utils.createElem('div', '141px', '305px', 'images/gretel.png');
         this.gretel.style.position = 'absolute';
         this.gretel.style.top = '344px';
         this.gretel.style.left = '780px';
         this.element.appendChild(this.gretel);

         this.bread.onclick = () => {
             this.element.removeChild(this.bread);
             screen.collection.element.appendChild(this.bread);
             this.bread.style.top = '50px';
             this.bread.style.left = '20px';

         }

         this.note.onclick = () => {
             if (this.note.state === 0) {
                 this.note.style.background = 'url("images/hans-note.png")';
                 this.note.style.width = "283px";
                 this.note.style.height = '176px';
                 this.note.style.top = '300px';
                 this.note.style.left = '300px';
                 this.note.state = 1;
                 this.note.opened = true;
             } else if (this.note.state === 1) {
                 this.note.style.background = 'url("images/playbtn.png")';
                 this.note.style.width = "40px";
                 this.note.style.height = '40px';
                 this.note.style.top = '450px';
                 this.note.style.left = '290px';
                 this.note.state = 0;
             }

             if (this.note.state === 0 && this.note.opened === true) {
                 this.showconvo(jData.hansroom.speech2);
             }

         }
         this.note.onmouseover = () => {
             this.note.style.cursor = 'pointer';
         }


     }



     showconvo(data) {
         this.speech = utils.createConvo(data);
         this.element.appendChild(this.speech);
         setTimeout(() => this.element.removeChild(this.speech), 3000);
     }
 }