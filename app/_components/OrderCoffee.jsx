import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const OrderCoffee = () => {
  return (
    <>
      <div className="bg-gray-50 md:py-16 md:my-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            <div
              className=""
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out-back"
            >
              <Image
                src="/coffee/coffee-mid.png"
                width={600}
                height={600}
                className="object-cover md:w-full"
              />
            </div>
            <div
              className="md:pe-40 py-10 md:py-0"
              data-aos="fade-down"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out-back"
            >
              <h1 className="text-3xl md:text-5xl font-bold">
                Order Your Favourite Coffee
              </h1>
              <p className=" text-gray-500 text-lg py-4 md:py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                reprehenderit repellat aut molestias est, odit quos voluptatem
                sint dicta, mollitia minima corporis accusantium optio vero?
              </p>
              <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCoffee;
