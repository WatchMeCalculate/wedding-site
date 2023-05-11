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
    <div className="grid-cols-1 min-h-screen ">
      <div className="flex-2">
        <img src={Home} className="h-96 md:h-full w-full object-cover" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 items-center">
          <h1 className="text-center text-white text-5xl p-5">
            Rosemary and Jonah
          </h1>
          <h2 className="text-center text-white text-2xl">
            12/31/2023 - Troutdale, OR{" "}
          </h2>
          <h3 className="text-center text-white text-2xl mb-5">
            {days} days to go!{" "}
          </h3>
          <h3 className="text-center text-white text-2xl mb-5">
            More info to come
          </h3>
        </div>
      </div>
    </div>
  );
}
