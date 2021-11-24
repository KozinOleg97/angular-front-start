import {Card} from "./card";
import {Document} from "./document";

export class Correction{

  date: Date;
  name: string;
  code: string;
  type: boolean;

  card: Card;

  /*
Для отправки id загруженного документа
 */
  doc : Document;

  file?: File;
}
