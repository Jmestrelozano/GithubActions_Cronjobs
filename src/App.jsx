import "./App.css";
import translations from "./translations/ch/global.json";

function App() {
  return (
    <>
      <div>
        <a
          rel="noreferrer"
          href="https://docs.github.com/es/actions/learn-github-actions/understanding-github-actions"
          target="_blank"
        >
          <img
            src={
              "https://user-images.githubusercontent.com/56113566/144758957-746eeff1-a859-4a02-8a6e-3b1f660c622c.png"
            }
            className="logo"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>Github actions and Cronjobs!!!</h1>
      {JSON.stringify(translations)}
    </>
  );
}

export default App;
