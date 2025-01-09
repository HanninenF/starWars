export const getPrettyPrint = (key: string): string => {
  const keyArray: string[] = key
    .split(/(?=[A-Z])/)
    .map((word) => word.toLowerCase());

  let prettyPrint: string = "";
  if (keyArray.length > 1) {
    console.log("if-sats i getPrettyPrint= true");
    keyArray.forEach((key, index, arr) => {
      if (index === 0) {
        key = key.charAt(0).toUpperCase() + key.slice(1);
      }
      if (index === arr.length - 1) {
        prettyPrint += key;
      } else prettyPrint += key + " ";
    });
  } else prettyPrint = key.charAt(0).toUpperCase() + key.slice(1);

  console.log("keyArray= ", keyArray);
  console.log("prettyPrint= ", prettyPrint);
  return prettyPrint;
};
