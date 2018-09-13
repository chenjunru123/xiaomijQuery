$(function () {
    ////////////////////////////////////////顶部购物车/////////////////////////////////
    let right = $(".head .goods .right");
    let white = $(".head .right .white");
    // console.log(right,white);
    right.mouseenter(function () {
        white.clearQueue().slideDown();
    })
    right.mouseleave(function () {
        white.clearQueue().slideUp();
    })
    //////////////////////////////////////侧导航////////////////////////////////////////
    let list=$(".banner .banner-pic .list .list-box");
    let baby=$(".banner .banner-pic .list .list-box .baby");
    // console.log(list, baby);
    list.mouseenter(function   () {
        let i = $(this).index();
        baby.css({display:"none"}).eq(i).css({display:"block"});
    });
    list.mouseleave(function () {
        let i = $(this).index();
        baby.eq(i).css({display:"none"});
    });

    ///////////////////////////////////家电选项卡////////////////////////////////////////////
    let father=$(".house_top_right .r_list");
    let son=$(".sectionBox");
    // console.log(father,son);
    father.mouseenter(function () {
        let i= $(this).index();
        son.css("display","none").eq(i).css("display","block");
        father.removeClass("ch").eq(i).addClass("ch");
    });
    /////////////////////////////////////轮播///////////////////////////////////////////////////////
    let banner=$(".banner");
    let imgs=$(".imgs img");
    let dot=$(".dot ul li");
    let btnL=$(".banner .banner-pic .leftbtn");
    let btnR=$(".banner .banner-pic .rightbtn");
    // console.log(banner);
    let now=0;
    // console.log(imgs, dot);
    imgs.first().css("opacity",1);
    dot.eq(0).addClass("active");
    let t=setInterval(move,2000);
    function move() {
        if(now==imgs.length-1){
            now=-1;
        }
        now++;
        imgs.css("opacity",0).eq(now).css("opacity",1);
        dot.removeClass("active").eq(now).addClass("active");
    }

    function moveL(){
        if(now<0){
            now=4;
        }
        now--;
        imgs.css("opacity",0).eq(now).css("opacity",1);
        dot.removeClass("active").eq(now).addClass("active");
    }
    btnR.click(function () {
        move();
    })
    btnL.click(function () {
        moveL();
    })
    banner.mouseenter(function () {
        clearInterval(t)
    });
    banner.mouseleave(function () {
        t=setInterval(move,2000);
    });
    dot.click(function () {
        let i=$(this).index();
        imgs.css("opacity",0).eq(i).css("opacity",1);
        dot.removeClass("active").eq(i).addClass("active");
        now=i;
    })
    ///////////////////////////顶部选项卡//////////////////////////
    let ul = $(".navigation ul");
    let dad=$(".navigation ul li a");
    let kuang=$(".navigation .son");
    let hehe=$(".navigation .son .heer");
    console.log(ul, dad, kuang, hehe);
    ul.mouseenter(function () {
        kuang.css("height","229px");
    })
    ul.mouseleave(function () {
        kuang.css("height","0");
    })
    dad.mouseenter(function(){
        let v= $(this).index();
        dad.removeClass("active").eq(v).addClass("active")
        hehe.css("zIndex","5").eq(v).css("zIndex","50")
    })



    ///////////////////////////////////内容部分轮播//////////////////////
    function wheel(screen_w, imgs, points, left, right, Now, Next) {      //封装轮播函数
        let bigBox = $(screen_w);
        let width = bigBox.width();
        let books = $(imgs);
        let Left = $(left);
        let Right = $(right);
        let s_point = $(points);
        // console.log(bigBox,width,books,Left,Right);
        //点击左右切换
        let now = Now;
        let next = Next;
        let flag;
        Right.click(function () {
            if (next == books.length - 1) {
                return;
            }
            N_move();
        })
        function N_move() {
            if (flag == false) {
                return;
            }
            next++;
            if (next == books.length) {
                next = 0;
            }
            books.eq(next).css("left", width + "px");
            books.eq(now).animate({ left: -width }, function () { flag = true });
            books.eq(next).animate({ left: 0 }, function () { flag = true });
            s_point.eq(now).removeClass("hot");
            s_point.eq(next).addClass("hot");
            now = next;
            flag = false;
        }
        Left.click(function () {
            if (now == 0) {
                return;
            }
            N_moveL();
        })
        function N_moveL() {
            if (!flag) {
                return;
            }
            next--;
            if (next < 0) {
                next = books.length - 1;
            }
            books.eq(next).css("left", -width + "px");
            books.eq(now).animate({ left: width }, function () { flag = true });
            books.eq(next).animate({ left: 0 }, function () { flag = true });
            s_point.eq(now).removeClass("hot");
            s_point.eq(next).addClass("hot");
            now = next;
            flag = false;
        }
        // 小点 点击
        // console.log(s_point);
        s_point.each(function (i, v) {
            $(v).click(function () {
                if (i == now) {
                    return;
                } else if (i > now) {
                    books.eq(i).css("left", width + "px");
                    books.eq(now).animate({ left: -width }, function () { flag = true });
                    books.eq(i).animate({ left: 0 }, function () { flag = true });
                    s_point.eq(now).removeClass("hot");
                    s_point.eq(i).addClass("hot");
                } else {
                    books.eq(i).css("left", -width + "px");
                    books.eq(now).animate({ left: width }, function () { flag = true });
                    books.eq(i).animate({ left: 0 }, function () { flag = true });
                    s_point.eq(now).removeClass("hot");
                    s_point.eq(i).addClass("hot");
                }
                now = next = i;
            })
        })
    }
    wheel(".one", ".one li", ".s_point1 span", ".conL1", ".conR1", 0, 0);
    wheel(".two", ".two li", ".s_point2 span", ".conL2", ".conR2", 0, 0);
    wheel(".three", ".three li", ".s_point3 span", ".conL3", ".conR3", 0, 0);
    wheel(".four", ".four li", ".s_point4 span", ".conL4", ".conR4", 0, 0);
    //////////////////////////////////////返回顶部////////////////////////
    let fanhui=$(".personal.last");
    let wh = window.innerHeight;
    $(window).scroll( function() {
        let sh=document.body.scrollTop || document.documentElement.scrollTop;
        if(sh>800){
            fanhui.css("display","block");
        }else{
            fanhui.css("display","none");
        }
    });
    fanhui.click(function () {
        // document.body.animate({scrollTop:0},1000);
        animate(document.body,{scrollTop:0},800);
        animate(document.documentElement,{scrollTop:0},800);
    })
    ///////////////////////////////////////闪购平移////////////////////////
    let buttonL=$(".shopping .shopping-head .more .left");
    let buttonR=$(".shopping .shopping-head .more .right");
    let miList=$(".shopping .shopping-body ul");
    let w=miList.outerWidth()/2;
    let times=0;
    // console.log(buttonL,buttonR,miList,w);
    buttonR.click(function () {
        times++;
        if(times==2){
            times=1;
        }
        miList.css({transform:`translate(${-w*times}px)`});

    })
    buttonL.click(function () {
        times--;
        // console.log(times);
        if(times < 0){
            times=0;
        }
        miList.css({transform:`translate(${-w*times}px)`});
    })
    /////////////////////////////////为你推荐////////////////////////////////////
    let buttonleft=$(".recommend .head .more .left");
    let buttonright=$(".recommend .head .more .right");
    let milists=$(".recommend ul");
    let ws=milists.outerWidth()/1;
    let time=0;
    // console.log(buttonleft, buttonright, milists, ws);
    buttonleft.click(function () {
        time--;
        // console.log(time);
        if(time < 0){
            time=0;
        }
        milists.css({transform:`translate(${-ws*time}px)`});

    })
    buttonright.click(function () {
        time++;
        if(time==4){
            time=3;
        }
        milists.css({transform:`translate(${-ws*time}px)`});

    })
})