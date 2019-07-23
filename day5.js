let char={
    fname:"daniel",
    lname:"devito",
    years:"49",
    nomovies:"136",
    latestmovie:"jumanji",
    awards:14,
    getfull(){
        return `${this.fname} ${this.lname}`;
    },
    getbio(){
        console.log(`${"no. of movies"} ${this.nomovies}`);
        console.log(`${"no. of years"} ${this.years}`);
        console.log(`${"latest movie"} ${this.latestmovie}`);
        console.log(`${"awards received"} ${this.awards}`);
        return this.getfull();
    }
};
console.log(char);
console.log(char.getfull());
console.log(char.getbio());
console.log(char.fname);
console.log(char.nomovies,char.years);
let act={
    fname:"keanu",
    lname:"reeves",
    years:33,
    nomovies:99,
    latestmovie:"toy story 4",
    awards:12
}
._merge(char,act);
//let merge={...act,...char};
//console.log(merge);


/*let a={
    name:"dhananjay",
    age:19,
    branch:"CE",
    college:"SIES"
};
let b={
    surname:"rao",
    id:60

};
let c={...a,...b};
console.log(c);*/