//Fix Breezi bug when page is resized
$(document).ready(function() {
    $(window).resize(function() {
        if (/Mobi/.test(navigator.userAgent) == false && $(window).width() < 960) {
            $("body").css("position", "absolute");
        }
        if (/Mobi/.test(navigator.userAgent) == false && $(window).width() > 960) {
            $("body").css("position", "static");
        }
    });
});

//Change Font
$(document).ready(function() {
    $("div, p, h2").each(function(i, elem) {
        if (
            $(elem)
            .css("font-family")
            .match(/Cabin Condensed/)
        ) {
            $(elem).css("font-family", "gh_mod_displayregular");
        }
    });
});

$(document).ready(function() {
    $("div").each(function(i, elem) {
        if (
            $(elem)
            .css("font-family")
            .match(/Architects Daughter/)
        ) {
            $(elem).css("font-family", "gh_plainregular");
        }
    });
});

//-------------------- Background Video -----------------------------------------

$(window).load(function() {
    // No video
    if (
        window.top.location.pathname !== "/" ||
        window.top.location.href == "https://bellinghambread.com/" ||
        window.top.location.href == "http://rvabread.com/" ||
        window.top.location.href == "https://greatharvestidahofalls.com/" ||
        window.top.location.href == "http://ghgreenwoodvillage.com/" ||
        window.top.location.href == "https://greatharvestua.com/" ||
        window.top.location.href == "http://minnetonka.greatharvestbread.com/"||
        window.top.location.href == "https://greatharvestaustin.com//" ||
        window.top.location.href == "http://greatharvestredbank.com/"||
        window.top.location.href == "http://greatharvesttyler.com/" ||
        window.top.location.href == "http://missoula.greatharvestbread.com/" ||
        window.top.location.href == "http://ghmeridian.com/" ||
        window.top.location.href == "http://greatharvestgreenwoodvillage.com/"
    ) {
        return;
    }
    // Old sites
    $("body > div > div > div:nth-child(2)").css("position", "relative");
    // New sites
    $("#container_08771521029743872").css("position", "relative");
    $("#container_09362006717912295").css("position", "relative");

    $("body > div > div > div:nth-child(2) > .container").css(
        "padding-bottom",
        "80px"
    );
    var video_size_initial = $(window).width();

    // New Consumer video
    if (
        window.top.location.href == "http://greatharvestburke.com/" ||
        (window.top.location.href == "http://bestbreadinkc.com/" &&
            video_size_initial > 1300)
    ) {
        console.log("if width is MORE than 1300 set width '100%'");
        console.log(video_size_initial);
        $("body > div > div > div:nth-child(2)").prepend(
            '<div style="position: absolute; width:100%; height:100%; overflow:hidden;"><video muted autoplay="1" class="video_gh" loop="1" style="position: absolute; width: 100%;"><source src="http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/GreatHarvestConsumer2017.mp4" type="video/mp4"></video></div>'
        );
        return;
    }
    if (
        window.top.location.href == "http://greatharvestburke.com/" ||
        window.top.location.href == "http://bestbreadinkc.com/"
    ) {
        console.log("if width is LESS than 1300 set width 'auto' ");
        console.log(video_size_initial);
        $("body > div > div > div:nth-child(2)").prepend(
            '<div style="position: absolute; width:100%; height:100%; overflow:hidden;"><video muted autoplay="1" class="video_gh" loop="1" style="position: absolute; width: auto;"><source src="http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/GreatHarvestConsumer2017.mp4" type="video/mp4"></video></div>'
        );
        return;
    }

    // Default Video
    if (video_size_initial > 1300) {
        console.log("if width is MORE than 1300 set width '100%'");
        console.log(video_size_initial);
        $("body > div > div > div:nth-child(2)").prepend(
            '<div style="position: absolute; width:100%; height:100%; overflow:hidden;"><video muted autoplay="1" class="video_gh" loop="1" style="position: absolute; width: 100%;"><source src="//cdn2.hubspot.net/hub/53298/file-1261341077-mp4/site_video/great-harvest-home-video.mp4?t=1415374645566" type="video/mp4"></video></div>'
        );
        $("#container_08771521029743872").prepend(
            '<div style="position: absolute; width:100%; height:100%; overflow:hidden;"><video muted autoplay="1" class="video_gh" loop="1" style="position: absolute; width: 100%;"><source src="//cdn2.hubspot.net/hub/53298/file-1261341077-mp4/site_video/great-harvest-home-video.mp4?t=1415374645566" type="video/mp4"></video></div>'
        );
    } else {
        console.log("if width is LESS than 1300 set width 'auto' ");
        console.log(video_size_initial);
        $("body > div > div > div:nth-child(2)").prepend(
            '<div style="position: absolute; width:100%; height:100%; overflow:hidden;"><video muted autoplay="1" class="video_gh" loop="1" style="position: absolute; width: auto;"><source src="//cdn2.hubspot.net/hub/53298/file-1261341077-mp4/site_video/great-harvest-home-video.mp4?t=1415374645566" type="video/mp4"></video></div>'
        );
        $("#container_08771521029743872").prepend(
            '<div style="position: absolute; width:100%; height:100%; overflow:hidden;"><video muted autoplay="1" class="video_gh" loop="1" style="position: absolute; width: 100%;"><source src="//cdn2.hubspot.net/hub/53298/file-1261341077-mp4/site_video/great-harvest-home-video.mp4?t=1415374645566" type="video/mp4"></video></div>'
        );
    }
});
//turn on/off width in order to display the video correctly in different sizes
$(document).ready(function() {
    $(window).resize(function() {
        var video_size = $(window).width();
        console.log(video_size);
        if (video_size < 1300) {
            console.log("turn off width");
            $(".video_gh").css("width", "auto");
        } else {
            console.log("turn on width");
            $(".video_gh").css("width", "100%");
        }
    });
});

