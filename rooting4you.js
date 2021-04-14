const judgeVegetable = function (vegetables, metric) {
  let max = 0;
  let ind = 0;
  
  if (metric === 'redness') {
    for (let b = 0; b < vegetables.length; b++) {
      if (vegetables[b].redness > max) {
        max = vegetables[b].redness;
        ind = b;
      }
    }
  }
  else if (metric === 'plumpness') {
    for (let a = 0; a < vegetables.length; a++) {
      if (vegetables[a].plumpness > max) {
        max = vegetables[a].plumpness;
        ind = a;
      }
    }
  }
  return vegetables[ind].submitter;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

judgeVegetable(vegetables, metric);
