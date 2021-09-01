import Button from "./button";

function Title({ children }) {
  return (
    <header className="header">
      <h1>Header</h1>

      <div>
        <Button kind="primary" />
        <Button kind="secudary" />
      </div>
      
    </header>
  );
}

export default Title;
