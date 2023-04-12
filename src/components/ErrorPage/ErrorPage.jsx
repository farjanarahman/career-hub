// import { useRouteError } from "react-router-dom";
// import './ErrorPage.css'

// function Error() {
//     return (
//         <div>
//             <h1 className="oops">Oops!</h1>
//         <p>Sorry, an unexpected error has occurred.</p>
//         <p>
//       </p>
//         </div>
//     );
// };

// export default Error;



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
