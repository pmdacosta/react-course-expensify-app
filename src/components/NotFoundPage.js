import React from "react";
import Link from "react-router-dom/Link";

const NotFoundPage = () => (
  <div>
    <pre>404 Not Found!</pre>
    <Link to="/"><button>Go home</button></Link>
  </div>
);

export default NotFoundPage;