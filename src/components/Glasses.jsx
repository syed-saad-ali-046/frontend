import React from 'react';

export default function GlassTryon() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary-foreground">
        <div className="container px-4 md:px-6 text-center text-primary-foreground">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Experience Virtual Glasses Try-On
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl">
              Visualize your perfect pair of glasses before you buy. Our advanced model lets you see how they'll look on
              your face in real-time.
            </p>
            <button className="px-6 py-3 bg-primary-foreground text-primary hover:bg-primary/90 rounded-lg text-lg">
              Try On Glasses
            </button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Advanced Virtual Try-On</h2>
              <p className="mt-4 text-muted-foreground">
                Our cutting-edge technology uses advanced computer vision and augmented reality to let you see how
                glasses will look on your face in real-time. Simply hold your phone up and watch as the glasses are
                seamlessly integrated onto your face.
              </p>
            </div>
            <div className="grid gap-4">
              <img src="https://media.targetoptical.com/2023/Q4/VTO-PLP-espot-a-D.jpg" width={550} height={310} alt="Virtual Try-On" className="rounded-lg" />
              <img src="https://aestar.tech/wp-content/uploads/2023/04/glasses-logo.png" width={550} height={310} alt="Virtual Try-On" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center">Browse Our Frames</h2>
          <p className="mt-4 text-center text-muted-foreground">Find your perfect pair and try them on virtually.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
            <a href="#" className="group">
              <div className="aspect-square bg-background rounded-lg overflow-hidden">
                <img
                  src="https://image.made-in-china.com/318f0j00fRYUsgknCKiJ/SR7113-ZT-mp4.webp"
                  width={300}
                  height={300}
                  alt="Glasses Frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="mt-2 text-center text-sm font-medium group-hover:underline">Frame 1</div>
            </a>
            <a href="#" className="group">
              <div className="aspect-square bg-background rounded-lg overflow-hidden">
                <img
                  src="https://www.favrspecs.com/cdn-cgi/image/width=1920,quality=75,format=auto,fit=scale-down,background=%23F8F8F8/media/product-variants/8277/0cFXzU4L910XuFDR/eyeglasses-markus-t-light-blue-front.png"
                  width={300}
                  height={300}
                  alt="Glasses Frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="mt-2 text-center text-sm font-medium group-hover:underline">Frame 2</div>
            </a>
            <a href="#" className="group">
              <div className="aspect-square bg-background rounded-lg overflow-hidden">
                <img
                  src="https://www.markus-t.com/crop/assets/images/L1-064-174-174-001-1190x614xresize.jpg"
                  width={300}
                  height={300}
                  alt="Glasses Frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="mt-2 text-center text-sm font-medium group-hover:underline">Frame 3</div>
            </a>
            <a href="#" className="group">
              <div className="aspect-square bg-background rounded-lg overflow-hidden">
                <img
                  src="https://media.visio-net.co.uk/oscommerce/images/viewerxxl_new_1000/dolce-and-gabbana-DG5098-3133-54__P21__shad__qt.jpg"
                  width={300}
                  height={300}
                  alt="Glasses Frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="mt-2 text-center text-sm font-medium group-hover:underline">Frame 4</div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
