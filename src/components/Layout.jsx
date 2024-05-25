import { useEffect } from "react";
import MonthBox from "./MonthBox";
import { useState } from "react";
import { PiSpinner } from "react-icons/pi";

const Layout = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState();
  useEffect(()=>{
    fetch('/calendarData.json')
    .then(res=>res.json())
    .then(data=>{
      setData(data)
      setLoading(false)
    })
  },[])
  if(loading){
    return <div className="flex justify-center items-center h-screen"><PiSpinner className="text-4xl animate-spin"></PiSpinner></div>
  }
  return (
    <div className="bg-[#eeeeee] w-full min-h-screen">
      <div className="w-[90%] mx-auto py-4 max-w-screen-2xl">
        <div className="flex justify-between text-xl font-semibold">
          <h2>Calender</h2>
          <h2>2024</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <MonthBox data={data[0]}></MonthBox>
          <MonthBox data={data[1]}></MonthBox>
          <MonthBox data={data[2]}></MonthBox>
          <MonthBox data={data[3]}></MonthBox>
          <MonthBox data={data[4]}></MonthBox>
          <MonthBox data={data[5]}></MonthBox>
          <MonthBox data={data[6]}></MonthBox>
          <MonthBox data={data[7]}></MonthBox>
          <MonthBox data={data[8]}></MonthBox>
          <MonthBox data={data[9]}></MonthBox>
          <MonthBox data={data[10]}></MonthBox>
          <MonthBox data={data[11]}></MonthBox>
        </div>
      </div>
    </div>
  );
};

export default Layout;