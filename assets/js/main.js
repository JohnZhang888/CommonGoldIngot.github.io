//加载动画
var rotationB = function () {
  $("div.loading-round-border").rotate({
    duration: 1000,
    angle: 0,
    animateTo: 360,
    callback: rotationB
  });
};
var rotationI = function () {
  $("img.loading-logo").rotate({
    duration: 1000,
    angle: 0,
    animateTo: -360,
    callback: rotationI
  });
};
rotationB;
rotationI;
//加载界面淡出
function loaded() {
    setTimeout(function () { 
        $("p.loading-text").text("加载完成！");
        $("div.loading").fadeOut(500, function () {
            $("div.loading").remove();
        });
    }, 800)
}
$(document).ready(function () {
    //侧边栏
    $("button.aside-unfold-sidebar").on("click", function () {
        $("div.aside-mask").show();
        $("div.aside-sidebar").show().animate({left: "0"}, 200);
    });
    $("div.aside-mask").click(function () {
        $("div.aside-mask").hide();
        $("div.aside-sidebar").animate({left: "-302"}, 200, function () {
            $("div.aside-sidebar").hide();
        });
    });
    //侧边栏子页面
    var wiki = 0;
    $("li.--wiki").on("click", function () {
        $("ul.--wiki").slideToggle(200, function () {
            if (wiki == 0) {
                $("i.--wiki").rotate({
                    duration: 300,
                    animateTo: 90
                });
                wiki = 1;
            } else {
                $("i.--wiki").rotate({
                    duration: 300,
                    animateTo: 0
                });
                wiki = 0;
            }
        });
    });
});