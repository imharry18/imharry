import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName
}) => (
  <>
    <FloatingDockDesktop items={items} className={desktopClassName} />
    <FloatingDockMobile items={items} className={mobileClassName} />
  </>
);

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={["relative block md:hidden", className].filter(Boolean).join(" ")}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="
              absolute left-1/2 -translate-x-1/2 bottom-full mb-2
              flex flex-row gap-2
            "
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 border border-neutral-700 shadow-md"
                >
                  <div className="h-5 w-5 text-white flex items-center justify-center">
                    {item.icon}
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 border border-neutral-700 shadow-md"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-300" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={[
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-neutral-900 border border-neutral-800 px-4 pb-3 md:flex",
        "backdrop-blur-xl",
        className
      ].filter(Boolean).join(" ")}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href
}) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-white/10 border border-neutral-700 shadow-lg"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-neutral-900 bg-neutral-900 px-2 py-0.5 text-xs whitespace-pre text-white shadow-lg"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
export default FloatingDock;