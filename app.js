const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDB.count < 10) {
  console.log('мало');
  alert('мало');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  alert('норм');
} else if (personalMovieDB.count > 30) {
  alert('ВАУ');
} else {
  alert('Ошибка');
}

// for (let i = 0; i < 2; i++) {
//   let a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцените его?');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
// }

let num = 0;
// while (num < 3) {
//   num++;
//   let a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцените его?');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     num++;
//     console.log('done');
//   } else {
//     console.log('error');
//     num--;
//   }
// }

do {
  num++;
  let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = +prompt('На сколько оцените его?');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    num++;
    console.log('done');
  } else {
    console.log('error');
    num--;
  }
} while (num <= 2);

console.log(personalMovieDB);