//-------------------- END Background Video -----------------------------------------

//Home sandwich second fixed banner
// $(document).ready(function() {
//   if(window.top.location.pathname === '/homepage-new') {
//     $('#container_05355240816425006').css({'background-position' : 'right center', 'background-repeat' : 'no-repeat', 'background-size' : 'cover', 'background-attachment' : 'fixed'});
//   }

// });

// $(document).ready(function() {
//     // $(".breezi-social-icons ul.candy > li > a").attr("src","//s3.amazonaws.com/assets0.empowerkit.com/great-harvest/ek-new-social-icons.png")
//     // $('.breezi-app .breezi-app-0edd356855c44fb18868f05d .breezi-social-icons ul.candy > li > a').css({'background' : 'transparent url("//s3.amazonaws.com/assets0.empowerkit.com/great-harvest/ek-new-social-icons.png") no-repeat'});
//     // console.log("Social icons image replacement working");
// });

// // Load background image for mobile on homepage
// $(document).ready(function() {
//     if (window.top.location.pathname === '/homepage-new')  {
//         if (/Mobi/.test(navigator.userAgent) == true) {
//             $("#container_08771521029743872").css({
//                 'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/home_background_not_video.png") no-repeat',
//                 'background-size': 'auto 120%',
//                 'position': 'relative',
//             });
//         };

//     };
// });

// //Apply Mobile Backgrounds
// $(document).ready(function() { // start document is ready
//     if (/Mobi/.test(navigator.userAgent)) { //start if mobile
//         setTimeout(function(){  //start inject code after 500 ml
//                     // START OLD SKIN
//                     //home
//                     if(window.location.pathname === '/'){
//                         $("#container_0242174101899862, #container_05804991852492094").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/homepage_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                     //bread and goodies
//                     if(window.location.pathname === '/bread-and-goodies'){
//                         $("#container_014194033219267288, #container_0242174101899862").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/bread_and_goodies_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                      //about our bread
//                     if(window.location.pathname === '/about-our-bread'){
//                         $("#container_014194033219267288, #container_0242174101899862, #container_97678f43b1604a9985de43f09379f7b8, #container_05804991852492094").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/our_bread_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                      //baking mixes
//                     if(window.location.pathname === '/fresh-ground-mixes'){
//                         $("#container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/baking_mixes_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                          //cafe
//                     if(window.location.pathname === '/cafe'){
//                         $("#container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/cafe_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                          //sandwiches
//                     if(window.location.pathname === '/sandwiches'){
//                         $("#container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/sandwiches_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                      //salads
//                     if(window.location.pathname === '/salads'){
//                         $("#container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/salads_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                       //soup
//                     if(window.location.pathname === '/soup'){
//                         $("#container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/soup_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                       //coffee-and-espresso
//                     if(window.location.pathname === '/coffee-and-espresso'){
//                         $("#container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/coffe_espresso_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                      //gifts
//                     if(window.location.pathname === '/gifts'){
//                         $("#container_014194033219267288, #container_0242174101899862").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/gifts_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                      //contact
//                     if(window.location.pathname === '/contact-us'){
//                         $("#container_014194033219267288, #container_0242174101899862").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/contact_us_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                      // nutrition
//                      if(window.location.pathname === '/nutrition'){
//                         $("#container_0242174101899862, #container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/contact_us_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                      //catering
//                     if(window.location.pathname === '/catering'){
//                         $("#container_0242174101899862, #container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/salads_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                      //recipes
//                     if(window.location.pathname === '/recipes'){
//                         $("#container_0242174101899862, #container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/our_bread_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                      //our bakery
//                     if(window.location.pathname === '/our-bakery'){
//                         $("#container_0242174101899862, #container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/bread_and_goodies_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };

