/* eslint-disable no-unused-vars */
// Here, we will use for loop to render each animals to the screen.
import { useEffect } from "react";
// The list of animals can be found here
import { animals } from "../data";

export const Answer3 = () => {
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

    animals.forEach((animal) => {
      const newElement = renderComponent(animal);
      target.appendChild(newElement);
    });
  }, []);

  return (
    <>
      <div className="prose mb-4">
        <h2>Exercise 3: Loop using `forEach` method</h2>
        <p>The code should use `forEach` method as below</p>
        <div className="bg-blue-200 rounded px-8 py-3">
          <p className=" whitespace-pre-wrap font-mono">
            {`array.forEach((element) => {
  // Your code here
});`}
          </p>
        </div>
      </div>
      <div id="animals"></div>
    </>
  );
};
