class Character{
    constructor(fname,lname,years,movies,awards){
        this.fname=fname;
        this.lname=lname;
        this.years=49;
        this.movies=136;
        this.awards=14;
    }
    fullname(){
        this.name=`${this.fname} ${this.lname}`;
        console.log(this.name);
    }
    alldata(){
        this.name=`${this.fname} ${this.lname}`;
        console.log(this.name);
        console.log(this.years);
        console.log(this.movies);
        console.log(this.awards);
    }
}
let c=new Character("danny","devito");
console.log(c.alldata());

class Animal{
    constructor(){
        this.nooflegs=4;
}
    getlegs(){
        
        return this.nooflegs;
    }
    getsound(){
        return "meow";
    }
}

class Lion extends Animal{
    getsound(){
        return "roar";
    }

}

let L=new Lion;
//let S=new Spider;
console.log(L.getlegs());
console.log(L.getsound());