//                     if(window.location.pathname === '/breakfast'){
//                         $("#container_0242174101899862, #container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/cafe_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                      //lunch
//                      if(isMobile) {
//                       if(window.location.pathname === '/lunch-dinner'){
//                         $("#container_0242174101899862, #container_014194033219267288").css({
//                           'background-image' : 'url("/attachments/site_backgrounds/e014ee6c5ed814579f90fc64/background_image/TurkeyandSwiss_blend_ffffff_opacity_100.blend=ffffff&opacity=100.jpg")',
//                           'background-size' : 'cover',
//                           'background-repeat' : 'no-repeat center',
//                           'background-attachment' : 'scroll',
//                           'background-position' : '50% 50%',
//                           });

//                       };
//                     }
//                      //community involment
//                     if(window.location.pathname === '/community-involvement'){
//                         $("#container_0242174101899862, #container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/contact_us_background.jpg") no-repeat',
//                         });
//                      };
//                      //donations
//                     if(window.location.pathname === '/donations'){
//                         $("body").css({
//                             'background-image' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/gifts_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                         });
//                      };
//                      //jobs
//                     if(window.location.pathname === '/jobs'){
//                         $("#container_0242174101899862, #container_014194033219267288").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/background_images_mobile/homepage_background.jpg") no-repeat',
//                             'background-size' : '100%',
//                             'background-position' : '50% 50%',
//                         });
//                      };
//                      //END OLD SKIN

//                      //FOR NEW SKIN
//                      //home-new
//                     if(window.location.pathname === '/homepage-new'){
//                         $("#container_05355240816425006").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/shop.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center'
//                         });
//                      };

//                     //  //Lunch and Dinner
//                     if(window.location.pathname === '/lunch-dinner-new'){
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/lunch-dinner.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',
//                           });
//                      };

//                        //Shop
//                         if(window.location.pathname === '/shop-new'){
//                             $("#container_05355240816425006, #container_08771521029743872").css({
//                                 'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/shop.jpg") no-repeat',
//                                 'background-size': 'auto 120%',
//                                 'padding-top': '42.9px',
//                                 'padding-bottom': '42.9px',
//                                 'background-position': 'right center',

//                             });
//                          };

//                        //Blog
//                         if(window.location.pathname === '/blog-new'){
//                             $("#container_05355240816425006, #container_08771521029743872").css({
//                                 'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/blog.jpg") no-repeat',
//                                 'background-size': 'auto 120%',
//                                 'padding-top': '42.9px',
//                                 'padding-bottom': '42.9px',
//                                 'background-position': 'right center',

//                             });
//                          };

//                     //recipes
//                     if(window.location.pathname === '/recipes-new'){
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/recipes.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',

//                         });
//                      };

//                     //Contact Us
//                     if(window.location.pathname === '/contact-us-new'){
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/contact.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',

//                         });
//                      };

//                     // //Breakfast
//                     if(window.location.pathname === '/breakfast-new'){
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/breakfast.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',
//                         });
//                      };

//                     //Bread and Goodies
//                     if(window.location.pathname === '/bread-and-goodies-new'){
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/breadandgoodies.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',
//                         });
//                      };

//                      //Our Bakery
//                     if(window.location.pathname === '/our-bakery-new'){
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/ourbakery.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',

//                         });
//                      };

//                     //Jobs
//                     if(window.location.pathname === '/jobs-new'){
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/jobs.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',

//                         });
//                      };

//                     //Community Events
//                     if(window.location.pathname === '/community-events-new'){
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/community.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',

//                         });
//                      };

//                     //Gifts
//                     if(window.location.pathname === '/gifts-new'){
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/gifts.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',

//                         });
//                      };

//                     //Nutrition
//                     if(window.location.pathname === '/nutrition-new'){
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/nutrition.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',

//                         });
//                      };

//                     //Catering
//                     if(window.location.pathname === '/catering-new'){
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/catering.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',

//                         });
//                      };

//                     //About our Bread
//                     if(window.location.pathname === '/about-our-bread-new'){
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/aboutourbread.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',

//                         });
//                      };

//                      var url = location.pathname;
//                      //Blogposts
//                         if(url.indexOf('posts') > -1){
//                             $("#container_05355240816425006, #container_08771521029743872").css({
//                                 'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/blog.jpg") no-repeat',
//                                 'background-size': 'auto 120%',
//                                 'padding-top': '42.9px',
//                                 'padding-bottom': '42.9px',
//                                 'background-position': 'right center',

//                             });
//                          };

//                      //Shop items
//                     if(url.indexOf('our-shop') > -1) {
//                         $("#container_05355240816425006, #container_08771521029743872").css({
//                             'background' : 'url("http://assets0.empowerkit.com.s3.amazonaws.com/great-harvest/mobile_images/bgs/shop.jpg") no-repeat',
//                             'background-size': 'auto 120%',
//                             'padding-top': '42.9px',
//                             'padding-bottom': '42.9px',
//                             'background-position': 'right center',

//                         });
//                      };
//                     //END NEW SKIN
//         }, 500); //end inject code after 500 ml
//      }; //end if mobile
// }); //end document is ready

//Fix Mobile footer
$(".ui-btn-text").css("white-space", "normal");

