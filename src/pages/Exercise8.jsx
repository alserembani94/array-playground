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

// some() method tests whether at least one element in the array passes the test implemented by the provided function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

export const Exercise8 = () => {
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

    // TODO: Render each animal to the screen.
    // You can use the renderComponent function to render each animal.
    // You can use the animals array to get the list of animals.
    // * YOU NEED TO SEE IF SOME OF THE ANIMALS ARE FROM THE WATER.
    // You can refer to the array to know more about the array structure.
    // Start your code here to render list of animals using `Array.some()` method
    // and use `group1Animal`, `group2Animal`, `group3Animal` to process the data.

    // End your code here.
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
