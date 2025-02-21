const About = ({ skills }: { skills: { name: string; level: number }[] }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="section-title">About Me</h2>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:ml-12">
          <p className="text-primary text-lg mb-6">
            I'm a passionate full-stack developer with 2+ years of experience building web applications.
            I specialize in React, Node.js, and modern web technologies.
          </p>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-accent">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div
                      className="bg-accent h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;