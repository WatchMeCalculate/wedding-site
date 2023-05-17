import type { V2_MetaFunction } from "@remix-run/node";
import Hero from "~/components/hero";
import About from "~/components/about";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Rosemary & Jonah" }];
};

export default function Index() {
  return (
    <div>
      <Hero />
    </div>
  );
}
