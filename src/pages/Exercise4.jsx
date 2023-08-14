/* eslint-disable no-unused-vars */
// Here, we will use for loop to render each animals to the screen.
import { useEffect } from "react";
// The list of animals can be found here
import { animalsWithHabitats } from "../data";

// map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

export const Exercise4 = () => {
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
    // * YOU NEED TO FOLLOW THIS FORMAT
    // * <animal> lives in the <habitat>
    // * Example: Dog lives in the home
    // You can refer to the array to know more about the array structure.
    // Start your code here to render list of animals using `Array.map()` method

    // End your code here.
  }, []);

  return (
    <>
      <div className="prose mb-4">
        <h2>Exercise 4: Loop using `Array.map()` method</h2>
        <p>
          This will modify the content, and return the new array of the same
          length.
        </p>
        <p>The code should use `Array.map()` method as below</p>
        <div className="bg-blue-200 rounded px-8 py-3">
          <p className=" whitespace-pre-wrap font-mono">
            {`const newArray = array.map((element) => {
  // Your code here
});`}
          </p>
        </div>
      </div>
      <div id="animals"></div>
    </>
  );
};
