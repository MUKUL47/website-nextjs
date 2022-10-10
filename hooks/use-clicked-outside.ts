import React, { useEffect, useState } from "react";
interface Props {
  className: string;
  onClickedOutside: () => void;
}
const useClickedOutside = ({ className, onClickedOutside }: Props): void => {
  useEffect(() => {
    const checkClick = (e: MouseEvent): void => {
      if (
        e
          .composedPath()
          ?.filter?.((v: any) =>
            [...(v?.classList || [])]?.includes?.(className)
          ).length === 0
      ) {
        onClickedOutside();
      }
    };
    window.addEventListener("click", checkClick);
    return (): void => window.removeEventListener("click", checkClick);
  }, []);
};

export default useClickedOutside;
