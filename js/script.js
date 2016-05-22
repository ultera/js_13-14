"use strict";
$(function() {

  /** sourceTest.weight[i] - 0, if sourceTest.answers[i] is incorrect;
  /*                       - 1, if sourceTest.answers[i] is correct.*/

  var sourceTest = [
    {number: 0,
    question: "Which one of the five is least like the other four?",
    answers: ["Dog", "Mouse", "Lion", "Snake", "Elephant", "I'm not sure"],
    weight: [0, 0, 0, 1, 0, 1]},

    {number: 1,
    question: "Which number should come next in the series?",
    answers: [8, 13, 21, 26, 31, "I'm not sure"],
    weight: [0, 0, 1, 0, 0, 1]},

    {number: 2,
    question: "Which one of the five choices makes the best comparison?",
    answers: [25641, 26451, 12654, 51462, 15264, "I'm not sure"],
    weight: [0, 0, 0, 0, 1, 1]},

    {number: 3,
    question: "Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?",
    answers: [20, 24, 25, 26, 28, "I'm not sure"],
    weight: [0, 1, 0, 0, 0, 1]},

    {number: 4,
    question: "Which one of the numbers does not belong in the following series?",
    answers: ["THREE", "SEVEN", "EIGHT", "FIFTEEN", "THIRTY", "I'm not sure"],
    weight: [0, 0, 1, 0, 0, 1]},

    {number: 5,
    question: "Which one of the five choices makes the best comparison? Finger is to Hand as Leaf is to:",
    answers: ["Twig", "Tree", "Branch", "Blossom", "Bark", "I'm not sure"],
    weight: [1, 0, 0, 0, 0, 1]},

    {number: 6,
    question: "If you rearrange the letters 'CIFAIPC' you would have the name of a(n):",
    answers: ["City", "Animal", "Ocean", "River", "Country", "I'm not sure"],
    weight: [0, 0, 1, 0, 0, 1]}
  ];

  //........... LOCALSTORAGE ..............
  sourceTest = JSON.stringify(sourceTest);
  localStorage.setItem("js1314sourceTest", sourceTest);
  sourceTest = localStorage.getItem("js1314sourceTest");
  sourceTest = JSON.parse(sourceTest);

  //........... RENDERING ..............
  var $container = $(".container");
  $("#tmpl").tmpl(sourceTest).appendTo($container);

  //........... BUTTON ..............
  var $div = $('<div></div>').appendTo($container).addClass('button');
  var $button = $('<button>Check my results!</button>')
    .addClass('btn btn-primary')
    .attr('type', 'button');
  $div.append($button);

  //........... CHECK RESULTS ...........
  $button.on('click', function(event) {

    var userWeight = [];
    var userResult = 0;

    for(var i = 0; i < sourceTest.length; i++) {

      userWeight.length = 0;
      for (var j = 0; j < sourceTest[i].answers.length; j++) {
        userWeight[j] = +$("." + [i] + "-" + [j]).is(':checked');
      }

      if (userWeight.join() == sourceTest[i].weight.join()) {
        userResult++;
        $(".question" + i).addClass("right");
      } else {
        $(".question" + i).addClass("wrong");
      }
    };

    $(".result").text(userResult + " from " + sourceTest.length);
    showModal(event);
  });


  function showModal(event) {
    event.preventDefault();
		$('.overlay').fadeIn(400,
		  function() {
				$('.modal')
					.css('display', 'block')
					.animate({opacity: 1, top: '45%'}, 200);
        $('.modal-close').css('display', 'block');
		});
  }

  $('.modal-close, .overlay').click( function() {
		$('.modal')
			.animate( {
        opacity: 0, top: '30%'}, 200,
				function() {
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400);
		});

    $("input[type='checkbox']").removeAttr('checked');
    $('h4').removeClass("wrong");
    $('h4').removeClass("right");
	});
})
