import { useEffect, useState } from "react";

function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia(`(max-width: 768px)`);
    setIsMobile(mediaWatcher.matches);

    function updateIsMobile(e) {
      setIsMobile(e.matches);
    }
    mediaWatcher.addEventListener("change", updateIsMobile);
    return () => mediaWatcher.removeEventListener("change", updateIsMobile);
  }, []);

  return isMobile;
}

export default useMobile;
