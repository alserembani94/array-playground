// Here, we will use for loop to render each animals to the screen.
import { useEffect } from "react";
// The list of animals can be found here
import { animals } from "../data";

export const Answer1 = () => {
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

    for (let i = 0; i < animals.length; i++) {
      const component = renderComponent(animals[i]);
      target?.appendChild(component);
    }
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
