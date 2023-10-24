import { useRouteError } from "react-router-dom";

import styles from "./styles/ErrorPage.css";
import cat from "./srcPics/cat.gif";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div id="container2">
        <img src={cat} id="cat" />;
      </div>
      <div id="container1">
        <h1 id="titleError">Woops!</h1>
        <p id="text">An unexpected error has occurred.</p>
        <p id="text2">My bad.</p>
        <p id="errorMessage">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
