import { baseUrl } from "../main";
import { AllTypes } from "../types/types";

export const getInfoByName = async (name: string): Promise<AllTypes.Result> => {
  const characterUrl = baseUrl + name;
  const response = await fetch(characterUrl);

  console.log(characterUrl);
  const data = (await response.json()) as AllTypes.Root;

  return data.results[0];
};
