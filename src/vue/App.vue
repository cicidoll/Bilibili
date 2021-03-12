<template>
  <div class='international-home'>
    <div class="international-header report-wrap-module">
      <!-- class="report-wrap-module" 原网页未找到相关CSS定义-->
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
          <div class="nav-search-box"></div>
          <div class="nav-user-center"></div>
        </div>
      </div>
      <div class="first-screen b-wrap"></div>
      <div class="storey-box b-wrap"></div>
      <a href="//www.bilibili.com/v/customer-service" target="_blank" class="contact-help">联系客服</a>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style>
.international-header {
  min-width: 999px;
  min-height: 56px;
}
.mini-header {
  position: absolute;
  z-index: 1;
  /* 继承父元素的宽度，设为100% */
  width: 100%;
  height: 56px;
}

@media screen and (max-width: 1122px) {
  .mini-header__content {
    padding: 10px 12px;
  }  
}

.mini-header__content {
  box-sizing: border-box;
  padding: 10px 24px;
  line-height: 30px;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

ol, ul {
    list-style: none;
}

.nav-link .nav-link-ul {
  height: 36px;
  display: flex;
  align-items: center;
}

.nav-link .nav-link-ul .nav-link-item {
  margin-right: 12px;
}

.nav-link .nav-link-ul .nav-link-item .link {
  font-size: 14px;
  color: #fff;
  text-shadow: 0 1px 1px rgb(0 0 0 / 30%);
  line-height: 32px;
  white-space: nowrap;
  display: flex;
}

.nav-link .bili-icon_dingdao_zhuzhan {
  margin-right: 6px;
  font-size: 18px;
  vertical-align: middle;
}

.bili-icon_dingdao_zhuzhan:before {
    content: "\E72B";
}

* ::selection {
  background: #73c9e5;
  color: inherit;
}
::selection {
  background: #1890ff;
  color: #fff;
}
</style>