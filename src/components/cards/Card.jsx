function Card({text, data}){
    return(
        <div className="flex flex-col gap-5 justify-center items-center text-3xl h-[200px] w-[200px] bg-white/30 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-6">
            <p>{text}</p>
            <p>{data}</p>
        </div>
    );
}

export default Card;