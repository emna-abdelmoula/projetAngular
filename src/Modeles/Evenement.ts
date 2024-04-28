

export class Evenement {
    id: number;
    titre: string;
    dateDebut: Date;
    dateFin: Date;
    lieu: string;
    
  
    constructor(
      id: number,
      titre: string,
      dateDebut: Date,
      dateFin: Date,
      lieu: string,
    ) {
      this.id = id;
      this.titre = titre;
      this.dateDebut = dateDebut;
      this.dateFin = dateFin;
      this.lieu = lieu;
    }
}
