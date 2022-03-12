import React, { useState, useEffect } from "react";
import Header from "../../components/ui/dashboardHeader";
import Backdrop from "../../components/ui/backdrop";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/ui/dashboardNav";

import "./styles.scss";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const router = useLocation();

  useEffect(() => {
    setOpen(false);

    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  }, [router.pathname]);

  return (
    <div className='layout'>
      <Sidebar isOpen={open} />
      <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);

          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />

      <Header
        isOpen={open}
        clicked={() => {
          setOpen(!open);

          document.documentElement.classList.toggle("_fixed");
          document.body.classList.toggle("_fixed");
        }}
      />

      <main className='main'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
