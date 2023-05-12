import type { V2_MetaFunction } from "@remix-run/node";
import Home from "~/components/assets/home.jpg";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Rosemary & Jonah" }];
};

export default function Index() {
  let countDownDate = new Date("Dec 31, 2023").getTime();
  let now = new Date().getTime();
  var days = Math.floor((countDownDate - now) / (1000 * 60 * 60 * 24));
  return (
    <section className="flex-row">
      {/* Hero */}
      <img
        src={Home}
        className="h-64 lg:h-full w-full object-cover object-center"
      />
      <div className="text-white space-y-4 text-center bg-black opacity-90">
        <div className="text-5xl">
          <p>Rosemary</p>
          <p>Widenor</p>
        </div>
        <div className="text-2xl">and</div>
        <div className="text-5xl">
          <p>Jonah</p>
          <p>Jolley</p>
        </div>
        <div>12/31/2023 - Troutdale, OR</div>
        <div>{days} days to go! More info to come</div>
      </div>
    </section>
  );
}
