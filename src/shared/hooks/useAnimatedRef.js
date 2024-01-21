export default function useAnimatedRef(delay) {
  const ref = (node) => {
    if (node) {
      node.classList.add("animate");
      setTimeout(() => node.classList.remove("animate"), delay);
    }
  };
  return ref;
}

/* usage : attach ref to element to be animated,
  import keyframe of choice,
  define animation within ".animate" in container's CSS */
