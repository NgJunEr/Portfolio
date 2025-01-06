import pic1 from "../assets/images/expertise-photo.jpg";
import pic2 from "../assets/images/goals-photo.jpg";

const About = () => {
  return (
    <div className="relative overflow-clip min-h-screen text-white bg-gradient-to-r from-blue-200 to-cyan-200">
    <section id="about" className="text-white p-8">
      <h2 className="text-6xl font-bold mb-8">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-white rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">0.1 Background</h3>
          <p className="text-black mb-6">
            I'm a passionate software developer with a strong foundation in computer science and a love for creating innovative web solution. My journey in tech started with a curiosity about how things work, which led me to pursue a career in web development.
          </p>

          <div className="rounded-lg p-4 mb-4 border border-white">
            <code className="text-black">
              const skills = [<br />
                &nbsp;&nbsp;'HTML',
                <br />
                &nbsp;&nbsp;'JavaScript',
                <br />
                &nbsp;&nbsp;'CSS',
                <br />
                &nbsp;&nbsp;'PHP',
                <br />
                &nbsp;&nbsp;'SQL'
                <br />
              ];
            </code>
          </div>
        </div>

        <div className="border border-white rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">0.2 Expertise
          </h3>
          <p className="text-black">
            I specialize in building robust and scalable web applications using modern technologies. My expertise spans both front-end and back-end development, allowing me to create seamless, end-to-end solutions.
          </p>

          <div className="mt-4 relative border border-white rounded-lg p-4 h-[220px] overflow-hidden">
            <img 
              src={pic1}
              alt="Project 1"
              className="absolute inset-0 w-full object-cover"
            />
          </div>
        </div>

        <div className="border border-white rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-2">0.3 Skills
          </h3>
          <p className="text-black">
            I'm proficient in a wide range of technologies and constantly expanding my skill set to stay at the forefront of web development.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="border border-white rounded-lg p-3">
              <h4 className="text-cyan-400 font medium mb-2">
                Frontend
              </h4>
              <ul className="text-black space-y-1 text-sm">
                <li>React/Next.js</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="border border-white rounded-lg p-3">
              <h4 className="text-cyan-400 font medium mb-2">
                Backend
              </h4>
              <ul className="text-black space-y-1 text-sm">
                <li>Laravel</li>
                <li>Python</li>
                <li>Java</li>
                <li>MSSQL</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

        <div className="border border-white rounded-lg p-6">

          <div className="space-y-4">


            <div>
              <label className="block text-sm font-medium mb-1">
                Front-end
              </label>
              <div className="w-full bg-white/50 rounded-full h-2">
                <div className="bg-cyan-400 h-2 rounded-full"
                style={{ width: "60%"}}>
                </div>
              </div>
            </div>


            <div>
              <label className="block text-sm font-medium mb-1">
                Back-end
              </label>
              <div className="w-full bg-white/50 rounded-full h-2">
                <div className="bg-cyan-400 h-2 rounded-full"
                style={{ width: "80%"}}>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Database
              </label>
              <div className="w-full bg-white/50 rounded-full h-2">
                <div className="bg-cyan-400 h-2 rounded-full"
                style={{ width: "80%"}}>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mt-4 mb-2">0.4. Approach</h3>
          <p className="text-black">
            I believe in writing clean, maintainable code and following best practices. My approach involves understanding client needs, planning thoroughly and delivering high-quality solution on time.
          </p>
        </div>

        <div className="border border-white rounded-lg p-6 flex flex-col justify justify-between">
          <div className="relative border border-white rounded-lg p-4 h-[200px] overflow-hidden">
            <img 
              src={pic2}
              alt="Project 2"
              className="absolute inset-0 w-full h-full object-cover"
            />

          </div>
          <h3 className="text-2xl font-bold mt-2 mb-2">0.5. Goals</h3>
          <p className="text-black">
            My goal is to continue growing as a developer, tackling challenges projects and contributing to the tech community. I'm always excited to learn new technologies and push the boundaries of what's possible in web development.
          </p>
        </div>



      </div>


    </section>
    </div>
  )
}

export default About