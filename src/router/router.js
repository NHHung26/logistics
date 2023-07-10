import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { ROUTERS } from "../utils/router";
import MasterLayout from "../pages/theme/MasterLayout";
import DichVu from "../pages/DichVu";
import ThueKho from "../pages/DichVu/ThueKho";
import KhoBai from "../pages/DichVu/ThueKho/KhoBai";
import KhoTMDT from "../pages/DichVu/ThueKho/KhoTMDT";
import KhoTuQuan from "../pages/DichVu/ThueKho/KhoTuQuan";
import LienHe from "../pages/LienHe";
import DangKi from "../pages/TaiKhoan/DangKi/index";
import TaiKhoan from "../pages/TaiKhoan/index";
import DangNhap from "../pages/TaiKhoan/DangNhap";

const RenderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HomePage,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.DichVu,
      component: <DichVu />,
    },
    {
      path: ROUTERS.USER.ThueKho,
      component: <ThueKho />,
    },
    {
      path: ROUTERS.USER.KhoBai,
      component: <KhoBai />,
    },
    {
      path: ROUTERS.USER.KhoTMDT,
      component: <KhoTMDT />,
    },
    {
      path: ROUTERS.USER.KhoTuQuan,
      component: <KhoTuQuan />,
    },
    {
      path: ROUTERS.USER.LienHe,
      component: <LienHe />,
    },
    {
      path: ROUTERS.USER.DangKi,
      component: <DangKi />,
    },
    {
      path: ROUTERS.USER.TaiKhoan,
      component: <TaiKhoan />,
    },
    {
      path: ROUTERS.USER.DangNhap,
      component: <DangNhap />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};
const RouterCustom = () => {
  return RenderUserRouter();
};
export default RouterCustom;
