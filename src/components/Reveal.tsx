'use client';
import React, {useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from 'framer-motion';

type RevealProps = {
    children:React.ReactNode,
    width?: 'fit-content' | '100%'
}

const Reveal = ({children, width = 'fit-content'}: RevealProps) => {
  const ref = useRef(null)
  const isInView= useInView(ref);
  const animControls= useAnimation();
  useEffect(() => {
    if (isInView) {
      animControls.start("animate")
    }
  }, [animControls, isInView])

  
  return (
    <div ref={ref} style={{position: 'relative', width, overflow: 'hidden'}}>
      <motion.div
      variants={{
        initial:{opacity:0,y:75},
        animate:{opacity:1,y:0},
      }}
      initial='initial'
      animate={animControls}
      transition={{duration: 0.5, delay:0.25}}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal;