/* eslint-disable no-unused-vars */
// Here, we will use for loop to render each animals to the screen.
import { useEffect } from "react";
// The list of animals can be found here
import { animals } from "../data";

export const Answer2 = () => {
  // This is a function to render each animal to the screen.
  const renderComponent = (animal) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = animal;
    return newElement;
  };

  useEffect(() => {
    const target = document.getElementById("animals");
    if (target) {
      target.innerHTML = "";
    }

    for (let animal of animals) {
      const component = renderComponent(animal);
      target?.appendChild(component);
    }
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
