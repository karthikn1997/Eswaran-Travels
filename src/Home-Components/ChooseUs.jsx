import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced Guides",
      description:
        "Our guides have years of experience and local knowledge, ensuring you get the most out of your tour.",
      icon: "🌍",
    },
    {
      title: "Affordable Packages",
      description:
        "We offer competitive pricing and flexible payment options to make your dream vacation a reality.",
      icon: "💰",
    },
    {
      title: "Customizable Tours",
      description:
        "Personalize your experience by choosing from a variety of destinations, activities, and accommodations.",
      icon: "🎒",
    },
    {
      title: "24/7 Support",
      description:
        "We provide around-the-clock assistance to ensure your trip goes smoothly from start to finish.",
      icon: "📞",
    },
  ];

  return (
    <section className="bg-gradient-to-t  from-primary via-blue-400 to-primary  py-16 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#FACC15] sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-white">
            Discover what makes us the best choice for your next adventure!
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105"
            >
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-[#070F4E]">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
