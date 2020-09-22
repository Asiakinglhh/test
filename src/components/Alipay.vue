<template>
<div class="main">
    <div class="header">
        <div class="nav">
            <!-- <a-icon type="alipay-circle" /> -->
            <div class="logo"></div>
            <img class="ipv6" src="https://img.alicdn.com/tfs/TB1DeJxnAY2gK0jSZFgXXc5OFXa-86-64.png" alt="">
            <div class="entry">
                <span>我已有支付宝账户</span>
                <el-button type="text" @click="signOn">快速登录</el-button>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="content">
            <div class="wrap">
                <div class="slogan"></div>
                <div class="mid">
                    <div class="main-entry">
                        <el-button type="primary" icon="el-icon-s-custom" @click="developerLogin">我是服务商</el-button>
                        <el-button type="primary" icon="el-icon-user" @click="personalDeveloperLogin">我是开发者</el-button>
                        <a href="javascript:;" class="seller-login">
                            <span class="title"><i class="seller"></i>我是商家用户</span>
                            <span class="seller-entry alipay" @click="sellerLoginAlipay">我是支付宝商家</span>
                            <span class="inerval-line"></span>
                            <span class="seller-entry koubei" @click="sellerLoginKoubei">我是口碑商家</span>
                            <s></s>
                        </a>
                        <el-button type="primary" icon="el-icon-user-solid" @click="personalLogin">我是个人用户</el-button>
                    </div>
                </div>
            </div>
        </div>
        <el-carousel class="back" indicator-position="none" arrow="never" :interval="4000">
            <el-carousel-item v-for="(item, key) in imageUrl" :key="key">
                <div class="item" :style="{'background-image': 'url('+item+')'}"></div>
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="footer">
        <div class="nav-links">
            <ul>
                <a href="https://www.antfin.com/" target="_blank" seed="">蚂蚁集团</a>
                <a-divider type="vertical" />
                <a href="https://p.alipay.com/portal/home.htm" target="_blank" seed="">服务商平台</a>
                <a-divider type="vertical" />
                <a href="https://www.alipay.com" target="_blank" seed="">支付宝</a>
                <a-divider type="vertical" />
                <a href="https://yebprod.alipay.com/yeb/index.htm" target="_blank" seed="">余额宝</a>
                <a-divider type="vertical" />
                <a href="https://b.alipay.com/?ynsrc=zhuzhanA" target="_blank" seed="">蚂蚁商家中心</a>
                <a-divider type="vertical" />
                <a href="https://www.xin.xin" target="_blank" seed="">芝麻信用</a>
                <a-divider type="vertical" />
                <a href="https://loan.mybank.cn/" target="_blank" seed="">蚂蚁微贷</a>
                <a-divider type="vertical" />
                <a href="https://www.mybank.cn/index.htm" target="_blank" seed="">网商银行</a>
                <a-divider type="vertical" />
                <a href="https://open.alipay.com/platform/home.htm?from=zhuzhanfooter20160818" target="_blank" seed="">开放平台</a>
                <a-divider type="vertical" />
                <a href="https://talent.alibaba.com/" target="_blank" seed="">诚征英才</a>
                <a-divider type="vertical" />
                <a href="https://ab.alipay.com/i/lianxi.htm" target="_blank" seed="">联系我们</a>
                <a-divider type="vertical" />
                <a href="https://global.alipay.com/index.htm" target="_blank" seed="">International Business</a>
            </ul>
        </div>
        <div class="ownership">
            <span>
                <a href="https://gw.alipayobjects.com/mdn/member_frontWeb/afts/img/A*HRidS7r0hgoAAAAAAAAAAABkARQnAQ">经营许可证编号：合字B2-20190046</a>
                <a style="margin-left:10px;" href="http://www.beian.miit.gov.cn">网站备案：沪ICP备15027489号</a>
            </span>
        </div>
        <div class="nav-icons">
            <a href="https://fun.alipay.com/certificate/zfxkz.htm" class="pic1" target="_blank"></a>
            <a href="https://sealinfo.verisign.com/splash?form_file=fdf/splash.fdf&amp;dn=WWW.ALIPAY.COM&amp;zh_cn" class="pic2" target="_blank"></a>
            <a href="javascript:;" class="pic3" target="_blank"></a>
            <a href="https://gw.alipayobjects.com/mdn/rms_fb4804/afts/img/A*AXv7QaOCsLQAAAAAAAAAAABkARQnAQ" class="pic4" target="_blank"></a>
            <a href="https://fun.alipay.com/certificate/index.htm" class="pic7" target="_blank"></a>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'alipay',
    data() {
        return {
            imageUrl: [
                "https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg",
                "https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg",
                "https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg"
            ],
        }
    },
    methods: {
        signOn() {
            window.open('https://auth.alipay.com/login/index.htm?goto=https%3A%2F%2Fwww.alipay.com%2F', '_self');
        },
        developerLogin() {
            location.href = "https://p.alipay.com/portal/home.htm";
        },
        personalDeveloperLogin() {
            location.href = "https://open.alipay.com/platform/home.htm?from=wwwalipay";
        },
        sellerLoginAlipay() {
            location.href = "https://b.alipay.com/?ynsrc=zhuzhanA";
        },
        sellerLoginKoubei() {
            location.href = "https://e.alipay.com/index.htm?from=zhuzhan20160927";
        },
        personalLogin() {
            location.href = "https://www.alipay.com/";
        }
    },
    mounted() {
        document.title = '支付宝 知托付';
        $('body').css('overflow', 'hidden')
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.main {
    font: 12px/1.5 "Microsoft YaHei", tahoma, arial, Hiragino Sans GB, \5b8b\4f53;
    // overflow: hidden;
    .header {
        position: fixed;
        width: 100%;
        top: 20px;
        left: 0;
        z-index: 999;

        .nav {
            width: 80%;
            height: 30px;
            line-height: 30px;
            margin: 0 auto;

            // /deep/ i {
            //   float: left;
            //   display: block;
            //   svg {
            //     width: 25px;
            //     height: 25px;
            //   }
            // }
            .logo {
                float: left;
                background-image: url(https://gw.alipayobjects.com/mdn/member_frontWeb/afts/img/A*h7o9Q4g2KiUAAAAAAAAAAABkARQnAQ);
                display: block;
                width: 70px;
                height: 25px;
                background-position: 0 0;
                background-repeat: no-repeat;
                background-size: 70px;
            }

            .ipv6 {
                float: left;
                height: 23px;
                margin-left: 20px;
            }

            .entry {
                float: right;
                color: white;

                span {
                    color: #bfbfbf;
                }

                .el-button {
                    font-size: 12px;
                    color: white;
                    margin: 0 6.8px;
                    padding: 0;
                    border: 0 none transparent;
                    height: 16px;
                    :hover {
                        color: #00bbee;
                    }
                }
            }
        }
    }

    .container {
        width: 100%;
        height: 100%;
        background-color: #fff;

        .content {
            width: 1200px;
            height: 100%;
            margin: 0 auto;

            .wrap {
                position: absolute;
                left: 0;
                top: 20%;
                width: 100%;
                text-align: center;
                z-index: 3;

                .slogan {
                    width: 600px;
                    height: 200px;
                    background: url(https://img.alicdn.com/tps/TB1POhqIFXXXXXbXFXXXXXXXXXX.png) no-repeat 0 0;
                    display: inline-block;
                    background-size: 600px;
                }
                .mid {
                    width: 100%;
                    .main-entry {
                        width: 740px;
                        height: 50px;
                        margin: 15px auto 0;
                        button {
                            background-color: #00a3ee;
                            border-color: #00a3ee;

                            display: block;
                            text-decoration: none;
                            float: left;
                            text-align: center;
                            cursor: pointer;
                            border-radius: 8px;
                            font-size: 14px;
                            letter-spacing: 1px;
                            height: 50px;
                            width: 170px;
                            color: #ffffff;
                            // line-height: 50px;
                            position: relative;
                            overflow: hidden;
                            margin: 0 20px 0 0;
                            /deep/ i {
                                position: absolute;
                                left: 20px;
                                top: 14px;
                                display: block;
                                width: 24px;
                                height: 24px;
                            }
                            /deep/ span {
                                // font-size: 15px;
                                margin-left: 36px;
                            }
                        }

                        // 按钮动画效果
                        button:hover {
                            background-color: #00aaee;
                            opacity: 1;
                        }
                        a:hover s {
                            background-color: #00aaee;
                            opacity: 1;
                        }
                        a.personal-developer-login, a.personal-login, a.seller-login {
                            transition: all .3s ease-in-out;
                            -webkit-transition: all .3s ease-in-out;
                            -moz-transition: all .3s ease-in-out;
                            -o-transition: all .3s ease-in-out;
                        }
                        a:hover {
                            height: 100px;
                            margin-top: -25px;
                            .title {
                                display: none;
                            }
                            .seller-entry, .inerval-line {
                                display: block;
                            }
                        }
                        // 按钮动画效果

                        a {
                            display: block;
                            text-decoration: none;
                            float: left;
                            text-align: center;
                            cursor: pointer;
                            border-radius: 8px;
                            font-size: 14px;
                            letter-spacing: 1px;
                            height: 50px;
                            width: 170px;
                            color: #ffffff;
                            line-height: 50px;
                            position: relative;
                            overflow: hidden;
                            margin: 0 20px 0 0;

                            .title {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                z-index: 2;
                                padding-left: 36px;
                                .seller {
                                    background-image: url(https://img.alicdn.com/tps/TB12JNkIFXXXXXBXXXXXXXXXXXX.png);
                                }
                                i {
                                    position: absolute;
                                    left: 20px;
                                    top: 14px;
                                    background: url(https://img.alicdn.com/tps/TB1uh30IpXXXXXKXVXXXXXXXXXX.png) no-repeat 0 0;
                                    display: block;
                                    width: 24px;
                                    height: 24px;
                                    background-size: 24px;
                                    font-size: normal;
                                }
                            }
                            .seller-entry {
                                display: none;
                                z-index: 2;
                                position: relative;
                                height: 50px;
                            }
                            .inerval-line {
                                display: none;
                                width: 150px;
                                margin: 0 auto;
                                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                                position: relative;
                                height: 0;
                                z-index: 2;
                            }
                        }
                        s {
                            background-color: #00a3ee;
                            opacity: .9;
                            display: block;
                            border-radius: 8px;
                            height: 100%;
                            width: 100%;
                            position: absolute;
                            top: 0;
                        }
                        :last-child {
                            margin-right: 0;
                        }
                    }
                }
            }
        }

        .back {
            bottom: 70px;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            overflow: hidden;

            :first-child {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: visible;
            }

            .item {
                background: #fff none no-repeat center center;
                background-size: cover;
            }
        }
    }
    .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 65px;
        background-color: white;
        z-index: 99;
        .nav-links {
            width: 99%;
            height: 20px;
            margin: 0 auto;
            text-align: center;
            overflow: hidden;
        }
        ul {
            padding-left: 5px;
            list-style: none;
            margin: 0;
            a {
                display: inline-block;
                margin: 2px;
                color: #666;
            }
            .ant-divider {
                margin: 6.7px;
            }
        }
        .ownership {
            text-align: center;
            height: 20px;
            line-height: 25px;
            a{
                color: #666;
            }
        }
        .nav-icons {
            width: 250px;
            height: 30px;
            margin: 0 auto;
            text-align: center;
            a {
                width: 20px;
                display: block;
                float: left;
                margin-right: 5px;
                height: 28px;
                background: url(https://img.alicdn.com/tps/TB1.cMTIpXXXXbLXVXXXXXXXXXX.png) no-repeat 0 0;
            }
            .pic1 {
                background-position: 0px -5px;
                width: 18px;
            }
            .pic2 {
                background-position: -33px -5px;
                width: 40px;
            }
            .pic3 {
                background-position: -74px -5px;
                width: 33px;
            }
            .pic4 {
                background-position: -115px -5px;
                width: 18px;
            }
            .pic7 {
                background-position: -200px -5px;
                width: 20px;
            }
        }
    }
}
</style>
