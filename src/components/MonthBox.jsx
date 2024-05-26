import PropTypes from 'prop-types';

const MonthBox = ({ data }) => {
  const { monthName, days } = data || {}
  const date = new Date()
  console.log(monthName)
  const currentDay = date.getDate()
  const currentMonth = date.toLocaleString('default', { month: 'long' }); 
  console.log(currentMonth,monthName)
  const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (
    <div className="bg-white p-3 rounded">
      <div className=" font-medium pb-2">{monthName}</div>
      <div className="grid grid-cols-7 gap-1">
        {
          weeks.map((day, idx) => <p key={idx} className="bg-[#cac8c8] text-center py-1 rounded">{day}</p>)
        }
      </div>
      <div className="grid grid-cols-7 gap-1 pt-3">
        {
          days.map((day, idx) => <p
            key={idx}
            className={` text-center py-1 rounded ${day === currentDay && monthName === currentMonth ? "bg-[#cac8c8]" : "bg-[#eeeeee]"} `}>{day}</p>)
        }
      </div>

    </div>
  );
};

MonthBox.propTypes = {
  data: PropTypes.object,
}

export default MonthBox;