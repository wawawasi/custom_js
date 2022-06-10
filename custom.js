$('.menu') .on('click', function(){
	$('body') .addClass('no-scroll');
});
$('.close') .on('click', function(){
	$('body') .removeClass('no-scroll');
});


$('.nav-container .checkbox').change(function(){
 if($(this).is(":checked")) {
 $('.hamburger-lines .line').removeClass("red-line");
 } else {
 $('.hamburger-lines .line').addClass("red-line");
 }
});

var images = [];
images[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629dffcd7c3e13923877b602_img-2.png";
images[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629dffdaddd0b20db1e92dfd_img-3.png";
images[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629dfff7d7bc904390626125_img-4.png";
images[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e001929146e5d680f37fd_img-5.png";
images[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e0037141cc963222de003_img-6.png";
images[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e006760bbc2e1c9993a45_img-7.png";
images[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e007c3ee3d6db9fd71a4b_img-8.png";
images[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e008bb6e437bceb1178e1_img-9.png";
images[9] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e00a649b49503c8701db7_img-10.png";
    
//image change func Image-1

var interval;
    var i = 0;
$(function () {
$(".hover-img").mouseover(function () {
 interval = setInterval(fadeDivs, 400);
 })
 $(".hover-img").mouseout(function () {
  $('.project-img').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629dff997c3e13556877b510_img-1.png');
   $('.project-img').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629dff997c3e13556877b510_img-1.png');
    clearInterval(interval);
   $('.project-img').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629dff997c3e13556877b510_img-1.png');
   $('.project-img').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629dff997c3e13556877b510_img-1.png');
        });
    });
    function fadeDivs() {
        i = i < images.length ? i : 0;
        
        $('.project-img').fadeOut(100, function() {
        //for(i;i<=images.length; i++){
        $(this).attr('srcset', images[i]);
            $(this).attr('src', images[i]).fadeIn(100);
        //}
        });  
        i++;
    }
    

 

var images1 = [];
    images1[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0ae868049d2cd18c95ec_img-2.png";
    images1[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0afa3b2aee4c4b3771cd_img-3.png";
    images1[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0b0e97a04482602ef4e0_img-4.png";
    images1[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0b23f28e0b1e33d4f5ed_img-5.png";
    images1[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0b3f67c85b706567b31c_img-6.png";
    images1[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0b52d16ec45d791975af_img-7.png";
    images1[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0b6d9b86971d1c63bc97_img-8.png";
    
//image change func Image-2

var interval1;
    var i1 = 0;

    $(function () {
        $(".hover-img-1").mouseover(function () {
            interval1 = setInterval(fadeDivs1, 400);
        })
       $(".hover-img-1").mouseout(function () {
     
                $('.project-image-1').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0ac39b86979bb063b5c4_img-1.png');
            $('.project-image-1').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0ac39b86979bb063b5c4_img-1.png');
                clearInterval(interval1);
                $('.project-image-1').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0ac39b86979bb063b5c4_img-1.png');
            $('.project-image-1').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0ac39b86979bb063b5c4_img-1.png');
                

        });
    });

    function fadeDivs1() {
        i = i < images1.length ? i : 0;
        
        $('.project-image-1').fadeOut(100, function() {
        //for(i;i<=images.length; i++){
        $(this).attr('srcset', images1[i]);
            $(this).attr('src', images1[i]).fadeIn(100);
        //}
        });
        
        i++;
    }
    
 

var images2 = [];
    images2[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c66ea959b41ee6cd553_img-2.png";
    images2[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c8a68049dca048ca5de_img-3.png";
    images2[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c9d1cbdac586f96ff69_img-4.png";
    images2[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0cb8441bbb6615fc61b6_img-5.png";
    images2[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0cdef128456809863927_img-6.png";
    images2[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0cf44f614ef9f0ebc228_img-7.png";
//image change func Image-3

var interval2;
    var i2 = 0;

    $(function () {
        $(".hover-img-2").mouseover(function () {
            interval2 = setInterval(fadeDivs2, 400);
        })
       $(".hover-img-2").mouseout(function () {
     
                $('.project-image-2').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c518962db1710fa12af_img-1.png');
            $('.project-image-2').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c518962db1710fa12af_img-1.png');
                clearInterval(interval2);
                $('.project-image-2').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c518962db1710fa12af_img-1.png');
            $('.project-image-2').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c518962db1710fa12af_img-1.png');
                

        });
    });

    function fadeDivs2() {
        i = i < images2.length ? i : 0;
        
        $('.project-image-2').fadeOut(100, function() {
        //for(i;i<=images.length; i++){
        $(this).attr('srcset', images2[i]);
            $(this).attr('src', images2[i]).fadeIn(100);
        //}
        });
        
        i++;
    }

 