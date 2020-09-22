<template>
    <div class="body" id="pg0">
        <div id="topbar" class="topbar">
            <div class="toppic">
                <div class="topside">
                    <a href="https://im.qq.com/index.shtml" class="logoLink" pgv="im.index2015.logo">im.qq.com</a>
                    <ul id="topNav" class="topNav">
                        <li class="current" @mouseenter="onLink($event)"><a pgv="im.index2015.homepage" href="https://im.qq.com/">首页</a></li>
                        <li class="" @mouseenter="onLink($event)"><a pgv="im.index2015.download" href="https://im.qq.com/download/">下载</a></li>
                        <li class="" @mouseenter="onLink($event)"><a pgv="im.index2015.active" href="https://im.qq.com/news/">动态</a></li>
                    </ul>
                </div>
                <div class="topTool">
                    <a class="barzc" pgv="im.index2015.zuce" href="https://zc.qq.com/chs/index.html" target="_blank">注册</a>
                    <ul style="padding-top: 15px;">
                        <li id="loginInfo">
                            <a pgv="im.qq.com.login" id="login" href="#">登录</a>
                            <div id="loginPenel" class="loginPenel">
                                <span class="trg"></span>
                                <div class="logindrop">
                                    <div id="nick" class="nick">Hi,飞翔的企鹅</div>
                                    <div class="lgout"><a id="lgout" href="javascript:;">[退出]</a></div>
                                </div>
                            </div>
                        </li>
                        <li><a pgv="im.index2015.safe" href="https://aq.qq.com/" target="_blank">QQ安全</a></li>
                        <li><a pgv="im.index2015.vip" href="https://vip.qq.com/" target="_blank">QQ会员</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="crossbanenr wrap" style="height: 600px;">
            <ul id="crossbanenr">
                <li class="pcqq" :style="{display: type1}">
                    <div class="tim-content qqpc">
                        <div class="tim-content_title">
                            <div class="title-text"></div>
                            <div class="title-btn download-btn">
                                <a href="https://im.qq.com/pcqq/" target="_blank" pgv="im.index2018.bannerdownload_pcqq"></a>
                            </div>
                        </div>
                        <img src="https://sqimg.qq.com/mapp/im_qq_com/pc-feture.png" alt="" class="tim-img">
                    </div>
                </li>
                <li class="mqq" :style="{display: type2}">
                    <div class="mqq-content">
                        <span class="top-space"></span>
                        <h2 class="mqq-title"><span class="txt">QQ手机版 - 玩转QQ新精彩</span></h2>
                        <div class="mqq-download">
                            <a class="btn-download" href="https://im.qq.com/mobileqq/" target="_blank" pgv="im.index2018.bannerdownload_pcqq"><span class="txt">立即下载</span></a>
                        </div>
                        <div class="mqq-feature">
                            <div class="feature-img"></div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="circle">
                <span :class="{on: spanClass}" v-on:mouseenter="onEnter($event)">&nbsp;</span>
                <span :class="{on: !spanClass}" v-on:mouseenter="onEnter($event)">&nbsp;</span>
            </div>
        </div>
        <div class="content">
            <h1>I'm QQ - 每一天，乐在沟通</h1>
            <div id="fisrtbg" class="activebg fisrtbg" data-stellar-background-ratio="0.03"></div>
            <div class="qfigure qcall">
                <div class="qw960">
                    <div class="txtwrap">
                        <h2>沟通，是跨越千山万水的亲切声音</h2>
                        <p>无论何时何地，你都能自由享受QQ在各类终端<br>上带来的高清通话，与好友一起想聊多久聊多久</p>
                        <p><a class="knmore" href="https://im.qq.com/album/v/" target="_blank" pgv="im.index2015.more_1">了解更多 &gt;</a></p>
                        <ul class="figs">
                            <li class="f01">屏幕分享</li>
                            <li class="f02">群组通话</li>
                            <li class="f03">两人、多人通话</li>
                        </ul>
                    </div>
                    <div class="qcallAnimate">
                    </div>
                </div>
            </div>
        </div>
        <div id="secondbg" class="activebg secondbg" data-stellar-background-ratio="0.05"></div>
        <div class="qfigure qfile">
            <div class="qw960">
                <div class="txtwrap">
                    <h2>沟通，是随时随地爽快收发</h2>
                    <p>通过QQ,电脑和手机上的文件都能收发自如,<br>更有手机在线查阅，轻松你的工作和生活。</p>
                    <p><a class="knmore" href="http://im.qq.com/files/" target="_blank" pgv="im.index2015.more_2">了解更多 &gt;</a></p>
                    <ul class="figs">
                        <li class="f01">文件漫游</li>
                        <li class="f02">多端互传</li>
                        <li class="f03">在线预览</li>
                    </ul>
                </div>
                <div class="qfileAnimate">
                </div>
            </div>
        </div>
        <div id="thirdbg" class="activebg thirdbg" data-stellar-background-ratio="0.05"></div>
        <div class="qfigure qblog">
            <div class="qw960">
                <div class="txtwrap">
                    <h2>沟通，是志同道合的他们放肆青春</h2>
                    <p>即使世界很大，你也不会孤单，在兴趣部落<br>有和你一样的人，期待着和你一起发现精彩</p>
                    <p><a class="knmore" href="https://qun.qq.com/tribe.html" target="_blank" pgv="im.index2015.more_3">了解更多 &gt;</a></p>
                    <ul class="figs">
                        <li class="f01">精彩图集</li>
                        <li class="f02">附近热点</li>
                        <li class="f03">兴趣社区</li>
                    </ul>
                </div>
                <div class="qblogAnimate">
                    <div class="qblogWrap">
                        <div class="pic1"></div>
                        <div class="pic2"></div>
                        <div class="pic3"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="newfoot">
            <div class="qmaps">
                <div class="plats">
                    <h3>了解热门产品</h3>
                    <a class="plmb" pgv="im.index2015.maps.mobile" href="https://im.qq.com/mobileqq/" target="_blank">QQ 手机版</a>
                    <a class="plpc" pgv="im.index2015.maps.pc" href="https://im.qq.com/pcqq/" target="_blank">QQ PC版</a>
                    <a class="plmac" pgv="im.index2015.maps.mac" href="https://im.qq.com/macqq/" target="_blank">QQ Mac版</a>
                    <a class="plpad" pgv="im.index2015.maps.pad" href="https://itunes.apple.com/cn/app/qq-2011/id444934666?mt=8" target="_blank">QQ Pad版</a>
                </div>
                <div class="map qac">
                    <h3>QQ安全</h3>
                    <ul>
                        <li><a pgv="im.index2015.maps.anquan" href="https://aq.qq.com/" target="_blank">安全中心</a></li>
                        <li><a pgv="im.index2015.maps.dongjie" href="https://110.qq.com/" target="_blank">冻结帐号</a></li>
                        <li><a pgv="im.index2015.maps.jubao" href="https://aq.qq.com/v2/safe_school/report_index.shtml" target="_blank">举报恶意行为</a></li>
                        <li><a pgv="im.index2015.maps.huifu" href="http://huifu.qq.com/" target="_blank">恢复好友和群</a></li>
                        <li><a pgv="im.index2018.maps.zhuxiao" href="https://kf.qq.com/faq/1803146n2yMr180314MbIfER.html" target="_blank">注销帐号</a></li>
                    </ul>
                </div>
                <div class="map qfaq">
                    <h3>帮助反馈</h3>
                    <ul>
                        <li><a pgv="im.index2015.maps.kefu" href="https://kf.qq.com/product/QQ.html" target="_blank">腾讯客服</a></li>
                        <li><a pgv="im.index2015.maps.fankui" href="https://support.qq.com/discuss/44_1.shtml" target="_blank">反馈问题</a></li>
                        <li><a pgv="im.index2015.maps.txweibo" href="http://e.t.qq.com/QQ" target="_blank">腾讯微博</a></li>
                        <li><a pgv="im.index2015.maps.sinaweibo" href="https://weibo.com/u/2508053484" target="_blank">新浪微博</a></li>
                    </ul>
                </div>
                <div class="map qlink">
                    <h3>友情链接</h3>
                    <ul>
                        <li><a pgv="im.index2015.maps.buluo" href="https://buluo.qq.com" target="_blank">兴趣部落</a></li>
                        <li><a pgv="im.index2015.maps.qun" href="https://qun.qq.com/" target="_blank">QQ群</a></li>
                        <li><a pgv="im.index2015.maps.yinyue" href="https://y.qq.com/#type=index" target="_blank">QQ音乐</a></li>
                        <li><a pgv="im.index2015.maps.browser" href="http://browser.qq.com/" target="_blank">QQ浏览器</a></li>
                        <li><a pgv="im.index2015.maps.shipin" href="https://v.qq.com/" target="_blank">腾讯视频</a></li>
                        <li><a pgv="im.index2015.maps.tiyan" href="http://exp.qq.com/" target="_blank">腾讯体验中心</a></li>
                        <li><a pgv="im.index2015.maps.guanjia" href="https://guanjia.qq.com/" target="_blank">腾讯电脑管家</a></li>
                    </ul>
                    <ul class="sub-list">
                        <li><a pgv="im.index2018.maps.tim" href="https://office.qq.com/" target="_blank">TIM</a></li>
                        <li><a pgv="im.index2018.maps.qqdocs" href="https://docs.qq.com/?adtag=QQguanwang" target="_blank">腾讯文档</a></li>
                        <li><a pgv="im.index2018.maps.weiyun" href="https://www.weiyun.com/" target="_blank">微云</a></li>
                        <li><a pgv="im.index2018.maps.tencentcloud" href="https://cloud.tencent.com/" target="_blank">腾讯云</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright © 1998-{{year}} Tencent. All Rights Reserved.</p>
                <p>腾讯公司 版权所有</p>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'qq',
    data() {
        return {
            spanClass: true,
            type1: 'block',
            type2: 'none',
            year: undefined
        }
    },
    methods: {
        onLink(e) {
            if (!e.target.className)
            $('li.current').removeClass('current');
            e.target.className = 'current';
        },
        onEnter(e) {
            if (e.target.className === 'on') {
                return;
            }
            if (e.target.nextSibling) {
                this.type1 = 'block';
                this.type2 = 'none';
            } else {
                this.type1 = 'none';
                this.type2 = 'list-item';
            }
            this.spanClass = !this.spanClass;
        },
    },
    mounted() {
        document.title = "I'm QQ - 每一天，乐在沟通";
        $('body').css({
            'color': '#333',
            'overflow-x': 'hidden',
        });
        // document.body.style.cssText = "color: #333; overflow-x: hidden";
        this.year = new Date().getFullYear();
    },
}
$(function () {
    var winHeight = $(window).height();
    var bodyheight = $('.body').height();
    var scrollTop = $(window).scrollTop();
    var firstHeight = 778;
    var dataArr = [];
    $($('.qfigure')).each(function (i, item) {
        if (i === 0) {
            dataArr[i] = $(item).offset().top - Math.floor($(item).height() / 2) - 500
        } else {
            dataArr[i] = $(item).offset().top - Math.floor($(item).height() / 2)
        }
    });
    $(window).scroll(function (e) {
        scrollTop = $(window).scrollTop();
        if (scrollTop >= firstHeight) {
            $("#topbar").addClass("topicfixed")
        } else if ($("#topbar").hasClass("topicfixed")) {
            $("#topbar").removeClass("topicfixed")
        }
        if (scrollTop < 100) {
            $('.body').attr("id", "pg0")
        }
        $(dataArr).each(function (i, item) {
            if (Math.floor(winHeight / 2) + scrollTop >= item) {
                $('.body').attr("id", "pg" + (i + 1))
            }
        });
        if (scrollTop + winHeight >= bodyheight) {
            $('.body').attr("id", "pg3")
        }
    });
})
</script>

