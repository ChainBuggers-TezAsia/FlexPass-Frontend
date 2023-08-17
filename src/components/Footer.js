const Footer = () => {
    return (
      <div className="bg-darkslateblue-200 text-left text-aliceblue font-mynft-caption">
        <img
          className="absolute inset-0 object-cover w-full h-full mix-blend-overlay"
          alt=""
          src="/bg@2x.png"
        />
        <div className="p-12 md:p-20 border-b-2 border-darkslateblue-100">
          <div className="mb-6 text-2xl text-gray-100 font-extrabold">
            FlexPass
          </div>
          <p className="text-white text-sm md:text-base">
            Unforgettable era of entertainment through our gateway to
            exceptional shows and experiences!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between py-10 md:py-16 px-6 md:px-20">
          <div className="text-aliceblue">
            <div className="mb-4 text-lg font-semibold">Join our community</div>
            <div className="flex gap-2">
              <img className="w-6 h-6" alt="" src="/iconsocialtwitter.svg" />
              <img className="w-6 h-6" alt="" src="/iconsocialfacebook.svg" />
              <img className="w-6 h-6" alt="" src="/iconsocialinstagram.svg" />
              <img className="w-6 h-6" alt="" src="/iconsocialyoutube.svg" />
              <img className="w-6 h-6" alt="" src="/iconsocialtele.svg" />
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="mb-4 text-lg font-semibold">Market Place</div>
            <div className="space-y-2 text-lightsteelblue">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 hidden">
                  <img alt="" src="/iconclock.svg" />
                </div>
                <div>Explore</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 hidden">
                  <img alt="" src="/iconclock1.svg" />
                </div>
                <div>How it works</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 hidden">
                  <img alt="" src="/iconclock2.svg" />
                </div>
                <div>Jobs</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 hidden">
                  <img alt="" src="/iconclock3.svg" />
                </div>
                <div>Help center</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 hidden">
                  <img alt="" src="/iconclock4.svg" />
                </div>
                <div>Blogs</div>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="mb-4 text-lg font-semibold">Company</div>
            <div className="space-y-2 text-lightsteelblue">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 hidden">
                  <img alt="" src="/iconclock5.svg" />
                </div>
                <div>About Us</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 hidden">
                  <img alt="" src="/iconclock6.svg" />
                </div>
                <div>Contact Us</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 hidden">
                  <img alt="" src="/iconclock7.svg" />
                </div>
                <div>Feature</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 hidden">
                  <img alt="" src="/iconclock8.svg" />
                </div>
                <div>Discover</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  