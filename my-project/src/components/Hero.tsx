import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center text-white bg-black relative">
      <h1 className="text-5xl font-bold mb-4">Alexander Smith</h1>
      <Image
        src="/images/Headshot.JPG"
        width={200}
        height={200}
        alt="Headshot"
        className="rounded-full border-4 border-teal-400 mb-4"
      />
      <p className="max-w-xl text-gray-300">
        Computer Science Major at Virginia Tech | Expected Graduation 2027 | GPA: 3.87
      </p>
    </section>
  );
}