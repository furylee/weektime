import React, { Component } from 'react';
import './table.less'
import $ from 'jquery'

class Table extends Component {

    state = {
        dayHour: '',
        weekName: '',
        dayHalfHour: '',
        start_td: "",
        end_td: "",
        start_point: {
            x: "",
            y: ""
        },
        isAdd: false,
        hoverWeek: "",
        hoverTime: "",
        hoverTimeoutId: 0,
        isPopover: false,
        popOverCanShow: false,
        timePeriodStrArr: ["", "", "", "", "", "", ""]
    };

    componentDidMount() {
        $('.calendar').on("mousedown", "td.calendar-atom-time", (a) => {
            if (1 === a.which) {
                this.start_td = a;
                this.start_point = this.getClientPosition(a.target);
                $('.schedule').css({
                    display: "block",
                    left: this.start_point.x + "px",
                    top: this.start_point.y + "px",
                    width: 0,
                    height: 0,
                    opacity: .6
                }).addClass("no-transition")
            }
        }).on("mousemove", (a) => {
            this.curtd = document.elementFromPoint(a.clientX, a.clientY);
            const l = this.getClientPosition(this.curtd, !0);
            if (this.start_point) {
                const n = l.x - this.start_point.x,
                    i = l.y - this.start_point.y,
                    t = i > 0 ? this.start_point.y : l.y - 20,
                    r = n > 0 ? this.start_point.x : l.x - 10,
                    d = n > 0 ? Math.abs(n) : Math.abs(n) + 22,
                    o = i > 0 ? Math.abs(i) : Math.abs(i) + 42;
                $('.schedule.no-transition').css({
                    top: t + "px",
                    left: r + "px",
                    width: d + "px",
                    height: o + "px"
                })
            }
        });

        $(document).on("mouseup", (a) => {
            this.scheduleEnd()
        });

        $(document).on("mousewheel", (a) => {
            this.scheduleEnd()
        })
    }

    getClientPosition = (e, a) => {
        const l = e.getBoundingClientRect();
        return {
            x: l.left + (a ? l.width : 0),
            y: l.top + (a ? l.height : 0)
        }
    };

    scheduleEnd = e => {
        if (this.start_point) {
            this.start_point = null;
            this.end_td = this.curtd;
            $('.schedule').removeClass("no-transition");
            this.highlightScheduleArea(this.start_td, this.end_td)
        }
    };

    highlightScheduleArea = (e, a, l) => {
        let n = $('.schedule');
        let i = parseInt($(e).attr("data-week"));
        let t = parseInt($(e).attr("data-time"));
        let r = parseInt($(a).attr("data-week"));
        let d = parseInt($(a).attr("data-time"));
        let o = Math.min(i, r);
        let m = Math.max(i, r);
        let s = Math.min(t, d);
        let u = Math.max(t, d);
        n.css("opacity", 0);
        setTimeout(() => {
            n.hide()
        }, 500);
        this.getSelectedCollection(s, o, u, m);
    };

    getSelectedCollection = (e, a, l, n) => {
        const that = this;
        $('.calendar').find(".calendar-atom-time").each(function () {
            let t = parseInt(this.getAttribute("data-time"));
            let r = parseInt(this.getAttribute("data-week"));
            /* 目前值储存在state里面 */
            let d = that.value.week_schedule[r].indexOf(t);
            if (t >= e && t <= l && r >= a && r <= n) {
                if (that.value.week_schedule[r] === undefined) {
            //         (Vue.set(this.value.week_schedule, r, [])
                }
            }
            // t >= e && t <= l && r >= a && r <= n && (void 0 === this.value.week_schedule[r] && (Vue.set(this.value.week_schedule, r, []),
            //     this.value.week_schedule[r].push(t)),
            // this.value.week_schedule[r] && (this.isAdd ? -1 === d && this.value.week_schedule[r].push(t) : d > -1 && this.value.week_schedule[r].splice(d, 1)))
        });
        this.changeTimeStr(a, n)
    };

    changeTimeStr = (e, a) => {
        for (let l = e; l <= a; l++) {
        }
        // this.transformTimeArrToString(this.value.week_schedule[l], l)
    };