/*!
 * SlickNav Responsive Mobile Menu v1.0.10
 * (c) 2016 Josh Cope
 * licensed under MIT
 */
(function($, document, window) {
    var // default settings object.
        defaults = {
            label: "MENU",
            duplicate: true,
            duration: 200,
            easingOpen: "swing",
            easingClose: "swing",
            closedSymbol: "&#9658;",
            openedSymbol: "&#9660;",
            prependTo: "body",
            appendTo: "",
            parentTag: "a",
            closeOnClick: false,
            allowParentLinks: false,
            nestedParentLinks: true,
            showChildren: false,
            removeIds: true,
            removeClasses: false,
            removeStyles: false,
            brand: "",
            animations: "jquery",
            init: function() {},
            beforeOpen: function() {},
            beforeClose: function() {},
            afterOpen: function() {},
            afterClose: function() {}
        },
        mobileMenu = "slicknav",
        prefix = "slicknav",
        Keyboard = {
            DOWN: 40,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        };

    function Plugin(element, options) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend({}, defaults, options);

        // Don't remove IDs by default if duplicate is false
        if (!this.settings.duplicate && !options.hasOwnProperty("removeIds")) {
            this.settings.removeIds = false;
        }

        this._defaults = defaults;
        this._name = mobileMenu;

        this.init();
    }

    Plugin.prototype.init = function() {
        var $this = this,
            menu = $(this.element),
            settings = this.settings,
            iconClass,
            menuBar;

        // clone menu if needed
        if (settings.duplicate) {
            $this.mobileNav = menu.clone();
        } else {
            $this.mobileNav = menu;
        }

        // remove IDs if set
        if (settings.removeIds) {
            $this.mobileNav.removeAttr("id");
            $this.mobileNav.find("*").each(function(i, e) {
                $(e).removeAttr("id");
            });
        }

        // remove classes if set
        if (settings.removeClasses) {
            $this.mobileNav.removeAttr("class");
            $this.mobileNav.find("*").each(function(i, e) {
                $(e).removeAttr("class");
            });
        }

        // remove styles if set
        if (settings.removeStyles) {
            $this.mobileNav.removeAttr("style");
            $this.mobileNav.find("*").each(function(i, e) {
                $(e).removeAttr("style");
            });
        }

        // styling class for the button
        iconClass = prefix + "_icon";

        if (settings.label === "") {
            iconClass += " " + prefix + "_no-text";
        }

        if (settings.parentTag == "a") {
            settings.parentTag = 'a href="#"';
        }

        // create menu bar
        $this.mobileNav.attr("class", prefix + "_nav");
        menuBar = $('<div class="' + prefix + '_menu"></div>');
        if (settings.brand !== "") {
            var brand = $(
                '<a data-ajax="false" href="/"><div class="' +
                prefix +
                '_brand">' +
                settings.brand +
                "</div></a>"
            );
            $(menuBar).append(brand);
        }
        $this.btn = $(
            [
                "<" +
                settings.parentTag +
                ' aria-haspopup="true" role="button" tabindex="0" class="' +
                prefix +
                "_btn " +
                prefix +
                '_collapsed">',
                '<span class="' + prefix + '_menutxt">' + settings.label + "</span>",
                '<span class="' + iconClass + '">',
                '<span class="' + prefix + '_icon-bar"></span>',
                '<span class="' + prefix + '_icon-bar"></span>',
                '<span class="' + prefix + '_icon-bar"></span>',
                "</span>",
                "</" + settings.parentTag + ">"
            ].join("")
        );
        $(menuBar).append($this.btn);
        if (settings.appendTo !== "") {
            $(settings.appendTo).append(menuBar);
        } else {
            $(settings.prependTo).prepend(menuBar);
        }
        menuBar.append($this.mobileNav);

        // iterate over structure adding additional structure
        var items = $this.mobileNav.find("li");
        $(items).each(function() {
            var item = $(this),
                data = {};
            data.children = item.children("ul").attr("role", "menu");
            item.data("menu", data);

            // if a list item has a nested menu
            if (data.children.length > 0) {
                // select all text before the child menu
                // check for anchors

                var a = item.contents(),
                    containsAnchor = false,
                    nodes = [];

                $(a).each(function() {
                    if (!$(this).is("ul")) {
                        nodes.push(this);
                    } else {
                        return false;
                    }

                    if ($(this).is("a")) {
                        containsAnchor = true;
                    }
                });

                var wrapElement = $(
                    "<" +
                    settings.parentTag +
                    ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' +
                    prefix +
                    '_item"/>'
                );

                // wrap item text with tag and add classes unless we are separating parent links
                if (!settings.allowParentLinks ||
                    settings.nestedParentLinks ||
                    !containsAnchor
                ) {
                    var $wrap = $(nodes)
                        .wrapAll(wrapElement)
                        .parent();
                    $wrap.addClass(prefix + "_row");
                } else
                    $(nodes)
                    .wrapAll(
                        '<span class="' + prefix + "_parent-link " + prefix + '_row"/>'
                    )
                    .parent();

                if (!settings.showChildren) {
                    item.addClass(prefix + "_collapsed");
                } else {
                    item.addClass(prefix + "_open");
                }

                item.addClass(prefix + "_parent");

                // create parent arrow. wrap with link if parent links and separating
                var arrowElement = $(
                    '<span class="' +
                    prefix +
                    '_arrow">' +
                    (settings.showChildren ?
                        settings.openedSymbol :
                        settings.closedSymbol) +
                    "</span>"
                );

                if (
                    settings.allowParentLinks &&
                    !settings.nestedParentLinks &&
                    containsAnchor
                )
                    arrowElement = arrowElement.wrap(wrapElement).parent();

                //append arrow
                $(nodes)
                    .last()
                    .after(arrowElement);
            } else if (item.children().length === 0) {
                item.addClass(prefix + "_txtnode");
            }

            // accessibility for links
            item
                .children("a")
                .attr("role", "menuitem")
                .click(function(event) {
                    //Ensure that it's not a parent
                    if (
                        settings.closeOnClick &&
                        !$(event.target)
                        .parent()
                        .closest("li")
                        .hasClass(prefix + "_parent")
                    ) {
                        //Emulate menu close if set
                        $($this.btn).click();
                    }
                });

            //also close on click if parent links are set
            if (settings.closeOnClick && settings.allowParentLinks) {
                item
                    .children("a")
                    .children("a")
                    .click(function(event) {
                        //Emulate menu close
                        $($this.btn).click();
                    });

                item
                    .find("." + prefix + "_parent-link a:not(." + prefix + "_item)")
                    .click(function(event) {
                        //Emulate menu close
                        $($this.btn).click();
                    });
            }
        });

        // structure is in place, now hide appropriate items
        $(items).each(function() {
            var data = $(this).data("menu");
            if (!settings.showChildren) {
                $this._visibilityToggle(data.children, null, false, null, true);
            }
        });

        // finally toggle entire menu
        $this._visibilityToggle($this.mobileNav, null, false, "init", true);

        // accessibility for menu button
        $this.mobileNav.attr("role", "menu");

        // outline prevention when using mouse
        $(document).mousedown(function() {
            $this._outlines(false);
        });

        $(document).keyup(function() {
            $this._outlines(true);
        });

        // menu button click
        $($this.btn).click(function(e) {
            e.preventDefault();
            $this._menuToggle();
        });

        // click on menu parent
        $this.mobileNav.on("click", "." + prefix + "_item", function(e) {
            e.preventDefault();
            $this._itemClick($(this));
        });

        // check for keyboard events on menu button and menu parents
        $($this.btn).keydown(function(e) {
            var ev = e || event;

            switch (ev.keyCode) {
                case Keyboard.ENTER:
                case Keyboard.SPACE:
                case Keyboard.DOWN:
                    e.preventDefault();
                    if (
                        ev.keyCode !== Keyboard.DOWN ||
                        !$($this.btn).hasClass(prefix + "_open")
                    ) {
                        $this._menuToggle();
                    }

                    $($this.btn)
                        .next()
                        .find('[role="menuitem"]')
                        .first()
                        .focus();
                    break;
            }
        });

        $this.mobileNav.on("keydown", "." + prefix + "_item", function(e) {
            var ev = e || event;

            switch (ev.keyCode) {
                case Keyboard.ENTER:
                    e.preventDefault();
                    $this._itemClick($(e.target));
                    break;
                case Keyboard.RIGHT:
                    e.preventDefault();
                    if (
                        $(e.target)
                        .parent()
                        .hasClass(prefix + "_collapsed")
                    ) {
                        $this._itemClick($(e.target));
                    }
                    $(e.target)
                        .next()
                        .find('[role="menuitem"]')
                        .first()
                        .focus();
                    break;
            }
        });

        $this.mobileNav.on("keydown", '[role="menuitem"]', function(e) {
            var ev = e || event;

            switch (ev.keyCode) {
                case Keyboard.DOWN:
                    e.preventDefault();
                    var allItems = $(e.target)
                        .parent()
                        .parent()
                        .children()
                        .children('[role="menuitem"]:visible');
                    var idx = allItems.index(e.target);
                    var nextIdx = idx + 1;
                    if (allItems.length <= nextIdx) {
                        nextIdx = 0;
                    }
                    var next = allItems.eq(nextIdx);
                    next.focus();
                    break;
                case Keyboard.UP:
                    e.preventDefault();
                    var allItems = $(e.target)
                        .parent()
                        .parent()
                        .children()
                        .children('[role="menuitem"]:visible');
                    var idx = allItems.index(e.target);
                    var next = allItems.eq(idx - 1);
                    next.focus();
                    break;
                case Keyboard.LEFT:
                    e.preventDefault();
                    if (
                        $(e.target)
                        .parent()
                        .parent()
                        .parent()
                        .hasClass(prefix + "_open")
                    ) {
                        var parent = $(e.target)
                            .parent()
                            .parent()
                            .prev();
                        parent.focus();
                        $this._itemClick(parent);
                    } else if (
                        $(e.target)
                        .parent()
                        .parent()
                        .hasClass(prefix + "_nav")
                    ) {
                        $this._menuToggle();
                        $($this.btn).focus();
                    }
                    break;
                case Keyboard.ESCAPE:
                    e.preventDefault();
                    $this._menuToggle();
                    $($this.btn).focus();
                    break;
            }
        });

        // allow links clickable within parent tags if set
        if (settings.allowParentLinks && settings.nestedParentLinks) {
            $("." + prefix + "_item a").click(function(e) {
                e.stopImmediatePropagation();
            });
        }
    };

    //toggle menu
    Plugin.prototype._menuToggle = function(el) {
        var $this = this;
        var btn = $this.btn;
        var mobileNav = $this.mobileNav;

        if (btn.hasClass(prefix + "_collapsed")) {
            btn.removeClass(prefix + "_collapsed");
            btn.addClass(prefix + "_open");
        } else {
            btn.removeClass(prefix + "_open");
            btn.addClass(prefix + "_collapsed");
        }
        btn.addClass(prefix + "_animating");
        $this._visibilityToggle(mobileNav, btn.parent(), true, btn);
    };

    // toggle clicked items
    Plugin.prototype._itemClick = function(el) {
        var $this = this;
        var settings = $this.settings;
        var data = el.data("menu");
        if (!data) {
            data = {};
            data.arrow = el.children("." + prefix + "_arrow");
            data.ul = el.next("ul");
            data.parent = el.parent();
            //Separated parent link structure
            if (data.parent.hasClass(prefix + "_parent-link")) {
                data.parent = el.parent().parent();
                data.ul = el.parent().next("ul");
            }
            el.data("menu", data);
        }
        if (data.parent.hasClass(prefix + "_collapsed")) {
            data.arrow.html(settings.openedSymbol);
            data.parent.removeClass(prefix + "_collapsed");
            data.parent.addClass(prefix + "_open");
            data.parent.addClass(prefix + "_animating");
            $this._visibilityToggle(data.ul, data.parent, true, el);
        } else {
            data.arrow.html(settings.closedSymbol);
            data.parent.addClass(prefix + "_collapsed");
            data.parent.removeClass(prefix + "_open");
            data.parent.addClass(prefix + "_animating");
            $this._visibilityToggle(data.ul, data.parent, true, el);
        }
    };

    // toggle actual visibility and accessibility tags
    Plugin.prototype._visibilityToggle = function(
        el,
        parent,
        animate,
        trigger,
        init
    ) {
        var $this = this;
        var settings = $this.settings;
        var items = $this._getActionItems(el);
        var duration = 0;
        if (animate) {
            duration = settings.duration;
        }

        function afterOpen(trigger, parent) {
            $(trigger).removeClass(prefix + "_animating");
            $(parent).removeClass(prefix + "_animating");

            //Fire afterOpen callback
            if (!init) {
                settings.afterOpen(trigger);
            }
        }

        function afterClose(trigger, parent) {
            el.attr("aria-hidden", "true");
            items.attr("tabindex", "-1");
            $this._setVisAttr(el, true);
            el.hide(); //jQuery 1.7 bug fix

            $(trigger).removeClass(prefix + "_animating");
            $(parent).removeClass(prefix + "_animating");

            //Fire init or afterClose callback
            if (!init) {
                settings.afterClose(trigger);
            } else if (trigger == "init") {
                settings.init();
            }
        }

        if (el.hasClass(prefix + "_hidden")) {
            el.removeClass(prefix + "_hidden");
            //Fire beforeOpen callback
            if (!init) {
                settings.beforeOpen(trigger);
            }
            if (settings.animations === "jquery") {
                el.stop(true, true).slideDown(
                    duration,
                    settings.easingOpen,
                    function() {
                        afterOpen(trigger, parent);
                    }
                );
            } else if (settings.animations === "velocity") {
                el.velocity("finish").velocity("slideDown", {
                    duration: duration,
                    easing: settings.easingOpen,
                    complete: function() {
                        afterOpen(trigger, parent);
                    }
                });
            }
            el.attr("aria-hidden", "false");
            items.attr("tabindex", "0");
            $this._setVisAttr(el, false);
        } else {
            el.addClass(prefix + "_hidden");

            //Fire init or beforeClose callback
            if (!init) {
                settings.beforeClose(trigger);
            }

            if (settings.animations === "jquery") {
                el.stop(true, true).slideUp(
                    duration,
                    this.settings.easingClose,
                    function() {
                        afterClose(trigger, parent);
                    }
                );
            } else if (settings.animations === "velocity") {
                el.velocity("finish").velocity("slideUp", {
                    duration: duration,
                    easing: settings.easingClose,
                    complete: function() {
                        afterClose(trigger, parent);
                    }
                });
            }
        }
    };

    // set attributes of element and children based on visibility
    Plugin.prototype._setVisAttr = function(el, hidden) {
        var $this = this;

        // select all parents that aren't hidden
        var nonHidden = el
            .children("li")
            .children("ul")
            .not("." + prefix + "_hidden");

        // iterate over all items setting appropriate tags
        if (!hidden) {
            nonHidden.each(function() {
                var ul = $(this);
                ul.attr("aria-hidden", "false");
                var items = $this._getActionItems(ul);
                items.attr("tabindex", "0");
                $this._setVisAttr(ul, hidden);
            });
        } else {
            nonHidden.each(function() {
                var ul = $(this);
                ul.attr("aria-hidden", "true");
                var items = $this._getActionItems(ul);
                items.attr("tabindex", "-1");
                $this._setVisAttr(ul, hidden);
            });
        }
    };

    // get all 1st level items that are clickable
    Plugin.prototype._getActionItems = function(el) {
        var data = el.data("menu");
        if (!data) {
            data = {};
            var items = el.children("li");
            var anchors = items.find("a");
            data.links = anchors.add(items.find("." + prefix + "_item"));
            el.data("menu", data);
        }
        return data.links;
    };

    Plugin.prototype._outlines = function(state) {
        if (!state) {
            $("." + prefix + "_item, ." + prefix + "_btn").css("outline", "none");
        } else {
            $("." + prefix + "_item, ." + prefix + "_btn").css("outline", "");
        }
    };

    Plugin.prototype.toggle = function() {
        var $this = this;
        $this._menuToggle();
    };

    Plugin.prototype.open = function() {
        var $this = this;
        if ($this.btn.hasClass(prefix + "_collapsed")) {
            $this._menuToggle();
        }
    };

    Plugin.prototype.close = function() {
        var $this = this;
        if ($this.btn.hasClass(prefix + "_open")) {
            $this._menuToggle();
        }
    };

    $.fn[mobileMenu] = function(options) {
        var args = arguments;

        // Is the first parameter an object (options), or was omitted, instantiate a new instance
        if (options === undefined || typeof options === "object") {
            return this.each(function() {
                // Only allow the plugin to be instantiated once due to methods
                if (!$.data(this, "plugin_" + mobileMenu)) {
                    // if it has no instance, create a new one, pass options to our plugin constructor,
                    // and store the plugin instance in the elements jQuery data object.
                    $.data(this, "plugin_" + mobileMenu, new Plugin(this, options));
                }
            });

            // If is a string and doesn't start with an underscore or 'init' function, treat this as a call to a public method.
        } else if (
            typeof options === "string" &&
            options[0] !== "_" &&
            options !== "init"
        ) {
            // Cache the method call to make it possible to return a value
            var returns;

            this.each(function() {
                var instance = $.data(this, "plugin_" + mobileMenu);

                // Tests that there's already a plugin-instance and checks that the requested public method exists
                if (
                    instance instanceof Plugin &&
                    typeof instance[options] === "function"
                ) {
                    // Call the method of our plugin instance, and pass it the supplied arguments.
                    returns = instance[options].apply(
                        instance,
                        Array.prototype.slice.call(args, 1)
                    );
                }
            });

            // If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;
        }
    };
})(jQuery, document, window);

