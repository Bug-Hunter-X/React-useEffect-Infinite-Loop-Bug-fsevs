```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct usage - The dependency array is empty, so useEffect only runs once after the initial render
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function to clear the interval when the component unmounts
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```