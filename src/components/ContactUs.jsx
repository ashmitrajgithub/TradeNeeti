import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function ContactUs() {
    return (
        <>
              <div className="px-4 mx-auto relative bg-white overflow-hidden z-10">
                <div className="mx-auto flex flex-col lg:flex-row justify-around items-center ">
                    <div className="hidden lg:block z-20 " style={{ width: '500px', height: '500px' }}>
                        <DotLottieReact
                            src="/TradeNeeti/assets/lottieimage.lottie"
                            loop
                            autoplay
                        />
                    </div>

                    <div className="w-full md:w-4/5 lg:max-w-lg px-8 py-6 my-6 rounded-lg shadow-2xl z-20">
                        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Book Demo Class</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-900 mb-1" htmlFor="name">Your Name</label>
                                <input
                                    className="w-full px-4 py-2 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(233,180,171)]  transition duration-300 "
                                    placeholder="Enter your name"
                                    type="text"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
                                <input
                                    className="w-full px-4 py-2 bg-slate-50  rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(233,180,171)]  transition duration-300"
                                    placeholder="Enter your email"
                                    name="email"
                                    id="email"
                                    type="email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1" htmlFor="mobile">Your Mobile Number</label>
                                <input
                                    className="w-full px-4 py-2 bg-slate-50  rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(233,180,171)]  transition duration-300"
                                    placeholder="Enter your mobile number"
                                    name="mobile"
                                    id="mobile"
                                    type="tel"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
                                <textarea
                                    className="w-full px-4 py-2 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(233,180,171)] transition duration-300"
                                    rows="4"
                                    placeholder="Enter your message"
                                    name="message"
                                    id="message"
                                ></textarea>
                            </div>
                            <button
                                className="w-full bg-[rgb(233,180,171)] text-gray-900 py-2 px-4 rounded-lg hover:bg-[rgb(212,148,136)] transition duration-300"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;

