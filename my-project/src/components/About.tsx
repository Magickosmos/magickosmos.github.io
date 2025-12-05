export default function About() {
  const currentDateTime = new Date();
  const formattedDate = `${String(currentDateTime.getHours()).padStart(2,'0')}:${String(currentDateTime.getMinutes()).padStart(2,'0')}:${String(currentDateTime.getSeconds()).padStart(2,'0')} ${String(currentDateTime.getMonth()+1).padStart(2,'0')}/${String(currentDateTime.getDate()).padStart(2,'0')}/${currentDateTime.getFullYear()}`;

  return (
    <section id="about" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

      {/* Experience */}
      <div className="mb-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2">Experience</h3>
        <p className="mb-1">Pharma Vision LLC (Summer 2025 Internship)</p>
        <p className="mb-1 font-medium">Job Position: Software Developer</p>
        <p>
          Developed software to demonstrate concepts of edge detection and speed up development of kernels.
          Demo shown under internship tab.
        </p>
      </div>

      {/* Education */}
      <div className="mb-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2">Education</h3>
        <p className="mb-1">Virginia Tech, Blacksburg</p>
        <p className="mb-1">Expected Graduation: 2028</p>
        <p className="mb-1">Major: Computer Science</p>
        <p className="mb-1">GPA: 3.87</p>
        <p className="mt-3 mb-1">Deep Run High School</p>
        <p className="mb-1">GPA: 4.55 | Top 10% of Class</p>
      </div>

      {/* School Activities */}
      <div className="mb-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2">School Activities</h3>

        <div className="mb-4">
          <p className="font-bold">Mobile App Team at Virginia Tech</p>
          <p className="italic">Project Lead | Computer Vision, Figma, Roboflow, React, Python, Git</p>
          <p className="mb-1">Blacksburg, VA</p>
          <ul className="list-disc list-inside">
            <li>Led team developing Chess Vision.</li>
            <li>Trained model for piece detection.</li>
            <li>Integrated real-time board tracking.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-bold">Pivot at Virginia Tech</p>
          <p className="italic">Software Developer | Flask, AWS, React Native, Node.js</p>
          <p className="mb-1">Blacksburg, VA</p>
          <ul className="list-disc list-inside">
            <li>Built mobile stock update app.</li>
            <li>Deployed Flask backend on AWS.</li>
            <li>Collaborated across engineering teams.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-bold">BITS at Virginia Tech</p>
          <p className="italic">Software Developer | Tailwind, Node.js, Figma, Git</p>
          <p className="mb-1">Blacksburg, VA</p>
          <ul className="list-disc list-inside">
            <li>Developed drone e-commerce site.</li>
            <li>Created 3D product visualizations.</li>
            <li>Improved client site engagement.</li>
          </ul>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2">Technical Skills</h3>
        <p className="mb-1">Programming Languages: Java, Python, C#, JS, CSS, HTML</p>
        <p className="mb-1">Version Control: Git, GitHub</p>
        <p>Other tools: AWS, Matlab, Solidworks, Unity</p>
      </div>

      {/* Awards */}
      <div className="mb-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2">Awards</h3>
        <p>Dean's List with Distinction Standing - Fall 2024, Spring 2025</p>
      </div>

      {/* Site Data */}
      <div className="mb-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2">Site Data</h3>
        <p>You opened this site at {formattedDate}</p>
      </div>
    </section>
  );
}
