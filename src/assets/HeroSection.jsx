import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Colors = [
  "bg-gradient-to-br from-[#063d33] to-[#021f19]",
  "bg-gradient-to-br from-[#075e4f] to-[#032923]",
  "bg-gradient-to-br from-[#0b7d69] to-[#03332b]",
  "bg-gradient-to-br from-[#0a6a59] to-[#022821]",
  "bg-gradient-to-br from-[#0c8a73] to-[#033a31]",
  "bg-gradient-to-br from-[#0a5e4e] to-[#021f19]",
];
const cardData = [
  { value: "10K+", label: "Active Users", image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" },
  { value: "500+", label: "Deployments", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
  { value: "98%", label: "Satisfaction", image: "https://cdn-icons-png.flaticon.com/512/709/709790.png" },
  { value: "120+", label: "Projects", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { value: "24/7", label: "Support", image: "https://cdn-icons-png.flaticon.com/512/3059/3059518.png" },
  { value: "Fast", label: "Performance", image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png" }
];

const HeroSection = () => {
  const scrollRef = useRef(null);
  const triggerRef = useRef(null);
  const revealtextRef = useRef(null);

  useGSAP(() => {
    const mainTrack = gsap.to(scrollRef.current, {
      x: "-350vw",
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=5000",
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
      }
    });

    const boxes = gsap.utils.toArray(".Hero-box");
    boxes.forEach((box, i) => {
  gsap.to(box, {
    y: "+=20",
    duration: 2 + (i * 0.2),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});

   boxes.forEach((box, i)=> {
  const randomRotation = gsap.utils.random(-20, 20);
  const randomYOffset = gsap.utils.random(-80, 80);
  const randomScale = gsap.utils.random(0.9, 1.1);

  gsap.to(box,{
    rotation: randomRotation,
    y: randomYOffset,
    scale: randomScale,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: box,
        containerAnimation: mainTrack,
        start: "left right",
        end: "right left",
        scrub: 1
    }
  })
});
boxes.forEach((box, i) => {
  gsap.to(box, {
    y: i % 2 === 0 ? -40 : 40,
    scrollTrigger: {
      trigger: box,
      containerAnimation: mainTrack,
      start: "left center",
      end: "right center",
      scrub: true
    }
  });
});

    gsap.fromTo(
      revealtextRef.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: scrollRef.current,
          containerAnimation: mainTrack,
          start: "60% center",
          end: "90% center",
          scrub: true,
        }
      }
    )

  }, { scope: triggerRef });

  return (
    <div 
ref={triggerRef} 
className="relative h-screen w-full overflow-hidden 
bg-gradient-to-br from-[#001a14] via-[#002a22] to-[#000f0b]"
>
<div className="absolute w-[600px] h-[600px] bg-[#14f1a6]/10 blur-[120px] 
  rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

      <div ref={revealtextRef} className='absolute inset-0 flex flex-col items-center justify-center z-0'>
        <h2 className='text-[12vw] font-black text-[#14f1a6] drop-shadow-[0_0_25px_rgba(20,241,166,0.35)] leading-none text-center uppercase italic'>
          Welcome to ITZFIZZ
        </h2>
        <p className="mt-6 text-lg text-emerald-200 tracking-wide opacity-90">
  Scroll-driven animations crafted with React, GSAP & Tailwind
</p>



        <div className="mt-10 px-6 py-4 border border-[#14f1a6]/40 rounded-xl
text-white uppercase text-sm font-bold tracking-widest
cursor-pointer backdrop-blur-md bg-white/5
hover:bg-[#14f1a6] hover:text-[#001a14]
transition-all duration-300">
          10K+ Active Users
          <br />
          500+ Deployments
          <br />
          98% User Satisfaction
          <br />
          120+ Projects Completed
          <br />
          24/7 Support Available
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative z-10 flex h-full items-center pointer-events-none perspective-[1200px]"
        style={{ width: "450vw", paddingLeft: "100vw" }}
      >
        {Colors.map((color, index) => (
          <div
            key={index}
          className={`Hero-box ${color} w-[320px] h-[420px] mx-12 shrink-0
rounded-[28px] bg-white/10 backdrop-blur-md
border border-white/20
shadow-[0_40px_80px_rgba(0,0,0,0.45)]
flex flex-col justify-between p-6
hover:-translate-y-3 hover:scale-105
transition-all duration-300`}
          >
           <div className="w-full text-white flex flex-col justify-between h-full">
  
  <img
    src={cardData[index].image}
    alt=""
    className="w-12 h-12 mb-4 opacity-90"
  />

  <div>
    <h3 className="text-4xl font-extrabold mb-1">
      {cardData[index].value}
    </h3>

    <p className="text-sm uppercase tracking-wider opacity-80">
      {cardData[index].label}
    </p>
  </div>
 </div> 
</div>
        ))}
      </div>

    </div>
  )
}

export default HeroSection;