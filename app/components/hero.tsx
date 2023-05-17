import Home from "~/components/assets/home.jpg";

export default function Hero() {
  let countDownDate = new Date("Dec 31, 2023").getTime();
  let now = new Date().getTime();
  var days = Math.floor((countDownDate - now) / (1000 * 60 * 60 * 24));
  return (
    <section id="hero" className="flex-row h-[100%]">
      <img
        src={Home}
        alt="pic_of_R_and_J"
        className="w-[100%] max-h-[370px] object-scale-down overflow"
      />
      <div className="text-white space-y-4 text-center bg-black">
        <div className="text-7xl font-[salty-feathers]">
          <p>Rosemary</p>
          <p>Widenor</p>
        </div>
        <div className="text-5xl font-[salty-feathers]">and</div>
        <div className="text-7xl font-[salty-feathers]">
          <p>Jonah</p>
          <p>Jolley</p>
        </div>
        <div>12/31/2023 - Troutdale, OR</div>
        <div>{days} days to go! More info to come</div>
      </div>
    </section>
  );
}
