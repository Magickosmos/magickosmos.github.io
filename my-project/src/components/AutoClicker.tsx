export default function AutoClicker() {
  return (
    <section id="autoclicker" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Auto Clicker Project</h2>
      <p className="max-w-4xl mx-auto mb-4">
        Main functionality consists of two separate Python scripts. 
        <a href="https://github.com/Magickosmos/Mouse-Controller" target="_blank" className="text-teal-400 ml-1">
          Github Link
        </a>
      </p>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <p>Click_Playback: Records clicks and can be replayed by pressing "p".</p>
          <video controls className="w-full rounded">
            <source src="/videos/ClickReplay.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <p>Color Clicker: Click a color, press "l" to lock, and the program clicks the first instance of that color when pressing "p".</p>
          <video controls className="w-full rounded">
            <source src="/videos/ColorClickerVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}