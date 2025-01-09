import { AllDomEl } from "../domElements/domElements";
import { AllTypes } from "../types/types";
import { createHTMLElements } from "./createHtmlElements";
import * as Functions from "../functions";

export const renderResult = (
  result: AllTypes.Result,
  homeWorld: AllTypes.HomeWorldRoot
) => {
  const name = result.name;
  const birthYear = result.birth_year;
  /* const avatar = result.url; */

  const characterInfo = {
    homeWorld: homeWorld.name,
    gender: result.gender,
    height: result.height,
    skinColor: result.skin_color,
    hairColor: result.hair_color,
    eyeColor: result.eye_color,
  };

  //kort för karaktär
  const card = createHTMLElements("div");
  card.classList.add("cardContainer");

  AllDomEl.divResponse.appendChild(card);

  ///////////Name/////////
  const nameElement = createHTMLElements("h2");
  nameElement.classList.add("characterName");
  nameElement.textContent = name;

  ///////////Year/////////
  const birthElement = createHTMLElements("h3");
  birthElement.classList.add("characterBirth");
  birthElement.textContent = birthYear;

  /*///////////Avatar/////////
  const avatarElement = createHTMLElements("img");
  avatarElement.classList.add("characterAvatar");
  avatarElement.src = avatar; */

  //Append Main attributes
  card.append(nameElement, birthElement /* avatarElement */);

  ///////////Ul/////////
  const characterUl = createHTMLElements("ul");
  characterUl.classList.add("characterUl");

  card.appendChild(characterUl);

  ///////////CharacterInfo/////////
  //Loopa igenom varje egenskap av characterInfo-objektet
  for (const key in characterInfo) {
    const liElement = createHTMLElements("li");
    liElement.classList.add("warLi");
    liElement.textContent = `${Functions.getPrettyPrint(key)}: ${Functions.getPrettyPrint(characterInfo[key as keyof typeof characterInfo])}`;
    characterUl.appendChild(liElement);
  }

  ///////////Name/////////
};
