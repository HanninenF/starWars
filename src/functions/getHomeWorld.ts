import { AllTypes } from "../types/types";

export const getHomeWorld = async (
  result: AllTypes.Result
): Promise<AllTypes.HomeWorldRoot> => {
  const homeWorldUrl: string = result.homeworld;
  console.log("homeWorldUrl in getHomeWorld= ", homeWorldUrl);

  const homeWorldResult = await fetch(homeWorldUrl);
  const homeWorldData =
    (await homeWorldResult.json()) as AllTypes.HomeWorldRoot;
  console.log("homeWorldData", homeWorldData);
  return homeWorldData;
};
