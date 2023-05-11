import { companies } from './companies.js';

function search(query) {
  const input = query.toLowerCase();

  const results = companies.filter(company => {
    const name = company.name.toLowerCase();
    return name.includes(input);
  });

  results.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();

    const aIndex = aName.indexOf(input);
    const bIndex = bName.indexOf(input);

    //if input is at the beginning of a name, prioritize that
    if (aIndex === 0 && bIndex !== 0) {
      return -1;
    } else if (bIndex === 0 && aIndex !== 0) {
      return 1;
    }

    //otherwise sort based on the index of the input in the name
    if (aIndex < bIndex) {
      return -1;
    } else if (bIndex < aIndex) {
      return 1;
    }

    //if the input is in the same position in both names, prioritize the shorter name
    if (aName.length < bName.length) {
      return -1;
    } else if (bName.length < aName.length) {
      return 1;
    }

    //if names are same length and have input in same place, prioritize alphabetical order
    if (aName < bName) {
      return -1;
    } else if (bName < aName) {
      return 1;
    }

    //if the names are exactly the same, don't change order
    return 0;
  });

  return results;
}

export { search };
