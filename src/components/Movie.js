const MovieCard = () => {
  return (
    <div className="relative rounded-sm w-full h-[27.13rem] overflow-hidden text-left text-[1.56rem] text-white font-oxanium">
      <div className="absolute top-[0rem] left-[0rem] w-[18.19rem] h-[27.13rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[18.19rem] h-[27.13rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-mini [background:linear-gradient(147.75deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.05))] [backdrop-filter:blur(20px)] w-[18.19rem] h-[27.13rem]" />
          <div className="absolute top-[1.5rem] left-[1.5rem] w-[15.19rem] h-[24.13rem]">
            <img
              className="absolute top-[0rem] left-[0rem] rounded-mini w-[15.19rem] h-[19.63rem] object-cover"
              alt=""
              src="/nft-picture@2x.png"
            />
            <div className="absolute top-[20.94rem] left-[0rem] w-[11.31rem] flex flex-col items-start justify-start gap-[0.19rem]">
              <div className="relative tracking-[0.05em] capitalize">
                Spider Man
              </div>
              <div className="relative text-[0.88rem] tracking-[0.05em] capitalize font-lato">
                Release Date: 2 June 2023
              </div>
            </div>
            <div className="absolute top-[20.94rem] left-[11.25rem] w-[3.5rem] h-[1.25rem] text-[0.75rem]">
              <img
                className="absolute h-[65%] w-[26.81%] top-[25%] right-[66.05%] bottom-[10%] left-[7.15%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
              <div className="absolute top-[25%] left-[44.6%] tracking-[0.05em] capitalize">
                341
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
