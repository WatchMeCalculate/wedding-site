import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Rosemary & Jonah" }];
};

export default function Index() {
  return (
    <section className="flex-row bg-black">
      <h1 className="text-white">travel</h1>
    </section>
  );
}
