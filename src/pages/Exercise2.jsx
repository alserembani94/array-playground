/* eslint-disable no-unused-vars */
// Here, we will use for loop to render each animals to the screen.
import { useEffect } from "react";
// The list of animals can be found here
import { animals } from "../data";

// For...of loop is a new way to loop through an array.
// It is similar to for loop, but it is more concise.
// You can read more about for...of loop here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

export const Exercise2 = () => {
  // This is a function to render each animal to the screen.
  const renderComponent = (animal) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = animal;
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
    // Start your code here to render list of animals using `for...of` loop

    // End your code here.
  }, []);

  return (
    <>
      <div className="prose mb-4">
        <h2>Exercise 2: Loop using `for...of` loop</h2>
        <p>The code should use `for...of`` loop as below</p>
        <div className="bg-blue-200 rounded px-8 py-3">
          <p className=" whitespace-pre-wrap font-mono">
            {`for (let arrayItem of array) {
  // your code here
}`}
          </p>
        </div>
      </div>
      <div id="animals"></div>
    </>
  );
};
