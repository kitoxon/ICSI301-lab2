/*
  It's been a few years since I looked at this.
  I want to refactor to eliminate all the document writes.
  Plenty of other work to do here as well.
*/

const calendar = calDate => {
    let calendarDay = new Date();
  
    if (calDate) {
      calendarDay = new Date(calDate);
    }
  
    const currentTime = calendarDay.getTime();
    const currentYear = calendarDay.getFullYear();
    let monthNum = -1;
  
    document.write('<div class="yearly-calendar">');
    document.write(`<div class="calendar-year"><h3>${currentYear} School Year Calendar </h3></div>`);
    document.write('<div class="calendar-year-grid">');
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 4; j++) {
        monthNum++;
        calendarDay.setDate(1);
        calendarDay.setMonth(monthNum);
        writeMonthCell(calendarDay, currentTime);
      }
    }
    document.write('</div></div>');
    document.write('<pre id="json">')
    for (var x in calendar2021){
      document.getElementById("json").innerHTML += x + " " + ":" + calendar2021[x] + "<br>";
      } 
    document.write('</pre>');
  };
  
  let writeMonthCell = (calendarDay, currentTime) => {
    writeMonth(calendarDay, currentTime);
  };
  
  let writeMonth = (calendarDay, currentTime) => {
    document.write('<div class="calendar-month-container">');
    writeMonthTitle(calendarDay);
    writeDayNames();
    writeMonthDays(calendarDay, currentTime);
    document.write('</div>');
  };
  
  let writeMonthTitle = calendarDay => {
    let monthName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    let thisMonth = calendarDay.getMonth();
  
    document.write('<div ');
      document.write('class="calendar-month">');
      document.write(monthName[thisMonth]);
    document.write('</div>');
  };
  
  let writeDayNames = () => {
    let dayName = [
      'S',
      'M',
      'T',
      'W',
      'T',
      'F',
      'S'
    ];
  
    document.write('<div class="calendar-day-names">');
    for (let i = 0; i < dayName.length; i++) {
      document.write(`<div class="calendar-day-name">${dayName[i]}</div>`);
    }
    document.write('</div>');
  };
  
  let daysInMonth = (calendarDay) => {
    let currentYear = calendarDay.getFullYear();
    let thisMonth = calendarDay.getMonth();
    let dayCount = [
      31,
      28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ];
  
    return dayCount[thisMonth];
  };
  
  let writeMonthDays = (calendarDay, currentTime) => {
    let weekDay = calendarDay.getDay();
  
    document.write('<div class="calendar-week">');
    for (let i = 0; i < weekDay; i++) {
      document.write('<div class="calendar-day"></div>');
    }
  
    let totalDays = daysInMonth(calendarDay);
  
    for (let dayCount = 1; dayCount <= totalDays; dayCount++) {
      calendarDay.setDate(dayCount);
      weekDay = calendarDay.getDay();
        document.write(`<div class="calendar-day">${dayCount}</div>`);
      }
    document.write('</div>');
  };
 var calendar2021 = 
{
"1/jan": "Сайхан амарна", 
"1/feb": "Сагсны тэмцээнтэй", 
"3/feb": "Шагнал гардуулна даа", 
"17/feb": "Жавхлан багшийн лаб 2-ыг хийнэ", 
"2/mar": "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", 
"6/mar": "Энд юу бичье дээ байз", 
"8/mar": "Эмэгтэйчүүддээ баяр хүргэнэ дээ", 
"1/apr": "Бүгдээрээ худлаа ярьцаагаагаарай", 
"10/may": "Энэ сард ч ёстой юу ч болдоггүй сар даа",
"6/jun" : "Жавхлан багшийн төрсөн өдөр",  
"4/jul": "Хичээл амарсаан ураа", 
"1/aug": "Хөдөө явдаг цаг даа", 
"25/aug": "Хичээл сонголт эхэллээ", 
"1/sep": "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа", 
"13/oct": "Сур сур бас дахин сур", 
"2/nov": "Сурсаар л бай", 
"20/dec": "Өвлийн семистер хаагдах нь дээ", 
"30/dec": "Дүн гаргаж дууслаа баярлалаа баяртай"
};






