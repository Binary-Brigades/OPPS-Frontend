import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSideBar = () => {
    setOpen(!open);
  };

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
    setOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{
        open,
        selectedItem,
        handleSideBar,
        handleSidebarItemClick,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
