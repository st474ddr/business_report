<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-3">
        <div class="card text-white card-head-primary shadow">
          <div class="card-header">標題</div>
          <div class="card-body">
            <h5 class="card-title">Primary 次標題</h5>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="card text-white card-head-secondary shadow">
          <div class="card-header">標題</div>
          <div class="card-body">
            <h5 class="card-title">Secondary 次標題</h5>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="card text-white card-head-success shadow">
          <div class="card-header">標題</div>
          <div class="card-body">
            <h5 class="card-title">Success 次標題</h5>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="card text-white card-head-danger shadow">
          <div class="card-header">標題</div>
          <div class="card-body">
            <h5 class="card-title">Danger 次標題</h5>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="card text-dark bg-warning shadow">
          <div class="card-header">標題</div>
          <div class="card-body">
            <h5 class="card-title">Warning 次標題</h5>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="card text-white bg-info shadow">
          <div class="card-header">標題</div>
          <div class="card-body">
            <h5 class="card-title">Info 次標題</h5>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="card bg-light shadow">
          <div class="card-header">標題</div>
          <div class="card-body">
            <h5 class="card-title">Light 次標題</h5>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="card text-white bg-dark shadow">
          <div class="card-header">標題</div>
          <div class="card-body">
            <h5 class="card-title">Dark 次標題</h5>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="page-header col-sm-12 mt-5 mb-1">
        <span class="h2">控制面板卡片</span>
      </div>
      <div class="col-sm-4">
        <div class="card shadow">
          <div class="card-header bg-primary text-light">基本樣式</div>
          <div class="card-body">
            <p class="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card shadow card-head-warning" :class="{fullscreen: isFullscreen[0]}" v-if="!isClose">
          <div class="card-header">
            標題
            <div class="tools">
              <button
                class="btn btn-circle btn-light btn-sm toggle-fullscreen"
                @click.prevent="fullScreen(0)"
              >
                <i class="material-icons">fullscreen</i>
                <i class="material-icons">關閉</i>
              </button>
              <button
                class="btn btn-circle btn-light btn-sm close"
                @click.prevent="close"
              >
                <i class="material-icons">close</i>
              </button>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">
              在<code>.card-header</code> 中使用 <code>.tools</code> 配合 icon
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card text-white card-head-dark shadow" :class="{fullscreen: isFullscreen[1]}">
          <div class="card-header">
            標題
            <div class="tools">
              <button class="btn btn-xs btn-outline-light toggle-fullscreen" @click.prevent="fullScreen(1)">
                <span>全螢幕</span>
                <span>關閉</span>
              </button>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">button也能用</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card tab-card shadow" id="tab-panel-parent-1">
          <div class="card-header">
            分頁功能
            <div class="tab-btns float-right">
              <button
                class="btn btn-underline-info active"
                data-toggle="collapse"
                data-target="#tab-content-1"
              >
                第一頁
              </button>
              <button
                class="btn btn-underline-info"
                data-toggle="collapse"
                data-target="#tab-content-2"
              >
                第二頁
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="card-text">
              <p
                class="collapse fade show"
                id="tab-content-1"
                data-parent="#tab-panel-parent-1"
              >
                1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                reprehenderit.
              </p>
              <p
                class="collapse fade"
                id="tab-content-2"
                data-parent="#tab-panel-parent-1"
              >
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row page-header mt-5 mb-1">
      <span class="col h2">搭配圖片</span>
      <span class="col h2">引言</span>
      <span class="col h2">小標+連結</span>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <div class="card shadow">
          <img
            src="https://picsum.photos/200"
            class="card-img-top"
            alt="Image Cards"
          />
          <div class="card-body">
            <h5 class="card-title">標題</h5>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
            <a href="#" class="btn btn-primary">看更多</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card bg-primary text-white text-center p-3 shadow">
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
            <footer class="blockquote-footer text-white">
              <small> 某個偉大的 <cite title="Source Title">名人</cite> </small>
            </footer>
          </blockquote>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">標題</h5>
            <h6 class="card-subtitle mb-2 text-muted">小標題</h6>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
            <a href="#" class="card-link">連結1</a>
            <a href="#" class="card-link">連結2</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ isFullscreen: [false, false], isClose: false }),
  methods: {
    fullScreen: function (i) {
      this.$set(this.isFullscreen, i, !this.isFullscreen[i])
    },
    close: function () {
      this.isClose = !this.isClose;
    }
  },
};
</script>

<style>
</style>