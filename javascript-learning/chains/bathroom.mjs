import { EntryHall } from "./entry_hall.mjs";

export class Bathroom {
  constructor() {
    console.log("Návštěvník vstoupil na toaletu.");
  }

  returnToEntryHall() {
    console.log("Návštěvník se vrací do haly.");
    return new EntryHall();
  }

  washHands() {
    console.log("Návštěvník si umyl ruce.");
    return this;
  }
}
