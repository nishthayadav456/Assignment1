import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { BiLogOutCircle } from "react-icons/bi";
import { MdPeopleAlt } from "react-icons/md";
import { GiThorHammer } from "react-icons/gi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { CgAwards } from "react-icons/cg";
import GraphComponent from "./GraphComponent";
const Unbox = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img
            className="unboxlogo"
            src="https://www.unboxindustry.com/Logofinal.svg"
            alt="not found"
          />
        </div>
        <div className="searchbar">
          <IoIosSearch className="search" />
          <input type="text" id="search-input" placeholder="Type for search" />
        </div>
        <div className="nav-icons">
          <FaRegMessage className="icons" />
          <FaRegBell className="icons" />
          <CgAwards className="icons" />
        </div>
        <div className="profile-section">
          <img
            className="profile"
            src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais"
            alt="not found"
          />
          <input type="text" id="editprofile" placeholder="Edit My Profile" />
        </div>
      </div>

      <div className="parent-div">
        <div className="left-parent">
          <div className="market-div">
            <HiMiniShoppingBag className="market-icon" />
            <p>MarketPlace</p>
          </div>
          <div className="market-div">
            <LuLayoutDashboard className="market-icon" />
            <p>Dashboard</p>
          </div>
          <div className="market-div">
            <HiOutlinePencilAlt className="market-icon" />
            <p>RFQ Builder</p>
          </div>
          <div className="market-div">
            <GiThorHammer className="market-icon" />
            <p>Tender</p>
          </div>
          <div className="market-div">
            <BiSolidShoppingBags className="market-icon" />
            <p>PURCHASE</p>
          </div>
          <div className="market-div">
            <HiOutlineCurrencyRupee className="market-icon" />
            <p>FINANCE</p>
          </div>
          <div className="market-div">
            <MdPeopleAlt className="market-icon" />
            <p>SERVICES</p>
          </div>
          <div className="logout-div">
            <BiLogOutCircle className="logout-icon" />
            <p className="logout">Log Out</p>
          </div>
        </div>

        <div className="Right-parent">
          <div className="parent-total">
            <div className="sub-parent-total">
                
              <div className="total-div">
                <div className="circle-parent">
                <div className="circle-div">100%</div>
                Total Credit
                <span>₹1,00,000</span>
                </div>
             
              </div>

              
                <div className="total-div">
                <div className="circle-parent">
                <div className="circle-div">40%</div>
                  Total Spend
                  <span>₹4,00,000</span>
                  </div>
                </div>
             

              <div>
                <div className="total-div">
                <div className="circle-parent">
                <div className="circle-div">60%</div>
                  Available Credit
                  <span>₹6,00,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Graph-parent">
            <GraphComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unbox;
