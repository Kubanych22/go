export const animation = (fn, raf = NaN) => (...args) => {
  
  if (raf) return;
  raf = requestAnimationFrame(() => {
    fn(...args);
    raf = NaN;
  });
};

