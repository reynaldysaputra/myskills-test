import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full mx-auto mt-8 pb-16">
      <Outlet/>
    </div>
  )
}

export default Layout;