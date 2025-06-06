import React, { useRef } from 'react'
import AnimatedTitle from './ AnimatedTitle'
import gsap from 'gsap';

import Button from "./Button";

const Story = () => {

  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0, rotateY: 0,
      transitionPerspective: 500,
      ease: 'power1.inOut'
    })
  
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if(!element) return

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY)/centerY) * -10;
    const rotateY = ((xPos - centerX)/centerY) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX, 
      rotateY,
      transitionPerspective: 500,
      ease: 'power1.inOut'
    })
  }

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-1">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <h2 className="text-sm uppercase md:text-[14px]">
          The multiversal ip world
        </h2>

        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

        <div className="story-img-container">
          <div className="story-img-mask">
            <div className="story-img-content">
              <img
                ref={frameRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseEnter={handleMouseLeave}
                src="/img/entrance.webp"
                alt="entrance"
                className="object-contain"
              />
            </div>
          </div>

          



        </div>

        

        </div>

        
      </div>
      <div className="-mt-50 sm:-mt-80 flex w-full justify-center md:me-44 md:justify-end md:pr-10 pb-24">
        <div className="flex h-full w-fit flex-col items-center md:items-start">
          <p className="mt-3 max-w-sm text-center text-violet-50 md:text-start">
            Where realms converge, lies Zentry and the boundless pillar.
            Discover its secrets and shape your fate amidst infinite
            opportunities.
          </p>

          <Button
            id="realm-btn"
            title="discover prologue"
            containerClass="mt-5"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Story