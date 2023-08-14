/* eslint-disable no-unused-vars */
// Here, we will use for loop to render each animals to the screen.
import { useEffect } from "react";
// The list of animals can be found here
import { animalsWithHabitats } from "../data";

export const Answer4 = () => {
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

    const animals = animalsWithHabitats.map((animal) => {
      return `${animal.name} lives in the ${animal.habitat}`;
    });

    animals.forEach((animal) => {
      target.appendChild(renderComponent(animal));
    });
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
