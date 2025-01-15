import { useCallback } from 'react';

export const useScrollHighlight = () => {
  const scrollToSection = useCallback((ref: React.RefObject<HTMLDivElement>, isMobile: boolean) => {
    if (!ref.current || isMobile) return;
    
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    ref.current.classList.add("highlight-section");
    setTimeout(() => {
      ref.current?.classList.remove("highlight-section");
    }, 1500);
    
  }, []);

  return { scrollToSection };
};