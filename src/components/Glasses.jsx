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
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary/90">
              Try On Glasses
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
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
              <img src="/placeholder.svg" width={550} height={310} alt="Virtual Try-On" className="rounded-lg" />
              <img src="/placeholder.svg" width={550} height={310} alt="Virtual Try-On" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center">Browse Our Frames</h2>
          <p className="mt-4 text-center text-muted-foreground">Find your perfect pair and try them on virtually.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
            <a href="#" className="group" prefetch={false}>
              <div className="aspect-square bg-background rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Glasses Frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="mt-2 text-center text-sm font-medium group-hover:underline">Frame 1</div>
            </a>
            <a href="#" className="group" prefetch={false}>
              <div className="aspect-square bg-background rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Glasses Frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="mt-2 text-center text-sm font-medium group-hover:underline">Frame 2</div>
            </a>
            <a href="#" className="group" prefetch={false}>
              <div className="aspect-square bg-background rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Glasses Frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="mt-2 text-center text-sm font-medium group-hover:underline">Frame 3</div>
            </a>
            <a href="#" className="group" prefetch={false}>
              <div className="aspect-square bg-background rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Glasses Frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="mt-2 text-center text-sm font-medium group-hover:underline">Frame 4</div>
            </a>
          /div>
        </div>
      </section>
    </div>
  )
}
