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
        
        <div class="b-wrap"></div>
      </div>
      <bili-banner></bili-banner>
      <div class="b-warp"></div>
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

<style lang="less" scoped>
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
  }
}
</style>