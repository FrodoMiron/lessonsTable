/* блоки */
let title = document.querySelector('.titleL');
let active = document.querySelector('.active');
let lessonsTable = document.querySelector('.lessonsTable');
let first = document.querySelector('#first');
let change1 = document.querySelector('#c1');
let second = document.querySelector('#second');
let change2 = document.querySelector('#c2');
let third = document.querySelector('#third');
let change3 = document.querySelector('#c3');
let fourth = document.querySelector('#fourth');
let change4 = document.querySelector('#c4');
let fiveth = document.querySelector('#fiveth');
let change5 = document.querySelector('#c5');
let sixth = document.querySelector('#sixth');
let change6 = document.querySelector('#c6');
let seventh = document.querySelector('#seventh');

function changesAt4Lessons() {
  change1.innerHTML = 'Перемена';
  change2.innerHTML = 'Перемена';
  change3.innerHTML = 'Перемена';
};

function changesAt5Lessons() {
  change1.innerHTML = 'Перемена';
  change2.innerHTML = 'Перемена';
  change3.innerHTML = 'Перемена';
  change4.innerHTML = 'Перемена';
};

function changesAt6Lessons() {
  change1.innerHTML = 'Перемена';
  change2.innerHTML = 'Перемена';
  change3.innerHTML = 'Перемена';
  change4.innerHTML = 'Перемена';
  change5.innerHTML = 'Перемена';
};

function changesAt7Lessons() {
  change1.innerHTML = 'Перемена';
  change2.innerHTML = 'Перемена';
  change3.innerHTML = 'Перемена';
  change4.innerHTML = 'Перемена';
  change5.innerHTML = 'Перемена';
  change6.innerHTML = 'Перемена';
};

