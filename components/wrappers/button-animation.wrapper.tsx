import React from "react";

export default function ButtonAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hover:rounded-lg transition-all active:translate-y-1">
      {children}
    </div>
  );
}
