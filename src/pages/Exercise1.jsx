/* eslint-disable no-unused-vars */
// Here, we will use for loop to render each animals to the screen.
import { useEffect } from "react";
// The list of animals can be found here
import { animals } from "../data";

// For loop in Javascript is used to iterate over a list of items.

export const Exercise1 = () => {
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
    // Start your code here to render list of animals using standard `for` loop

    // End your code here.
  }, []);

  return (
    <>
      <div className="prose mb-4">
        <h2>Exercise 1: Loop using standard loop</h2>
        <p>The code should use for loop as below</p>
        <div className="bg-blue-200 rounded px-8 py-3">
          <p className=" whitespace-pre-wrap font-mono">
            {`for (let i = 0; i < array.length; i++) {
  // your code here
}`}
          </p>
        </div>
      </div>
      <div id="animals"></div>
    </>
  );
};
