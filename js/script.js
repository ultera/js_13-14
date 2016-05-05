"use strict";
$(function() {


  var sourceTest = [
    {number: 0,
    question: "Which one of the five is least like the other four?",
    answers: ["Dog", "Mouse", "Lion", "Snake", "Elephant", "I don't know"],
    weight: [0, 0, 0, 1, 0, 1]},

    {number: 1,
    question: "Which number should come next in the series?",
    answers: [8, 13, 21, 26, 31, "I don't know"],
    weight: [0, 0, 1, 0, 0, 1]},

    {number: 2,
    question: "Which one of the five choices makes the best comparison?",
    answers: [25641, 26451, 12654, 51462, 15264, "I don't know"],
    weight: [0, 0, 0, 0, 1, 1]},

    {number: 3,
    question: "Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?",
    answers: [20, 24, 25, 26, 28, "I don't know"],
    weight: [0, 1, 0, 0, 0, 1]},

    {number: 4,
    question: "Which one of the numbers does not belong in the following series?",
    answers: ["THREE", "SEVEN", "EIGHT", "FIFTEEN", "THIRTY", "I don't know"],
    weight: [0, 0, 1, 0, 0, 1]},

    {number: 5,
    question: "Which one of the five choices makes the best comparison? Finger is to Hand as Leaf is to:",
    answers: ["Twig", "Tree", "Branch", "Blossom", "Bark", "I don't know"],
    weight: [1, 0, 0, 0, 0, 1]},

    {number: 6,
    question: "If you rearrange the letters 'CIFAIPC' you would have the name of a(n):",
    answers: ["City", "Animal", "Ocean", "River", "Country", "I don't know"],
    weight: [0, 0, 1, 0, 0, 1]}



  ];

  var $container = $(".container");

  $("#tmpl").tmpl(sourceTest).appendTo($container);

  //........... BUTTON ..............
  var $div = $('<div></div>').appendTo($container).addClass('button');
  var $button = $('<button>Check my results!</button>')
    .addClass('btn btn-primary')
    .attr('type', 'button');
  $div.append($button);

  //........... CHECK RESULTS ...........
  $button.on('click', function() {

    var $inputs = $("input[type='checkbox']:checked");
    var number = [];
    var userWeight = 0;


    for(var i = 0; i < $inputs.length; i++) {
      if($inputs[i].checked) {
        number = $inputs[i].className.split("-");
        if(sourceTest[number[0]].weight[number[1]] == 1) {
          userWeight++;
          // $inputs[i].addClass(".right");
        } else {
          // $inputs[i].addClass(".wrong");
        }
      }
    };
    console.log(userWeight);
    console.log( calcWeight() );

    $(".label:2-1").attr("background", "green");




  });

  function calcWeight() {
    var weight = 0;
    for(var i = 0; i < sourceTest.length; i++) {
      for(var j = 0; j < sourceTest[i].weight.length; j++) {
        weight += sourceTest[i].weight[j];
      }
    }
    return weight;
  }





})
