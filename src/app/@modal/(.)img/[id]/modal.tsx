"use client";

import { useRouter } from "next/navigation";
import { type ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="absolute h-full w-full bg-slate-950/80 backdrop-blur"
      onClose={onDismiss}
    >
      {children}
      {/* <button onClick={onDismiss}>Close</button> */}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
