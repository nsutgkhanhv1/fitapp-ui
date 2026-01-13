import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-ui-yellow flex justify-center items-start overflow-hidden touch-manipulation motion-preset-blur-right-md motion-duration-200 -pb-[env(safe-area-inset-bottom)]">
      <div 
        className="w-full max-w-lg bg-ui-yellow h-full overflow-hidden overscroll-none flex flex-col motion-opacity-in-0 motion-duration-200"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
