//we need range data in arrays for all lines in order to use customBars property
const generateDataArray = (arr) =>
  arr.reduce((acc, item) => {
    const container = [
      new Date(item.ReferenceDate),
      [item.Min, item.Average, item.Max],
      [null, item.Average, null],
      [null, item["2019"], null],
      [null, item["2020"], null],
      [null, item.helperlastyear, null],
    ];

    acc.push(container);

    return acc;
  }, []); //"Date", "Range", "Average", "2019", "2020", "Prediction"

const dataJSON = [
  {
    "2019": null,
    "2020": 420,
    Min: 722,
    Max: 1172,
    Average: 889,
    helperlastyear: null,
    ReferenceDate: "2012-01-03",
  },
  {
    "2019": 722,
    "2020": null,
    Min: 722,
    Max: 1172,
    Average: 889,
    helperlastyear: null,
    ReferenceDate: "2012-01-04",
  },
  {
    "2019": null,
    "2020": 502,
    Min: 434,
    Max: 844,
    Average: 664,
    helperlastyear: null,
    ReferenceDate: "2012-01-10",
  },
  {
    "2019": 555,
    "2020": null,
    Min: 434,
    Max: 844,
    Average: 664,
    helperlastyear: null,
    ReferenceDate: "2012-01-11",
  },
  {
    "2019": null,
    "2020": 549,
    Min: 695,
    Max: 1330,
    Average: 970,
    helperlastyear: null,
    ReferenceDate: "2012-01-17",
  },
  {
    "2019": 1062,
    "2020": null,
    Min: 695,
    Max: 1330,
    Average: 970,
    helperlastyear: null,
    ReferenceDate: "2012-01-18",
  },
  {
    "2019": null,
    "2020": 579,
    Min: 420,
    Max: 1325,
    Average: 800,
    helperlastyear: null,
    ReferenceDate: "2012-01-24",
  },
  {
    "2019": 712,
    "2020": null,
    Min: 420,
    Max: 1325,
    Average: 800,
    helperlastyear: null,
    ReferenceDate: "2012-01-25",
  },
  {
    "2019": null,
    "2020": 323,
    Min: 423,
    Max: 1049,
    Average: 732,
    helperlastyear: null,
    ReferenceDate: "2012-01-31",
  },
  {
    "2019": 705,
    "2020": null,
    Min: 423,
    Max: 1049,
    Average: 732,
    helperlastyear: null,
    ReferenceDate: "2012-02-01",
  },
  {
    "2019": null,
    "2020": 422,
    Min: 369,
    Max: 958,
    Average: 740,
    helperlastyear: null,
    ReferenceDate: "2012-02-07",
  },
  {
    "2019": 820,
    "2020": null,
    Min: 369,
    Max: 958,
    Average: 740,
    helperlastyear: null,
    ReferenceDate: "2012-02-08",
  },
  {
    "2019": null,
    "2020": 536,
    Min: 485,
    Max: 1192,
    Average: 738,
    helperlastyear: null,
    ReferenceDate: "2012-02-14",
  },
  {
    "2019": 485,
    "2020": null,
    Min: 485,
    Max: 1192,
    Average: 738,
    helperlastyear: null,
    ReferenceDate: "2012-02-15",
  },
  {
    "2019": null,
    "2020": 453,
    Min: 484,
    Max: 989,
    Average: 687,
    helperlastyear: null,
    ReferenceDate: "2012-02-21",
  },
  {
    "2019": 522,
    "2020": null,
    Min: 484,
    Max: 989,
    Average: 687,
    helperlastyear: null,
    ReferenceDate: "2012-02-22",
  },
  {
    "2019": null,
    "2020": 431,
    Min: 321,
    Max: 801,
    Average: 578,
    helperlastyear: null,
    ReferenceDate: "2012-02-28",
  },
  {
    "2019": 321,
    "2020": null,
    Min: 321,
    Max: 801,
    Average: 578,
    helperlastyear: null,
    ReferenceDate: "2012-03-01",
  },
  {
    "2019": null,
    "2020": 481,
    Min: 528,
    Max: 1022,
    Average: 709,
    helperlastyear: null,
    ReferenceDate: "2012-03-06",
  },
  {
    "2019": 1022,
    "2020": null,
    Min: 594,
    Max: 1022,
    Average: 745,
    helperlastyear: null,
    ReferenceDate: "2012-03-08",
  },
  {
    "2019": null,
    "2020": 385,
    Min: 610,
    Max: 980,
    Average: 726,
    helperlastyear: null,
    ReferenceDate: "2012-03-13",
  },
  {
    "2019": 678,
    "2020": null,
    Min: 407,
    Max: 980,
    Average: 665,
    helperlastyear: null,
    ReferenceDate: "2012-03-15",
  },
  {
    "2019": null,
    "2020": 322,
    Min: 407,
    Max: 868,
    Average: 714,
    helperlastyear: null,
    ReferenceDate: "2012-03-20",
  },
  {
    "2019": 712,
    "2020": null,
    Min: 668,
    Max: 868,
    Average: 766,
    helperlastyear: null,
    ReferenceDate: "2012-03-22",
  },
  {
    "2019": null,
    "2020": 524,
    Min: 424,
    Max: 671,
    Average: 602,
    helperlastyear: null,
    ReferenceDate: "2012-03-27",
  },
  {
    "2019": 631,
    "2020": null,
    Min: 424,
    Max: 714,
    Average: 611,
    helperlastyear: null,
    ReferenceDate: "2012-03-29",
  },
  {
    "2019": null,
    "2020": 211,
    Min: 558,
    Max: 1044,
    Average: 823,
    helperlastyear: 211,
    ReferenceDate: "2012-04-03",
  },
  {
    "2019": 558,
    "2020": null,
    Min: 474,
    Max: 1044,
    Average: 775,
    helperlastyear: 558,
    ReferenceDate: "2012-04-05",
  },
  {
    "2019": null,
    "2020": null,
    Min: 474,
    Max: 961,
    Average: 724,
    helperlastyear: null,
    ReferenceDate: "2012-04-10",
  },
  {
    "2019": 676,
    "2020": null,
    Min: 640,
    Max: 961,
    Average: 765,
    helperlastyear: 676,
    ReferenceDate: "2012-04-12",
  },
  {
    "2019": 898,
    "2020": null,
    Min: 627,
    Max: 1119,
    Average: 855,
    helperlastyear: null,
    ReferenceDate: "2012-04-19",
  },
  {
    "2019": 1074,
    "2020": null,
    Min: 398,
    Max: 1074,
    Average: 784,
    helperlastyear: null,
    ReferenceDate: "2012-04-26",
  },
  {
    "2019": 529,
    "2020": null,
    Min: 363,
    Max: 1036,
    Average: 751,
    helperlastyear: null,
    ReferenceDate: "2012-05-03",
  },
  {
    "2019": 728,
    "2020": null,
    Min: 570,
    Max: 878,
    Average: 733,
    helperlastyear: null,
    ReferenceDate: "2012-05-10",
  },
  {
    "2019": 786,
    "2020": null,
    Min: 470,
    Max: 1368,
    Average: 877,
    helperlastyear: null,
    ReferenceDate: "2012-05-17",
  },
  {
    "2019": 1075,
    "2020": null,
    Min: 597,
    Max: 1075,
    Average: 743,
    helperlastyear: null,
    ReferenceDate: "2012-05-24",
  },
  {
    "2019": 774,
    "2020": null,
    Min: 432,
    Max: 1144,
    Average: 805,
    helperlastyear: null,
    ReferenceDate: "2012-05-31",
  },
  {
    "2019": 911,
    "2020": null,
    Min: 614,
    Max: 1096,
    Average: 825,
    helperlastyear: null,
    ReferenceDate: "2012-06-07",
  },
  {
    "2019": 827,
    "2020": null,
    Min: 580,
    Max: 1137,
    Average: 913,
    helperlastyear: null,
    ReferenceDate: "2012-06-14",
  },
  {
    "2019": 597,
    "2020": null,
    Min: 480,
    Max: 1177,
    Average: 806,
    helperlastyear: null,
    ReferenceDate: "2012-06-21",
  },
  {
    "2019": 1018,
    "2020": null,
    Min: 564,
    Max: 1018,
    Average: 798,
    helperlastyear: null,
    ReferenceDate: "2012-06-28",
  },
  {
    "2019": 421,
    "2020": null,
    Min: 421,
    Max: 1054,
    Average: 684,
    helperlastyear: null,
    ReferenceDate: "2012-07-05",
  },
  {
    "2019": 531,
    "2020": null,
    Min: 531,
    Max: 1304,
    Average: 865,
    helperlastyear: null,
    ReferenceDate: "2012-07-12",
  },
  {
    "2019": 675,
    "2020": null,
    Min: 611,
    Max: 1135,
    Average: 808,
    helperlastyear: null,
    ReferenceDate: "2012-07-19",
  },
  {
    "2019": 588,
    "2020": null,
    Min: 588,
    Max: 1328,
    Average: 914,
    helperlastyear: null,
    ReferenceDate: "2012-07-26",
  },
  {
    "2019": 618,
    "2020": null,
    Min: 618,
    Max: 1080,
    Average: 880,
    helperlastyear: null,
    ReferenceDate: "2012-08-02",
  },
  {
    "2019": 668,
    "2020": null,
    Min: 668,
    Max: 1257,
    Average: 917,
    helperlastyear: null,
    ReferenceDate: "2012-08-09",
  },
  {
    "2019": 735,
    "2020": null,
    Min: 668,
    Max: 1278,
    Average: 908,
    helperlastyear: null,
    ReferenceDate: "2012-08-16",
  },
  {
    "2019": 509,
    "2020": null,
    Min: 340,
    Max: 1239,
    Average: 797,
    helperlastyear: null,
    ReferenceDate: "2012-08-23",
  },
  {
    "2019": 865,
    "2020": null,
    Min: 581,
    Max: 1279,
    Average: 809,
    helperlastyear: null,
    ReferenceDate: "2012-08-30",
  },
  {
    "2019": 595,
    "2020": null,
    Min: 595,
    Max: 919,
    Average: 756,
    helperlastyear: null,
    ReferenceDate: "2012-09-06",
  },
  {
    "2019": 535,
    "2020": null,
    Min: 535,
    Max: 1117,
    Average: 844,
    helperlastyear: null,
    ReferenceDate: "2012-09-13",
  },
  {
    "2019": 584,
    "2020": null,
    Min: 584,
    Max: 953,
    Average: 727,
    helperlastyear: null,
    ReferenceDate: "2012-09-20",
  },
  {
    "2019": 541,
    "2020": null,
    Min: 541,
    Max: 858,
    Average: 668,
    helperlastyear: null,
    ReferenceDate: "2012-09-27",
  },
  {
    "2019": 541,
    "2020": null,
    Min: 239,
    Max: 1278,
    Average: 688,
    helperlastyear: null,
    ReferenceDate: "2012-10-04",
  },
  {
    "2019": 522,
    "2020": null,
    Min: 522,
    Max: 1103,
    Average: 857,
    helperlastyear: null,
    ReferenceDate: "2012-10-11",
  },
  {
    "2019": 351,
    "2020": null,
    Min: 351,
    Max: 1014,
    Average: 738,
    helperlastyear: null,
    ReferenceDate: "2012-10-18",
  },
  {
    "2019": 454,
    "2020": null,
    Min: 454,
    Max: 1209,
    Average: 826,
    helperlastyear: null,
    ReferenceDate: "2012-10-25",
  },
  {
    "2019": 593,
    "2020": null,
    Min: 506,
    Max: 931,
    Average: 635,
    helperlastyear: null,
    ReferenceDate: "2012-11-01",
  },
  {
    "2019": 418,
    "2020": null,
    Min: 418,
    Max: 1379,
    Average: 925,
    helperlastyear: null,
    ReferenceDate: "2012-11-08",
  },
  {
    "2019": 601,
    "2020": null,
    Min: 588,
    Max: 1169,
    Average: 820,
    helperlastyear: null,
    ReferenceDate: "2012-11-15",
  },
  {
    "2019": 728,
    "2020": null,
    Min: 568,
    Max: 967,
    Average: 761,
    helperlastyear: null,
    ReferenceDate: "2012-11-22",
  },
  {
    "2019": 413,
    "2020": null,
    Min: 413,
    Max: 1136,
    Average: 775,
    helperlastyear: null,
    ReferenceDate: "2012-11-29",
  },
  {
    "2019": 589,
    "2020": null,
    Min: 434,
    Max: 1214,
    Average: 743,
    helperlastyear: null,
    ReferenceDate: "2012-12-06",
  },
  {
    "2019": 435,
    "2020": null,
    Min: 435,
    Max: 1171,
    Average: 726,
    helperlastyear: null,
    ReferenceDate: "2012-12-13",
  },
  {
    "2019": 533,
    "2020": null,
    Min: 533,
    Max: 939,
    Average: 774,
    helperlastyear: null,
    ReferenceDate: "2012-12-20",
  },
  {
    "2019": 620,
    "2020": null,
    Min: 620,
    Max: 978,
    Average: 770,
    helperlastyear: null,
    ReferenceDate: "2012-12-27",
  },
];

