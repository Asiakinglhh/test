<template>
    <div class="container">
        <div class="video-bg">
            <!-- muted：静音播放，autoplay：视频就绪后马上播放，loop：循环播放 -->
            <video class="video-tvc" id="video-tvc" :muted="videoMuted" autoplay loop src="https://s3.pstatp.com/aweme/resource/web/static/image/index/tvc-v3_0b9db49.mp4">抱歉，您的浏览器不支持内嵌视频</video>
        </div>
        <div class="content">
            <header class="header claerFloat">
                <div class="header-left">
                    <a href="/">
                        <img src="//s3.pstatp.com/aweme/resource/web/static/image/index/logo_b7a2aca.png" alt="logo" style="height: 45px;">
                    </a>
                </div>
                <div class="header-right">
                    <ul class="header-links">
                        <li class="header-links-item create-platform-item">
                            <a href="https://creator.douyin.com">创作服务平台</a>
                            <div class="create-platform">原【视频上传】已并入此功能</div>
                        </li>
                        <li class="header-links-item">
                            <a href="https://open.douyin.com">开放平台</a>
                        </li>
                        <li class="header-links-item hover">
                            <a>系列产品</a>
                            <div class="menu">
                                <a href="https://www.huoshanzhibo.com/">抖音火山版</a>
                                <a href="https://lv.ulikecam.com/">剪映</a>
                                <a href="https://www.duoshanapp.com/">多闪</a>
                            </div>
                        </li>
                        <li class="header-links-item hover">
                            <a>抖音直播</a>
                            <div class="menu">
                                <a href="https://union.bytedance.com/open/">直播机构入驻</a>
                                <a href="https://www.douyin.com/falcon/webcast_openpc/pages/streamingtool_download/index.html">直播伴侣下载</a>
                                <a href="https://www.douyin.com/pay/union_pay/">购买抖币</a>
                            </div>
                        </li>
                        <li class="header-links-item hover">
                            <a>合作入驻</a>
                            <div class="menu">
                                <a href="https://www.douyin.com/mcn/">MCN入驻</a>
                                <a href="https://www.douyin.com/platform/effect">抖音特效师</a>
                                <a href="https://musician.douyin.com">抖音音乐人</a>
                                <a href="https://www.douyin.com/certification/agency/enter/">社会机构入驻</a>
                            </div>
                        </li>
                        <li class="header-links-item hover">
                            <a>企业合作</a>
                            <div class="menu">
                                <a href="https://e.douyin.com">企业服务平台</a>
                                <a href="https://renzheng.douyin.com/api/welcome/?fiji_source=douyin">企业认证</a>
                                <a href="https://www.douyin.com/resource/douyin?source=dou">广告投放</a>
                            </div>
                        </li>
                        <li class="header-links-item">
                            <a href="/aboutus/">联系我们</a>
                        </li>
                        <li class="header-links-item">
                            <div class="unmute" :class="{mute: videoButton}" @click="videoVoice"></div>
                        </li>
                    </ul>
                </div>
            </header>
            <div class="middle clearFloat">
                <div class="slogan">
                    <img src="//s3.pstatp.com/aweme/resource/web/static/image/index/slogan_2_8d59f13.png" alt="slogan">
                </div>
                <div class="btn-list">
                    <a class="btn-primary icon-QRcode">
                        <img src="//s3.pstatp.com/aweme/resource/web/static/image/index/QRcode_ff63ec5.png" alt="qrcode">
                    </a>
                    <div class="btn-primary">
                        <a class="btn-hover icon-ios btn-link" href="https://itunes.apple.com/cn/app/抖音短视频/id1142110895?l=zh&amp;ls=1&amp;mt=8"></a>
                    </div>
                    <div class="btn-primary">
                        <a class="btn-hover icon-andorid btn-link" href="http://s.toutiao.com/UsMYE/"></a>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <nav class="nav-warpper">
                    <span>|</span>
                    <a href="/agreement/">用户服务协议</a>&nbsp;
                    <span>|</span>&nbsp;
                    <a href="/privacy/">隐私政策</a>&nbsp;
                    <span>|</span>&nbsp;
                    <a href="/recovery_account/">账号找回</a>&nbsp;
                    <span>|</span>
                    <a href="https://www.douyin.com/resource/douyin?source=dou">广告投放</a>&nbsp;
                    <span>|</span>&nbsp;
                    <a href="/business_license/">营业执照</a>&nbsp;
                    <span>|</span>
                </nav>
                <div class="feedback-info">
                    <p v-html="'<span>'+year+'</span>&nbsp;©&nbsp;抖音&nbsp;&nbsp;|&nbsp;京ICP备16016397号-3&nbsp;|&nbsp;北京微播视界科技有限公司 |&nbsp; 京B2-20170846'"></p>
                    <p>网络文化许可证-京网文-（2016）2282-264号&nbsp;|&nbsp;客户服务热线：400-992-2556&nbsp;|&nbsp;违法和不良信息举报电话：400-140-2108&nbsp;|&nbsp;未成年人守护热线：010-8963-3210&nbsp;|&nbsp;举报邮箱：jubao@douyin.com</p>  
                    <div class="gongan-box">
                        <img src="//s3.pstatp.com/aweme/resource/web/static/image/gongan_d0289dc.png"> 
                        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002046">京公网安备 11000002002046号</a>
                        <span v-html="'&nbsp; | &nbsp;地址&nbsp;:&nbsp;北京市海淀区知春路51号4层408&nbsp;'"></span>
                    </div>
                </div>
                <div class="report-box">
                    <img src="//s3.pstatp.com/aweme/resource/web/static/image/report_5688eaa.png"> 
                    <a target="_blank" href="http://www.12377.cn/">网上有害信息举报</a>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'douyin',
    data() {
        return {
            videoMuted: true,
            videoButton: false,
            year: undefined
        }
    },
    methods: {
        // videoVoice($event) {
        //     if ($event.target.classList.length === 1) {
        //         $('#video-tvc')[0].muted = false;
        //         $event.target.className = 'unmute mute';
        //     } else {
        //         $('#video-tvc')[0].muted = true;
        //         $event.target.className = 'unmute';
        //     }
        // },
        videoVoice() {
            if ($('.unmute').hasClass('mute')) {
                this.videoMuted = true;
                this.videoButton = false;
            } else {
                this.videoMuted = false;
                this.videoButton = true;

            }
        }
    },
    mounted() {
        document.title = '【抖音短视频】记录美好生活-Douyin.com';
        $('.container').parent().css({
            "background-color": "#161823",
            position: "relative",
            "min-width": "1200px",
            "font-family": "Microsoft YaHei, 微软雅黑, Microsoft JhengHei, 华文细黑, STHeiti, MingLiu",
            "line-height": 1
        });
        this.year = new Date().getFullYear();
    },
}
</script>

