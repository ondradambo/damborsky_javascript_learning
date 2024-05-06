import { CarBlueprint } from "./car_blueprint.mjs"; // tomuto modulu říkíme, kde (v jakém souboru) má hledat třídu

const dieselCar = new CarBlueprint("Modrá", "1,4 TDI", "Diesel");
dieselCar.logCarProperties(); // pouze zalogování info o autě, barvu už nedáváme, je už nastavená

const electricCar = new CarBlueprint("šedá", "EV 160kW", "elektřina");
dieselCar.logCarProperties();
dieselCar.repaint("Červená");
dieselCar.logCarProperties();

console.log(`Barva elektrického auta: ${electricCar.getColor()}`);
