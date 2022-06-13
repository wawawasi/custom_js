

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
$(".work-hover-img").mouseover(function () {
 interval = setInterval(fadeDivs, 400);
 })
 $(".work-hover-img").mouseout(function () {
  $('.work-project-img').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629dff997c3e13556877b510_img-1.png');
   $('.work-project-img').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629dff997c3e13556877b510_img-1.png');
    clearInterval(interval);
   $('.work-project-img').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629dff997c3e13556877b510_img-1.png');
   $('.work-project-img').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629dff997c3e13556877b510_img-1.png');
        });
    });
    function fadeDivs() {
        i = i < images.length ? i : 0;
        
        $('.work-project-img').fadeOut(100, function() {
        //for(i;i<=images.length; i++){
        $(this).attr('srcset', images[i]);
            $(this).attr('src', images[i]).fadeIn(100);
        //}
        });  
        i++;
    }   



var images1 = [];
    images1[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e1507f84006224fbbea36_img-2.png";
    images1[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e151af9e4c69c89796365_img-3.png";
    images1[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e1531697d4d09e9d570d9_img-4.png";
    images1[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e1551ddd0b23bb3e9e5fd_img-5.png";
    images1[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e156748cf626be7f92be0_img-6.png";
    images1[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e157785944774ea0c74cd_img-7.png";
    images1[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e158b4abbac426bc5c3ab_img-8.png";
    images1[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e159f3ee3d67e91d7c751_img-9.png";
    images1[9] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e15bb85944766aa0c7a73_img-10.png";    
//image change func Image-2
var interval1;
    var i1 = 0;
    $(function () {
        $(".work-hover-img-1").mouseover(function () {
            interval1 = setInterval(fadeDivs1, 400);
        })
       $(".work-hover-img-1").mouseout(function () {
                $('.work-project-img-1').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e14ed7d1e47d9b4c2ab80_img-1.png');
            $('.work-project-img-1').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e14ed7d1e47d9b4c2ab80_img-1.png');
                clearInterval(interval1);
                $('.work-project-img-1').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e14ed7d1e47d9b4c2ab80_img-1.png');
            $('.workproject-img-1').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e14ed7d1e47d9b4c2ab80_img-1.png');      

        });
    });

    function fadeDivs1() {
        i = i < images1.length ? i : 0;
        $('.work-project-img-1').fadeOut(100, function() {
        $(this).attr('srcset', images1[i]);
            $(this).attr('src', images1[i]).fadeIn(100);
        });       
        i++;
    }   


var images2 = [];
    images2[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e1fa34abbac2dd8c6119b_img-2.png";
    images2[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e1fd00e53b1a994bdce33_img-3.png";
    images2[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e1feb7c3e13029378aa8f_img-4.png";
    images2[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e1ffc8b5e125865694bc4_img-5.png";
    images2[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e2014e5542b2059923ee3_img-6.png";
    images2[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e202be5542b03ed924044_img-7.png";
    images2[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e2049dc21ae6d23312a05_img-8.png";
    images2[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e2082695ff6fdd80e770c_img-9.png";
    images2[9] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e20a1b47f32c0df8bd8c0_img-10.png";
//image change func Image-3
var interval2;
    var i2 = 0;
    $(function () {
        $(".work-hover-img-2").mouseover(function () {
            interval2 = setInterval(fadeDivs2, 400);
        })
       $(".work-hover-img-2").mouseout(function () {
     
                $('.work-project-img-2').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e1f94a21df0a6c136c686_img-1.png');
            $('.work-project-image-2').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e1f94a21df0a6c136c686_img-1.png');
                clearInterval(interval2);
                $('.work-project-img-2').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e1f94a21df0a6c136c686_img-1.png');
            $('.work-project-img-2').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e1f94a21df0a6c136c686_img-1.png');      

        });
    });

    function fadeDivs2() {
        i = i < images2.length ? i : 0;
        
        $('.work-project-img-2').fadeOut(100, function() {
        //for(i;i<=images.length; i++){
        $(this).attr('srcset', images2[i]);
            $(this).attr('src', images2[i]).fadeIn(100);
        });
        i++;
    } 



var images3 = [];
    images3[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e223881707815f50c29eb_img-2.png";
    images3[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e224d54ba32560d8a3fba_img-3.png";
    images3[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e2266f339117eef6cf2df_img-4.png";
    images3[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e2296ed156270f17c7608_img-5.png";
    images3[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e22d3817078584c0c2e2c_img-6.png";
    images3[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e22e63ee3d60cb4d81ff3_img-7.png";
    images3[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e22f9b3ce9b7234574300_img-8.png";
    images3[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e2313b1cabea8a0ab5900_img-9.png";
    images3[9] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e23296a8d87af63439610_img-10.png";
    
//image change func Image-4

var interval3;
    var i3 = 0;

    $(function () {
        $(".work-hover-img-3").mouseover(function () {
            interval3 = setInterval(fadeDivs3, 400);
        })
       $(".work-hover-img-3").mouseout(function () {
     
                $('.work-project-img-3').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e2220aed3b26be8c58f30_img-1.png');
            $('.work-project-img-3').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e2220aed3b26be8c58f30_img-1.png');
                clearInterval(interval3);
                $('.work-project-img-3').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e2220aed3b26be8c58f30_img-1.png');
            $('.work-project-img-3').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629e2220aed3b26be8c58f30_img-1.png');
 
        });
    });

    function fadeDivs3() {
        i = i < images3.length ? i : 0;
        $('.work-project-img-3').fadeOut(100, function() {
        $(this).attr('srcset', images3[i]);
            $(this).attr('src', images3[i]).fadeIn(100);
       
        });
        i++;
    } 


var images4 = [];
images4[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0ae868049d2cd18c95ec_img-2.png";
images4[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0afa3b2aee4c4b3771cd_img-3.png";
images4[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0b0e97a04482602ef4e0_img-4.png";
images4[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0b23f28e0b1e33d4f5ed_img-5.png";
images4[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0b3f67c85b706567b31c_img-6.png";
images4[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0b52d16ec45d791975af_img-7.png";
images4[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0b6d9b86971d1c63bc97_img-8.png";
    
//image change func Image-1

var interval4;
    var i4 = 0;
$(function () {
$(".work-hover-img-4").mouseover(function () {
interval4 = setInterval(fadeDivs4, 400);
})
$(".work-hover-img-4").mouseout(function () {
$('.work-project-img-4').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0ac39b86979bb063b5c4_img-1.png');
$('.work-project-img-4').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0ac39b86979bb063b5c4_img-1.png');
clearInterval(interval4);
$('.work-project-img-4').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0ac39b86979bb063b5c4_img-1.png');
$('.work-project-img-4').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0ac39b86979bb063b5c4_img-1.png');
}); });
function fadeDivs4() {
i = i < images4.length ? i : 0;
$('.work-project-img-4').fadeOut(100, function() {
//for(i;i<=images4.length; i++){
$(this).attr('srcset', images4[i]);
$(this).attr('src', images4[i]).fadeIn(100);
//}
});  
i++;
}


var images5 = [];
images5[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d764d34bbb21dc215ea0_img-2.png";
images5[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d7763592a82cbc9e4de9_img-3.png";
images5[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d783efbb544326bc822d_img-4.png";
images5[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d7916b0893a3b8bfaf12_img-5.png";
images5[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d79c6233b67514c023ef_img-6.png";
images5[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d7a845bfa47d6483d3e2_img-7.png";
images5[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d7b762ccbbdd03dacd30_img-8.png";
images5[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d7cb8c1961018173e59f_img-9.png";
images5[9] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d7d6353c6fd9fc8002e7_img-10.png";
//image change func Image-2
var interval5;
var i5 = 0;
$(function () {
$(".work-hover-img-5").mouseover(function () {
interval5 = setInterval(fadeDivs5, 400);
})
$(".work-hover-img-5").mouseout(function () {
$('.work-project-img-5').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d74e6233b67ac1c021ac_img-1.png');
$('.work-project-img-5').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d74e6233b67ac1c021ac_img-1.png');
clearInterval(interval5);
$('.work-project-img-5').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d74e6233b67ac1c021ac_img-1.png');
$('.work-project-img-5').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1d74e6233b67ac1c021ac_img-1.png');      
}); });
function fadeDivs5() {
i = i < images5.length ? i : 0;
$('.work-project-img-5').fadeOut(100, function() {
$(this).attr('srcset', images5[i]);
$(this).attr('src', images5[i]).fadeIn(100);
});       
i++;
}   


var images6 = [];
images6[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1da689c69d30b7a494bd0_img-2.png";
images6[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1da77526c27fde92b2c2c_img-3.png";
images6[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1da8445bfa4aa4f83eb65_img-4.png";
images6[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1da97bd16fe831aa20763_img-5.png";
images6[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1daa96e382c9ae525eb21_img-6.png";
images6[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1dac0526c2763812b2d33_img-7.png";
images6[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1dacf08630f72da59cd38_img-8.png";
//image change func Image-3
var interval6;
var i6 = 0;
$(function () {
$(".work-hover-img-6").mouseover(function () {
interval6 = setInterval(fadeDivs6, 400);
})
$(".work-hover-img-6").mouseout(function () {
$('.work-project-img-6').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1da557b1aaff44561c9e7_img-1.png');
$('.work-project-img-6').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1da557b1aaff44561c9e7_img-1.png');
clearInterval(interval6);
$('.work-project-img-6').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1da557b1aaff44561c9e7_img-1.png');
$('.work-project-img-6').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1da557b1aaff44561c9e7_img-1.png');      
});});
function fadeDivs6() {
i = i < images5.length ? i : 0;
$('.work-project-img-6').fadeOut(100, function() {
//for(i;i<=images.length; i++){
$(this).attr('srcset', images6[i]);
$(this).attr('src', images6[i]).fadeIn(100);
});
i++;
}


var images7 = [];
images7[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1dd4b45bfa4413c840d7d_img-2.png";
images7[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1dd576e382cc95a25f1b3_img-3.png";
images7[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1dd6e1f21582b3011bbee_img-4.png";
images7[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1dd7dd1120849c19a5004_img-5.png";
images7[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1dd89707fb687e5a9f2f4_img-6.png";
images7[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1dd98dd9d7d8546e27627_img-7.png";
//image change func Image-4
var interval7;
var i7 = 0;
$(function () {
$(".work-hover-img-7").mouseover(function () {
interval7 = setInterval(fadeDivs7, 400);
})
$(".work-hover-img-7").mouseout(function () {     
$('.work-project-img-7').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1dd20353c6f32ef802955_img-1.png');
$('.work-project-img-7').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1dd20353c6f32ef802955_img-1.png');
clearInterval(interval7);
$('.work-project-img-7').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1dd20353c6f32ef802955_img-1.png');
$('.work-project-img-7').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1dd20353c6f32ef802955_img-1.png');
});});
function fadeDivs7() {
i = i < images7.length ? i : 0;
$('.work-project-img-7').fadeOut(100, function() {
$(this).attr('srcset', images4[i]);
$(this).attr('src', images4[i]).fadeIn(100);
});
i++;
} 

    var interval8,
        images8 = [];
    (images8[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c66ea959b41ee6cd553_img-2.png"),
        (images8[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c8a68049dca048ca5de_img-3.png"),
        (images8[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c9d1cbdac586f96ff69_img-4.png"),
        (images8[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0cb8441bbb6615fc61b6_img-5.png"),
        (images8[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0cdef128456809863927_img-6.png"),
        (images8[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0cf44f614ef9f0ebc228_img-7.png");
    var i4 = 0;
    function fadeDivs8() {
        (i = i < images8.length ? i : 0),
            $(".work-project-img-8").fadeOut(100, function () {
                $(this).attr("srcset", images8[i]), $(this).attr("src", images8[i]).fadeIn(100);
            }),
            i++;
    }
    $(function () {
        $(".work-hover-img-8").mouseover(function () {
            interval8 = setInterval(fadeDivs8, 400);
        }),
            $(".work-hover-img-8").mouseout(function () {
                $(".work-project-img-8").attr("srcset", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c518962db1710fa12af_img-1.png"),
                    $(".project-image-4").attr("src", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c518962db1710fa12af_img-1.png"),
                    clearInterval(interval4),
                    $(".work-project-img-8").attr("srcset", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c518962db1710fa12af_img-1.png"),
                    $(".work-project-img-8").attr("src", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/629f0c518962db1710fa12af_img-1.png");
            });
    });

var images9 = [];
images9[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f2f0cb06f22eabeed458_img-2.png";
images9[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f2f1d3dee079e647cd3b_img-3.png";
images9[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f2f0c05c5ef2202faf4c_img-4.png";
images9[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f2f030273161701e565d_img-5.png";
images9[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f2f13027311b221e565f_img-6.png";
//image change func Image-1
var interval9;
    var i9 = 0;
$(function () {
$(".work-hover-img-9").mouseover(function () {
interval9 = setInterval(fadeDivs9, 400);
})
$(".work-hover-img-9").mouseout(function () {
$('.work-project-img-9').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f2cebb3f76c14d2441c1_Img-1.png');
$('.work-project-img-9').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f2cebb3f76c14d2441c1_Img-1.png');
clearInterval(interval9);
$('.work-project-img-9').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f2cebb3f76c14d2441c1_Img-1.png');
$('.work-project-img-9').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f2cebb3f76c14d2441c1_Img-1.png');
});
});
function fadeDivs9() {
i = i < images9.length ? i : 0;
$('.work-project-img-9').fadeOut(100, function() {
//for(i;i<=images9.length; i++){
$(this).attr('srcset', images9[i]);
$(this).attr('src', images9[i]).fadeIn(100);
//}
});  
i++;
}

var images10 = [];
images10[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4ee86fae8a1fa6d4e33_img-2.png";
images10[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4eee9bcf521084ebc4e_img-3.png";
images10[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4ee0cc80344a9e06b38_img-4.png";
images10[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4f03027316a381e6d8d_img-5.png";
images10[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4f01b526003030680e8_img-6.png";
images10[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4f10b73718c3f334d77_img-7.png";
images10[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4f0c27bb06c60469c18_img-8.png";
images10[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4f20d03dd522ca045f2_img-9.png";
images10[9] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4f251aa5470575d3e7a_img-10.png";
images10[10] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4f177e7d1fcf65b48ed_img-11.png";
images10[11] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4f21ffa4c6cf1cbafd8_img-12.png";
images10[12] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4f3fd5cc4f5ce898d21_img-13.png";
images10[13] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4f40d03dd5152a045f4_img-14.png";
images10[14] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4f47b86eafecc1b5d0c_img-15.png";  
//image change func Image-2
var interval1;
var i10 = 0;
$(function () {
$(".work-hover-img-10").mouseover(function () {
interval10 = setInterval(fadeDivs10, 400);})
$(".work-hover-img-10").mouseout(function () {
$('.work-project-img-10').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4ee13e27c5b8e096f0f_img-1.png');
$('.work-project-img-10').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4ee13e27c5b8e096f0f_img-1.png');
clearInterval(interval10);
$('.work-project-img-10').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4ee13e27c5b8e096f0f_img-1.png');
$('.work-project-img-10').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2f4ee13e27c5b8e096f0f_img-1.png');      
});});
function fadeDivs10() {
i = i < images10.length ? i : 0;
$('.work-project-img-10').fadeOut(100, function() {
$(this).attr('srcset', images10[i]);
$(this).attr('src', images10[i]).fadeIn(100);});       
i++;}   

var images11 = [];
images11[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa7e1ffa4c8b27cbd88f_img-2.png";
images11[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa7fcdb02d20e0ec4071_img-3.png";
images11[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa7e1b5260602906ab22_img-4.png";
images11[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa807cd5f75b45ab3bce_img-5.png";
images11[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa81e9bcf55be14ee5b6_img-6.png";
images11[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa812b518a5900c8248c_img-7.png";
images11[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa827b86ea8b071b83b3_img-8.png";
images11[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa82cdb02dc303ec4079_img-9.png";
images11[9] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa834d9a933518446370_img-10.png";
images11[10] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa7ec00b091a52878b57_img-11.png";
images11[11] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa83fdf9e714a8c813a8_img-12.png";
//image change func Image-3
var interval11;
var i11 = 0;
$(function () {
$(".work-hover-img-11").mouseover(function () {
interval11 = setInterval(fadeDivs11, 400);})
$(".work-hover-img-11").mouseout(function () {
$('.work-project-img-11').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa2d86fae85b286d65fb_img-1.png');
$('.work-project-img-11').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa2d86fae85b286d65fb_img-1.png');
clearInterval(interval11);
$('.work-project-img-11').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa2d86fae85b286d65fb_img-1.png');
$('.work-project-img-11').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fa2d86fae85b286d65fb_img-1.png');      
});});
function fadeDivs11() {
i = i < images11.length ? i : 0;
$('.work-project-img-11').fadeOut(100, function() {
//for(i;i<=images.length; i++){
$(this).attr('srcset', images11[i]);
$(this).attr('src', images11[i]).fadeIn(100);
});i++;
}


var images12 = [];
images12[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fe1ca0e29b1da58a7d78_img-2.png";
images12[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fe1b2b518a7829c84a89_img-3.png";
images12[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fe1c8bea6e03fe8020f3_img-4.png";
images12[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fe1b527b75d8912d0dea_img-5.png";
images12[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fe1c88ea46d14d60e128_img-6.png";
images12[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fe1d5b0c4e735752f338_img-7.png";
images12[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fe1c0b7cb4ed0ef6ccdf_img-8.png";
images12[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fe1d1b526050a706bbc4_img-9.png";
images12[9] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fe1d77e7d1725a5b8490_img-10.png";
images12[10] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fe1d04bb599af4026081_img-11.png";
images12[11] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fe1d8bea6ed6a38020f4_img-12.png";
images12[12] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fe1e0b7371972b33853c_img-13.png";   
    
//image change func Image-4

var interval12;
var i12 = 0;
$(function () {
$(".work-hover-img-12").mouseover(function () {
interval12 = setInterval(fadeDivs12, 400);})
$(".work-hover-img-12").mouseout(function () {
$('.work-project-img-12').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fdc7fdf9e7b9aac83509_img-1.png');
$('.work-project-img-12').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fdc7fdf9e7b9aac83509_img-1.png');
clearInterval(interval12);
$('.work-project-img-12').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fdc7fdf9e7b9aac83509_img-1.png');
$('.work-project-img-12').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2fdc7fdf9e7b9aac83509_img-1.png');
});});
function fadeDivs12() {
i = i < images12.length ? i : 0;
$('.work-project-img-12').fadeOut(100, function() {
$(this).attr('srcset', images12[i]);
$(this).attr('src', images12[i]).fadeIn(100);
});
i++;
} 

var images13 = [];
images13[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a30d7bd3dee0bb6948989d_img-2.png";
images13[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a30d7c4d9a93cbc944df1d_img-3.png";
images13[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a30d7b77e7d185405c1b47_img-4.png";
images13[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a30d7c14b12c394295df63_img-5.png";
images13[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a30d7b5b0c4e17c3534ef1_img-6.png";
images13[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a30d7d43daec8b092fa1fd_img-7.png";
images13[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a30d7db9e9033f3ddbb432_img-8.png";
//image change func Image-5

var interval13;
var i13 = 0;
$(function () {
$(".work-hover-img-13").mouseover(function () {
interval13 = setInterval(fadeDivs13, 400);
})
       $(".work-hover-img-13").mouseout(function () {
     
                $('.work-project-img-13').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a30d57c05c5ea699305fb5_img-1.png');
            $('.work-project-img-13').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a30d57c05c5ea699305fb5_img-1.png');
                clearInterval(interval13);
                $('.work-project-img-13').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a30d57c05c5ea699305fb5_img-1.png');
            $('.work-project-img-13').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a30d57c05c5ea699305fb5_img-1.png');
 
        });
    });

    function fadeDivs13() {
        i = i < images13.length ? i : 0;
        $('.work-project-img-13').fadeOut(100, function() {
        $(this).attr('srcset', images13[i]);
            $(this).attr('src', images13[i]).fadeIn(100);
       
        });
        i++;
    }

var images14 = [];
images14[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a310e10a50233a9165dfea_img-2.png";
images14[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a310e2a0e29bf8bf8af27c_img-3.png";
images14[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a310e168ec2f3fbbf6a070_img-4.png";
images14[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a310e38bea6e1ac4809b2a_img-5.png";
images14[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a310e2fd5cc405868a3969_img-6.png";
images14[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a310e3a92aab49bed9a67f_img-7.png";
images14[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a310e143daec2d872fb26f_img-8.png";
//image change func Image-5

var interval14;
var i14 = 0;
$(function () {
$(".work-hover-img-14").mouseover(function () {
interval14 = setInterval(fadeDivs14, 400);
})
       $(".work-hover-img-14").mouseout(function () {
     
                $('.work-project-img-14').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a310aa37ece3b62ad7359c_img-1.png');
            $('.work-project-img-14').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a310aa37ece3b62ad7359c_img-1.png');
                clearInterval(interval14);
                $('.work-project-img-14').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a310aa37ece3b62ad7359c_img-1.png');
            $('.work-project-img-14').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a310aa37ece3b62ad7359c_img-1.png');
 
        });
    });
  

    function fadeDivs14() {
        i = i < images14.length ? i : 0;
        $('.work-project-img-14').fadeOut(100, function() {
        $(this).attr('srcset', images14[i]);
            $(this).attr('src', images14[i]).fadeIn(100);
       
        });
        i++;
    }

var images15 = [];
images15[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a317e761605d0c9c5f43ee_img-2.png";
images15[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a317682b518af98fc90c11_img-3.png";
images15[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a317668bea6e3be880de9e_img-4.png";
images15[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a31768eb28844134347b9c_img-5.png";
images15[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a317680b7cb470bdf7925c_img-6.png";
images15[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a317693a8eea89f5b7cc93_img-7.png";
images15[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a3176aa2d89947a156d820_img-8.png";
images15[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a317664d9a93fe07451b3d_img-9.png";
images15[9] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a317670b73713c5934458e_img-10.png";
images15[10] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a31767c05c5e6e2c30a414_img-11.png";
//image change func Image-6

var interval15;
var i15 = 0;
$(function () {
$(".work-hover-img-15").mouseover(function () {
interval15 = setInterval(fadeDivs15, 400);
})
       $(".work-hover-img-15").mouseout(function () {
     
                $('.work-project-img-15').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a3171ba0e29b00fc8b1765_img-1.png');
            $('.work-project-img-15').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a3171ba0e29b00fc8b1765_img-1.png');
                clearInterval(interval15);
                $('.work-project-img-15').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a3171ba0e29b00fc8b1765_img-1.png');
            $('.work-project-img-15').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a3171ba0e29b00fc8b1765_img-1.png');
 
        });
    });

    function fadeDivs15() {
        i = i < images15.length ? i : 0;
        $('.work-project-img-15').fadeOut(100, function() {
        $(this).attr('srcset', images15[i]);
            $(this).attr('src', images15[i]).fadeIn(100);
       
        });
        i++;
    }


var images16 = [];
images16[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a200c488d6daa6d6525806_img-2.png";
images16[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a200c488d6daa6d6525806_img-2.png";
images16[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a200ebc1efe204e408673c_img-4.png";
images16[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a200f7761838fa65d45b9a_img-5.png";
images16[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2010bc3e3fed25e189624_img-6.png";
//image change func Image-1

var interval16;
    var i16 = 0;
$(function () {
$(".work-hover-img-16").mouseover(function () {
 interval16 = setInterval(fadeDivs16, 400);
 })
 $(".work-hover-img-16").mouseout(function () {
  $('.work-project-img-16').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a200b4c862cea4bdde22d0_img-1.png');
   $('.work-project-img-16').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a200b4c862cea4bdde22d0_img-1.png');
    clearInterval(interval16);
   $('.work-project-img-16').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a200b4c862cea4bdde22d0_img-1.png');
   $('.work-project-img-16').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a200b4c862cea4bdde22d0_img-1.png');
        });
    });
    function fadeDivs16() {
        i = i < images16.length ? i : 0;
        
        $('.work-project-img-16').fadeOut(100, function() {
        //for(i;i<=images.length; i++){
        $(this).attr('srcset', images16[i]);
            $(this).attr('src', images16[i]).fadeIn(100);
        //}
        });  
        i++;
    }
    

var images17 = [];
images17[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a203167618381958d46834_img-2.png";
images17[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2036d0dec73e67d22e6ff_img-3.png";
images17[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a203ad5acdf6748813f8b7_img-4.png";
images17[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a203c2577e2560fafc2e7a_img-5.png";
images17[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a203d14305159c5e1ca7c8_img-6.png";
//image change func Image-2
var interval17;
    var i17 = 0;
    $(function () {
        $(".work-hover-img-17").mouseover(function () {
            interval17 = setInterval(fadeDivs17, 400);
        })
       $(".work-hover-img-17").mouseout(function () {
                $('.work-project-img-17').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20428ac11346e0f8a3e5d_img-01-min.png');
            $('.work-project-img-17').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20428ac11346e0f8a3e5d_img-01-min.png');
                clearInterval(interval17);
                $('.work-project-img-17').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20428ac11346e0f8a3e5d_img-01-min.png');
            $('.work-project-img-17').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20428ac11346e0f8a3e5d_img-01-min.png');      

        });
    });

    function fadeDivs17() {
        i = i < images17.length ? i : 0;
        $('.work-project-img-17').fadeOut(100, function() {
        $(this).attr('srcset', images17[i]);
            $(this).attr('src', images17[i]).fadeIn(100);
        });       
        i++;
    }   

    var interval18,
        images18 = [];
    (images18[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a205d212975e0d8f3fc4af_img-2.png"),
        (images18[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a205ee022c88c559f19544_img-3.png"),
        (images18[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a205fd7df4593fd2143e50_img-4.png"),
        (images18[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a206096acd4e4e2633ae25_img-5.png"),
        (images18[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a2062bb94409743d084a30_img-6.png"),
        (images18[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a206507df4593bf7143f44_img-7.png"),
        (images18[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20673c3c50fa88f9cd66a_img-8.png");
    var i18 = 0;
    function fadeDivs18() {
        (i = i < images18.length ? i : 0),
            $(".work-project-img-18").fadeOut(100, function () {
                $(this).attr("srcset", images18[i]), $(this).attr("src", images18[i]).fadeIn(100);
            }),
            i++;
    }
    $(function () {
        $(".work-hover-img-18").mouseover(function () {
            interval18 = setInterval(fadeDivs18, 400);
        }),
            $(".work-hover-img-18").mouseout(function () {
                $(".work-project-image-18").attr("srcset", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a205c22dd7b64e688787d8_img-1.png"),
                    $(".work-project-img-18").attr("src", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a205c22dd7b64e688787d8_img-1.png"),
                    clearInterval(interval18),
                    $(".work-project-img-18").attr("srcset", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a205c22dd7b64e688787d8_img-1.png"),
                    $(".work-project-img-18").attr("src", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a205c22dd7b64e688787d8_img-1.png");
            });
    });

    var interval19,
        images19 = [];
    (images19[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20a63ac11346aa98a6abc_img-2.png"),
        (images19[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20a7e88d6da0995529cc4_img-3.png"),
        (images19[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20a8f45b01f6480c57746_img-4.png"),
        (images19[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20aa5ec649282e8612c77_img-5.png"),
        (images19[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20ab6eff9d35bc2397944_img-6.png"),
        (images19[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20ac58d83faf3f1264600_img-7.png"),
        (images19[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20ad919f7c18b80fda94a_img-8.png"),
        (images19[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20aea27b77c8d64cdf82c_img-9.png");
    var i19 = 0;
    function fadeDivs19() {
        (i = i < images19.length ? i : 0),
            $(".work-project-img-19").fadeOut(100, function () {
                $(this).attr("srcset", images19[i]), $(this).attr("src", images19[i]).fadeIn(100);
            }),
            i++;
    }
    $(function () {
        $(".work-hover-img-19").mouseover(function () {
            interval19 = setInterval(fadeDivs19, 400);
        }),
            $(".work-hover-img-19").mouseout(function () {
                $(".work-project-img-19").attr("srcset", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20914e3f284dcc300db07_img-1.png"),
                    $(".work-project-img-19").attr("src", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20914e3f284dcc300db07_img-1.png"),
                    clearInterval(interval19),
                    $(".work-project-img-19").attr("srcset", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20914e3f284dcc300db07_img-1.png"),
                    $(".work-project-img-19").attr("src", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20914e3f284dcc300db07_img-1.png");
            });
    });

    var interval20,
        images20 = [];
    (images20[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20cdf1d30e87cb0ea2e36_img-2.png"),
        (images20[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20cdfb944094238088c0b_img-3.png"),
        (images20[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20ce0e3f28460ce00f193_img-4.png"),
        (images20[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20cdeeff0dc93ce9c5b92_img-5.png"),
        (images20[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20ce112975ed2c03fe788_img-6.png"),
        (images20[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20ce384268a8fa7f1a979_img-7.png"),
        (images20[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20ce32dd7b60b4e87d8bc_img-8.png"),
        (images20[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20ce4531c804d362ca4fd_img-9.png"),
        (images20[9] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20d2cb944093201088e44_img-10.png");
    var i4 = 0;
    function fadeDivs20() {
        (i = i < images20.length ? i : 0),
            $(".work-project-img-20").fadeOut(100, function () {
                $(this).attr("srcset", images20[i]), $(this).attr("src", images20[i]).fadeIn(100);
            }),
            i++;
    }
    $(function () {
        $(".work-hover-img-20").mouseover(function () {
            interval20 = setInterval(fadeDivs20, 400);
        }),
            $(".work-hover-img-20").mouseout(function () {
                $(".work-project-img-20").attr("srcset", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20cc124f7f579a122f44c_img-1.png"),
                    $(".work-project-img-20").attr("src", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20cc124f7f579a122f44c_img-1.png"),
                    clearInterval(interval20),
                    $(".work-project-img-20").attr("srcset", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20cc124f7f579a122f44c_img-1.png"),
                    $(".work-project-img-20").attr("src", "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a20cc124f7f579a122f44c_img-1.png");
            });
    });

var images21 = [];
images21[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a211b5f3f657518a3128eb_img-2.png";
images21[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a211b52dd7b6a82187ef15_img-3.png";
images21[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a211b683240b4f383216fe_img-4.png";
images21[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a211b6577e257033fccb40_img-5.png";
images21[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a211b6232d2833abadce57_img-6.png";
//image change func Image-6 for Kiril-Shimdov

var interval21;
    var i21 = 0;

    $(function () {
        $(".work-hover-img-21").mouseover(function () {
            interval21 = setInterval(fadeDivs21, 400);
        })
       $(".work-hover-img-21").mouseout(function () {
     
                $('.work-project-img-21').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a21198f341d26e6e7c78fa_img-1.png');
            $('.work-project-img-21').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a21198f341d26e6e7c78fa_img-1.png');
                clearInterval(interval21);
                $('.work-project-img-21').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a21198f341d26e6e7c78fa_img-1.png');
            $('.work-project-img-21').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a21198f341d26e6e7c78fa_img-1.png');
 
        });
    });

    function fadeDivs21() {
        i = i < images21.length ? i : 0;
        $('.work-project-img-21').fadeOut(100, function() {
        $(this).attr('srcset', images21[i]);
        $(this).attr('src', images21[i]).fadeIn(100);
       
        });
        i++;
    }

var images22 = [];
images22[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1efd71d30e83d58e8f7e8_img-2.png";
images22[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1efe73f6861ca80292c4b_img-3.png";
images22[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1eff5e3f28475b8001010_img-4.png";
images22[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f007531c800ddd2ba6cc_img-5.png";
images22[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f01590fe3898de36b0b4_img-6.png";
images22[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f026dcbd7322da983f88_img-7.png";
images22[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f035022c881b83f10336_img-8.png";
images22[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f046fec4de0b3004f4a9_img-9.png";
images22[9] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f05677eac78dfa5e20d3_img-10.png";
    
//image change func Image-1

var interval22;
    var i22 = 0;
$(function () {
$(".work-hover-img-22").mouseover(function () {
 interval22 = setInterval(fadeDivs22, 400);
 })
 $(".work-hover-img-22").mouseout(function () {
  $('.work-project-img-22').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1efcaedb4f72a0bd207c6_img-1.png');
   $('.work-project-img-22').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1efcaedb4f72a0bd207c6_img-1.png');
    clearInterval(interval22);
   $('.work-project-img-22').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1efcaedb4f72a0bd207c6_img-1.png');
   $('.work-project-img-22').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1efcaedb4f72a0bd207c6_img-1.png');
        });
    });
    function fadeDivs22() {
        i = i < images22.length ? i : 0;
        
        $('.work-project-img-22').fadeOut(100, function() {
        //for(i;i<=images22.length; i++){
        $(this).attr('srcset', images22[i]);
            $(this).attr('src', images22[i]).fadeIn(100);
        //}
        });  
        i++;
    }
    

var images23 = [];
images23[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f2c974b1e2033c33bc27_img-2.png";
images23[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f2daf341d26be57b8fab_img-3.png";
images23[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f2e9c3e3fe4cbb1831f1_img-4.png";
images23[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f2f8f341d210d57b9012_img-5.png";
images23[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f30532590a1a8842b7db_img-6.png";
images23[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f314232d285659ace62a_img-7.png";
images23[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f3265acdf67bf9138114_img-8.png";
images23[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f3350fcd5b58142b460a_img-9.png";    
//image change func Image-2
var interval23;
    var i23 = 0;
    $(function () {
        $(".work-hover-img-23").mouseover(function () {
            interval23 = setInterval(fadeDivs23, 400);
        })
       $(".work-hover-img-23").mouseout(function () {
                $('.work-project-img-23').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f2bb7df459429913ad27_img-1.png');
            $('.work-project-img-23').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f2bb7df459429913ad27_img-1.png');
                clearInterval(interval23);
                $('.work-project-img-23').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f2bb7df459429913ad27_img-1.png');
            $('.work-project-img-23').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f2bb7df459429913ad27_img-1.png');      

        });
    });

    function fadeDivs23() {
        i = i < images23.length ? i : 0;
        $('.work-project-img-23').fadeOut(100, function() {
        $(this).attr('srcset', images23[i]);
            $(this).attr('src', images23[i]).fadeIn(100);
        });       
        i++;
    }   

var images24 = [];
images24[1] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f7b441be5d5245cf91af_img-2.png";
images24[2] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f7c2fb1fbf0e4a9a193a_img-3.png";
images24[3] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f7d655ba47220e20c164_img-4.png";
images24[4] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f7e6e3f284575a0045c5_img-5.png";
images24[5] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f80684268aef65f109ba_img-6.png";
images24[6] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f81932590a19f542e2a4_img-7.png";
images24[7] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f828c3e3fe1f8d186329_img-8.png";
images24[8] = "https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f8388d83fa569625bf47_img-9.png";
//image change func Image-3
var interval24;
    var i24 = 0;
    $(function () {
        $(".work-hover-img-24").mouseover(function () {
            interval24 = setInterval(fadeDivs24, 400);
        })
       $(".work-hover-img-24").mouseout(function () {
     
                $('.work-project-img-24').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f7a2cff5a313b4968022_img-1.png');
            $('.work-project-img-24').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f7a2cff5a313b4968022_img-1.png');
                clearInterval(interval24);
                $('.project-image-24').attr('srcset','https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f7a2cff5a313b4968022_img-1.png');
            $('.project-image-24').attr('src', 'https://uploads-ssl.webflow.com/627ffc6b88d0191f66121dde/62a1f7a2cff5a313b4968022_img-1.png');      

        });
    });

    function fadeDivs24() {
        i = i < images24.length ? i : 0;
        
        $('.work-project-img-24').fadeOut(100, function() {
        //for(i;i<=images.length; i++){
        $(this).attr('srcset', images24[i]);
            $(this).attr('src', images24[i]).fadeIn(100);
        });
        i++;
    }
    
 

       