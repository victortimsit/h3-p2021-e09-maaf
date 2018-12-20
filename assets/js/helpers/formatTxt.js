/**
 * Format text by dealing with %expressions%
 * @param {string} txt  text to format
 * @param {object} replaces - an object of persons with role as key
 * containing object with name and gender as keys (at least)
 */
export default (txt, replaces) => {
  if (!txt) return false;

  let keys = "";
  // Replace names
  for (const key in replaces) {
    if (replaces.hasOwnProperty(key)) {
      keys += keys ? `|${key}` : key;
      const element = replaces[key];
      txt = txt.replace(new RegExp(`%${key}%`, "g"), element.name);
    }
  }

  // Deal with gender exceptions
  let genderRegex = new RegExp(
    `%gender\\|(${keys})\\|([a-zA-Z]*)\\|([a-zA-Z]*)%`,
    "g"
  );
  let match;
  while ((match = genderRegex.exec(txt)) !== null) {
    txt = txt.replace(
      match[0],
      replaces[match[1]].gender === "man" ? match[2] : match[3]
    );
  }
  return txt;
};
