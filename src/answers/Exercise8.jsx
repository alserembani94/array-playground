/* eslint-disable no-unused-vars */
// Here, we will use for loop to render each animals to the screen.
import { useEffect } from "react";
// The list of animals can be found here
import {
  animalsWithHabitats,
  group1Animal,
  group2Animal,
  group3Animal,
} from "../data";

export const Answer8 = () => {
  // This is the function to render each animal to the screen.
  /**
   *
   * @param {string[]} grouping
   * @param {boolean} hasOneFromWater
   * @returns
   */
  const renderGrouping = (grouping, hasOneFromWater) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = grouping.join(", ");
    if (hasOneFromWater) {
      newElement.classList.add("bg-green-200");
    } else {
      newElement.classList.add("bg-red-200");
    }
    return newElement;
  };

  useEffect(() => {
    // This is to clear the content of the div with id="animals"
    const target = document.getElementById("animals");
    if (target) {
      target.innerHTML = "";
    }

    const groupHasOneFromWater = (group) => {
      return group.some((animal) => {
        return (
          animalsWithHabitats.find(
            (animalWithHabitat) => animalWithHabitat.name === animal
          ).habitat === "water"
        );
      });
    };

    const group1 = renderGrouping(
      group1Animal,
      groupHasOneFromWater(group1Animal)
    );
    const group2 = renderGrouping(
      group2Animal,
      groupHasOneFromWater(group2Animal)
    );
    const group3 = renderGrouping(
      group3Animal,
      groupHasOneFromWater(group3Animal)
    );

    target.appendChild(group1);
    target.appendChild(group2);
    target.appendChild(group3);
  }, []);

  return (
    <>
      <div className="prose mb-4">
        <h2>Exercise 8: Loop using `Array.some()` method</h2>
        <p>
          In this exercise, you need to determine if each of the group has at
          least one animal that lives in the water.
        </p>
        <p>The code should use `Array.some()` method as below</p>
        <div className="bg-blue-200 rounded px-8 py-3">
          <p className=" whitespace-pre-wrap font-mono">
            {`const newArray = array.some((element) => {
  // Your code here
});`}
          </p>
        </div>
      </div>
      <div id="animals"></div>
    </>
  );
};
