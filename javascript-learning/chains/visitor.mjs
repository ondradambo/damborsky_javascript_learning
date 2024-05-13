import { EntryHall } from "./entry_hall.mjs";

new EntryHall()
  .entryBathroom()
  .washHands()
  .washHands()
  .returnToEntryHall()
  .askReceptionistQuestion()
  .entryBathroom()
  .washHands(); // začínáme ve vstupní hale, proto vytváříme objekt vstupní haly; po napsání tečky nám konstruktor vrací stejnou instanci toho objektu, co jsme zrovna vytvořili
