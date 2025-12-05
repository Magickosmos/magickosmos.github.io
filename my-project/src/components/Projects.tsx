export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h3 className="text-2xl font-semibold mb-2">AI Defect Detection</h3>
          <p className="mb-4">
            Programs to train and validate an AI to classify images into defect/no-defect folders.
          </p>
          <video controls className="w-full rounded">
            <source src="videos/AI_Detect.mp4" type="video/mp4" />
          </video>
          <video controls className="w-full rounded mt-4">
            <source src="videos/AI_Predict.mp4" type="video/mp4" />
          </video>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Vision Project (Pharma Vision LLC)</h3>
          <p className="mb-4">Transfer BMP files through color filters and kernels for faster defect detection.</p>
          <video controls className="w-full rounded">
            <source src="videos/EdgeDetectDemo.mp4" type="video/mp4" />
          </video>
          <video controls className="w-full rounded mt-4">
            <source src="/videos/EdgeDetectZoom.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}