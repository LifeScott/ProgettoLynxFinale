export class AnimeItem{
    titolo : string
    _id : number;
    genere : string;
    desc : string ;
   public favorite : boolean;
   _imgpath : string;


    constructor(titolo: string,id:number,favorite : boolean,imgpath?:string,genere?:string,desc?:string, ){
        this.titolo=titolo;
        this._id=id;
        this.favorite=favorite;
        this._imgpath = imgpath;
        this.genere=genere;
        this.desc=desc;
    }


    getTitolo(){
        return this.titolo;
    }
    get id (){
        return this._id;
    }
    getDesc(){
        return this.desc;
    }
    getFavorite(){
        return this.favorite;
    }
    get imgpath(){
        return this._imgpath;
    }
}