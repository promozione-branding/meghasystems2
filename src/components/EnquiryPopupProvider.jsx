"use client";

import { useEffect, useState } from "react";
import EnquiryPopup from "@/components/EnquiryPopup";

export default function EnquiryPopupProvider() {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const handleQuoteClick = (event) => {
      if (!(event.target instanceof Element)) return;

      const control = event.target.closest("a, button");
      if (!control) return;

      const label = control.textContent
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();

      if (
        !control.hasAttribute("data-open-enquiry") &&
        !/^get (a )?quote/.test(label)
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      setProductName(control.getAttribute("data-product-name") || "");
      setIsOpen(true);
    };

    document.addEventListener("click", handleQuoteClick, true);
    return () => document.removeEventListener("click", handleQuoteClick, true);
  }, []);

  return isOpen ? (
    <EnquiryPopup
      productName={productName}
      onClose={() => setIsOpen(false)}
    />
  ) : null;
}
