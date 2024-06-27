import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../parts/Navbars";
import Footer from "../parts/Footer";
export default function Product() {
  return (
    <div>
    <Navbar/>
    <div className="w-full">
      <section className="bg-gradient-to-r from-zinc-900 to-neutral-50  py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-neutral-50 text-primary-foreground md:text-5xl">Discover Our Latest Collection</h1>
            <p className="mt-4 text-lg text-neutral-50 text-primary-foreground/80 md:text-xl">
              Explore our curated selection of men's, women\'s, and kids' fashion that combines style and quality.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <a href="/male-collection" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Men's Collection</span>
              </a>
              <img
                src="https://www.cougar.com.pk/cdn/shop/articles/men_s_wear.webp?v=1663242281"
                alt="Men's Collection"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="bg-background p-6">
                <h2 className="text-2xl font-bold">Men's Collection</h2>
                <p className="mt-2 text-muted-foreground">
                  Elevate your style with our curated selection of men's fashion.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Women's Collection</span>
              </Link>
              <img
                src="https://www.cougar.com.pk/cdn/shop/articles/New_Women_s_Collection.jpg?v=1662637654"
                alt="Women's Collection"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="bg-background p-6">
                <h2 className="text-2xl font-bold">Women's Collection</h2>
                <p className="mt-2 text-muted-foreground">
                  Discover timeless pieces and on-trend styles for the modern woman.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Kids' Collection</span>
              </Link>
              <img
                src="https://i.pinimg.com/736x/a9/b4/b3/a9b4b3d1a6503664745785947341e2c7.jpg"
                alt="Kids' Collection"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="bg-background p-6">
                <h2 className="text-2xl font-bold">Kids' Collection</h2>
                <p className="mt-2 text-muted-foreground">
                  Discover stylish and comfortable options for your little ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  )
}
