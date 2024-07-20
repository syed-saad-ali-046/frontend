import React from 'react';
export default function ShirtTryon() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <img
              src="https://www.roddandgunn.com/on/demandware.static/-/Library-Sites-rodd-shared-library/default/dw7bf6b8a2/02%20GLOBAL/SIZE%20GUIDE/FitGuide_Polos.jpg"
              alt="Hero"
              className="mx-auto aspect-video rounded-xl object-center sm:w-full lg:order-last lg:aspect-square"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  Try on Shirts Before You Buy
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Visualize how your new shirt will look on you with our interactive sizing tool. Select your size and
                  see a real-time preview.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <label htmlFor="size" className="text-base font-medium">
                    Select Your Size
                  </label>
                  <select id="size" className="w-full p-2 border rounded-md">
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
                <button className="w-full p-3 bg-blue-500 text-white rounded-md text-lg">
                  See Result
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Sizing Guide
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Use our size chart to find your perfect fit. Measurements are in inches.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                  <span className="font-medium">Chest:</span>
                  <span>34-36</span>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                  <span className="font-medium">Waist:</span>
                  <span>28-30</span>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                  <span className="font-medium">Sleeve:</span>
                  <span>32-33</span>
                </div>
              </div>
            </div>
            <img
              src="https://2020.asia.wordcamp.org/files/2019/07/size-chart.png"
              alt="Sizing Guide"
              className="mx-auto aspect-video rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

