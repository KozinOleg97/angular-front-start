import {Card} from "./card";

export class Document {

  id: number;

  path_to_file: string ;
  original_name: string ;
  doc_type: string;
  ZonedDateTime: Date;
  number_of_pages: number ;
  comment: string ;
  format: string ;

  card: Card;



}
