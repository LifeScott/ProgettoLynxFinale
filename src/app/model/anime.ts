export class AnimeItem{
    titolo : string
    id : number;
    genere : string;
    desc : string ;
   public favorite : boolean;


    constructor(titolo: string,id:number,favorite : boolean,genere?:string,desc?:string){
        this.titolo=titolo;
        this.id=id;
        this.favorite=favorite;
        this.genere=genere;
        this.desc=desc;
    }


    getTitolo(){
        return this.titolo;
    }
    getId(){
        return this.id;
    }
    getDesc(){
        return this.desc;
    }
    getFavorite(){
        return this.favorite;
    }
}