var windowsize = $(window).width();
if (windowsize < 550) {
    var setupHamburgerMenu = function() {
        console.log("hamburger menu test");
        $("<div id='hamburger_menu'></div>").insertBefore(
            ".breezi-app-8efeb974fd3ec7541734dd93, .breezi-app-0dc63fd9a084ec168f0b7363, .breezi-app-eea5051ce4586b8dfb784969"
        );
        $("#hamburger_menu").append('<div id="hamburger_menu_div"></div>');
        var $topMenu = $("<ul id='haMenu'></ul>").insertAfter(
            "#hamburger_menu_div"
        );

        $(
            ".breezi-app-8efeb974fd3ec7541734dd93 li.main-nav-item, .breezi-app-0dc63fd9a084ec168f0b7363 li.main-nav-item, .breezi-app-eea5051ce4586b8dfb784969 li.main-nav-item"
        ).each(function(i, elem) {
            var $menuItem = $("<li></li>");

            $menuItem.append(
                $(
                    "<a data-ajax='false' href='" +
                    $("a", this).attr("href") +
                    "'>" +
                    $(elem).text() +
                    "</a>"
                )
            );

            if ($(elem).hasClass("has-sub-menu")) {
                $menuItem.addClass("slicknav_parent slicknav_collapsed");
                var $subItems = $(elem).attr("popup_nav");
                var popMenu = $("#" + $subItems + " li");
                var $subMenu = $("<ul></ul>");

                popMenu.each(function(i, elem) {
                    if (i == 0) {
                        return true;
                    }
                    $subMenu.append(
                        $(
                            "<li><a data-ajax='false' href='" +
                            $("a", this).attr("href") +
                            "'>" +
                            $(elem).text() +
                            "</a></li>"
                        )
                    );
                });

                $menuItem.append($subMenu);
            }

            $topMenu.append($menuItem);
        });

        $("#haMenu").slicknav({
            label: "",
            brand: "<img src='//s3.amazonaws.com/assets0.empowerkit.com/great-harvest/great_harvest_mobile_logo.jpg'>",
            duration: 100,
            showChildren: "false"
        });

        $(".slicknav_menu").insertAfter(".cms-loading");
    };

    $(document).ready(function() {
        var interval = setInterval(function() {
            console.log("hamburger menu test");
            var $items = $(
                ".breezi-app-8efeb974fd3ec7541734dd93 li.main-nav-item, .breezi-app-0dc63fd9a084ec168f0b7363 li.main-nav-item, .breezi-app-eea5051ce4586b8dfb784969 li.main-nav-item"
            );
            if ($items.size() > 0) {
                clearInterval(interval);
                setupHamburgerMenu();
            }
        }, 100);

        // //add phone number to hamburger menu
        //     var match = $('body').html().match(/\(\d\d\d\)\s\d\d\d.\d\d\d\d/);
        //     var phone = match[0];
        //     $("#column_08592367880046368").append('<p id="phone_hamburger" style="background-color:black;font-family:Montserrat;color:white;text-align:center;font-size:18px">test</p>');
        //     document.getElementById("phone_hamburger").innerHTML = phone
    });
    //remove arrows on sub-menu
    $(document).ready(function() {
        setTimeout(function() {
            console.log("removing arrows");
            $(".slicknav_arrow")
                .text("")
                .attr("class", "");
            $(".slicknav_item").attr("class", "ui-link");
            console.log("arrows removed");
        }, 500);
    });
} //end of if statement if the windows is lower than 550

