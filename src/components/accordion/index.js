'use client'
import * as React from "react";
import { memo, useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";



function AccordionItem ({ isOpen, content }) {

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      {/* Header */}
      {content?.header()}

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >

            {/* Child Content */}
            {content?.item()}

          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

function Accordion(props) {
  const {
    _isOpen,
    _dataStructure,
	} = props;  

  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.

  return _dataStructure?.map((item, i) => (
    <AccordionItem
      key={i} 
      isOpen={_isOpen} 
      content={item} 
    />
  ));

  // return <AccordionItem 
  //           isOpen={_isOpen}
  //           content={_dataStructure} 
  //         />
};

export default memo(Accordion);