/* eslint-disable no-unused-vars */
// Here, we will use for loop to render each animals to the screen.
import { useEffect } from "react";
// The list of animals can be found here
import { animals } from "../data";

// forEach method is a method that is available on array.
// It is used to loop through each element in the array.
// It takes a function as an argument.
// The function will be called for each element in the array.
// The function will be called with the element as the argument.
// The function can be written as a normal function or an arrow function.
// You can read more about forEach method here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

export const Exercise3 = () => {
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
    // Start your code here to render list of animals using `Array.forEach()` method

    // End your code here.
  }, []);

  return (
    <>
      <div className="prose mb-4">
        <h2>Exercise 3: Loop using `Array.forEach()` method</h2>
        <p>This method is similar to `for...of`, but in functional way</p>
        <p>The code should use `Array.forEach()` method as below</p>
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
