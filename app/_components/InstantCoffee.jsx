import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const InstantCoffee = () => {
  return (
    <>
      <div className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div
              className="order-2 md:flex InstantCoffee_col relative mx-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out-back"
            >
              <Image
                src="/coffee/coffee-banner.png"
                width={250}
                height={250}
                className="border-2 rounded-2xl border-gray-100 absolute top-0 left-20 z-20 md:w-[16rem] w-[10rem]"
              />
              <Image
                src="/coffee/coffee-banner.png"
                width={250}
                height={250}
                className="border-2  rounded-2xl border-gray-100 -rotate-12 z-10 md:w-[16rem] w-[10rem]"
              />{" "}
              <img
                src="/coffee/hand-drawn.png"
                className=" absolute top-20 md:-left-16 md:max-w-md -z-10 max-w-56"
              />
            </div>
            <div
              className="order-1 md:ps-40 md:py-10"
              data-aos="fade-down"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out-back"
            >
              <h1 className="text-3xl md:text-5xl font-bold">
                Instant Coffee At Your Home
              </h1>
              <p className=" text-gray-500 text-lg py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                reprehenderit repellat aut molestias est, odit quos voluptatem
                sint dicta, mollitia minima corporis accusantium optio vero?
              </p>
              <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                Downlaod Your App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstantCoffee;
