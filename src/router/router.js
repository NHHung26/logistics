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
import KhoThueChung from "../pages/DichVu/ThueKho/KhoThueChung";
import VanTaiDuongBo from "../pages/DichVu/VanTaiDuongBo/index";
import NhanGuiHang from "../pages/DichVu/VanTaiDuongBo/NhanGuiHang/index";
import NhanPhatTaiDiaChi from "../pages/DichVu/VanTaiDuongBo/NhanPhatTaiDiaChi/index";
import ThueXeNguyenChuyen from "../pages/DichVu/VanTaiDuongBo/ThueXeNguyenChuyen";
import GiaoHangSieuThi from "../pages/DichVu/VanTaiDuongBo/GiaoHangSieuThi/index";
import DichVuVanChuyen from "../pages/DichVu/VanTaiDuongBo/DichVuVanChuyen";
import DichVuThuHo from "../pages/DichVu/DichVuThuHo_DongGoi";
import ThuCuoc from "../pages/DichVu/DichVuThuHo_DongGoi/ThuCuocDauNguoi/index";
import ThuHoTienHang from "../pages/DichVu/DichVuThuHo_DongGoi/ThuHoTienHang/index";
import DichVuDongGoi from "../pages/DichVu/DichVuThuHo_DongGoi/DichVuDongGoi/index";
import PhuongThucVanTaiKhac from "../pages/DichVu/PhuongThucVanTaiKhac";
import ThongTin from "../pages/ThongTin/index";
import VeChungToi from "../pages/ThongTin/VeChungToi/index";
import TinHoatDong from "../pages/ThongTin/TinHoatDong";
import TinTuc from "../pages/ThongTin/TinTuc/index";
import HoTroKhacHang from "../pages/HoTroKhacHang/index";
import HuongDanSuDung from "../pages/HoTroKhacHang/HuongDanSuDung/index";
import CauHoiThuongGap from "../pages/HoTroKhacHang/CauHoiThuongGap/index";
import GuiKhieuNai from "../pages/HoTroKhacHang/GuiThongTinKhieuNai/index";
import GopY from "../pages/HoTroKhacHang/GopYDichVu/index";
import TinTucChoThueKho from "../pages/ThongTin/TinTuc/ChoThueKho";
import VanChuyenLaGi from "../pages/ThongTin/TinTuc/VanChuyenHangHoaLaGi/index";
import GuiNoiDiaLaGi from "../pages/ThongTin/TinTuc/GuiHangNoiDiaLagi/index";
import DichVuVanChuyenLaGi from "../pages/ThongTin/TinTuc/DichVuVanChuyenLaGi";
import NhungLuuY from "../pages/ThongTin/TinTuc/NhungLuuY/index";
import TopGiaiPhap from "../pages/ThongTin/TinTuc/TopGiaiPhap/index";
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
    {
      path: ROUTERS.USER.KhoThueChung,
      component: <KhoThueChung />,
    },
    {
      path: ROUTERS.USER.VanTaiDuongBo,
      component: <VanTaiDuongBo />,
    },
    {
      path: ROUTERS.USER.NhanGuiHang,
      component: <NhanGuiHang />,
    },
    {
      path: ROUTERS.USER.NhanPhat,
      component: <NhanPhatTaiDiaChi />,
    },
    {
      path: ROUTERS.USER.ThueXeNguyenChuyen,
      component: <ThueXeNguyenChuyen />,
    },
    {
      path: ROUTERS.USER.GiaoHangSieuThi,
      component: <GiaoHangSieuThi />,
    },
    {
      path: ROUTERS.USER.DichVuVanChuyen,
      component: <DichVuVanChuyen />,
    },
    {
      path: ROUTERS.USER.DichVuThuHo,
      component: <DichVuThuHo />,
    },
    {
      path: ROUTERS.USER.ThuCuoc,
      component: <ThuCuoc />,
    },
    {
      path: ROUTERS.USER.ThuHo,
      component: <ThuHoTienHang />,
    },
    {
      path: ROUTERS.USER.DongGoi,
      component: <DichVuDongGoi />,
    },
    {
      path: ROUTERS.USER.PhuongThucVanTaiKhac,
      component: <PhuongThucVanTaiKhac />,
    },
    {
      path: ROUTERS.USER.ThongTin,
      component: <ThongTin />,
    },
    {
      path: ROUTERS.USER.VeChungToi,
      component: <VeChungToi />,
    },
    {
      path: ROUTERS.USER.TinHoatDong,
      component: <TinHoatDong />,
    },
    {
      path: ROUTERS.USER.TinTuc,
      component: <TinTuc />,
    },
    {
      path: ROUTERS.USER.HoTroKhacHangDong,
      component: <HoTroKhacHang />,
    },
    {
      path: ROUTERS.USER.HuongDanSuDung,
      component: <HuongDanSuDung />,
    },
    {
      path: ROUTERS.USER.CauHoiThuongGapDong,
      component: <CauHoiThuongGap />,
    },
    {
      path: ROUTERS.USER.GuiKieuNai,
      component: <GuiKhieuNai />,
    },
    {
      path: ROUTERS.USER.GopY,
      component: <GopY />,
    },
    {
      path: ROUTERS.USER.TinTucChoThueKho,
      component: <TinTucChoThueKho />,
    },
    {
      path: ROUTERS.USER.VanChuyenLaGi,
      component: <VanChuyenLaGi />,
    },
    {
      path: ROUTERS.USER.GuiHangNoiDia,
      component: <GuiNoiDiaLaGi />,
    },
    {
      path: ROUTERS.USER.DichVuVanChuyenLaGi,
      component: <DichVuVanChuyenLaGi />,
    },
    {
      path: ROUTERS.USER.NhungLuuY,
      component: <NhungLuuY />,
    },
    {
      path: ROUTERS.USER.TopGiaPhap,
      component: <TopGiaiPhap />,
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