$(document).ready(function() {
    if (isMobile) {
        $("body").removeClass("ui-overlay-c");
        $(".ui-body-c").css({ background: "none" });
    }
});

/*-------------------------- Fix for videos START ---------------------------------*/

$(document).ready(function() {
    $("iframe#player").each(function() {
        $(this).attr(
            "src",
            $(this)
            .attr("src")
            .replace("http://www.youtube.com", "//youtube.com")
        );
    });
});

/*---------------------------  Fix for videos END ---------------------------------  */

/*-------------------------- Fix for Youtube videos Mobile START ---------------------------------*/

$(document).ready(function() {
    function showVideo() {
        if (isMobile) {
            $("iframe#player").each(function() {
                $(this).attr(
                    "src",
                    $(this)
                    .attr("src")
                    .replace("http://www.youtube.com", "//www.youtube.com")
                );
            });
        }
    }
    $(window).load(showVideo);
    console.log("Fix for Youtube Vid");
});

/*-------------------------- Fix for Youtube videos Mobile END ---------------------------------*/

//tag manager for Henderson location


$(document).ready(function() {

    if (window.location.host == "greatharvesthenderson.com") {

        $("body").prepend("<!-- Google Tag Manager (noscript) --><noscript><iframe src='https://www.googletagmanager.com/ns.html?id=GTM-P4639K5' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript><!-- End Google Tag Manager (noscript) -->")

    }
});

