export default class Show {
    id!:number;
    title!:string;
    poster_path!:string;
    release_date!: string;
    number_of_season!:number;
    number_of_episode!:number;
    backdrop_path?: string; //TODO: mettre l'attribut en ! au lieu de ?
    duration!:number;
    overview!:string;
    added_date!:string;
    vote_average!:number;
    person_vote?:number;
  }
  