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
         element.style.color = '#fff';

         return element;
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

     setTopLeft: (element, top, left) => {
         element.style.position = 'absolute';
         element.style.top = top;

         element.style.left = left;
         return element;
     }
 }

 const S_HEIGHT = '730px';
 const S_WIDTH = '1002px';

 // var screens = [
 // {
 // 	id: 1,
 // 	name: 'HomeScreen'
 // 	elements: [{
 // 		tagName: 'button',
 // 		className: 'sadad',
 // 		link: 2
 // 	}, {
 // 	...
 // 	}]
 // }, {
 // 	id: 2,
 // 	name: 'Player Home',
 // 	elements: [{
 // 		name: 'bed'
 // 	}, ]
 // },
 // ]

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
         this.gretel = new GretelTop(this.maze.ctx);
         this.hat = new WitchHat(this.maze.ctx);
         this.room = new someWitchRoom();
         this.swamp = new Swamp();
         this.swampComps = new SwampComps();
         this.label = new LabelandTime();

         this.swamp.comps.forEach((comp) => {
             comp.Div.style.fontSize = '18px';
             comp.Div.style.paddingTop = '25px';
             comp.Div.style.color = '#9e9387';
             this.label.labels.appendChild(comp.Div);


             comp.onclick = () => {
                 comp.Div.style.textDecoration = 'line-through';
                 screen.swamp.element.removeChild(comp);
             }
         })

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
         this.room.toWRoom.addEventListener('click', () => {
             this.element.removeChild(this.room.element);
             //this.element.removeChild(this.collection.element);
             this.element.appendChild(this.components[6]);
             this.element.appendChild(this.components[7]);
             this.swamp.isStarted = 1;
         })


         for (let i = 0; i < 8; i++) {
             this.swamp.element.appendChild(this.swamp.comps[i]);
         }
         document.onkeydown = (event) => {
             if (event.keyCode == 37) {
                 this.gretel.gretelLeft()
             }

             if (event.keyCode == 38) {
                 this.gretel.gretelUp()
             }

             if (event.keyCode == 39) {
                 this.gretel.gretelRight()
             }

             if (event.keyCode == 40) {
                 this.gretel.gretelDown()
             }
             this.gretel.gretelUpdatePos(this.maze.ctx);
         }

         this.pickables.forEach((pickable) => {
             pickable.onmouseover = () => {
                 pickable.style.cursor = 'pointer';
             }
         })


     }
 }

 let screen = new Screen('myScreen');
 screen.init();


 let timer = 60;
 let counterForTimer = 0;
 startTimer = (clock) => {

     let minutes, seconds;
     minutes = Math.floor(timer / 60)
     seconds = Math.floor(timer % 60);
     //console.log(seconds);
     minutes = minutes < 10 ? "0" + minutes : minutes;
     seconds = seconds < 10 ? "0" + seconds : seconds;

     clock.textContent = minutes + ":" + seconds;

     if (timer-- < 0) {
         clock.textContent = 'sakkyo time';
     }
 }

 checkCollision = (xPosition, yPosition) => {

     let x = Math.floor((xPosition) / 26);
     let y = Math.floor((yPosition) / 26);
     let mapIndexValue = screen.maze.map[y][x];

     if (mapIndexValue === 1) {
         return true;
     } else {
         return false;
     }

 }
 exitCanvas = () => {
     screen.element.removeChild(screen.components[4]);
     screen.element.appendChild(screen.components[5]);
 }

 drawMap = () => {
     let tileSize = 26;
     for (let c = 0; c < screen.maze.map.length; c++) {
         for (let r = 0; r < screen.maze.map[c].length; r++) {
             let tile = screen.maze.map[c][r]

             if (tile == 1) {
                 screen.maze.ctx.drawImage(screen.maze.wood, r * tileSize, c * tileSize, tileSize, tileSize);
             } else {
                 screen.maze.ctx.drawImage(screen.maze.path, r * tileSize, c * tileSize, tileSize, tileSize);
             }

         }
     }
 }

 gameloop = () => {

     screen.maze.ctx.clearRect(0, 0, 1002, 730);
     screen.maze.ctx.fillStyle = '#000';
     screen.maze.ctx.fillRect(0, 0, 1002, 730);
     drawMap();
     screen.maze.ctx.drawImage(screen.gretel.gretel, screen.gretel.x, screen.gretel.y, 26, 26);
     screen.maze.ctx.drawImage(screen.hat.hat, screen.hat.x, screen.hat.y, 50, 51);
     if (screen.swamp.isStarted === 1) {
         if (counterForTimer === 100) {
             startTimer(screen.label.clock);
             counterForTimer = 0;
         }
         counterForTimer++;
     }

     window.requestAnimationFrame(gameloop);

 }

 gameloop();