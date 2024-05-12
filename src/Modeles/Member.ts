import { Evenement } from "./Evenement";
import { Article } from "./Publication";


export interface Member {
    id: number;
    cin: string;
    name: string;
    cv: string;
    type: string;
    createdDate: Date;
    tab_pub:Article[];
    tab_evt:Evenement[];
 
}
