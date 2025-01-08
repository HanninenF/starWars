import "./style.scss";
import { AllDomEl } from "./domElements/domElements";
import * as Functions from "./functions";
export const baseUrl: string = "https://swapi.py4e.com/api/people/?search=";

const characterInfo = await Functions.getInfoByName("Luke");

console.log(characterInfo.name);

AllDomEl.warForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchName = AllDomEl.warInput.value;

  const result = await Functions.getInfoByName(searchName);

  const name = result.name;

  const liElement = document.createElement("li");
  liElement.classList.add("warLi");
  liElement.textContent = name;
  AllDomEl.warUl.appendChild(liElement);
  AllDomEl.warInput.value = "";
});