function obnova() {
  /*воскресенье*/
  if (day == 0) {
    lessonsTable.innerHTML = `<h2 id="sunday">Сегодня воскресенье, уроков нет!<br>Всем хорошего дня!</h2>`;
  };
  /*понедельник*/
  if (day == 6) {
    if (hour < 8) {
      title.innerHTML = 'Сегодня будет 7 уроков'
    };
    if (hour >= 8 && hour < 14) {
      title.innerHTML = `<span class="counts">${hour}</span>:<span class="counts">${minute}</span>:<span class="counts">${seconds}</span>
`;
      title.classList.add('timer');

    };
    first.innerHTML = 'Физика';
    second.innerHTML = 'Алгебра';
    third.innerHTML = 'Информатика';
    fourth.innerHTML = 'Узбекский язык';
    fiveth.innerHTML = 'Химия';
    sixth.innerHTML = 'Литература';
    seventh.innerHTML = 'Физкультура';
    changesAt7Lessons();

    if (hour == 8) {
      if (minute > -1 && minute < 40) {
        first.classList.add('active');
      };
      if (minute > 39 && minute < 46) {
        first.classList.remove('active');
        change1.classList.add('active');
      };
      if (minute > 45 && minute < 60) {
        change1.classList.remove('active');
        second.classList.add('active');
      };
    };
    if (hour == 9) {
      if (minute > -1 && minute < 25) {
        second.classList.add('active');
      };
      if (minute > 24 && minute < 31) {
        second.classList.remove('active');
        change2.classList.add('active');
      };
      if (minute > 30 && minute < 60) {
        change2.classList.remove('active');
        third.classList.add('active');
      };
    };
    if (hour == 10) {
      if (minute > -1 && minute < 10) {
        third.classList.add('active');
      };
      if (minute > 9 && minute < 21) {
        third.classList.remove('active');
        change3.classList.add('active');
      };
      if (minute > 20 && minute < 60) {
        change3.classList.remove('active');
        fourth.classList.add('active');
      };
    };
    if (hour == 11) {
      if (minute > -1 && minute < 6) {
        fourth.classList.remove('active');
        change4.classList.add('active');
      };
      if (minute > 5 && minute < 45) {
        change4.classList.remove('active');
        fiveth.classList.add('active');
      };
      if (minute > 44 && minute < 51) {
        fiveth.classList.remove('active');
        change5.classList.add('active');
      };
      if (minute > 50 && minute < 60) {
        change5.classList.remove('active');
        sixth.classList.add('active');
      };
    };
    if (hour == 12) {
      if (minute > -1 && minute < 30) {
        sixth.classList.add('active');
      };
      if (minute > 29 && minute < 41) {
        sixth.classList.remove('active');
        change6.classList.add('active');
      };
      if (minute > 40 && minute < 60) {
        change6.classList.remove('active');
        seventh.classList.add('active');
      };
    };
    if (hour == 13) {
      if (minute > -1 && minute < 21) {
        seventh.classList.add('active');
      };
      if (minute > 21) {
        seventh.classList.remove('active');
        title.classList.remove('timer')
        title.innerHTML = 'Сегодня было 7 уроков';
      };
    };
    if (hour > 13) {
      title.innerHTML = 'Сегодня было 7 уроков';
      title.classList.remove('timer');

    };
  };
  /*вторник*/
  if (day == 2) {
    if (hour < 8) {
      title.innerHTML = 'Сегодня будет 7 уроков'
    };
    if (hour >= 8 && hour < 13) {
      title.innerHTML = `<span class="counts">${hour}</span>:<span class="counts">${minute}</span>:<span class="counts">${seconds}</span>
`;
      title.classList.add('timer');
    };
    first.innerHTML = 'Физкультура';
    second.innerHTML = 'География';
    third.innerHTML = 'Химия';
    fourth.innerHTML = 'Геометрия';
    fiveth.innerHTML = 'Английский язык';
    sixth.innerHTML = 'Экономика';
    changesAt6Lessons();

    if (hour == 8) {
      if (minute > -1 && minute < 40) {
        first.classList.add('active');
      };
      if (minute > 39 && minute < 46) {
        first.classList.remove('active');
        change1.classList.add('active');
      };
      if (minute > 45 && minute < 60) {
        change1.classList.remove('active');
        second.classList.add('active');
      };
    };
    if (hour == 9) {
      if (minute > -1 && minute < 25) {
        second.classList.add('active');
      };
      if (minute > 24 && minute < 31) {
        second.classList.remove('active');
        change2.classList.add('active');
      };
      if (minute > 30 && minute < 60) {
        change2.classList.remove('active');
        third.classList.add('active');
      };
    };
    if (hour == 10) {
      if (minute > -1 && minute < 10) {
        third.classList.add('active');
      };
      if (minute > 9 && minute < 21) {
        third.classList.remove('active');
        change3.classList.add('active');
      };
      if (minute > 20 && minute < 60) {
        change3.classList.remove('active');
        fourth.classList.add('active');
      };
    };
    if (hour == 11) {
      if (minute > -1 && minute < 6) {
        fourth.classList.remove('active');
        change4.classList.add('active');
      };
      if (minute > 5 && minute < 45) {
        change4.classList.remove('active');
        fiveth.classList.add('active');
      };
      if (minute > 44 && minute < 51) {
        fiveth.classList.remove('active');
        change5.classList.add('active');
      };
      if (minute > 50 && minute < 60) {
        change5.classList.remove('active');
        sixth.classList.add('active');
      };
    };
    if (hour == 12) {
      if (minute > -1 && minute < 30) {
        sixth.classList.add('active');
      };
      if (minute > 29) {
        sixth.classList.remove('active');
        title.classList.remove('timer');

        title.innerHTML = 'Сегодня было 6 уроков';
      };
    };
    if (hour > 12) {
      title.classList.remove('timer');

      title.innerHTML = 'Сегодня было 6 уроков';
    };
  };
  /*среда*/
  if (day == 3) {
    if (hour >= 8) {
      title.classList.add('timer');
    };
    if (hour == 8) {
      if (minute > -1 && minute < 40) {
        first.classList.add('active');
      };
      if (minute > 39 && minute < 46) {
        first.classList.remove('active');
        change1.classList.add('active');
      };
      if (minute > 45 && minute < 60) {
        change1.classList.remove('active');
        second.classList.add('active');
      };
    };
    if (hour == 9) {
      if (minute > -1 && minute < 25) {
        second.classList.add('active');
      };
      if (minute > 24 && minute < 31) {
        second.classList.remove('active');
        change2.classList.add('active');
      };
      if (minute > 30 && minute < 60) {
        change2.classList.remove('active');
        third.classList.add('active');
      };
    };
    if (hour == 10) {
      if (minute > -1 && minute < 10) {
        third.classList.add('active');
      };
      if (minute > 9 && minute < 21) {
        third.classList.remove('active');
        change3.classList.add('active');
      };
      if (minute > 20 && minute < 60) {
        change3.classList.remove('active');
        fourth.classList.add('active');
      };
    };
    if (hour >= 11) {
      if (minute > -1 && minute < 6) {
        fourth.classList.remove('active');
        title.classList.remove('timer');
        title.innerHTML = 'Сегодня было 4 урока';
      };
    };
  };
    
    /*четверг*/
    if (day == 4) {
      
    };
    /*пятница*/
    if (day == 5) {};
    /*суббота*/
    if (day == 6) {};
  };

  function updateDate() {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    seconds = date.getSeconds();
    year = date.getFullYear();
    day = date.getDay();
    month = date.getMonth();
    today = date.getDate();
    if (minute < 10) {
      minute = '0' + minute;
    };
    if (hour < 10) {
      hour = '0' + hour;
    };
    if (seconds < 10) {
      seconds = '0' + seconds;
    };
  };


  setInterval(function run() {
    updateDate();
    obnova();
  }, 1000);
