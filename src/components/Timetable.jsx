import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
// import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import "../styles/Table.css";

export const Timetable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1"
      id="course">

      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >

        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-12 pb-4 lg:pb-10 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            {/* <span className="custom-block-subtitle">
              精挑細選
            </span> */}
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              專業知識密集課程
            </h2>
            {/* <p className="mb-16 text-customGrayText leading-loose">
              Our platform enables you to launch your data-driven projects with
              ease. Boost productivity and achieve better results. Empower your
              decision-making with advanced analytics
            </p>
            <div
              className="w-[210px] h-12 custom-button-colored mr-10 "
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </div> */}
          </div>
          {/* <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
            <img
              src={featuresdiagonal}
              alt="f1"
              className="rounded-xl  custom-border-gray"
            />
          </div> */}

        </div>
        <MyTable />
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};


const MyTable = () => {
  return (


    // <table className="GeneratedTable">
    //   <thead>
    //     <tr>
    //       <th> </th>
    //       <th colSpan="2">Day1 7/28 (日)</th>
    //       <th colSpan="2">Day2 7/29 (一)</th>
    //       <th colSpan="1">Day3 7/30 (二)</th>
    //       <th colSpan="1">Day4 7/31 (三)</th>
    //       <th colSpan="1">Day5 8/1 (四)</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>活動地點</td>
    //       <td colSpan="1">綜四223</td>
    //       <td colSpan="1">綜四224</td>
    //       <td colSpan="1">綜四223</td>
    //       <td colSpan="1">綜四224</td>
    //       <td colSpan="1">綜四224</td>
    //       <td colSpan="1">綜四224</td>
    //       <td colSpan="1">資電館107、國網中心</td> 
    //     </tr>
    //     <tr>
    //       <td>9:00~9:30</td>
    //       <td colSpan="2">報到</td>
    //       <td rowSpan="3" colSpan="2">業界神秘嘉賓#1</td>
    //       <td rowSpan="3">業界神秘嘉賓#2</td>
    //       <td rowSpan="4">科學計算應用</td>
    //       <td rowSpan="4">競賽成果發表</td>
    //     </tr>
    //     <tr>
    //       <td>9:30~10:30</td>
    //       <td colSpan="2">開幕!</td>
    //     </tr>
    //     <tr>
    //       <td>10:00~10:30</td>
    //     </tr>
    //     <tr>
    //       <td>10:30~12:00</td>
    //       <td colSpan="2" rowSpan="2">進入平行世界<br />(平行計算簡介 I)</td>
    //       <td>NVIDIA 神秘嘉賓</td>
    //       <td>超級比一比 (效能競賽)</td>
    //     </tr>
    //     <tr>
    //       <td>12:00~13:30</td>
    //       <td colSpan="2">午餐</td>
    //       <td>午餐</td>
    //       <td>午餐</td>
    //       <td>午餐</td>
    //       <td>午餐</td>
    //     </tr>
    //     <tr>
    //       <td>13:30~15:00</td>
    //       <td>追本溯源<br />(Linux教學)</td>
    //       <td>探索未來<br />(平行計算簡介 II)</td>
    //       <td rowSpan="3">多重宇宙<br />(GPU平行程式教學)</td>
    //       <td rowSpan="3">駭客任務:首部曲<br />(程式競賽)</td>
    //       <td rowSpan="3">駭客任務:最終戰役<br />(應用競賽)</td>
    //       <td>開花結果<br />(競賽成果發表)</td>
    //     </tr>
    //     <tr>
    //       <td>15:00~16:00</td>
    //       <td colSpan="2" rowSpan="2">一個頭兩個大<br />(MPI平行程式教學)</td>
    //       <td>滿載而歸<br />(頒獎、閉幕)</td>
    //     </tr>
    //     <tr>
    //       <td>15:00~17:30</td>
    //       <td rowSpan="3"> <br /><br /></td>
    //     </tr>
    //     <tr>
    //       <td>17:30~19:00</td>
    //       <td colSpan="2">晚餐，相見歡</td>
    //       <td>晚餐</td>
    //       <td>晚餐</td>
    //       <td>晚餐</td>
    //     </tr>
    //     <tr>
    //       <td>19:00~21:30</td>
    //       <td colSpan="2">手腦並用<br />(上機練習)</td>
    //       <td>七手八腳<br />(上機練習)</td>
    //       <td>駭客任務:重裝上陣<br />(程式競賽)</td>
    //       <td>集思廣益<br />(競賽成果彙整)</td>
    //     </tr>
    //   </tbody>
    // </table>

    <table className="GeneratedTable">
      <thead>
        <tr>
          <th> </th>
          <th colSpan="2">Day1 7/28 (日)</th>
          <th colSpan="2">Day2 7/29 (一)</th>
          <th colSpan="1">Day3 7/30 (二)</th>
          <th colSpan="1">Day4 7/31 (三)</th>
          <th colSpan="1">Day5 8/1 (四)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>活動地點</td>
            <td>綜四223</td>
            <td>綜四224</td>
            <td>綜四223</td>
            <td>綜四224</td>
            <td>綜四224</td>
            <td>綜四224</td>
            <td>資電館107、國網中心 </td>
        </tr>
        <tr>
            <td>9:00~9:30</td>
            <td colSpan="2" align="center">報到</td>
            <td colSpan="2" rowSpan="2" align="center">業界神秘嘉賓#1</td>
            <td rowSpan="2" align="center">業界神秘嘉賓#2</td>
            <td colSpan="1" rowSpan="3" align="center">科學計算簡介</td>
            <td colSpan="1" rowSpan="3" align="center">競賽成果發表 </td>
        </tr>
        <tr>
            <td>9:30~10:30</td>
            <td colSpan="2" align="center">開幕</td>
        </tr>
        <tr>
            <td>10:30~12:00</td>
            <td colSpan="2" align="center">平行計算簡介(基礎)</td>
            <td colSpan="2" align="center">超級電腦簡介與實操</td>
            <td align="center">效能分析</td>
        </tr>
        <tr>
            <td>12:00~13:30</td>
            <td colSpan="7" align="center">午餐 (自理)</td>
        </tr>
        <tr>
            <td align="center">13:30~15:00</td>
            <td align="center">Linux基礎</td>
            <td align="center">平行計算簡介(進階)</td>
            <td colSpan="2" align="center">學生叢集競賽座談會</td>
            <td align="center">效能競賽</td>
            <td rowSpan="2" align="center">科學計算競賽</td>
            <td rowSpan="2" align="center">國網中心參訪</td>
        </tr>
        <tr>
            <td>15:00~16:00</td>
            <td colSpan="2" rowSpan="2" align="center">平行程式(CPU)</td>
            <td colSpan="2" rowSpan="2" align="center">平行程式(GPU)</td>
            <td rowSpan="2" align="center">程式競賽</td>
        </tr>
        <tr>
            <td>16:00~17:30</td>
            <td align="center">人工智慧簡介</td>
            <td align="center">返校、競賽頒獎 </td>
        </tr>
        <tr>
            <td>17:30~19:00</td>
            <td colSpan="2" align="center">Pizza, my friend. 🍕</td>
            <td colSpan="1" align="center">晚餐(限高中生)</td>
            <td colSpan="3" align="center">晚餐(自理)</td>
            <td rowSpan="2"> </td>
        </tr>
        <tr>
            <td>19:00~21:30</td>
            <td align="center">平行程式實操(CPU)</td>
            <td align="center">平行程式實操(GPU)</td>
            <td align="center">平行程式實操(GPU)</td>
            <td align="center">進階平行程式實操(GPU)</td>
            <td align="center">程式競賽</td>
            <td align="center">人工智能競賽</td>
        </tr>
      </tbody>
    </table>




  );
};

export default MyTable;