
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="container flex flex-col gap-5 justify-center items-center min-h-[60vh]">
            <h1 className="font-bold">404 - Page Not Found</h1>
            <p className="font-semibold">
                {" "}
                OOOOOPSSSS!!!, the page you are looking is under construction.{" "}
            </p>
            <Link className="font-bold text-slate-900 underline" href="/">Go back to homepage</Link>
        </div>
    );
};

export default NotFound;