    transformTimeArrToString = (e, a) => {
        let l = this.sortArr(e);
        /* todo:此处有一个工具类库 */
        let n = l.map((e) => {
            let a, l;
            // return a = r.default.getClockString(e[0], "start");
            if (e.length === 1) {
                // l = r.default.getClockString(e[0] + 1, "start")
            } else if (e.length === 2) {
                // l = r.default.getClockString(e[1], "end")
            }
            return [a, l].join("~")
        }).join("、");
        // this.$set(this.timePeriodStrArr, a, n)
    };

    sortArr = (e) => {
        return e.slice().sort(function (e, a) {
            return e - a
        })
    }

    render() {
        return (
            <div className="byted-weektime">
                <div className="calendar">
                    <div className="schedule" />
                    <div className="schedule" style={{opacity: 0, display: "none"}} />
                    <table className="calendar-table">
                        <thead className="calendar-head">
                        <tr>
                            <th rowSpan="8" className="week-td">星期/时间</th>
                            <th colSpan="24">00:00 - 12:00</th>
                            <th colSpan="24">12:00 - 24:00</th>
                        </tr>
                        <tr>
                            <td colSpan="2">0</td>
                            <td colSpan="2">1</td>
                            <td colSpan="2">2</td>
                            <td colSpan="2">3</td>
                            <td colSpan="2">4</td>
                            <td colSpan="2">5</td>
                            <td colSpan="2">6</td>
                            <td colSpan="2">7</td>
                            <td colSpan="2">8</td>
                            <td colSpan="2">9</td>
                            <td colSpan="2">10</td>
                            <td colSpan="2">11</td>
                            <td colSpan="2">12</td>
                            <td colSpan="2">13</td>
                            <td colSpan="2">14</td>
                            <td colSpan="2">15</td>
                            <td colSpan="2">16</td>
                            <td colSpan="2">17</td>
                            <td colSpan="2">18</td>
                            <td colSpan="2">19</td>
                            <td colSpan="2">20</td>
                            <td colSpan="2">21</td>
                            <td colSpan="2">22</td>
                            <td colSpan="2">23</td>
                        </tr>
                        </thead>
                        <tbody className="calendar-body">
                        <tr>
                            <td>星期一</td>
                            <td data-week="0" data-time="0" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="1" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="2" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="3" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="4" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="5" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="6" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="7" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="8" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="9" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="10" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="11" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="12" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="13" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="14" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="15" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="16" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="17" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="18" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="19" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="20" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="21" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="22" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="23" className="calendar-atom-time"></td>
                            <td data-week="0" data-time="24" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="25" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="26" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="27" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="28" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="29" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="30" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="31" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="32" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="33" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="34" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="35" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="36" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="37" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="38" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="39" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="40" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="41" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="42" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="43" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="44" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="45" className="calendar-atom-time "></td>
                            <td data-week="0" data-time="46" className="calendar-atom-time " />
                            <td data-week="0" data-time="47" className="calendar-atom-time " />
                        </tr>
                        <tr>
                            <td>星期二</td>
                            <td data-week="1" data-time="0" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="1" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="2" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="3" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="4" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="5" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="6" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="7" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="8" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="9" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="10" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="11" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="12" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="13" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="14" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="15" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="16" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="17" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="18" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="19" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="20" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="21" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="22" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="23" className="calendar-atom-time"></td>
                            <td data-week="1" data-time="24" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="25" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="26" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="27" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="28" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="29" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="30" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="31" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="32" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="33" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="34" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="35" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="36" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="37" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="38" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="39" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="40" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="41" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="42" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="43" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="44" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="45" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="46" className="calendar-atom-time "></td>
                            <td data-week="1" data-time="47" className="calendar-atom-time "></td>
                        </tr>
                        <tr>
                            <td>星期三</td>
                            <td data-week="2" data-time="0" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="1" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="2" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="3" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="4" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="5" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="6" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="7" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="8" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="9" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="10" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="11" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="12" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="13" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="14" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="15" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="16" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="17" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="18" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="19" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="20" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="21" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="22" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="23" className="calendar-atom-time"></td>
                            <td data-week="2" data-time="24" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="25" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="26" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="27" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="28" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="29" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="30" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="31" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="32" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="33" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="34" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="35" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="36" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="37" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="38" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="39" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="40" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="41" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="42" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="43" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="44" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="45" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="46" className="calendar-atom-time "></td>
                            <td data-week="2" data-time="47" className="calendar-atom-time "></td>
                        </tr>
                        <tr>
                            <td>星期四</td>
                            <td data-week="3" data-time="0" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="1" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="2" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="3" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="4" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="5" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="6" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="7" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="8" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="9" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="10" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="11" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="12" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="13" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="14" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="15" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="16" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="17" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="18" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="19" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="20" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="21" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="22" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="23" className="calendar-atom-time"></td>
                            <td data-week="3" data-time="24" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="25" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="26" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="27" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="28" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="29" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="30" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="31" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="32" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="33" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="34" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="35" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="36" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="37" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="38" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="39" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="40" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="41" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="42" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="43" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="44" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="45" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="46" className="calendar-atom-time "></td>
                            <td data-week="3" data-time="47" className="calendar-atom-time "></td>
                        </tr>
                        <tr>
                            <td>星期五</td>
                            <td data-week="4" data-time="0" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="1" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="2" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="3" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="4" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="5" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="6" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="7" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="8" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="9" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="10" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="11" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="12" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="13" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="14" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="15" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="16" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="17" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="18" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="19" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="20" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="21" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="22" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="23" className="calendar-atom-time"></td>
                            <td data-week="4" data-time="24" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="25" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="26" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="27" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="28" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="29" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="30" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="31" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="32" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="33" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="34" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="35" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="36" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="37" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="38" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="39" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="40" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="41" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="42" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="43" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="44" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="45" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="46" className="calendar-atom-time "></td>
                            <td data-week="4" data-time="47" className="calendar-atom-time "></td>
                        </tr>
                        <tr>
                            <td>星期六</td>
                            <td data-week="5" data-time="0" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="1" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="2" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="3" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="4" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="5" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="6" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="7" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="8" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="9" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="10" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="11" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="12" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="13" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="14" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="15" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="16" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="17" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="18" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="19" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="20" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="21" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="22" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="23" className="calendar-atom-time"></td>
                            <td data-week="5" data-time="24" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="25" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="26" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="27" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="28" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="29" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="30" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="31" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="32" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="33" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="34" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="35" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="36" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="37" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="38" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="39" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="40" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="41" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="42" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="43" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="44" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="45" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="46" className="calendar-atom-time "></td>
                            <td data-week="5" data-time="47" className="calendar-atom-time "></td>
                        </tr>
                        <tr>
                            <td>星期日</td>
                            <td data-week="6" data-time="0" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="1" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="2" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="3" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="4" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="5" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="6" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="7" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="8" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="9" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="10" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="11" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="12" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="13" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="14" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="15" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="16" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="17" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="18" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="19" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="20" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="21" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="22" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="23" className="calendar-atom-time"></td>
                            <td data-week="6" data-time="24" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="25" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="26" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="27" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="28" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="29" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="30" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="31" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="32" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="33" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="34" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="35" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="36" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="37" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="38" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="39" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="40" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="41" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="42" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="43" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="44" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="45" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="46" className="calendar-atom-time "></td>
                            <td data-week="6" data-time="47" className="calendar-atom-time " />
                        </tr>
                        <tr>
                            <td colSpan="49" className="td-table-tip">
                                <div className="clearfix"><span className="pull-left tip-text">已选择时间段</span> <a
                                    className="pull-right">清空</a></div>
                                <div className="td-selected-time"><p><span className="tip-text">
                    星期一：
                  </span> <span>12:00~24:00</span></p><p><span className="tip-text">
                    星期二：
                  </span> <span>12:00~24:00</span></p><p><span className="tip-text">
                    星期三：
                  </span> <span>12:00~24:00</span></p><p><span className="tip-text">
                    星期四：
                  </span> <span>12:00~24:00</span></p><p><span className="tip-text">
                    星期五：
                  </span> <span>12:00~24:00</span></p><p><span className="tip-text">
                    星期六：
                  </span> <span>12:00~24:00</span></p><p><span className="tip-text">
                    星期日：
                  </span> <span>12:00~24:00</span></p></div>
                            </td>
                        </tr>
                        </tbody>
                        <div className="byted-popover-wrapper">
                            <div className="bui-popper byted-popover" style={{width: 182, display: 'none'}}>
                                <div x-arrow="" className="bui-popover-arrow" />
                                <div className="bui-popover-panel">
                                    <div className="bui-popover-body">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </table>
                </div>
            </div>
        );
    }
}

export default Table;