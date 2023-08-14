/* eslint-disable no-unused-vars */
// Here, we will use for loop to render each animals to the screen.
import { useEffect } from "react";
// The list of animals can be found here
import { animalsWithHabitats } from "../data";

export const Answer7 = () => {
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

    const sortedAnimalBasedOnHabitat = animalsWithHabitats.sort((a, b) => {
      if (a.habitat < b.habitat) {
        return -1;
      }
      if (a.habitat > b.habitat) {
        return 1;
      }
      return 0;
    });

    sortedAnimalBasedOnHabitat.forEach((animal) => {
      const component = renderComponent(animal.name);
      target?.appendChild(component);
    });
  }, []);

  return (
    <>
      <div className="prose mb-4">
        <h2>Exercise 7: Loop using `Array.sort()` method</h2>
        <p>
          In this exercise, you will need to render the list of animals to the
          screen using `Array.sort()` method.
        </p>
        <p>The code should use `Array.sort()` method as below</p>
        <div className="bg-blue-200 rounded px-8 py-3">
          <p className=" whitespace-pre-wrap font-mono">
            {`const newArray = array.sort((element) => {
  // Your code here
});`}
          </p>
        </div>
      </div>
      <div id="animals"></div>
    </>
  );
};
