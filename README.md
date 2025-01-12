# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by the incorrect usage of the `useEffect` hook.

The `bug.js` file contains a component that attempts to update the state variable `count` within the `useEffect` hook without proper dependency management. This results in an infinite loop where the component re-renders continuously.

The `bugSolution.js` file provides a corrected version of the component, showing how to resolve the issue by correctly managing dependencies and preventing the infinite loop.