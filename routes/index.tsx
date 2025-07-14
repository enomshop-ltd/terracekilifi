import { useSignal } from "@preact/signals";
import { define } from "../utils.ts";
import Counter from "../islands/Counter.tsx";

export default define.page(function Home() {
  const count = useSignal(3);

  return (
    <div class="flex flex-col mb-4 font-sans">
      <div
        class="w-full h-screen bg-scroll"
        style={asset("background-image: url(/images/cover.jpg)")}
      >
        <div class="flex flex-row absolute inset-x-0 bottom-0 h-24 bg-yellow-400">
          <div
            class="flex-none w-64 bg-black bg-contain bg-no-repeat bg-center"
            style={asset("background-image: url(/images/terracebar.png)")}
          >
          </div>
          <div
            class="flex-initial w-32 bg-no-repeat bg-center mt-2.5"
            style={asset("background-image: url(/images/studio.svg)")}
          >
          </div>
          <div
            class="flex-initial w-32 bg-no-repeat bg-center mt-2.5"
            style={asset("background-image: url(/images/food-menu.svg)")}
          >
          </div>
          <div
            class="flex-initial w-32 bg-no-repeat bg-center mt-2.5"
            style={asset("background-image: url(/images/accomodation.svg)")}
          >
          </div>
        </div>
      </div>
      <div class="w-full h-screen bg-black p-20 flex flex-row gap-x-16 capitalize">
        <div
          class="w-2/5 bg-cover bg-no-repeat bg-center rounded-3xl"
          style={asset("background-image: url(/images/party_p2.jpg)")}
        >
          <div class="flex w-full h-full bg-gradient-to-t from-black"></div>
        </div>
        <div class="w-7/12 text-white">
          <h4 class="text-2xl font-thin pb-6">Who we are</h4>
          <h1 class="text-5xl font-bold pb-14">
            The <span class="text-green-500">Terrace</span> Kilifi
          </h1>
          <p class="text-sm text-gray-400 pb-14">
            The Terrace exists as a collaboration of three interconnected spaces
            along the Kilifi Creek - all initiated
            <br></br>
            and developed through Afrofilms broad networks and allies:
          </p>
          <div class="flex flex-col">
            <div class="flex flex-row gap-x-8 pb-11">
              <div
                class="w-24 h-24 bg-no-repeat bg-center bg-origin-content border-2 border-gray-400 border-dashed rounded-full p-3"
                style={asset("background-image: url(/images/art2.svg)")}
              >
              </div>
              <div class="w-4/6">
                <h4 class="text-lg font-bold">Art Space</h4>
                <p class="text-sm text-gray-400">
                  The Terrace Art Space (popularly known as The Terrace Bar &
                  Bistro) is an artists hub overlooking the majestic Kilifi
                  bridge and a favored performance, screening, exhibition and
                  co-working space.
                </p>
              </div>
            </div>
            <div class="flex flex-row gap-x-8 pb-11">
              <div
                class="w-24 h-24 bg-no-repeat bg-center bg-origin-content border-2 border-gray-400 border-dashed rounded-full p-3"
                style={asset("background-image: url(/images/residency.svg)")}
              >
              </div>
              <div class="w-4/6">
                <h4 class="text-lg font-bold">Residency</h4>
                <p class="text-sm text-gray-400">
                  Afrofilms' industry development initiative, 'The Terrace
                  Residency,' establishes venues for creation, exhibition, and
                  performance. It offers attendants respite from everyday
                  challenges in creative and culture-making careers,
                  facilitating an enabling environment for focused attention,
                  deep content dives, and strong connections.
                </p>
              </div>
            </div>
            <div class="flex flex-row gap-x-8">
              <div
                class="w-24 h-24 bg-no-repeat bg-center bg-origin-content border-2 border-gray-400 border-dashed rounded-full p-3"
                style={asset("background-image: url(/images/mangrove.svg)")}
              >
              </div>
              <div class="w-4/6">
                <h4 class="text-lg font-bold">Point Mchu Mangrove Park</h4>
                <p class="text-sm text-gray-400">
                  livelihood project aimed at finding alternative revenue
                  streams for the fishing communities living along the Creek,
                  through a unique Artist Exchange Initiative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-white h-screen p-20 flex flex-col capitalize">
        <h4 class="text-2xl font-thin pb-6">
          What we have <span class="font-bold text-green-500">planned</span>
          {" "}
          for you in 2024
        </h4>
        <div class="grid grid-flow-row-dense grid-cols-7 grid-rows-2 gap-7">
          <div class="col-span-3 row-span-2 h-full flex flex-col">
            <div class="w-full h-3/4 bg-gradient-to-t from-white bg-red-500 rounded-t-lg">
            </div>
            <h4 class="text-xl font-bold pb-1">Terradundo Monthly</h4>
            <p class="text-xs text-gray-400">
              Terradundo is an African dance party! A Friday after work special,
              every first Friday, from 4pm - 4am. Folks come together to freely
              release, collectively celebrate and usher in the weekend on a
              high! With a spotlight on homegrown Kilifi (& coast-based) DJs,
              Terradundo party themes travel across the continent, the diaspora,
              across genres and moods. Every Friday is a delightful musical
              adventure.
            </p>
          </div>
          <div class="col-span-2 h-72 flex flex-col">
            <div class="w-full h-3/4 bg-gradient-to-t from-white bg-red-500 rounded-t-lg">
            </div>
            <h4 class="text-xl font-bold pb-1">Bi-Annual Boat Parade</h4>
            <p class="text-xs text-gray-400">
              Live music and DJ performances; fashion & visual art exhibits; art
              exchanges with the local community at Point Mchu & mangrove
              restoration activities.
            </p>
          </div>
          <div class="col-span-2 h-72 flex flex-col">
            <div class="w-full h-3/4 bg-gradient-to-t from-white bg-red-500 rounded-t-lg">
            </div>
            <h4 class="text-xl font-bold pb-1">
              Monthly Skilling Workshop Series
            </h4>
            <p class="text-xs text-gray-400">
              Every month, we invite artists and industry experts to teach
              interactive workshops of all genres, with a special spotlight on
              film, music and fashion. Workshops are accessible to the Kilifi
              artist community.
            </p>
          </div>
          <div class="col-span-2 h-72 flex flex-col">
            <div class="w-full h-3/4 bg-gradient-to-t from-white bg-red-500 rounded-t-lg">
            </div>
            <h4 class="text-xl font-bold pb-1">Weekly Sunday Live Concerts</h4>
            <p class="text-xs text-gray-400">
              A stripped down acoustic concert featuring 52 Kenyan & East
              African musicians. Every Sunday, a musician is invited to perform
              a 2-hr live acoustic session at The Terrace Art Space. All
              performances are filmed to create an online video library.
            </p>
          </div>
          <div class="col-span-2 h-72 flex flex-col">
            <div class="w-full h-3/4 bg-gradient-to-t from-white bg-red-500 rounded-t-lg">
            </div>
            <h4 class="text-xl font-bold pb-1">Monthly African Film Nights</h4>
            <p class="text-xs text-gray-400">
              Featuring African films made by Kenyan & East African filmmakers.
              Every month, a film is selected for screening, and the film’s
              creators are invited to attend the screenings and participate in
              Q&A with attendees afterwards. Screenings are hosted at The
              Terrace Art Space; invited guests stay at the Residency in
              Majajani.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full bg-gray-600"></div>
    </div>
  );
});
