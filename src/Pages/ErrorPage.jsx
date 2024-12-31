import { Link } from "react-router-dom";

function ErrorPage(){
    return(
        <div className="flex justify-center items-center gap-10 flex-col h-[100dvh] w-[100dvw] bg-black text-white">
            <h1 className="text-9xl font-bold">
                ERRO 404!
            </h1>

            <Link to="/">
                <button className="text-3xl h-[70px] w-[200px] bg-gray-500 rounded-md hover:bg-white hover:text-black">Home</button>
            </Link>
        </div>
    );
}

export default ErrorPage;