import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { asset } from "$fresh/runtime.ts";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="flex flex-col mb-4">
      <div class="w-full h-screen bg-scroll" style={asset("background-image: url(/images/cover.jpg)")}>
        <div class="flex flex-row absolute inset-x-0 bottom-0 h-24 bg-yellow-400">
          <div class="flex-none w-64 bg-black bg-contain bg-no-repeat bg-center"  style={asset("background-image: url(/images/terracebar.png)")}></div>
          <div class="flex-initial w-32 bg-no-repeat bg-center mt-2.5" style={asset("background-image: url(/images/studio.svg)")}></div>
          <div class="flex-initial w-32 bg-no-repeat bg-center mt-2.5" style={asset("background-image: url(/images/food-menu.svg)")}></div>
          <div class="flex-initial w-32 bg-no-repeat bg-center mt-2.5" style={asset("background-image: url(/images/accomodation.svg)")}></div>
        </div>
      </div>
      <div class="w-full bg-gray-600 h-screen"></div>
      <div class="w-full bg-gray-500 h-screen"></div>
      <div class="w-full bg-gray-600 h-screen"></div>
      <div class="w-full bg-gray-500 h-screen"></div>
      <div class="w-full bg-gray-600 h-screen"></div>
      <div class="w-full bg-gray-500 h-screen"></div>
    </div>
    
  );
}
