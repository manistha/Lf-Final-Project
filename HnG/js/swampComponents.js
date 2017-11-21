 class Swamp {
     constructor() {
         this.element = utils.createElem('div', '866px', '730px', 'images/swamp-without.png')
         screen.components.push(this.element);
         this.element.position = 'relative';
         this.comps = [];
         this.isStarted == 0;

     }
 }


 class SwampComps {
     constructor() {
         this.boot1 = utils.createElem('div', '45px', '65px', 'images/boot1.png');
         this.boot1 = utils.setTopLeft(this.boot1, '322px', '89px');
         this.boot1.label = 'Right boot';
         this.boot1.Div = utils.createElem('div', '100px', '20px', 'images/blank.png');
         this.boot1.Div.innerHTML = this.boot1.label;
         screen.swamp.comps.push(this.boot1);

         this.boot2 = utils.createElem('div', '39px', '42px', 'images/boot2.png');
         this.boot2 = utils.setTopLeft(this.boot2, '294px', '458px');
         this.boot2.label = 'Left boot';
         this.boot2.Div = utils.createElem('div', '100px', '20px', 'images/blank.png');
         this.boot2.Div.innerHTML = this.boot2.label;
         screen.swamp.comps.push(this.boot2);

         this.croc = utils.createElem('div', '111px', '22px', 'images/croc.png');
         this.croc = utils.setTopLeft(this.croc, '363px', '316px');
         this.croc.label = 'Crocodile';
         this.croc.Div = utils.createElem('div', '100px', '20px', 'images/blank.png');
         this.croc.Div.innerHTML = this.croc.label;
         screen.swamp.comps.push(this.croc);

         this.crow = utils.createElem('div', '49px', '31px', 'images/crow.png');
         this.crow = utils.setTopLeft(this.crow, '245px', '143px');
         this.crow.label = 'Crow';
         this.crow.Div = utils.createElem('div', '100px', '20px', 'images/blank.png');
         this.crow.Div.innerHTML = this.crow.label;
         screen.swamp.comps.push(this.crow);

         this.pumpkin = utils.createElem('div', '87px', '43px', 'images/pumpkin.png');
         this.pumpkin = utils.setTopLeft(this.pumpkin, '520px', '200px');
         this.pumpkin.label = 'Pumpkin';
         this.pumpkin.Div = utils.createElem('div', '100px', '20px', 'images/blank.png');
         this.pumpkin.Div.innerHTML = this.pumpkin.label;
         screen.swamp.comps.push(this.pumpkin);

         this.hoof1 = utils.createElem('div', '50px', '31px', 'images/hoof1.png');
         this.hoof1 = utils.setTopLeft(this.hoof1, '697px', '180px');
         this.hoof1.label = '1st hoof ';
         this.hoof1.Div = utils.createElem('div', '100px', '20px', 'images/blank.png');
         this.hoof1.Div.innerHTML = this.hoof1.label;
         screen.swamp.comps.push(this.hoof1);

         this.hoof2 = utils.createElem('div', '38px', '34px', 'images/hoof2.png');
         this.hoof2 = utils.setTopLeft(this.hoof2, '694px', '333px');

         this.hoof2.Div = utils.createElem('div', '100px', '20px', 'images/blank.png');
         this.hoof2.label = '2nd hoof ';

         this.hoof2.Div.innerHTML = this.hoof2.label;
         screen.swamp.comps.push(this.hoof2);

         this.hoof3 = utils.createElem('div', '39px', '28px', 'images/hoof3.png');
         this.hoof3 = utils.setTopLeft(this.hoof3, '654px', '825px');
         this.hoof3.label = '3rd hoof ';
         this.hoof3.Div = utils.createElem('div', '100px', '20px', 'images/blank.png');
         this.hoof3.Div.innerHTML = this.hoof3.label;
         screen.swamp.comps.push(this.hoof3);

     }

 }


 class LabelandTime {
     constructor() {
         this.element = utils.createElem('div', '136px', '730px', 'images/clock.png');
         this.element.style.position = 'absolute';
         this.element.style.top = '0px';
         this.element.style.left = '866px';
         this.clock = utils.createElem('div', '40px', '20px', 'images/blank.png');

         this.element.appendChild(this.clock);
         this.clock.style.marginTop = '75px';
         this.clock.style.marginLeft = '45px';
         this.clock.style.fontSize = '20px';
         this.clock.style.color = '#000';
         this.clock.style.fontWeight = 'Bold';
         this.labels = utils.createElem('div', 'auto', 'auto', 'images/blank.png');
         this.element.appendChild(this.labels);
         this.labels.style.marginTop = '100px';
         this.labels.style.marginLeft = '30px';

         screen.components.push(this.element);


     }
 }
