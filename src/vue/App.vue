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
                      <img :src=dongTaiImgUrl alt="">
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
          <primary-channel-menu class="channel-menu-itnl"></primary-channel-menu>
          <span class="tab-line-itnl none"></span>
          <primary-friendship-link></primary-friendship-link>
        </div>
      </div>
    </div>
    <div class="first-screen b-wrap">
      <div class="space-between">
        <div id="reportFirst1" class="focus-carousel home-slide report-wrap-module report-scroll-module" ></div>
        <div class="rcmd-box-wrap"></div>
      </div>
    </div>
    <div class="storey-box b-wrap"></div>
    <a href="//www.bilibili.com/v/customer-service" target="_blank" class="contact-help">联系客服</a>
  </div>
</template>

<script>
import userConSignin from '../components/international-header/user-con-signin.vue'
import biliBanner from '../components/international-header/bili-banner.vue'
import primaryChannelMenu from '../components/international-header/primary-channel-menu.vue'
import primaryFriendshipLink from '../components/international-header/primary-friendship-link.vue'
import dongTaiImgUrl from '../../static/image/动态.jpg'

export default {
  data(){
    return {
      dongTaiImgUrl
    }
  },
  components: {
    'user-con-signin': userConSignin,
    'bili-banner': biliBanner,
    'primary-channel-menu':primaryChannelMenu,
    'primary-friendship-link':primaryFriendshipLink
  }
}
</script>

<style lang="less" scoped>
.b-wrap{
  height: 108px;
  width: 1630px;
  margin: 0 auto;

  // @media screen and max-width
  // 这里的max-width要从大到小排列
  @media screen and (max-width: 1870px){
    width: 1414px;
    .friendship-link {
      width: 242px;
    }
  }
  @media screen and (max-width: 1654px){
    width: 1198px;
    .tab-line-itnl {
      margin: 0 8px;
    }
    .tab-line-itnl.none {
      margin: 0 12px 0 0;
    }
    .friendship-link {
      width: 220px;
    }
  }
  @media screen and (max-width: 1438px){
    width: 999px;
    .tab-line-itnl {
      margin: 0 8px;
    }
    .focus-carousel {
      width: 459px;
      height: 202px;
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
    .channel-menu-itnl {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 5rem;
      height: 68px;
      flex: 1;
    }
  }
  .space-between {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .focus-carousel {
    position: relative;
    width: 550px;
    height: 242px;
    overflow: hidden;
    border-radius: 2px;
    background-color: pink;
  }
}

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