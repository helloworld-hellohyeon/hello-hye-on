import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import style from "./Title.scss";

const cx = className.bind(style);

const Title = () => {
  const [currentEle, setCurrentEle] = useState(null);
  let i = 0;

  useEffect(() => {
    setCurrentEle(document.querySelector(".active"));
  }, []);

  useEffect(() => {
    console.log(currentEle);
  }, [currentEle]);

  return (
    <div className={cx("title-wrapper")}>
      <div className={cx("fixed-title")}>이것은</div>
      <div className={cx("scroll-title-box")}>
        <div className={cx("scroll-title", "active")}>스크롤타이틀1</div>
        <div className={cx("scroll-title")}>스크롤타이틀2</div>
        <div className={cx("scroll-title")}>스크롤타이틀3</div>
        <div className={cx("scroll-title")}>스크롤타이틀4</div>
        <div className={cx("scroll-title")}>스크롤타이틀5</div>
        <div className={cx("scroll-title")}>스크롤타이틀6</div>
        <div className={cx("scroll-title")}>스크롤타이틀7</div>
        <div className={cx("scroll-title")}>스크롤타이틀8</div>
        <div className={cx("scroll-title")}>스크롤타이틀9</div>
        <div className={cx("scroll-title")}>스크롤타이틀10</div>
      </div>
      <div className={cx("fixed-title")}>고정된 텍스트</div>
    </div>
  );
};

export default Title;