<style lang="less" scoped>
html, body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", STXihei, STHeiti, Heiti, SimSun, sans-serif;
    font-size: 100%;
}
.topicfixed {
    height: 75px !important;
    position: fixed !important;
    left: 0 !important;
    top: 0 !important;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    li.current a {
        background: none !important;
    }
    .topNav li a:hover { 
        background: none  !important;
    }
    a.barzc {
        display: inline !important;
    }
}
.topbar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 150px;
    /* background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/lineartop.png) repeat-x center top; */
    z-index: 900;
    .toppic {
        max-width: 1170px;
        min-width: 980px;
        width: 80%;
        height: 75px;
        margin: 0 auto;
        ul, ol, li {
            list-style: none;
        }
        .topside {
            float: left;
            width: 59%;
            .logoLink {
                float: left;
                display: block;
                width: 106px;
                height: 0px;
                overflow: hidden;
                padding-top: 76px;
                font-size: 0;
                background-color: transparent;
                background-image: url(https://im.qq.com/assets/images/logo.png);
                background-repeat: no-repeat;
                background-position: 0 50%;
                background-size: 92px 44px;
            }
            .topNav {
                float: left;
                width: 450px;
                padding-left: 18px;
                li {
                    float: left;
                    margin-left: 20px;
                    a {
                        float: left;
                        padding: 0 20px;
                        line-height: 75px;
                        font-size: 1.125em;
                    }
                }
                li a:hover {
                    background: #12b7f5;
                }
                li.current a {
                    background: #12b7f5;
                }
            }
        }
        .topTool {
            float: right;
            width: 320px;
            font-size: 0.875em;
            a.barzc {
                float: left;
                width: 96px;
                height: 0;
                overflow: hidden;
                padding: 39px 0 0 0;
                margin: 18px 0 0 0;
                background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/icons.png) no-repeat 0 -244px;
                text-align: center;
                line-height: 39px;
                color: #fff;
            }
            a.barzc:hover {
                background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/icons.png) no-repeat 0 -284px;
                color: #fff;
            }
            ul {
                float: right;
                height: 40px;
                padding-top: 6px;
                li {
                    float: right;
                    margin-left: 30px;
                    position: relative;
                    line-height: 40px;
                    .loginPenel {
                        display: none;
                        position: absolute;
                        right: 0;
                        top: 30px;
                        width: 120px;
                        height: 85px;
                        z-index: 100;
                        .trg {
                            position: absolute;
                            right: 8px;
                            top: 4px;
                            width: 10px;
                            height: 7px;
                            background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/trg.png) no-repeat 0 0;
                            font-size: 0;
                        }
                        .logindrop {
                            width: 120px;
                            height: 75px;
                            margin-top: 10px;
                            background: #fff;
                            .nick {
                                width: 100px;
                                height: 39px;
                                overflow: hidden;
                                margin: 0 auto;
                                white-space: nowrap;
                                line-height: 39px;
                                text-align: center;
                                text-overflow: ellipsis;
                            }
                            .lgout {
                                width: 100%;
                                border-top: 1px solid #d7d7d7;
                                line-height: 35px;
                                text-align: center;
                                a:link, a:visited {
                                    color: #333;
                                }
                            }
                        }
                    }
                }
            }
        }
        a:link, a:visited {
            color: #333;
        }
    }
}
.crossbanenr {
    width: 100%;
    height: 778px;
    ul {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        /* max-width: 1920px; */
        min-width: 1007px;
        margin: 0 auto;
        li:first-child {
            display: block;
        }
        li {
            position: absolute;
            left: 50%;
            top: 0;
            width: 1920px;
            height: 100%;
            margin: 0 0 0 -960px;
            display: none;
            z-index: 1;
        }
        .pcqq {
            background: url(//sqimg.qq.com/mapp/im_qq_com/pc_bg.jpg) no-repeat center center;
            background-size: cover;
            .tim-content {
                position: relative;
                width: 100%;
                max-width: 1900px;
                min-width: 960px;
                margin: 0 auto;
                height: 100%;
                .tim-content_title {
                    margin: 0 auto;
                    padding: 6% 0 8.32%;
                    width: 807px;
                    height: 120px;
                    /* overflow: hidden; */
                    .title-text {
                        float: left;
                        width: 459px;
                        height: 116px;
                        background: url(https://sqimg.qq.com/mapp/im_qq_com/pc-title.png) no-repeat center top;
                    }
                    .title-btn {
                        float: right;
                        width: 347px;
                        height: 120px;
                        background: url(https://sqimg.qq.com/mapp/im_qq_com/pc-btn.png) no-repeat center top;
                        position: relative;
                        a {
                            width: 88%;
                            height: 62%;
                            display: block;
                            position: absolute;
                            top: 18%;
                            left: 6%;
                        }
                    }
                }
                @media screen and (max-height: 800px) {
                    .tim-content_title{
                        width: 576px;
                        padding-top: 8%;
                        .title-text{
                            float: left;
                            width: 328px;
                            height: 84px;
                            background: url(https://sqimg.qq.com/qq_product_operations/im/imbanner/20180201/title-text-1366s.png) no-repeat center top;
                        }
                        .title-btn{
                            float: right;
                            width: 248px;
                            height: 86px;
                            background: url(https://sqimg.qq.com/qq_product_operations/im/imbanner/20180201/title-button-s.png) no-repeat center top;
                        }
                    }
                }
                .tim-img {
                    width: 100%;
                    height: auto;
                    /* left: 0.8%; */
                    /* bottom: 0; */
                    /* position: absolute; */
                }
            }
        }
        .mqq {
            right: 0;
            background-size: cover;
            background-image: url(//qzonestyle.gtimg.cn/aoi/sola/20190627155257_hfDit78vGr.jpeg);
            background-repeat: no-repeat;
            background-position: 50% 50%;
            .mqq-content {
                width: 100%;
                height: 100%;
                max-width: 1900px;
                min-width: 960px;
                position: relative;
                margin: 0 auto;
                .top-space {
                    display: block;
                    padding-top: 6%;
                }
                .mqq-title {
                    margin: 0 auto;
                    color: transparent;
                    position: relative;
                    margin-bottom: 3%;
                    width: 50%;
                    padding-top: 13.5416%;
                    background-image: url(//qzonestyle.gtimg.cn/aoi/sola/20190627155257_gyEc8vQq8v.png);
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                .txt {
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                .mqq-download a.btn-download {
                    display: block;
                    margin: 0 auto;
                    color: transparent;
                    position: relative;
                    z-index: 10;
                    width: 15.05208%;
                    padding-top: 4.6354%;
                    background-image: url(//qzonestyle.gtimg.cn/aoi/sola/20190627155257_AKTPvWAw4Y.png);
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                .mqq-feature {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    .feature-img {
                        height: 26.6666vw;
                        width: 38.9vw;
                        margin: 0 auto;
                        background-image: url(//qzonestyle.gtimg.cn/aoi/sola/20190627155257_tyVfTf5pkH.png);
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                }
            }
        }
    }
    .circle {
        position: relative;
        width: 100%;
        height: 52px;
        margin-top: -52px;
        background: transparent url(https://sqimg.qq.com/qq_product_operations/im/2018/linearbot.png) repeat-x left top;
        text-align: center;
        z-index: 5;
        span {
            margin: 0 5px;
            padding: 2px 5px;
            background: transparent url(https://sqimg.qq.com/qq_product_operations/im/2018/nav.png) no-repeat center center;
            cursor: pointer;
        }
        span.on {
            background-image: url(https://sqimg.qq.com/qq_product_operations/im/2018/navcur.png);
        }
    }
}
.activebg {
    position: relative;
    width: 100%;
    height: 600px;
    background: #fff;
    background-attachment: fixed;// 页面的其余部分滚动时，背景图像不会移动
    background-position: center 0;
    background-repeat: no-repeat;
}
.qfigure {
    width: 100%;
    height: 584px;
    background: #fff;
    .qw960 {
        position: relative;
        width: 960px;
        height: 584px;
        margin: 0 auto;
        .txtwrap {
            p {
                font-size: 18px;
                letter-spacing: 0.12em;
                a.knmore:link, a.knmore:visited {
                    color: #12b7f5;
                }
            }
            .figs {
                width: 100%;
                padding-top: 44px;
                min-height: 121px;
                li {
                    padding: 58px 0 0;
                    color: #a0a0a0;
                    font-size: 14px;
                    text-align: center;
                }
            }
            ul, ol, li {
                list-style: none;
            }
        }
    }
}
.content {
    width: 100%;
    h1 {
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-top: 280px;
        background: #fff url(//sqimg.qq.com/qq_product_operations/im/2015/brand.png) no-repeat center top;
    }
    .fisrtbg {
        background-image: url(//sqimg.qq.com/qq_product_operations/im/2015/fisrtbg.jpg);
    }
    .qcall {
        .txtwrap {
            position: absolute;
            right: 7px;
            top: 115px;
            width: 487px;
            h2 {
                width: 100%;
                height: 0;
                overflow: hidden;
                padding-top: 135px;
                background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/qcall_txt.png) no-repeat 0 0;
            }
            p {
                width: 100%;
                margin-bottom: 12px;
                line-height: 25px;
                text-align: right;
                opacity: 0.6;
            }
            .figs {
                background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/qcall_figs.png) no-repeat 190px 41px;
                li {
                    float: right;
                    border-left: 1px solid #e9e9e9;
                }
                li.f01 {
                    width: 80px;
                    text-align: right;
                }
                li.f02 {
                    width: 109px;
                }
                li.f03 {
                    width: 156px;
                    border: none;
                }
            }
        }
        .qcallAnimate {
            position: absolute;
            left: -32px;
            bottom: 0;
            width: 664px;
            height: 763px;
            background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/update/pic1.png) no-repeat 0 0;
        }
    }
}
.secondbg {
    background-image: url(//sqimg.qq.com/qq_product_operations/im/2015/update/avd.jpg);
}
.qfile {
    .txtwrap {
        position: absolute;
        left: 7px;
        top: 115px;
        width: 450px;
        h2 {
            width: 100%;
            height: 0;
            overflow: hidden;
            padding-top: 140px;
            background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/update/txt.png) no-repeat 0 0;
        }
        p {
            width: 90%;
            margin-bottom: 12px;
            padding-left: 5px;
            line-height: 25px;
            opacity: 0.6;
        }
        .figs {
            background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/qfile_figs.png) no-repeat 7px 41px;
            li {
                float: left;
                border-right: 1px solid #e9e9e9;
            }
            li.f01 {
                width: 94px;
                text-align: left;
                text-indent: 12px;
            }
            li.f02 {
                width: 112px;
            }
            li.f03 {
                width: 108px;
                border: none;
            }
        }
    }
    .qfileAnimate {
        position: absolute;
        right: -100px;
        bottom: 104px;
        width: 597px;
        height: 330px;
        background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/update/pic2.png) no-repeat 0 0;
    }
}
.thirdbg {
    background-image: url(//sqimg.qq.com/qq_product_operations/im/2015/blog.jpg);
}
.qblog {
    .txtwrap {
        position: absolute;
        right: 7px;
        top: 120px;
        width: 495px;
        h2 {
            width: 100%;
            height: 0;
            overflow: hidden;
            padding-top: 135px;
            background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/qblog_txt.png) no-repeat 0 0;
        }
        p {
            width: 100%;
            margin-bottom: 12px;
            line-height: 25px;
            text-align: right;
            opacity: 0.6;
        }
        .figs {
            background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/qblog_figs.png) no-repeat 228px 41px;
            li {
                float: right;
                border-left: 1px solid #e9e9e9;
            }
            li.f01 {
                width: 80px;
                text-align: right;
            }
            li.f02 {
                width: 105px;
            }
            li.f03 {
                width: 106px;
                border: none;
            }
        }
    }
    .qblogAnimate {
        position: absolute;
        left: 88px;
        bottom: 0;
        width: 344px;
        height: 506px;
        background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/update/pic3.png) no-repeat -30px 0;
        .qblogWrap {
            position: relative;
            left: 0;
            top: 217px;
            width: 291px;
            height: 150px;
            div {
                position: absolute;
                top: 0;
                width: 150px;
                height: 150px;
            }
            .pic1 {
                left: -122px;
                background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/qblog_fig1.png) no-repeat 0 0;
                opacity: 0;
            }
            .pic2 {
                left: 70px;
                background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/qblog_fig2.png) no-repeat 0 0;
                opacity: 0;
            }
            .pic3 {
                right: -119px;
                background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/qblog_fig3.png) no-repeat 0 0;
                opacity: 0;
            }
        }
    }
}
#pg3 .qblogWrap .pic1{
    opacity: 1;
    -webkit-animation: zoomIn 0.2s cubic-bezier(0, .25, .08, 1) 0.4s;
    -moz-animation: zoomIn 0.2s cubic-bezier(0, .25, .08, 1) 0.4s;
    -o-animation: zoomIn 0.2s cubic-bezier(0, .25, .08, 1) 0.4s;
    animation: zoomIn 0.2s cubic-bezier(0, .25, .08, 1) 0.4s;
    -webkit-animation-fill-mode: backwards;
    -moz-animation-fill-mode: backwards;
    -o-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
}
#pg3 .qblogWrap .pic2{
    opacity: 1;
    -webkit-animation: zoomIn 0.2s cubic-bezier(0, .25, .08, 1) 0.5s;
    -moz-animation: zoomIn 0.2s cubic-bezier(0, .25, .08, 1) 0.5s;
    -o-animation: zoomIn 0.2s cubic-bezier(0, .25, .08, 1) 0.5s;
    animation: zoomIn 0.2s cubic-bezier(0, .25, .08, 1) 0.5s;
    -webkit-animation-fill-mode: backwards;
    -moz-animation-fill-mode: backwards;
    -o-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
}
#pg3 .qblogWrap .pic3{
    opacity: 1;
    -webkit-animation: zoomIn 0.2s cubic-bezier(0, .25, .08, 1) 0.6s;
    -moz-animation: zoomIn 0.2s cubic-bezier(0, .25, .08, 1) 0.6s;
    -o-animation: zoomIn 0.2s cubic-bezier(0, .25, .08, 1) 0.6s;
    animation: zoomIn 0.2s cubic-bezier(0, .25, .08, 1) 0.6s;
    -webkit-animation-fill-mode: backwards;
    -moz-animation-fill-mode: backwards;
    -o-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
}
@keyframes zoomIn {
    0%{ transform: scale(0);}
    60%{ transform: scale(1.1);}
    100% { transform: scale(1);}
}
@-moz-keyframes zoomIn {
    0%{ transform: scale(0);}
    60% { transform: scale(1.1);}
    100% { transform: scale(1);}
}
@-webkit-keyframes zoomIn {
    0%{ -webkit-transform: scale(0);}
    60% { -webkit-transform: scale(1.1);}
    100% { -webkit-transform: scale(1);}
}
@-o-keyframes zoomIn {
    0%{ -o-transform: scale(0);}
    90% { -o-transform: scale(1.1);}
    100% { -o-transform: scale(1);}
}
@-ms-keyframes zoomIn{
    0%{ -ms-transform: scale(0);}
    60% { -ms-transform: scale(1.1);}
    100% { -ms-transform: scale(1);}
}
.newfoot {
    width: 100%;
    height: 348px;
    padding-top: 34px;
    background: #2a2a2a;
    font-size: 0.75em;
    .qmaps {
        width: 960px;
        height: 205px;
        margin: 0 auto;
        position: relative;
        a:link, a:visited {
            color: #979797;
        }
        .plats {
            float: left;
            width: 510px;
            padding-left: 8px;
            h3 {
                height: 50px;
                color: #666;
                font-size: 14px;
            }
            a {
                float: left;
                padding-top: 65px;
                background: transparent url(//sqimg.qq.com/qq_product_operations/im/2015/plats1.png) no-repeat 0 0;
                text-align: center;
                font-size: 14px;
            }
            a.plmb {
                width: 80px;
                margin-right: 35px;
                background-position: 0px 0;
            }
            a.plpc {
                width: 80px;
                margin-right: 30px;
                background-position: -105px 0;
            }
            a.plmac {
                width: 84px;
                margin-right: 30px;
                background-position: -210px 0;
            }
            a.plpad {
                width: 76px;
                background-position: -326px 0;
            }
        }
        .map {
            float: left;
            h3 {
                height: 25px;
                color: #666;
                font-size: 14px;
            }
            ul, ol, li {
                list-style: none;
            }
            li {
                line-height: 22px;
            }
        }
        .qac {
            width: 185px;
        }
        .qfaq {
            width: 175px;
        }
        .qlink {
            width: 80px;
            .sub-list {
                position: absolute;
                right: -55px;
                top: 25px;
            }
        }
    }
    .copyright {
        clear: both;
        width: 960px;
        margin: 0 auto;
        padding-top: 16px;
        border-top: 1px solid #666;
        line-height: 17px;
        text-align: center;
        color: #666;
    }
}
@media screen and (min-width:1921px) {
    .crossbanenr li {
        width: 100%;
        left: 50%;
        margin-left: -50%;
    }
    .fisrtbg, .secondbg, .thirdbg {
        background-size: 100%;
    }
}
@media screen and (max-width:1440px) {
    .fisrtbg {
        background-image: url(//sqimg.qq.com/qq_product_operations/im/2015/bg1_1600.jpg) !important;
    }
    .secondbg {
        background-image: url(//sqimg.qq.com/qq_product_operations/im/2015/update/avds.jpg) !important;
    }
    .thirdbg {
        background-image: url(//sqimg.qq.com/qq_product_operations/im/2015/bg3_1600.jpg) !important;
    }
    .fisrtbg, .secondbg, .thirdbg{ background-size: cover;}
}
@media screen and (min-height:1081px) {
    .fisrtbg, .secondbg, .thirdbg{ background-size: cover;}
}
</style>