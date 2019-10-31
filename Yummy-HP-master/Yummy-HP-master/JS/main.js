'use strict';


////////////////////////loding/////////////////////
$(window).on('load', function() {
  $(".page-loader").fadeOut('slow');
});
// ////////////////////////cursor////////////////////////
// var
// cursor = $(".cursor"),
// follower = $(".follower"),
// cWidth = 20, //カーソルの大きさ
// mouseX = 0, //マウスのX座標
// mouseY = 0,//マウスのY座標
//
// fWidth = 40, //フォロワーの大きさ
// delay = 10, //数字を大きくするとフォロワーがより遅れて来る
// posX = 0, //フォロワーのX座標
// posY = 0; //フォロワーのX座標
//
// //カーソルの遅延アニメーション
// //ほんの少ーーーしだけ遅延させる 0.001秒
// TweenMax.to({}, .001, {
// repeat: -1,
// onRepeat: function() {
//   posX += (mouseX - posX) / delay;
//   posY += (mouseY - posY) / delay;
//
//   TweenMax.set(follower, {
//       css: {
//         left: posX - (fWidth / 2),
//         top: posY - (fWidth / 2)
//       }
//   });
//
//   TweenMax.set(cursor, {
//       css: {
//         left: mouseX - (cWidth / 2),
//         top: mouseY - (cWidth / 2)
//       }
//   });
// }
// });
//
// //マウス座標を取得
// $(document).on("mousemove", function(e) {
//   mouseX = e.pageX;
//   mouseY = e.pageY;
//   cursor.css({
//     //カーソルの真ん中に座標軸が来るよう、
//     //カーソルの大きさの半分を引きます
//     left: mouseX - (cWidth / 2),
//     top: mouseY - (cWidth / 2)
//   })
// });
//
// $("a").on({
// "mouseenter": function() {
//   cursor.addClass("is-active");
//   follower.addClass("is-active");
// },
// "mouseleave": function() {
//   cursor.removeClass("is-active");
//   follower.removeClass("is-active");
// }
// });
//
///////////////////////ゆらゆら///////////////////////////

const baseRadius = 250,
  randomRate = 95,
  fluid = function() {
    $(".drop").animate(
      {
        borderTopLeftRadius:
          Math.round(Math.random() * randomRate) + baseRadius + "px",
        borderTopRightRadius:
          Math.round(Math.random() * randomRate) + baseRadius + "px",
        borderBottomLeftRadius:
          Math.round(Math.random() * randomRate) + baseRadius + "px",
        borderBottomRightRadius:
          Math.round(Math.random() * randomRate) + baseRadius + "px"
      },
      {
        duration: 600,
        complete: fluid
      }
    );
  };
fluid();


/////////////////////swiper/////////////////////////
$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay :3000,
      disableOnInteraction: false,
    },
  })
});
////////////////////視差効果///////////////////////////////

$(function(){
	// それぞれのコンテンツの位置（上からの位置）を取得して変数に格納
	var para01Pos = $('#parallax1').offset().top;
	var para02Pos = $('#parallax2').offset().top;
	var para03Pos = $('#parallax3').offset().top;
	var para04Pos = $('#parallax4').offset().top;
  var para05Pos = $('#parallax5').offset().top;


	// それぞれの要素の現在のmarginの値を取得して変数に格納
	// ※取得される値は単位「px」が付いているので、整数化するためにparseInt関数を使用
	var paraImgPos = parseInt($('#parallaxImage').css('margin-right'));
	var paraMtdPos = parseInt($('#parallaxMethod').css('margin-left'));

	var circle1Pos = parseInt($('#parallax1 .circle1').css('top'));
	var circle2Pos = parseInt($('#parallax1 .circle2').css('top'));
	var circle3Pos = parseInt($('#parallax1 .circle3').css('top'));
	var circle4Pos = parseInt($('#parallax1 .circle4').css('top'));
	var circle5Pos = parseInt($('#parallax1 .circle5').css('top'));
  var circle6Pos = parseInt($('#parallax1 .circle6').css('top'));
  var forwordPicPos = parseInt($('#parallax1 .forword-pic').css('top'));
  var englishConceptPos = parseInt($('#parallax1 .english-concept').css('top'));




	// 要素を非表示設定及び透明度0に設定
	// $('#parallax3 ul').hide();
	// $('#parallax4 ul').css('opacity',0);
	// $('#parallax4 ol').css('opacity',0);

	// スクロールイベントが発生したら実行
	$(window).scroll(function(){

		// スクロール量を取得して変数に格納
		var scrollVal = $(window).scrollTop();
		// スクロール量をテキスト要素として出力
		// $('#scrollVal').text('スクロール量 = '+scrollVal+'px');

		// パララックスの条件設定と実行
		// １つ目のコンテンツに対して設定
		if(scrollVal > para01Pos + 250){
			$('#parallax1').css('background-position-y', scrollVal - para01Pos);
		}else{
			$('#parallax1').css('background-position-y', 250);
		}

    if(scrollVal > para01Pos - 600){
      if(paraImgPos + (scrollVal - para01Pos + 600) < 0){
        $('#parallaxImage').css('margin-top', paraImgPos + (scrollVal - para01Pos + 600));
      }
    }


		// ２つ目のコンテンツに対して設定
		if(scrollVal > para02Pos){
			$('#parallax2').css('background-position-y', scrollVal - para02Pos);
		}else{
			$('#parallax2').css('background-position-y', 0);
		}

    if(scrollVal > para02Pos - 300){
      $('#parallaxMethod').fadeTo(500,1);
    }

    if(scrollVal > para02Pos - 1000){
      if(paraMtdPos + (scrollVal - para02Pos + 1000) < 0){
        $('#parallaxMethod').css('margin-left', paraMtdPos + (scrollVal - para02Pos + 1000));
      }
    }



		// ３つ目のコンテンツに対して設定


		if(scrollVal > para03Pos){
			$('#parallax3').css('background-position-y', scrollVal - para03Pos);
		}else{
			$('#parallax3').css('background-position-y', 0);
		}

		// ４つ目のコンテンツに対して設定
		// if(scrollVal > para04Pos - 300){
		// 	$('#parallax4 ol').fadeTo(300,1);
		// }
    //
		// if(scrollVal > para04Pos - 100){
		// 	$('#parallax4 ul').fadeTo(800,1);
		// }

		if(scrollVal > para04Pos){
			$('#parallax4').css('background-position-y', scrollVal - para04Pos);
		}else{
			$('#parallax4').css('background-position-y', 0);
		}

		// １つ目のコンテンツ内にある円オブジェクトに視差効果をつける
		$('#parallax1 .circle1').css('top', circle1Pos + scrollVal / 10);
		$('#parallax1 .circle2').css('top', circle2Pos + -scrollVal / 3);
		$('#parallax1 .circle3').css('top', circle3Pos + -scrollVal / 6);
		$('#parallax1 .circle4').css('top', circle4Pos + -scrollVal / 4);
		$('#parallax1 .circle5').css('top', circle5Pos + scrollVal / 3);
    $('#parallax1 .circle6').css('top', circle5Pos + scrollVal / 20);
    $('#parallax1 .forword-pic').css('top',  forwordPicPos + scrollVal / 7);
    $('#parallax1 .english-concept').css('top',  englishConceptPos + scrollVal / 19);

    // 二つ目のコンテンツ内にあるオブジェクトに視差効果をつける

  });
});
