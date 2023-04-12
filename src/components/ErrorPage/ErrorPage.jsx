import { Link } from "react-router-dom";
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error-title">404 Error: Page Not Found</h1>
      <p className="error-text">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="error-link">Go back to home page</Link>
    </div>
  );
}

export default ErrorPage;
