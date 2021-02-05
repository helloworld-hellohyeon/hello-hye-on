import React, { useEffect, useRef, useState } from "react";
import className from "classnames/bind";
import style from "./Title.scss";
import { setInterval } from "timers";

const cx = className.bind(style);

const Title = () => {
  const title = [
    "타이틀1",
    "타이틀2",
    "타이틀3",
    "타이틀4",
    "타이틀5",
    "타이틀6",
    "타이틀7",
    "타이틀8",
    "타이틀9",
    "타이틀10",
  ];
  const [activeIdx, setActiveIdx] = useState(0);
  const idxRef = useRef(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (idxRef.current < 9) {
        idxRef.current += 1;
      } else {
        idxRef.current = 0;
      }
      setActiveIdx(idxRef.current);
    }, 2000);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className={cx("title-wrapper")}>
      <div className={cx("title-img")}></div>
      <div className={cx("title-box")}>
        <div className={cx("fixed-title")}>이것은</div>
        <div className={cx("scroll-title-box")}>
          {title.map((val, idx) => {
            return (
              <div
                key={idx}
                className={cx(
                  "scroll-title",
                  activeIdx === idx ? "active" : ""
                )}
              >
                {val}
              </div>
            );
          })}
        </div>
        <div className={cx("fixed-title")}>고정된 텍스트</div>
      </div>
    </div>
  );
};

export default Title;
