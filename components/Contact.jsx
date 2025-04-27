import React from 'react'
import Button from './Button'

const ImageClipBox = ({src, classImage}) => {
  return (
    <div className={classImage}>
      <img src={src}/>
    </div>
  )
}

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-1 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 ">
          <ImageClipBox classImage="contact-clip-path-1" src="img/contact-1.webp" />  
          <ImageClipBox classImage="contact-clip-path-2 lg:translate-y-10 translate-y-60" src="img/contact-2.webp" /> 
        </div> 
        <div className="absolute left-30 -top-40 w-60 sm:top-1/2 md:left-auto  md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox classImage="absolute md:scale-125" src="img/swordman-partial.webp" />
          <ImageClipBox classImage="sword-man-clip-path md:scale-125" src="img/swordman.webp" />
        </div>

        <div className="flex flex-col items-center text-center">
          
          <p className="contact-p special-font mt-10 w-full text-5xl leading-[0.9] md:text-[6rem]">
            Le<b>t</b>'s b<b>u</b>ild <br/>tog<b>e</b>ther
          </p>
          <a href="mailto:mcastrod08@gmail.com">
          <Button title="Contact me" containerClass="mt-10 cursor-pointer" />
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default Contact