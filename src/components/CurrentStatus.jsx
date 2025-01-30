import useScrollAnimation from "../UseScrollAnimation";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CurrentStatus() {
  useScrollAnimation();

  // Intersection observer to detect when section is visible
  const { ref, inView } = useInView({
    triggerOnce: true,  // Runs animation only once
    threshold: 0.3,     // Triggers when 30% of the section is visible
  });

  const formatNumber = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + " M+";
    } else if (value >= 100000) {
      return (value / 100000).toFixed(1) + " Lakh+";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + " K+";
    }
    return value;
  };

  return (
    <>
      <section 
        ref={ref} 
        className="currentStatus p-5 md:mt-24 mb-24 sticky top-0 z-10 fade-in "
      >
        <div className="">
          <div className="">
            <p className="text-center font-bold pb-7 text-ls md:text-2xl ">
              Overwhelming support from GTF family
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-5 items-center md:grid-cols-2 lg:grid-cols-3 md:p-8 ">
            
            {/* Certified GTF Traders */}
            <li className="bg-white p-3 rounded-full transition-colors duration-300 hover:bg-gray-200 ">
              <div className="flex gap-5 justify-start">
                <figure>
                  <img 
                    src="https://www.gettogetherfinance.com/frontend_asset/main_pages/images/winner.webp" 
                    alt="Certified GTF Traders" 
                  />
                </figure>
                <div>
                  <strong>
                    {inView ? (
                      <CountUp 
                        start={1000} 
                        end={300000} 
                        duration={2} 
                        formattingFn={formatNumber} 
                      />
                    ) : (
                      "1K+"
                    )}
                  </strong>
                  <p>Certified GTF Traders</p>
                </div>
              </div>
            </li>

            {/* Followers */}
            <li className="bg-white p-3 rounded-full transition-colors duration-300 hover:bg-gray-200 ">
              <div className="flex gap-5 justify-start">
                <figure>
                  <img 
                    src="https://www.gettogetherfinance.com/frontend_asset/main_pages/images/notification-bing.webp" 
                    alt="Followers" 
                  />
                </figure>
                <div>
                  <strong>
                    {inView ? (
                      <CountUp 
                        start={1000} 
                        end={1800000} 
                        duration={2} 
                        formattingFn={formatNumber} 
                      />
                    ) : (
                      "1K+"
                    )}
                  </strong>
                  <p>Followers</p>
                </div>
              </div>
            </li>

            {/* Team */}
            <li className="bg-white p-3 rounded-full transition-colors duration-300 hover:bg-gray-200 ">
              <div className="flex gap-5 justify-start">
                <figure>
                  <img 
                    src="https://www.gettogetherfinance.com/frontend_asset/main_pages/images/user-octagon.webp" 
                    alt="Team" 
                  />
                </figure>
                <div>
                  <strong>
                    {inView ? (
                      <CountUp 
                        start={1000} 
                        end={35} 
                        duration={2} 
                        formattingFn={formatNumber} 
                      />
                    ) : (
                      "1K+"
                    )}
                  </strong>
                  <p>Team</p>
                </div>
              </div>
            </li>

            {/* GTF Trader Community */}
            <li className="bg-white p-3 rounded-full transition-colors duration-300 hover:bg-gray-200 ">
              <div className="flex gap-5 justify-start">
                <figure>
                  <img 
                    src="https://www.gettogetherfinance.com/frontend_asset/main_pages/images/people.webp" 
                    alt="GTF Trader Community" 
                  />
                </figure>
                <div>
                  <strong>
                    {inView ? (
                      <CountUp 
                        start={1000} 
                        end={25000} 
                        duration={2} 
                        formattingFn={formatNumber} 
                      />
                    ) : (
                      "1K+"
                    )}
                  </strong>
                  <p>GTF Trader Community</p>
                </div>
              </div>
            </li>

            {/* YouTube */}
            <li className="bg-white p-3 rounded-full transition-colors duration-300 hover:bg-gray-200 ">
              <div className="flex gap-5 justify-start">
                <figure>
                  <img 
                    src="https://www.gettogetherfinance.com/frontend_asset/main_pages/images/video-square.webp" 
                    alt="YouTube" 
                  />
                </figure>
                <div>
                  <strong>
                    {inView ? (
                      <CountUp 
                        start={1000} 
                        end={1000000} 
                        duration={2} 
                        formattingFn={formatNumber} 
                      />
                    ) : (
                      "1K+"
                    )}
                  </strong>
                  <p>YouTube</p>
                </div>
              </div>
            </li>

            {/* App Downloads */}
            <li className="bg-white p-3 rounded-full transition-colors duration-300 hover:bg-gray-2000 hover:bg-gray-200">
              <div className="flex gap-5 justify-start">
                <figure>
                  <img 
                    src="https://www.gettogetherfinance.com/frontend_asset/main_pages/images/arrow-down.webp" 
                    alt="App Downloads" 
                  />
                </figure>
                <div>
                  <strong>
                    {inView ? (
                      <CountUp 
                        start={1000} 
                        end={200000} 
                        duration={2} 
                        formattingFn={formatNumber} 
                      />
                    ) : (
                      "1K+"
                    )}
                  </strong>
                  <p>App Downloads</p>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </section>
    </>
  );
}

export default CurrentStatus;
