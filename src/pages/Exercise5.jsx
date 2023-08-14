/* eslint-disable no-unused-vars */
// Here, we will use for loop to render each animals to the screen.
import { useEffect } from "react";
// The list of animals can be found here
import { animalsWithHabitats } from "../data";

// filter() method creates a new array with all elements that pass the test implemented by the provided function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

export const Exercise5 = () => {
  // This is a function to render each animal to the screen.
  const renderComponent = (animalInfo) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = animalInfo;
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
    // * YOU ONLY NEED TO RENDER ANIMALS WHICH LIVES IN THE FOREST
    // You can refer to the array to know more about the array structure.
    // Start your code here to render list of animals using `Array.filter()` method

    // End your code here.
  }, []);

  return (
    <>
      <div className="prose mb-4">
        <h2>Exercise 5: Loop using `Array.filter()` method</h2>
        <p>
          This exercise is to render the list of animals which lives in the
          forest.
        </p>
        <p>The code should use `Array.filter()` method as below</p>
        <div className="bg-blue-200 rounded px-8 py-3">
          <p className=" whitespace-pre-wrap font-mono">
            {`const newArray = array.filter((element) => {
  // Your code here
});`}
          </p>
        </div>
      </div>
      <div id="animals"></div>
    </>
  );
};
