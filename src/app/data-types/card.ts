import {Document} from "./document";
import {Abonent} from "./abonent";
import {Correction} from "./correction";

export class Card {
  id : number;
  code: string;
  name: string;
  date: Date;
  type: boolean;
  date_of_issue: Date;
  inventory_number: number;

  corrections: Correction[];

  abonents: Abonent[];

  abonent_ids: number[];

  /*
  Для отправки id загруженного документа
   */
  doc: Document;

}
