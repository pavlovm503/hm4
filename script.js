let quarters = prompt("какую квартиру вы хотите найти")
var search = function searchHome () {
  let floors = prompt("количество этажей от 1-25").match(/\d+/);
    while (floors < 1 || floors > 25)  {  
		  floors = prompt("количество этажей от 1-25").match(/\d+/);
	};
  let entrance = prompt("количество подъездов от 1 до 10").match(/\d+/);
    while (entrance < 1 || entrance > 10)  {  
		  entrance = prompt("количество подъездов от 1 до 10").match(/\d+/);
	};
  let apartments = prompt("количество квартир на этаже от 1 до 10").match(/\d+/);
    while (apartments < 1 || apartments > 10)  {  
		  entrance = prompt("количество квартир на этаже от 1 до 10").match(/\d+/);
	};
    return function home (searchForHome){
      let resFloors = Math.ceil(quarters/apartments);
      let resEntrance = Math.ceil(resFloors/floors);
      let resApartments = resEntrance * floors;
      return alert(`квартира ${searchForHome} находится на ${resApartments} этаже ${resEntrance } подъезда`)
  }
}
const summer = search()
summer(quarters)