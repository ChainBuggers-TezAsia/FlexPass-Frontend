const ShowDetails = () => {
  return (
    <div className="relative box-border w-full h-[7.14rem] text-left text-[0.75rem] text-white font-roboto border-b-[0.7px] border-solid border-white">
      <div className="absolute h-[calc(100%_-_26.67px)] w-[calc(100%_-_677.87px)] top-[0.81rem] right-[41.12rem] bottom-[0.85rem] left-[1.25rem]">
        <div className="absolute top-[0.31rem] left-[calc(50%_-_162.07px)] w-[1.06rem] h-[1.06rem] overflow-hidden flex flex-row items-start justify-start">
          <img
            className="relative w-[1.06rem] h-[1.06rem] overflow-hidden shrink-0"
            alt=""
            src="/iconheart.svg"
          />
        </div>
        <div className="absolute w-[calc(100%_-_57px)] top-[0.31rem] right-[1.25rem] left-[2.31rem] flex flex-row py-[0rem] pr-[0.51rem] pl-[0rem] box-border items-start justify-start gap-[0.38rem]">
          <div className="w-[13.75rem] flex flex-row pt-[0rem] pb-[0.13rem] pr-[4.69rem] pl-[0rem] box-border items-start justify-start">
            <b className="relative">PVR: Sathyam, Royapettah</b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.25rem] text-[0.63rem] text-darkslategray">
            <img
              className="self-stretch relative max-h-full w-[1rem] overflow-hidden shrink-0 object-cover max-w-[2.64rem]"
              alt=""
              src="/infopng@2x.png"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="relative leading-[1rem] uppercase font-medium">
                INFO
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_53px)] top-[1.94rem] right-[1.25rem] left-[2.06rem] flex flex-row pt-[0.13rem] pb-[0rem] pr-[4.17rem] pl-[0rem] box-border items-start justify-start gap-[1.52rem] text-mediumseagreen">
          <div className="flex flex-row pt-[0rem] px-[0rem] pb-[0.06rem] items-center justify-start gap-[0.19rem]">
            <div className="w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
              <img
                className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0"
                alt=""
                src="/iconmobile.svg"
              />
            </div>
            <div className="relative">M-Ticket</div>
          </div>
          <div className="flex flex-row pt-[0rem] px-[0rem] pb-[0.06rem] items-center justify-start gap-[0.37rem] text-orange">
            <div className="w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0 flex flex-row items-start justify-start">
              <img
                className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0"
                alt=""
                src="/iconfnb.svg"
              />
            </div>
            <div className="relative">{`Food & Beverage`}</div>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_26.67px)] w-[calc(100%_-_176.67px)] top-[0.81rem] right-[-11.09rem] bottom-[0.85rem] left-[22.13rem] flex flex-col pt-[0.5rem] px-[0rem] pb-[0rem] box-border items-start justify-start text-darkorange">
        <div className="self-stretch flex flex-row flex-wrap py-[0.5rem] pr-[36.96rem] pl-[0.5rem] items-start justify-start">
          <div className="self-stretch rounded box-border w-[6.88rem] flex flex-col pt-[0.42rem] pb-[0.44rem] px-[0.29rem] items-center justify-center gap-[0.02rem] border-[1px] border-solid border-whitesmoke">
            <div className="self-stretch h-[0.88rem] flex flex-row pt-[0rem] pb-[0.02rem] pr-[0.13rem] pl-[0.87rem] box-border items-center justify-between">
              <div className="relative">10:30 PM</div>
              <div className="box-border w-[1.38rem] h-[0.75rem] flex flex-row pt-[0.11rem] pb-[0.07rem] pr-[0.16rem] pl-[0.15rem] items-center justify-center text-[0.5rem] border-[1px] border-solid border-darkorange">
                <b className="relative tracking-[0.5px]">ENG</b>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row py-[0rem] pr-[0.26rem] pl-[0.16rem] items-start justify-center text-center text-[0.63rem]">
              <div className="relative">4K ATMOS ENABLED</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row py-[0rem] pr-[0rem] pl-[0.5rem] items-start justify-start text-whitesmoke">
          <div className="w-[51.71rem] flex flex-row pt-[0.55rem] pb-[0.04rem] pr-[43.21rem] pl-[0rem] box-border items-center justify-start gap-[0.69rem]">
            <div className="relative rounded-[3.5px] bg-gold w-[0.44rem] h-[0.44rem]" />
            <div className="relative">Cancellation Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
