import { FaCheck } from "react-icons/fa";

const feedbackItems = [
  {
    title: "Exams",
    description:
      "Choose from multiple question styles, including autocorrected questions. Set exam times, passing scores, and number of attempts.",
  },
  {
    title: "Assignments",
    description:
      "Learners can type their answers directly in the LMS or upload a file. Review these responses and leave feedback, with automated learner notifications.",
  },
  {
    title: "Knowledge checks",
    description:
      "Regularly assess learner knowledge throughout Course content, with questions scattered throughout modules.",
  },
  {
    title: "Surveys and reviews",
    description:
      "Improve your programs with learner feedback, using detailed surveys and public Course ratings and reviews.",
  },
];

const FeedbackSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
          Feedback loops for learners and admins
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {feedbackItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="bg-teal-200 rounded-full p-2 w-fit">
                <FaCheck className="text-black text-sm" />
              </div>
              <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
