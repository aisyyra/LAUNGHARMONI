'use client'
import * as React from "react";
import { memo, useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AccordionItem2 ({ isOpen2, konten }) {

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      {/* Header */}
      {konten?.header()}

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen2 && (
          <motion.section
            key="konten"
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
            {konten?.item()}

          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

function Accordion2(props) {
  const {
    _isOpen2,
    _dataStructure,
	} = props;  

  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.

  return _dataStructure?.map((item, i) => (
    <AccordionItem2
      key={i} 
      isOpen2={_isOpen2} 
      konten={item} 
    />
  ));

  const [expanded, setExpanded] = useState(null);
  const isOpen = 0 === expanded;

  

  // return <AccordionItem 
  //           isOpen={_isOpen}
  //           content={_dataStructure} 
  //         />
};

export default memo(Accordion2);