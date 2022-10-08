import React, { useLayoutEffect, useState } from "react";
interface Props {
  width?: number;
}
const useIsMobile = ({ width }: Props): boolean => {
  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < (width || 768));
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);
  return isMobile;
};

export default useIsMobile;
