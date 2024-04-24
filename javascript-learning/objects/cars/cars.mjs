import { CarBlueprint } from "./car_blueprint.mjs";

const dieselCar = new CarBlueprint("Modrá", "1,4 TDI", "Diesel");
dieselCar.logCarProperties();

const electricCar = new CarBlueprint("šedá", "EV 160kW", "elektřina");
dieselCar.logCarProperties();
dieselCar.repaint("Červená");
dieselCar.logCarProperties();

console.log(`Barva elektrického auta: ${electricCar.getColor()}`);