//Change mobile logo
// $(window).load(function () {

//     if (
//         window.top.location.href == "http://greatharvestbeaverdam.com/" ||
//         window.top.location.href == "http://ghbreadwoodburyny.com/" ||
//         window.top.location.href == "http://greatharvesttyler.com/"
//     ) {
//         document.querySelector('.slicknav_brand>img').src = "//s3.amazonaws.com/assets0.empowerkit.com/great-harvest/great_harvest_mobile_logo.jpg";
//     }

// });
//Landing Pages image backgrounds
$(document).ready(function () {
    if (isMobile) {
        if (window.location.pathname === '/spooktober' || window.location.pathname === '/thanksgiving' || window.location.pathname === '/holidaybaking' || window.location.pathname === '/whole-grains' || window.location.pathname === '/whitechocolatecherry' || window.location.pathname === '/irishsoda' || window.location.pathname === '/memorial-day-specialties' || window.location.pathname === '/mom' || window.location.pathname === '/fathers-day' || window.location.pathname === '/autumn') {
            $("*").css({ 'background-attachment': 'scroll', 'background-size': 'cover', });
        }
    } else if (window.location.pathname === '/spooktober' || window.location.pathname === '/thanksgiving' || window.location.pathname === '/holidaybaking' || window.location.pathname === '/whole-grains' || window.location.pathname === '/whitechocolatecherry' || window.location.pathname === '/irishsoda' || window.location.pathname === '/memorial-day-specialties' || window.location.pathname === '/mom' || window.location.pathname === '/fathers-day' || window.location.pathname === '/autumn') {
        $("*").css({ 'background-attachment': 'fixed', 'background-size': 'cover', });
        $(".social-icons-list a").css({ 'background-attachment': 'unset', 'background-size': 'unset', });
    }
});

