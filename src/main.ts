import "./style.scss";
import { AllDomEl } from "./domElements/domElements";
import * as Functions from "./functions";
import { getHomeWorld } from "./functions/getHomeWorld";
import { NULL } from "sass";

export const baseUrl: string = "https://swapi.py4e.com/api/people/?search=";

const characterInfo = await Functions.getInfoByName("Luke");

console.log(characterInfo.name);

AllDomEl.warForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  //ta bort existerande kort
  const cardClass = ".cardContainer";
  const existingCard = document.querySelector(cardClass);
  if (existingCard) {
    existingCard.remove();
  }

  const searchName = AllDomEl.warInput.value;

  const result = await Functions.getInfoByName(searchName);

  const homeWorldData = await getHomeWorld(result);

  Functions.renderResult(result, homeWorldData);
  AllDomEl.warInput.value = "";
});
