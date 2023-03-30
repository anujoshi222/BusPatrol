const {I} = inject(); 
class DatePicker {

    selectToday(locator) {
      I.click(locator);
      I.click('.currentDate', 'div[data-testid=undefined-month-May-2023]');
    }
  
    selectInNextMonth(date) {
      I.click(`div[data-testid=undefined-month-May-2023] div[data-testid=undefined-calendar-day-${date}]`);
    }
  
  }
  
  
  module.exports = new DatePicker();
