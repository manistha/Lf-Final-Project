 let jData = {
     "hansroom": {
         "speech1": "Hansel!Where are you?",
         "speech2": "He better not go near the witch's house..I must go find Hansel..",
         "speech3": "I must go find Hansel.."
     },
     "forest": {
         "speech1": "Breadcrumbs!Hansel left me a trail, he must be in trouble. ",
         "speech2": "I have to get inside this house"
     },
     "witchroom": {
         "speech1": "where is my brother witch!",
         "speech2": "ooh thats fierce..unlike your brother",
         "speech3": "he's my dinner for tonight",
         "speech4": [{
             "option": "no! tell me where he is"
         }, {
             "option": "please dont eat my brother"
         }],
         "speech5": "I'll tell you where he is, but first you must serve me",
         "speech6": "i will"
     }
 }

 const utils = {
     getRandom: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
     createElem: (tag, width, height, bg) => {
         element = document.createElement(tag);
         element.style.width = width;
         element.style.height = height;
         element.style.background = 'url(' + bg + ')';
         element.style.margin = '0px';
         element.style.padding = '0px';

         return element;
     },

     addRemove: (parent, toRemove, toAdd) => {
         parent.removeChild(toRemove);
         parent.appendChild(toAdd);

     },

     createConvo: (data) => {
         element = document.createElement('div');
         element.style.width = '300px';
         element.style.fontSize = '30px';
         element.style.color = 'white';
         element.innerHTML = data;
         element.style.position = 'absolute';
         element.style.top = '350px';
         element.style.left = '500px';
         return element;
     },

     // setTopLeft:(element,top,left) =>{
     // 	element.style.top =top;
     // 	element.style.left = left;
     // 	return element;
     // }
 }

 const S_HEIGHT = '730px';
 const S_WIDTH = '1002px';

 class Screen {
     constructor(screenId) {
         this.element = document.getElementById(screenId);
         this.components = [];
         this.pickables = [];
         this.state = 'start';
     }

     init() {
         this.startScreen = new StartScreen();
         this.collection = new Collection();
         this.hansroom = new HanselsRoom();
         this.forest = new Forest();
         this.witchRoom = new WitchRoom();
         this.maze = new Maze();
         this.element.appendChild(this.components[0]);
         this.startScreen.playbtn.addEventListener('click', () => {
             this.element.removeChild(this.startScreen.element);
             this.element.appendChild(this.components[1]);
             this.element.appendChild(this.collection.element);
             this.hansroom.showconvo(jData.hansroom.speech1);
         })
         this.hansroom.toForest.addEventListener('click', () => {
             this.element.removeChild(this.hansroom.element);
             this.element.appendChild(this.components[2]);
         })

         this.forest.toWRoom.addEventListener('click', () => {
             this.element.removeChild(this.forest.element);
             this.element.appendChild(this.components[3]);
         })

         this.witchRoom.toWRoom.addEventListener('click', () => {
             this.element.removeChild(this.witchRoom.element);
             this.element.removeChild(this.collection.element);
             this.element.appendChild(this.components[4]);
         })

         this.pickables.forEach((pickable) => {
             pickable.onmouseover = () => {
                 pickable.style.cursor = 'pointer';
             }
         })


     }
 }





 class Collection {
     constructor() {
         this.element = utils.createElem('div', '100px', '730px', 'images/collected.png');
         this.element.style.position = 'absolute';
         this.element.style.top = '0px';
         this.element.style.left = '902px';

     }
 }

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

 class Maze {
     constructor() {
         this.element = document.createElement('canvas');
         this.element.width =1002;
         this.element.height =730;
         this.element.background = 'red';
         screen.components.push(this.element);
         this.map = [
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],

             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,0 ],
         ];

         this.ctx = this.element.getContext('2d');
         this.wood = new Image();
         this.path = new Image();

         this.wood.src = 'images/wood.png';
         this.path.src = 'images/path.png';

         this.posX = 0;
         this.posY = 0;
         this.drawMap();
     }

     drawMap() {

         this.path.onload = () => {
         	for(let i = 0; i < this.map.length; i++){
         		for(let j = 0; j<this.map[i].length; j++){
         			if(this.map[i][j]===0){
         				this.ctx.drawImage(this.path,this.posX,this.posY,26,26);
         				console.log(this.path)
         			}
         			if(this.map[i][j]===1){
         				this.ctx.drawImage(this.wood,this.posX,this.posY,26,26);
         			}
         			this.posX +=26;
         		}

         		this.posX = 0;
         		this.posY += 26;


         	}
         }

         }

     
 }
 let screen = new Screen('myScreen');
 screen.init();