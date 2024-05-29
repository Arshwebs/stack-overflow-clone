import { Link, useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const { error, status, statusText } = useRouteError();
  const navigate = useNavigate();
  console.log(status, statusText);

  return (
    <div className="flex h-dvh  items-center justify-center">
      <div className="flex h-48 w-48 flex-col items-center justify-center gap-5 rounded-md border bg-slate-300 text-center">
        <p>
          <strong>
            {status} - {statusText}
          </strong>
        </p>
        <p>
          <em>{error.message}</em>
        </p>
        <Link
          className="rounded-lg border bg-orange-shade p-3 text-white hover:bg-slate-400"
          to={navigate(-1)}
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
