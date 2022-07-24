import ClusterAPI from "api/cluster";
import ClusterReserveContent from "components/cluster/ClusterReserveContent";
import Popup from "components/popup/Popup";
import  Router  from "next/router";
import { useEffect, useState } from "react";
import { ICluster } from "types/Cluster";
import CalendarItem from "./CalendarItem";

const monthNames = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
const initCluster = {
  name: "",
  description: "",
  nodes: 1,
  operatingSystem: "",
  type: 0,
};
const ReservationsCalendar = () => {
  const [dates, setDates] = useState([]);
  const [cluster, setCluster] = useState<ICluster[]>(null);
  const [start, setStart] = useState(new Date(Date.now()));
  const [end, setEnd] = useState(new Date(Date.now() + 86400000 * 13));

  const [currentItem, setCurrentItem] = useState<ICluster>(initCluster);
  const [currentDate, setCurrentDate] = useState<number>();

  const [monthStat, setMonthStat] = useState([]);

  const clickRight = () => {
    setStart(new Date(start.getTime() + 86400000 * 13));
    setEnd(new Date(end.getTime() + 86400000 * 13));
  };
  const clickLeft = () => {
    const startTime = new Date(start.getTime() - 86400000 * 13);
    if (startTime.getTime() + 86400000 >= Date.now()) {
      setStart(startTime);
      setEnd(new Date(end.getTime() - 86400000 * 13));
    }
  };

  const getDates = () => {
    let arr = [];
    let startDate = new Date(start);
    let endDate = new Date(end);
    while (startDate <= endDate) {
      arr.push({
        day: startDate.getDate(),
        month: monthNames[startDate.getMonth()],
        year: startDate.getFullYear(),
        time: startDate.getTime(),
      });
      startDate.setDate(startDate.getDate() + 1);
    }
    const months = arr.reduce((a, b) => {
      if (a.month === b.month) {
        if (!a[a.month]) {
          a[a.month] = 2;
        } else {
          a[a.month] += 1;
        }
      } else {
        if (!a[b.month]) {
          a[b.month] = 1;
        } else {
          a[b.month] += 1;
        }
      }
      return a;
    });
    setMonthStat(months);
    setDates(arr);
  };

  const MonthName = () => {
    const first = dates[0];
    if (monthStat[first?.month] === 14) {
      return (
        <tr>
          <th className="text-center">Cluster</th>
          <th className="text-center" colSpan={14}>
            {first?.month + " " + first?.year}
          </th>
        </tr>
      );
    }
    const last = dates[dates.length - 1];
    return (
      <tr>
        <th className="text-center">Cluster</th>
        <th className="text-center" colSpan={monthStat[first?.month]}>
          {first?.month + " " + first?.year}
        </th>
        <th className="text-center" colSpan={monthStat[last?.month]}>
          {last?.month + " " + first?.year}
        </th>
      </tr>
    );
  };

  useEffect(() => {
    async function getCluster() {
      try {
        setCluster((await ClusterAPI.getAll()).data);
      } catch (error) {
        console.log(error);
      }
    }
    getDates();
    getCluster();
  }, [start]);

  return (
    <div className="mt-3">
      <table className="table table-bordered">
        <thead>
          <MonthName />
          <tr>
            <th style={{ width: "15%" }}>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={clickLeft}>
                  <i className="bi bi-chevron-left" />
                </button>
                <button className="btn btn-primary" onClick={clickRight}>
                  <i className="bi bi-chevron-right" />
                </button>
              </div>
            </th>
            {dates.map((date, index) => {
              return (
                <th key={index} className="text-center" style={{ width: "5%" }}>
                  {date.day}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {cluster?.map((item, index) => {
            return (
              <CalendarItem
                key={index}
                cluster={item}
                dates={dates}
                setCurrentItem={setCurrentItem}
                setCurrentDate={setCurrentDate}
              />
            );
          })}
        </tbody>
      </table>
      <Popup id={"clusterReserve"} title={"Cluster Reservieren"}>
        <ClusterReserveContent
          cluster={currentItem}
          startDate={currentDate}
          callback={() => Router.push('/reservations')}
        />
      </Popup>
    </div>
  );
};

export default ReservationsCalendar;
