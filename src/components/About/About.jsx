import React from 'react';

const teamMembers = [
  { name: "Jane Doe", role: "CEO", image: "/placeholder.svg?height=100&width=100" },
  { name: "John Smith", role: "CTO", image: "/placeholder.svg?height=100&width=100" },
  { name: "Alice Johnson", role: "Lead Developer", image: "/placeholder.svg?height=100&width=100" },
];

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our Company</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg text-gray-600">
          Founded in 2023, our company has been at the forefront of innovation in web development.
          We strive to create cutting-edge solutions that help businesses thrive in the digital world.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Empowering Digital Growth</h3>
          <p className="text-gray-700">
            We are committed to empowering businesses with innovative digital solutions,
            fostering growth, and creating meaningful online experiences for users worldwide.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white shadow-md rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
