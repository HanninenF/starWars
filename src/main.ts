import "./style.scss";
import { AllDomEl } from "./domElements/domElements";
import * as Functions from "./functions";
import { getHomeWorld } from "./functions/getHomeWorld";

export const baseUrl: string = "https://swapi.py4e.com/api/people/?search=";

const characterInfo = await Functions.getInfoByName("Luke");

console.log(characterInfo.name);

AllDomEl.warForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchName = AllDomEl.warInput.value;

  const result = await Functions.getInfoByName(searchName);
  console.log("result in eventlistener warForm=", result);
  console.log("homeWorldUrl in main= ", result.homeworld);
  console.log("name in main= ", result.name);
  const homeWorldData = await getHomeWorld(result);

  Functions.renderResult(result, homeWorldData);
  AllDomEl.warInput.value = "";
});
