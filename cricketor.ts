class CricketMatch {
    currentover: number;
    currentscore: number;
    target: number;

    constructor(currentscore: number, currentover: number, target: number) {

        this.currentover = currentover
        this.currentscore = currentscore
        this.target = target
        
    }
    remainingScore(): number {
        return this.target -this.currentscore ;
       }
       remainingBalls(over:number): number {
        return (over-this.currentover) * 6;
       }
       runRate(over:number): number {
        return (this.target-this.currentscore)/(over-this.currentover)
       }
       
}
class ODIMatch extends CricketMatch {
    overs: number = 50;
    constructor(currentscore: number, currentover: number, target: number) {
        super(currentscore,currentover,target);
       // this.requiredrunrate = requiredrunrate;
       this.display();
    }

    

    display(): void {
        console.log('Need ' +this.remainingScore() +' runs in '+this.remainingBalls(this.overs) +' balls');

      console.log('Required Runrate:'+this.runRate(this.overs));
    }    
}

class TestMatch extends CricketMatch {
    overs: number = 90;
    constructor(currentscore: number, currentover: number, target: number) {
        super(currentscore,currentover,target);
       // this.requiredrunrate = requiredrunrate;
       this.display();
    }

    

    display(): void {
        console.log('Need ' +this.remainingScore() +' runs in '+this.remainingBalls(this.overs) +' balls');

      console.log('Required Runrate:'+this.runRate(this.overs));
    }    
}

class T20Match extends CricketMatch {
    overs: number = 20;
    constructor(currentscore: number, currentover: number, target: number) {
        super(currentscore,currentover,target);
       // this.requiredrunrate = requiredrunrate;
       this.display();
    }

    

    display(): void {
        console.log('Need ' +this.remainingScore() +' runs in '+this.remainingBalls(this.overs) +' balls');

      console.log('Required Runrate:'+this.runRate(this.overs));
    }    
}

class T10Match extends CricketMatch {
    overs: number = 10;
    constructor(currentscore: number, currentover: number, target: number) {
        super(currentscore,currentover,target);
       // this.requiredrunrate = requiredrunrate;
       this.display();
    }

    

    display(): void {
        console.log('Need ' +this.remainingScore() +' runs in '+this.remainingBalls(this.overs) +' balls');

      console.log('Required Runrate:'+this.runRate(this.overs));
    }    
}

let match=new ODIMatch (256,30,400);

//let testmatch=new TestMatch (256,30,400);
let t20= new T20Match(120,15,170);
//let t10= new T10Match(125,20,180);