const dataLabels = ["Date", "Range", "Average", "2019", "2020", "Prediction"];
const dataArr = [
  [
    new Date("2012-01-03"),
    [722, 889, 1172],
    [null, 889, null],
    [null, 20, null],
    [null, 420, null],
  ],
  [
    new Date("2012-01-04"),
    [722, 889, 1172],
    [null, 889, null],
    [null, 722, null],
    [null, 20, null],
  ],
  [
    new Date("2012-01-10"),
    [434, 664, 844],
    [null, 664, null],
    [null, 20, null],
    [null, 502, null],
  ],
  [
    new Date("2012-01-11"),
    [434, 664, 844],
    [null, 664, null],
    [null, 555, null],
    [null, 20, null],
  ],
  [
    new Date("2012-01-17"),
    [695, 970, 1330],
    [null, 970, null],
    [null, 20, null],
    [null, 549, null],
  ],
  [
    new Date("2012-01-18"),
    [695, 970, 1330],
    [null, 970, null],
    [null, 1062, null],
    [null, 20, null],
  ],
  [
    new Date("2012-01-24"),
    [420, 800, 1325],
    [null, 800, null],
    [null, 20, null],
    [null, 579, null],
  ],
  [
    new Date("2012-01-25"),
    [420, 800, 1325],
    [null, 800, null],
    [null, 712, null],
    [null, 20, null],
  ],
  [
    new Date("2012-01-31"),
    [423, 732, 1049],
    [null, 732, null],
    [null, 20, null],
    [null, 323, null],
  ],
];

export default {
  dataLabels,
  dataArr,
  getArrayFromJSON: () => generateDataArray(dataJSON),
};
