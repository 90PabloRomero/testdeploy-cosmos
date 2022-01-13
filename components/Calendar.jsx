import OutsideClickHandler from "react-outside-click-handler";

const CalendarArea = ({ modalCalendarVisible, onOutsideClick }) => {
  return (
    <div
      className={`calendar-area  ${
        modalCalendarVisible ? "d-block " : "d-none"
      }`}
    >
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <div className="wrapper-before-calendar-wrapper border">
          <div className="calendar-wrapper ">
            <div className="calendar-container ml-5">
              <div className="calendar-month">Octubre</div>
              <div className="calendar-days">
                <div className="calendar-day">L</div>
                <div className="calendar-day">M</div>
                <div className="calendar-day">X</div>
                <div className="calendar-day">J</div>
                <div className="calendar-day">V</div>
                <div className="calendar-day">S</div>
                <div className="calendar-day">D</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">27</div>
                <div className="calendar-day">28</div>
                <div className="calendar-day">29</div>
                <div className="calendar-day">30</div>
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">4</div>
                <div className="calendar-day">5</div>
                <div className="calendar-day">6</div>
                <div className="calendar-day">7</div>
                <div className="calendar-day">8</div>
                <div className="calendar-day">9</div>
                <div className="calendar-day">10</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">11</div>
                <div className="calendar-day">12</div>
                <div className="calendar-day">13</div>
                <div className="calendar-day">14</div>
                <div className="calendar-day">15</div>
                <div className="calendar-day">16</div>
                <div className="calendar-day">17</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">18</div>
                <div className="calendar-day">19</div>
                <div className="calendar-day">20</div>
                <div className="calendar-day">21</div>
                <div className="calendar-day">22</div>
                <div className="calendar-day">23</div>
                <div className="calendar-day">24</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">25</div>
                <div className="calendar-day">26</div>
                <div className="calendar-day">27</div>
                <div className="calendar-day active">28</div>
                <div className="calendar-day">29</div>
                <div className="calendar-day">30</div>
                <div className="calendar-day">31</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
                <div className="calendar-day">4</div>
                <div className="calendar-day">5</div>
                <div className="calendar-day">6</div>
                <div className="calendar-day">7</div>
              </div>
            </div>
            <div className="calendar-container">
              <div className="calendar-month">Noviembre</div>
              <div className="calendar-days">
                <div className="calendar-day">L</div>
                <div className="calendar-day">M</div>
                <div className="calendar-day">X</div>
                <div className="calendar-day">J</div>
                <div className="calendar-day">V</div>
                <div className="calendar-day">S</div>
                <div className="calendar-day">D</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
                <div className="calendar-day">4</div>
                <div className="calendar-day">5</div>
                <div className="calendar-day">6</div>
                <div className="calendar-day">7</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">8</div>
                <div className="calendar-day">9</div>
                <div className="calendar-day">10</div>
                <div className="calendar-day">11</div>
                <div className="calendar-day">12</div>
                <div className="calendar-day">13</div>
                <div className="calendar-day">14</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">15</div>
                <div className="calendar-day">16</div>
                <div className="calendar-day">17</div>
                <div className="calendar-day">18</div>
                <div className="calendar-day">19</div>
                <div className="calendar-day">20</div>
                <div className="calendar-day">21</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">22</div>
                <div className="calendar-day">23</div>
                <div className="calendar-day">24</div>
                <div className="calendar-day">25</div>
                <div className="calendar-day">26</div>
                <div className="calendar-day">27</div>
                <div className="calendar-day">28</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">29</div>
                <div className="calendar-day">30</div>
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
                <div className="calendar-day">4</div>
                <div className="calendar-day">5</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">6</div>
                <div className="calendar-day">7</div>
                <div className="calendar-day">8</div>
                <div className="calendar-day">9</div>
                <div className="calendar-day">10</div>
                <div className="calendar-day">11</div>
                <div className="calendar-day">12</div>
              </div>
            </div>
          </div>
          <div className="day-schedule-area">
            <div className="day-schedule-header">
              <div className="day-schedule-header-title">
                <span>LUN</span>
                <span>10</span>
              </div>
            </div>

            <div className="day-schedule-hour-by-hour-container">
              <div className="day-schedule-hours">
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">GMT-05</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
              </div>
              <div className="day-schedule-hours">
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">00:00</div>
                  <div className="ds-s-event"></div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">01:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">02:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">03:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">04:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">05:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">06:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">07:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">08:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">09:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">10:00</div>
                  <div className="ds-s-event">
                    <div className="withevent">
                      Cotizar a Juan<span>09:30 - 10:30</span>
                    </div>
                  </div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">11:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">12:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">13:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">14:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">15:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">16:00</div>
                  <div className="ds-s-event">
                    <div className="withevent">
                      Reunión con Julio<span>15:30 - 16:30</span>
                    </div>
                  </div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">17:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">18:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">19:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">20:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">21:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">22:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">23:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};
export default CalendarArea;
