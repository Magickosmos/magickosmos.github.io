export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>

      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h3 className="text-2xl font-semibold">Pharma Vision LLC (Summer 2025 Internship)</h3>
          <p>Position: Software Developer</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed software demonstrating edge detection concepts</li>
            <li>Optimized kernel generation and image processing</li>
            <li>Implemented user-friendly image workflows</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">School Activities</h3>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Mobile App Team:</strong> Led Chess Vision project tracking real matches using CV.</li>
            <li><strong>PIVOT:</strong> Built interdisciplinary engineering and physics projects.</li>
            <li><strong>BITS:</strong> Developed drone e-commerce website and 3D visualizations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}