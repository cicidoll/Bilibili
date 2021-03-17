<template>
  <div class='international-home'>
    <div id="internationalHeader" class="international-header">
      <div class="mini-header m-header">
        <div class="mini-header__content mini-header--login">
          <div class="nav-link">
            <ul class="nav-link-ul">
              <li class="nav-link-item">
                <a href="//www.bilibili.com" class="link">
                  <i class="bilifont bili-icon_dingdao_zhuzhan"></i>
                  主站
                </a>
              </li>
              <li class="nav-link-item">
                <a href="//www.bilibili.com/anime/" target="_blank" class="link">
                  番剧
                </a>
              </li>
              <li class="nav-link-item">
                <span> 
                  <a href="https://game.bilibili.com/platform/" target="_blank" class="link van-popover__reference" aria-describedby="van-popover-7750" tabindex="0">
                    游戏中心
                  </a>
                </span>
              </li>
              <li class="nav-link-item">
                <span>
                  <div role="tooltip" id="van-popover-7697" aria-hidden="true"
                       class="van-popover van-popper popover-live"
                       style="width:undefinedpx;display:none;" tabindex="0"></div>
                  <a href="//live.bilibili.com" target="_blank" class="link van-popover__reference"
                     aria-describedby="van-popover-7697" tabindex="0">
                      直播
                  </a>
                </span>
              </li>
              <li class="nav-link-item">
                <a href="//show.bilibili.com/platform/home.html?msource=pc_web" target="_blank" class="link">
                  会员购
                </a>
              </li>
              <li class="nav-link-item">
                <span>
                  <div role="tooltip" id="van-popover-1405"
                       aria-hidden="true" class="van-popover van-popper popover-manga"
                       style="width:undefinedpx;display:none;" tabindex="0">
                    <iframe src="https://manga.bilibili.com/eden/bilibili-nav-panel.html" frameborder="0" width="100%" height="100%"></iframe>
                  </div>
                  <a href="//manga.bilibili.com?from=bill_top_mnav" target="_blank"
                     class="link van-popover__reference" aria-describedby="van-popover-1405" tabindex="0">
                     漫画
                  </a>
                </span>
              </li>
              <li class="nav-link-item">
                <a href="//www.bilibili.com/v/game/match/" target="_blank" class="link">
                  赛事
                </a>
              </li>
              <li class="nav-link-item">
                <span>
                  <div role="tooltip" id="van-popover-8299" aria-hidden="true"
                       class="van-popover van-popper popover-app-download" 
                       style="width:undefinedpx;display:none;" tabindex="0">
                       <p class="txt">扫码下载手机客户端</p>
                  </div>
                  <a href="//app.bilibili.com" target="_blank"
                     class="link van-popover__reference" aria-describedby="van-popover-8299" tabindex="0">
                     <i class="bilifont bili-icon_dingdao_xiazaiapp"></i>下载APP
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <!-- nav-search-box 暂先搁置 -->
          <div class="nav-search-box"></div>
          <div class="nav-user-center">
            <div class="user-con search-icon">
              <a href="//search.bilibili.com/" target="_blank">
                <i class="bilifont bili-icon_dingdao_sousuo"></i>
              </a>
            </div>
            <div class="user-con signin">
              <!-- 这里面是一整个vue组件，包含多个按钮 -->
              <user-con-signin></user-con-signin>
            </div>
            <!-- 这里是vue组件：投稿按钮 -->
          </div>
        </div>
      </div>
      <bili-banner></bili-banner>
      <div class="b-wrap">
        <div class="primary-menu-itnl">
          <div id='primaryPageTab' class="page-tab report-wrap-module">
            <ul class="con">
              <li>
                <a href="/">
                  <div class="round">
                    <i class="bilifont bili-icon_fenqudaohang_shouye">
                    </i>
                  </div>
                  <span>首页</span>
                </a>
              </li>
              <li>
                <a href="//t.bilibili.com" target="_blank">
                  <div class="round yel">
                    <i class="bilifont bili-icon_dingdao_dongtai"></i>
                    <div class="dynamic-update">
                      <img src="static\image\动态.webp" alt="">
                      <i></i>
                    </div>
                  </div>
                  动态
                </a>
              </li>
              <li>
                <a href="//www.bilibili.com/v/popular/all" target="_blank">
                  <div class="round orange">
                    <i class="bilifont bili-remen"></i>
                  </div>
                  热门
                </a>
              </li>
              <li>
                <a href="//www.bilibili.com/v/channel/28784" target="_blank">
                  <div class="round channel">
                    <i class="bilifont bili-pindao"></i>
                    <div class="dynamic-update">
                      <i></i>
                    </div>
                  </div>
                  <span class="channel-name">频道</span>
                </a>
              </li>
            </ul>
          </div>
          <span class="tab-line-itnl"></span>
          <div id="primaryChannelMenu" class="channel-menu-itnl report-wrap-module"></div>
          <div id="primaryChannelMenu" class="channel-menu-itnl report-wrap-module">
            <span>
              <div role="tooltip" id="van-popover-1953" aria-hidden="true" class="van-popover van-popper van-popper-channel" style="width:162px;display:none;" tabindex="0">
                <!---->
                <div class="sub-container">
                  <div class="sub-item">
                    <a href="//www.bilibili.com/v/douga/mad/" class="name">MAD·AMV</a>
                    <a href="//www.bilibili.com/v/douga/mmd/" class="name">MMD·3D</a>
                    <a href="//www.bilibili.com/v/douga/voice/" class="name">短片·手书·配音</a>
                    <a href="//www.bilibili.com/v/douga/garage_kit/" class="name">手办·模玩</a>
                    <a href="//www.bilibili.com/v/douga/tokusatsu/" class="name">特摄</a>
                    <a href="//www.bilibili.com/v/douga/other/" class="name">综合</a>
                  </div>
                </div>
              </div>
              <div class="item van-popover__reference" aria-describedby="van-popover-1953" tabindex="0">
                <a href="//www.bilibili.com/v/douga/" class="name">
                  <span>动画<em>999+</em></span>
                </a>
              </div>
            </span>
            <span>
              <div class="item van-popover__reference" aria-describedby="van-popover-3004" tabindex="0">
                <a href="//www.bilibili.com/anime/" class="name"><span>番剧<em>377</em></span></a>
              </div>
            </span>
            <span>
              <div class="item van-popover__reference" aria-describedby="van-popover-3071" tabindex="0">
                <a href="//www.bilibili.com/v/music/" class="name">
                  <span>音乐<em>999+</em></span>
                </a>
              </div>
            </span>
            <span>
              <div class="item van-popover__reference" aria-describedby="van-popover-4368" tabindex="0">
                <a href="//www.bilibili.com/guochuang/" class="name">
                  <span>国创<em>803</em></span>
                </a>
              </div>
            </span>
            <span>
              <div role="tooltip" id="van-popover-3650" aria-hidden="true" class="van-popover van-popper van-popper-channel" style="width:172px;display:none;" tabindex="0">
                <div class="sub-container">
                  <div class="sub-item">
                    <a href="//www.bilibili.com/v/dance/otaku/" class="name">宅舞</a>
                    <a href="//www.bilibili.com/v/dance/hiphop/" class="name">街舞</a>
                    <a href="//www.bilibili.com/v/dance/star/" class="name">明星舞蹈</a>
                    <a href="//www.bilibili.com/v/dance/china/" class="name">中国舞</a>
                    <a href="//www.bilibili.com/v/dance/three_d/" class="name">舞蹈综合</a>
                    <a href="//www.bilibili.com/v/dance/demo/" class="name">舞蹈教程</a>
                  </div>
                </div>
              </div>
              <div class="item van-popover__reference" aria-describedby="van-popover-3650" tabindex="0">
                <a href="//www.bilibili.com/v/dance/" class="name"><span>舞蹈<em>999+</em></span></a>
              </div>
            </span>
            <span>
              <div class="item van-popover__reference" aria-describedby="van-popover-1517" tabindex="0">
                <a href="//www.bilibili.com/v/game/" class="name"><span>游戏<em>999+</em></span></a>
              </div>
            </span>
            <span>
              <div role="tooltip" id="van-popover-7227" aria-hidden="true" class="van-popover van-popper van-popper-channel" style="width:172px;display:none;" tabindex="0">
                <div class="sub-container">
                  <div class="sub-item">
                    <a href="//www.bilibili.com/v/technology/science/" class="name">科学科普</a>
                    <a href="//www.bilibili.com/v/technology/fun/" class="name">社科人文</a>
                    <a href="//www.bilibili.com/v/technology/finance/" class="name">财经</a>
                    <a href="//www.bilibili.com/v/technology/campus/" class="name">校园学习</a>
                    <a href="//www.bilibili.com/v/technology/career/" class="name">职业职场</a>
                    <a href="//www.bilibili.com/v/technology/wild/" class="name">野生技术协会</a>
                  </div>
                </div>
              </div>
              <div class="item van-popover__reference" aria-describedby="van-popover-7227" tabindex="0">
                <a href="//www.bilibili.com/v/technology/" class="name"><span>知识<em>999+</em></span></a>
              </div>
            </span>
            <span>
              <div role="tooltip" id="van-popover-1301" aria-hidden="true" class="van-popover van-popper van-popper-channel" style="width:80px;display:none;" tabindex="0">
                <div class="sub-container">
                  <div class="sub-item">
                    <a href="//www.bilibili.com/v/digital/mobile/" class="name">手机平板</a>
                    <a href="//www.bilibili.com/v/digital/pc/" class="name">电脑装机</a>
                    <a href="//www.bilibili.com/v/digital/photography/" class="name">摄影摄像</a>
                    <a href="//www.bilibili.com/v/digital/intelligence_av/" class="name">影音智能</a>
                  </div>
                </div>
              </div>
              <div class="item van-popover__reference" aria-describedby="van-popover-1301" tabindex="0">
                <a href="//www.bilibili.com/v/digital/" class="name"><span>数码<em>999+</em></span></a>
              </div>
            </span>
            <span>
              <div class="item van-popover__reference" aria-describedby="van-popover-4042" tabindex="0">
                <a href="//www.bilibili.com/v/life/" class="name"><span>生活<em>999+</em></span></a>
              </div>
            </span>
            <span>
              <div class="item van-popover__reference" aria-describedby="van-popover-3374" tabindex="0">
                <a href="//www.bilibili.com/v/kichiku/" class="name"><span>鬼畜<em>186</em></span></a>
              </div>
            </span>
            <span>
              <div class="item van-popover__reference" aria-describedby="van-popover-6827" tabindex="0">
                <a href="//www.bilibili.com/v/fashion/" class="name"><span>时尚<em>999+</em></span></a>
              </div>
            </span>
            <span>
              <div role="tooltip" id="van-popover-8729" aria-hidden="true" class="van-popover van-popper van-popper-channel" style="width:60px;display:none;" tabindex="0">
                <div class="sub-container">
                  <div class="sub-item">
                    <a href="//www.bilibili.com/v/information/hotspot/" class="name">热点</a>
                    <a href="//www.bilibili.com/v/information/global/" class="name">环球</a>
                    <a href="//www.bilibili.com/v/information/social/" class="name">社会</a>
                    <a href="//www.bilibili.com/v/information/multiple/" class="name">综合</a>
                  </div>
                </div>
              </div>
              <div class="item van-popover__reference" aria-describedby="van-popover-8729" tabindex="0">
                <a href="//www.bilibili.com/v/information/" class="name"><span>资讯<em>999+</em></span></a>
              </div>
            </span>
            <span>
              <div role="tooltip" id="van-popover-2133" aria-hidden="true" class="van-popover van-popper van-popper-channel" style="width:62px;display:none;" tabindex="0">
                <div class="sub-container">
                  <div class="sub-item">
                    <a href="//www.bilibili.com/v/ent/variety/" class="name">综艺</a>
                    <a href="//www.bilibili.com/v/ent/star/" class="name">明星</a>
                  </div>
                </div>
              </div>
              <div class="item van-popover__reference" aria-describedby="van-popover-2133" tabindex="0">
                <a href="//www.bilibili.com/v/ent/" class="name"><span>娱乐<em>999+</em></span></a>
              </div>
            </span>
            <span>
              <div role="tooltip" id="van-popover-9521" aria-hidden="true" class="van-popover van-popper van-popper-channel" style="width:84px;display:none;" tabindex="0">
                <div class="sub-container">
                  <div class="sub-item">
                    <a href="//www.bilibili.com/v/cinephile/cinecism/" class="name">影视杂谈</a>
                    <a href="//www.bilibili.com/v/cinephile/montage/" class="name">影视剪辑</a>
                    <a href="//www.bilibili.com/v/cinephile/shortfilm/" class="name">短片</a>
                    <a href="//www.bilibili.com/v/cinephile/trailer_info/" class="name">预告·资讯</a>
                  </div>
                </div>
              </div>
              <div class="item van-popover__reference" aria-describedby="van-popover-9521" tabindex="0">
                <a href="//www.bilibili.com/v/cinephile/" class="name"><span>影视<em>999+</em></span></a>
              </div>
            </span>
            <span>
              <div role="tooltip" id="van-popover-9173" aria-hidden="true" class="van-popover van-popper van-popper-channel" style="width:68px;display:none;" tabindex="0">
                <div class="sub-container">
                  <div class="sub-item">
                    <a href="//www.bilibili.com/documentary/" class="name">纪录片</a>
                    <a href="//www.bilibili.com/movie/" class="name">电影</a>
                    <a href="//www.bilibili.com/tv/" class="name">电视剧</a>
                  </div>
                </div>
              </div>
              <div class="item van-popover__reference" aria-describedby="van-popover-9173" tabindex="0">
                <a href="//www.bilibili.com/cinema/" class="name"><span>放映厅<em>193</em></span></a>
              </div>
            </span>
            <span>
              <div role="tooltip" id="van-popover-37" aria-hidden="true" class="van-popover van-popper van-popper-channel" style="width: 162px; display: none;" tabindex="0">
                <div class="sub-container">
                  <div class="sub-item">
                    <a href="//www.bilibili.com/v/life/funny" class="name">搞笑</a>
                    <a href="//www.bilibili.com/v/food" class="name">美食</a>
                    <a href="//www.bilibili.com/v/animal" class="name">动物圈</a>
                    <a href="//www.bilibili.com/v/game/stand_alone" class="name">单机游戏</a>
                    <a href="//www.bilibili.com/v/life/daily/#/530003" class="name">VLOG</a>
                  </div>
                </div>
              </div>
              <div class="item van-popover__reference" aria-describedby="van-popover-37" tabindex="0">
                <a href="javascript:;" class="name"><span>更多<em style="display: none;">--</em></span>
                <i class="bilifont bili-icon_caozuo_xiangyou-copy"></i></a>
              </div>
            </span>
          </div>
          <span class="tab-line-itnl none"></span>
          <div id="primaryFriendshipLink" class="friendship-link report-wrap-module"></div>
        </div>
      </div>
    </div>
    <div class="first-screen b-wrap"></div>
    <div class="storey-box b-wrap"></div>
    <a href="//www.bilibili.com/v/customer-service" target="_blank" class="contact-help">联系客服</a>
  </div>
