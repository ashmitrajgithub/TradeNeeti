
import QuestionsItems from "./QuestionsItems";

const Questions = () => {

    const questions = [
        {
            quest: "Why is the technical site review free?",
            ans: "I'd like to help you improve your website where it really matters! What better way to kickstart the process by showing you exactly where you could be doing things better? Consider it a little taste of the value I'll bring to your business. It's delivered to your inbox, obligation free. And you're not subscribing to anything so your inbox stays clean and free of nonsense."
        },
        {
            quest: "Do you charge per hour or per project?",
            ans: "Charging per project works better for you and me. You know the price upfront and I can focus on creating something great without counting the hours.",
        },
        {
            quest: "How often will we be in contact?",
            ans: "I promised to keep a healthy relationship with you. If that means a call every day, cool. If it means keeping in touch through a weekly email exchange, cool. Whatever works for you. Remember, I'm here to make your life easier, not more complicated.",
        },
        {
            quest: "How ?",
            ans: "I promised to keep a healthy relationship with you. If that means a call every day, cool. If it means keeping in touch through a weekly email exchange, cool. Whatever works for you. Remember, I'm here to make your life easier, not more complicated.",
        },
        {
            quest: "How I promised to keep a healthy relationship with you. If that means a call every day, ?",
            ans: "I promised to keep a healthy relationship with you. If that means a call every day, cool. If it means keeping in touch through a weekly email exchange, cool. Whatever works for you. Remember, I'm here to make your life easier, not more complicated.",
        },
        {
            quest: "How ?",
            ans: "I promised to keep a healthy relationship with you. If that means a call every day, cool. If it means keeping in touch through a weekly email exchange, cool. Whatever works for you. Remember, I'm here to make your life easier, not more complicated.",
        },
    ];

    return (
        <>
            <div className="relative h-36">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-300 to-transparent z-20"></div>
            </div>

            <section
                className="questions questions-container flex flex-col items-center justify-center p-8 relative bg-gray-200 overflow-hidden z-10"
            >
                <h2 className="mb-8 text-white md:mb-12 text-2xl font-bold text-center md:text-4xl">Frequently asked questions</h2>

                {questions.map((question, index) => (
                    <QuestionsItems key={index} quest={question.quest} ans={question.ans} />
                ))}
            </section>


        </>
    );
};

export default Questions;