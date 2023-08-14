/* eslint-disable no-unused-vars */
// Here, we will use for loop to render each animals to the screen.
import { useEffect } from "react";
// The list of animals can be found here
import { animalsWithHabitats } from "../data";

export const Answer5 = () => {
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

    const animals = animalsWithHabitats.filter((animal) => {
      if (animal.habitat === "forest") {
        return true;
      }
      return false;
    });

    animals.forEach((animal) => {
      const newElement = renderComponent(animal.name);
      target.appendChild(newElement);
    });
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