</template>

<script>
import userConSignin from '../components/international-header/user-con-signin.vue'
import biliBanner from '../components/international-header/bili-banner.vue'


export default {
  components: {
    'user-con-signin': userConSignin,
    'bili-banner': biliBanner
  }
}
</script>

<style lang="less">
.international-home{
  .international-header{
    min-width: 999px;
    min-height: 56px;
    
    /* 字体抗锯齿渲染 */
    -webkit-font-smoothing: antialiased;
    font: 14px -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
    position: relative;

    .mini-header{
      position: absolute;
      /* 继承父元素的宽度，设为100% */
      z-index: 1;
      width: 100%;
      height: 56px;

      .mini-header__content{
        /* 响应式布局 */
        /* 当浏览器的可视区域小于1122px */
        @media screen and (max-width: 1122px) {
          padding: 10px 12px;
        }

        padding: 10px 24px;
        line-height: 30px;
        position: relative;
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        
        .nav-link{
          .nav-link-ul {
            height: 36px;
            display: flex;
            align-items: center;

            .nav-link-item {
              margin-right: 12px;
              .link {
                font-size: 14px;
                color: #fff;
                text-shadow: 0 1px 1px rgb(0 0 0 / 30%);
                line-height: 32px;
                white-space: nowrap;
                display: flex;

                .bili-icon_dingdao_zhuzhan:before {
                  /* 该content应该是logo图标的字符义 */
                  content: "\E72B";
                }
                .bili-icon_dingdao_zhuzhan {
                  margin-right: 6px;
                  font-size: 18px;
                  vertical-align: middle;
                }
              }
            }
          }
        }

        .nav-user-center {
          display: flex;
          /* flex-shrink 属性指定了 flex 元素的收缩规则。
          flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，
          其收缩的大小是依据 flex-shrink 的值。 */
          flex-shrink: 0;
          flex-direction: row;
          font-size: 14px;
        }
        .user-con.signin{
          display: flex;
          flex-direction: row;
        }
        /* 当窗口可视宽度小于1190px时 */
        @media screen and (max-width: 1190px){
          .user-con.search-icon{
            /* 采用flex布局 */
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .b-wrap{
      height: 108px;
      width: 1630px;
      margin: 0 auto;

      // @media screen and max-width
      // 这里的max-width要从大到小排列
      @media screen and (max-width: 1870px){
        width: 1414px;
      }
      @media screen and (max-width: 1654px){
        width: 1198px;
        .tab-line-itnl {
          margin: 0 8px;
        }
        .tab-line-itnl.none {
          margin: 0 12px 0 0;
        }
      }
      @media screen and (max-width: 1438px){
        width: 999px;
        .tab-line-itnl {
          margin: 0 8px;
        }
      }

      .primary-menu-itnl {
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        width: 100%;

        .page-tab{
          display: flex;
          align-items: center;
          .con{
            display: flex;
            li{
              cursor: pointer;
              width: 66px;
              height: 68px;
              text-align: center;
              font-size: 14px;
              white-space: nowrap;
              border: 1px solid #fff;
              border-radius: 16px;
              transition: all .3s;

              @media screen and (max-width: 1870px){
                width: 58px;
              }
              @media screen and (max-width: 1654px){
                width: 50px!important;
              }              
              @media screen and (max-width: 1438px){
                width: 50px;
              }

              .round{
                position: relative;
                width: 36px;
                height: 36px;
                background: #ff5c7c;
                border-radius: 36px;
                line-height: 36px;
                text-align: center;
                margin: 0 auto 4px;

                .bilifont{
                  color: #fff;
                  font-size: 28px;
                }

                .dynamic-update{
                  position: absolute;
                  width: 36px;
                  height: 36px;
                  left: 0;
                  top: 0;

                  img {
                    position: absolute;
                    width: 36px;
                    height: 36px;
                    left: 0;
                    top: 0;

                    border-radius: 50%;
                  }
                }
              }

              .round.yel {
                background: #fcba2a;
              }
              .round.orange {
                background: #ff716d;
              }
              .round.channel {
                background: #6dc781;
              }
              .channel-name {
                width: 64px;
                height: 20px;
                display: block;
                overflow: hidden;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                word-break: break-all;
                -webkit-line-clamp: 1;

                @media screen and (max-width: 1870px){
                  width: 58px!important;
                }
                @media screen and (max-width: 1654px){
                  width: 50px!important;
                }
                @media screen and (max-width: 1438px){
                  width: 50px!important;
                }
              }            
            }

          }
        }
      }
    }

    .van-popover {
      -webkit-font-smoothing: antialiased;
      font: 14px -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
      position: relative;
      z-index: 1000;
      margin: 0;
      padding: 0;
    }
  }
}
</style>