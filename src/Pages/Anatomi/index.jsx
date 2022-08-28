import React from "react";

export default function Anatomi() {
  return (
    <div>
      <section>
        <div class="mx-auto flex px-5 py-4 items-center justify-center flex-col">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Anatomi Kupu-Kupu
          </h1>
          <img
            class="lg:w-2/3 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={require("../../assets/anatomi.png")}
          />
          <div class="text-left text-base font-semibold flex lg:w-2/3 w-full rounded-lg shadow-xl">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>1. Sayap Depan (Forewing)</li>
                <li>2. Sayap Belaakng (Hindwing)</li>
                <li>3. Antena (Antennea)</li>
                <li>4. Kepala (Head)</li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>5. Dada (Throax)</li>
                <li>6. Perut (Abdomen)</li>
                <li>7. Mata Kompon (Compound Eye)</li>
                <li>8. Probosis (Proboscis)</li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>9. Kaki Depan (Foreleg)</li>
                <li>10. Kaki Tengah (Midleg)</li>
                <li>11. Kaki Belakang (Hind Leg)</li>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