<style lang="less" scoped>
.container {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    .video-bg {
        width: 100%;
        height: 100%;
        .video-tvc {
            width: 100%;
            height: 100%;
            object-fit: cover;// 如何去适应指定容器的高度与宽度,一般用于img和video标签,进行保留原始比例的剪切、缩放或者直接进行拉伸等
        }
    }
    .content {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        .header {
            height: auto;
            line-height: 75px;
            overflow: inherit;
            position: relative;
            z-index: 3;
        }
        .header-left {
            margin-left: 80px;
            margin-top: 10px;
            float: left;
            height: 55px;
            > a {
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                height: 100%;
                -webkit-box-align: center;
                -webkit-align-items: center;
                align-items: center;
            }
        }
        .header-right {
            float: right;
            margin-right: 150px;
            font-size: 16px;
            font-weight: 500;
            .header-links {
                list-style: none;
                line-height: 75px;
                .unmute {
                    background-image: url(//s3.pstatp.com/aweme/resource/web/static/image/index/unmute_1bbc0c3.png);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: 22px;
                    height: 22px;
                    cursor: pointer;
                    margin-top: 16.5px;
                }
                .unmute.mute {
                    background-image: url(//s3.pstatp.com/aweme/resource/web/static/image/index/mute_acbcfbc.png);
                }
            }
            .create-platform-item {
                position: relative;

                .create-platform {
                    position: absolute;
                    background-image: url(//s3.pstatp.com/aweme/resource/web/static/image/index/create-bubble_c2cd9db.png);
                    background-position: 0 0;
                    background-size: cover;
                    top: 45px;
                    left: 50%;
                    margin-left: -99px;
                    height: 42px;
                    width: 198px;
                    font-size: 14px;
                    color: rgba(255,255,255,.9);
                    text-align: center;
                    line-height: 20px;
                    padding-top: 14px;
                    box-sizing: border-box;
                }
            }
            .header-links-item {
                line-height: 55px;
                height: 55px;
                display: inline-block;
                vertical-align: middle;
                margin-left: 25px;
                > a {
                    color: #fff;
                    text-shadow: 0 1px 2px rgba(0,0,0,.4);// 向文本设置阴影，水平、垂直、模糊距离、颜色
                    vertical-align: middle;
                }

            }
            .header-links-item.hover {
                position: relative;
                .menu {
                    display: none;
                    width: 96px;
                    padding: 8px 0;
                    box-sizing: border-box;
                    box-shadow: 0 0 8px rgba(0,0,0,.16), 0 0 2px rgba(0,0,0,.12);// 把一个或多个下拉阴影添加到框上,水平、垂直、模糊距离、阴影大小、颜色、
                    border-radius: 4px;
                    > a {
                        width: 100%;
                        height: 40px;
                        font-size: 15px;
                        line-height: 40px;
                        text-align: center;
                        display: block;
                        color: rgba(0,0,0,.9);
                    }
                    > a:hover {
                        background: rgba(51,51,51,.1);
                    }
                }
            }
            .header-links-item.hover:hover .menu {
                position: absolute;
                top: 51px;
                left: -9px;
                background: #fff;
                display: block
            }
            .header-links-item.hover::after {
                display: inline-block;
                content: '';// 与:before及:after伪元素配合使用，来插入生成内容
                width: 8px;
                height: 8px;
                background-image: url(//s3.pstatp.com/aweme/resource/web/static/image/index/subtract_67c835d.png);
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                margin-left: 4px;
            }
        }
        .claerFloat::after {
            content: '';
            display: block;
            clear: both;// 元素的哪一侧不允许其他浮动元素,left/right/both/none/inherit
        }
        .middle {
            width: 500px;
            position: absolute;
            top: 50%;
            -webkit-transform: translateY(-50%);// 只用Y轴值的转换
            transform: translateY(-50%);
            margin-top: 50px;
            right: 150px;
            .slogan {
                float: right;
                width: 450px;
                margin-bottom: 50px;
                > img {
                    width: 100%;
                }
            }
            .btn-list {
                float: right;
                letter-spacing: -4px;
                font-size: 0;
                .icon-QRcode {
                    float: right;
                    position: relative;
                    width: 52px !important;
                    height: 52px !important;
                    background-image: url(//s3.pstatp.com/aweme/resource/web/static/image/index/download_6c60bcd.png) !important;
                    > img {
                        width: 223px;
                        position: absolute;
                        right: 0;
                        top: 0;
                        -webkit-transform: scale(0.23);
                        transform: scale(0.23);// 2D缩放转换，x、y
                        -webkit-transform-origin: top right;
                        transform-origin: top right;
                        opacity: 0;
                        -webkit-transition: .3s all;
                        transition: .3s all;
                    }
                }
                .icon-QRcode:hover img {
                    -webkit-transform: scale(1);
                    transform: scale(1);
                    opacity: 1
                }
                // 指定元素悬停，同层其他元素变化的效果
                .icon-QRcode:hover~.btn-primary {
                    opacity: 0
                }
                .btn-primary {
                    display: inline-block;
                    background: transparent;
                    border-radius: 8px;
                    margin-left: 10px;
                    width: 144px;
                    height: 53px;
                    border: 1px solid #000;
                    -webkit-transition: .15s opacity;
                    transition: .15s opacity;
                    -webkit-transition-delay: .15s;
                    transition-delay: .15s;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    box-shadow: 1px 1px 7px 2px rgba(0,0,0,.54);
                }
                .icon-ios {
                    width: 100%;
                    height: 100%;
                    display: block;
                    border-radius: 8px;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-image: url(//s3.pstatp.com/aweme/resource/web/static/image/index/appstore_548e83a.png);
                }
                .icon-andorid {
                    width: 100%;
                    height: 100%;
                    display: block;
                    border-radius: 8px;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-image: url(//s3.pstatp.com/aweme/resource/web/static/image/index/android_d461475.png);
                }
                .btn-hover:hover {
                    opacity: .5
                }
            }
        }
        .footer {
            font-size: 14px;
            width: 100%;
            background: transparent;
            text-align: center;
            position: absolute;
            bottom: 10px;
            .nav-warpper {
                color: #fff;
                text-shadow: 0 1px 2px rgba(0, 0, 0, .4);
                margin-bottom: 16px;
                > a {
                    padding: 0 5px;
                    color: #fff;
                }
            }
            .feedback-info {
                color: #fff;
                text-shadow: 0 1px 2px rgba(0, 0, 0, .4);
                > p {
                    line-height: 25px;
                }
                .gongan-box {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: flex;
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    align-items: center;
                }
                a {
                    color: #fff;
                }
            }
            .report-box {
                position: absolute;
                right: 10px;
                bottom: 3px;
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -webkit-align-items: center;
                align-items: center;
                padding: 4px 8px;
                background: #000;
                opacity: .6;
                border-radius: 4px;
                font-size: 12px;
                line-height: 17px;
                img {
                    margin-top: -1px;
                    height: 14px;
                    width: 14px;
                    margin-right: 4px;
                }
                a {
                    color: rgba(255, 255, 255, .9);
                }
            }
        }
    }
}
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym,
address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var,
b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead,
tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, 
output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
</style>