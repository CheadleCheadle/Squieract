import { createElement } from "./createElement";
import { render } from "./render";

const Squieract = {
  createElement,
  render,
};

/** @jsx Squieract.createElement */
const element = (
  <div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Squieract</h2>
  </div>
);

const container = document.getElementById("root");
Squieract.render(element, container);
