import { Bathroom } from "./bathroom.mjs";

export class EntryHall {
  constructor() {
    console.log("Návštěvník přišel do vstupní haly");
  }
  // metoda(/akce?)
  entryBathroom() {
    console.log("Návštěvník jde na toaletu");
    // řezězení --> vracíme návštěníkovi tu místnost = nový objekt, aby v ní mohl něco dělat
    return new Bathroom();
  }

  askReceptionistQuestion(question) {
    console.log(`Návštěvník se zeptal recepční: "${question}"`);
    console.log("recepční neodpovídá");
    // chceme vrátit ten stejný objekt, ve kterým zrovna jsme -> this = vlastnost, proto za this nejsou závorky
    return this;
  }
}
