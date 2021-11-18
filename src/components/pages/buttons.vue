<template>
  <div>
    <div class="page-header">
      <span class="h2">按鈕</span>
      <small>盡量點</small>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">一般按鈕</div>
          <div class="card-body">
            <p class="text-muted">使用 <code>.btn .btn-*</code></p>
            <div class="btn-list">
              <button type="button" class="btn btn-primary">Primary</button>
              <button type="button" class="btn btn-secondary">Secondary</button>
              <button type="button" class="btn btn-success">Success</button>
              <button type="button" class="btn btn-danger">Danger</button>
              <button type="button" class="btn btn-warning">Warning</button>
              <button type="button" class="btn btn-info">Info</button>
              <button type="button" class="btn btn-light">Light</button>
              <button type="button" class="btn btn-dark">Dark</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">漸層按鈕</div>
          <div class="card-body">
            <p class="text-muted">使用 <code>.btn .btn-transparent-*</code></p>
            <div class="btn-list">
              <button type="button" class="btn btn-transparent-primary">
                Primary
              </button>
              <button type="button" class="btn btn-transparent-secondary">
                Secondary
              </button>
              <button type="button" class="btn btn-transparent-success">
                Success
              </button>
              <button type="button" class="btn btn-transparent-danger">
                Danger
              </button>
              <button type="button" class="btn btn-transparent-warning">
                Warning
              </button>
              <button type="button" class="btn btn-transparent-info">
                Info
              </button>
              <button type="button" class="btn btn-transparent-light">
                Light
              </button>
              <button type="button" class="btn btn-transparent-dark">
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">邊框按鈕</div>
          <div class="card-body">
            <p class="text-muted">使用 <code>.btn .btn-outline-*</code></p>
            <div class="btn-list">
              <button type="button" class="btn btn-outline-primary">
                Primary
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Secondary
              </button>
              <button type="button" class="btn btn-outline-success">
                Success
              </button>
              <button type="button" class="btn btn-outline-danger">
                Danger
              </button>
              <button type="button" class="btn btn-outline-warning">
                Warning
              </button>
              <button type="button" class="btn btn-outline-info">Info</button>
              <button type="button" class="btn btn-outline-light">Light</button>
              <button type="button" class="btn btn-outline-dark">Dark</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">禁止按鈕</div>
          <div class="card-body">
            <p class="text-muted">使用 <code>.btn .disabled</code></p>
            <div class="btn-list">
              <button type="button" class="btn btn-primary" disabled>
                Primary
              </button>
              <button type="button" class="btn btn-secondary" disabled>
                Secondary
              </button>
              <button type="button" class="btn btn-success" disabled>
                Success
              </button>
              <button type="button" class="btn btn-danger" disabled>
                Danger
              </button>
              <button type="button" class="btn btn-warning" disabled>
                Warning
              </button>
              <button type="button" class="btn btn-info" disabled>Info</button>
              <button type="button" class="btn btn-light" disabled>
                Light
              </button>
              <button type="button" class="btn btn-dark" disabled>Dark</button>
            </div>
          </div>
        </div>
      </div>
    
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">漣波動畫按鈕</div>
          <div class="card-body">
            <p class="text-muted">使用 <code>.btn .btn-ripple</code></p>
            <div class="btn-list">
              <button type="button" class="btn btn-primary btn-ripple">
                Primary
              </button>
              <button type="button" class="btn btn-secondary btn-ripple">
                Secondary
              </button>
              <button type="button" class="btn btn-success btn-ripple">
                Success
              </button>
              <button type="button" class="btn btn-danger btn-ripple">
                Danger
              </button>
              <button type="button" class="btn btn-warning btn-ripple">
                Warning
              </button>
              <button type="button" class="btn btn-info btn-ripple">
                Info
              </button>
              <button type="button" class="btn btn-light btn-ripple">
                Light
              </button>
              <button type="button" class="btn btn-dark btn-ripple">
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">動畫按鈕</div>
          <div class="card-body">
            <p class="text-muted">
              使用 <code>.btn .btn-animated</code> 配合 icon <code>i</code>
            </p>
            <div class="btn-list">
              <button type="button" class="btn btn-lg btn-primary btn-animated">
                <i class="material-icons">star</i>
                <span>加入願望清單</span>
              </button>
              <button type="button" class="btn btn-success btn-animated">
                <i class="material-icons">shopping_cart</i>
                <span>購物車</span>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-info btn-animated"
              >
                <i class="material-icons">call</i>
                <span>致電</span>
              </button>
              <button
                type="button"
                class="btn btn-xs btn-outline-danger btn-animated"
              >
                <i class="material-icons">favorite</i>
                <span>喜歡</span>
              </button>
              <button
                type="button"
                class="btn btn-outline-dark rounded-pill btn-animated"
              >
                <i class="material-icons">notifications</i>
                <span>通知</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">圓形按鈕</div>
          <div class="card-body">
            <p class="text-muted">
              使用 <code>.btn-circle</code> 配合 icon <code>i</code>
            </p>
            <div class="btn-list">
              <button class="btn btn-primary btn-lg btn-circle">
                <i class="material-icons">star</i>
              </button>
              <button class="btn btn-success btn-circle">
                <i class="material-icons">shopping_cart</i>
              </button>
              <button class="btn btn-outline-dark btn-sm btn-circle">
                <i class="material-icons">add_shopping_cart</i>
              </button>
              <button class="btn btn-outline-danger btn-xs btn-circle">
                <i class="material-icons">alarm_add</i>
              </button>
              <button class="btn btn-warning btn-circle">
                <i class="material-icons">tag_faces</i>
              </button>
              <button class="btn btn-info btn-circle">
                <i class="material-icons">favorite</i>
              </button>
              <button class="btn btn-secondary btn-circle">
                <i class="material-icons">fastfood</i>
              </button>
              <button class="btn btn-light btn-circle">
                <i class="material-icons">free_breakfast</i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">方形按鈕</div>
          <div class="card-body">
            <p class="text-muted">
              使用 <code>.btn-square</code> 配合 icon <code>i</code>
            </p>
            <div class="btn-list">
              <button class="btn btn-primary btn-lg btn-square">
                <i class="material-icons">star</i>
              </button>
              <button class="btn btn-success btn-square">
                <i class="material-icons">shopping_cart</i>
              </button>
              <button class="btn btn-outline-dark btn-sm btn-square">
                <i class="material-icons">add_shopping_cart</i>
              </button>
              <button class="btn btn-outline-danger btn-xs btn-square">
                <i class="material-icons">alarm_add</i>
              </button>
              <button class="btn btn-warning btn-square">
                <i class="material-icons">tag_faces</i>
              </button>
              <button class="btn btn-info btn-square">
                <i class="material-icons">favorite</i>
              </button>
              <button class="btn btn-secondary btn-square">
                <i class="material-icons">fastfood</i>
              </button>
              <button class="btn btn-light btn-square">
                <i class="material-icons">free_breakfast</i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">圓邊按鈕</div>
          <div class="card-body">
            <p class="text-muted">使用 <code>.btn .rounded-pill</code></p>
            <div class="btn-list">
              <button type="button" class="btn btn-default rounded-pill">
                Default
              </button>
              <button type="button" class="btn btn-primary rounded-pill">
                Primary
              </button>
              <button type="button" class="btn btn-secondary rounded-pill">
                Secondary
              </button>
              <button type="button" class="btn btn-success rounded-pill">
                Success
              </button>
              <button type="button" class="btn btn-danger rounded-pill">
                Danger
              </button>
              <button type="button" class="btn btn-warning rounded-pill">
                Warning
              </button>
              <button type="button" class="btn btn-info rounded-pill">
                Info
              </button>
              <button type="button" class="btn btn-light rounded-pill">
                Light
              </button>
              <button type="button" class="btn btn-dark rounded-pill">
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">圓邊外框按鈕</div>
          <div class="card-body">
            <p class="text-muted">
              使用 <code>.btn .rounded-pill .btn-outline-*</code>
            </p>
            <div class="btn-list">
              <button
                type="button"
                class="btn btn-outline-primary rounded-pill"
              >
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary rounded-pill"
              >
                Secondary
              </button>
              <button
                type="button"
                class="btn btn-outline-success rounded-pill"
              >
                Success
              </button>
              <button type="button" class="btn btn-outline-danger rounded-pill">
                Danger
              </button>
              <button
                type="button"
                class="btn btn-outline-warning rounded-pill"
              >
                Warning
              </button>
              <button type="button" class="btn btn-outline-info rounded-pill">
                Info
              </button>
              <button type="button" class="btn btn-outline-light rounded-pill">
                Light
              </button>
              <button type="button" class="btn btn-outline-dark rounded-pill">
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">按鈕尺寸</div>
          <div class="card-body">
            <p class="text-muted">
              大按鈕: <code>.btn-lg</code> 小按鈕:
              <code>.btn-sm</code> 超小按鈕: <code>.btn-xs</code>
            </p>
            <div class="btn-list">
              <button type="button" class="btn btn-primary btn-xs">
                超小按鈕
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                小按鈕
              </button>
              <button type="button" class="btn btn-primary">中等按鈕</button>
              <button type="button" class="btn btn-primary btn-lg">
                大按鈕
              </button>
            </div>
            <div class="btn-list">
              <button type="button" class="btn btn-outline-primary btn-xs">
                超小按鈕
              </button>
              <button type="button" class="btn btn-outline-primary btn-sm">
                小按鈕
              </button>
              <button type="button" class="btn btn-outline-primary">
                中等按鈕
              </button>
              <button type="button" class="btn btn-outline-primary btn-lg">
                大按鈕
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">按鈕+icon</div>
          <div class="card-body">
            <p class="text-muted">
              使用 <code>.btn-icon</code> 配合 icon <code>i</code>,
              <code>span</code> 可以輸入文字<br />
            </p>
            <div class="btn-list">
              <button type="button" class="btn btn-primary btn-with-icon">
                <i class="material-icons">star</i>
                加入願望清單
              </button>
              <button type="button" class="btn btn-success btn-with-icon">
                <span>購物車</span>
                <i class="material-icons">shopping_cart</i>
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-with-icon"
              >
                <i class="material-icons">notifications</i>
                <span>警告</span>
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-with-icon"
              >
                <i class="material-icons">favorite</i>
                <span>喜歡</span>
              </button>
              <button
                type="button"
                class="btn btn-outline-warning rounded-pill btn-with-icon"
              >
                <i class="material-icons">lock</i>
                <span>鎖定</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">純底線按鈕</div>
          <div class="card-body">
            <div class="btn-list">
              <button type="button" class="btn btn-underline-primary">
                Primary
              </button>
              <button type="button" class="btn btn-underline-secondary">
                Secondary
              </button>
              <button type="button" class="btn btn-underline-success">
                Success
              </button>
              <button type="button" class="btn btn-underline-danger">
                Danger
              </button>
              <button type="button" class="btn btn-underline-warning">
                Warning
              </button>
              <button type="button" class="btn btn-underline-info">Info</button>
              <button type="button" class="btn btn-underline-light">
                Light
              </button>
              <button type="button" class="btn btn-underline-dark">Dark</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">下拉按鈕</div>
          <div class="card-body">
            <div class="btn-list">
              <div class="bd-example">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-primary dropdown-toggle btn-icon"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="material-icons">star</i>
                    <span>Primary</span>
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">4</a>
                  </div>
                </div>
                <!-- /btn-group -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Secondary
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">4</a>
                  </div>
                </div>
                <!-- /btn-group -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-success dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Success
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">4</a>
                  </div>
                </div>
                <!-- /btn-group -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-info dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Info
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">4</a>
                  </div>
                </div>
                <!-- /btn-group -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-warning dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Warning
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">4</a>
                  </div>
                </div>
                <!-- /btn-group -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-danger dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Danger
                  </button>
                  <div
                    class="dropdown-menu"
                    style="
                      position: absolute;
                      will-change: transform;
                      top: 0px;
                      left: 0px;
                      transform: translate3d(0px, 38px, 0px);
                    "
                  >
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">4</a>
                  </div>
                </div>
                <!-- /btn-group -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">按鈕群組</div>
          <div class="card-body">
            <p class="text-muted">
              使用 <code>.btn-group</code> 建立群組<br />
              使用 <code>.btn-group-vertical</code> 決定垂直或水平
            </p>
            <div class="row">
              <div class="col-sm-12 col-xs-12">
                <div class="btn-group btn-group-xs">
                  <button class="btn btn-outline-primary">1</button>
                  <button class="btn btn-outline-primary">2</button>
                  <button class="btn btn-outline-primary">3</button>
                </div>
              </div>
              <div class="col-sm-12 col-xs-12">
                <div class="btn-group mt-4">
                  <button type="button" class="btn btn-outline-success">
                    1
                  </button>
                  <button type="button" class="btn btn-success">2</button>
                  <button type="button" class="btn btn-outline-success">
                    3
                  </button>
                  <button type="button" class="btn btn-outline-success">
                    4
                  </button>
                </div>
              </div>
              <div class="col-sm-12 col-xs-12">
                <div class="btn-group-vertical mt-4">
                  <button class="btn btn-outline-success">1</button>
                  <button class="btn btn-outline-success">2</button>
                  <button class="btn btn-outline-success">3</button>
                </div>
              </div>
              <div class="col-sm-12 mt-3">
                <div class="btn-group btn-group-justified">
                  <a class="btn btn-primary" role="button">1</a>
                  <a class="btn btn-primary" role="button">2</a>
                  <a class="btn btn-primary" role="button">3</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white text-dark">區塊按鈕</div>
          <div class="card-body">
            <p class="text-muted">使用 <code>.btn .btn-block</code></p>
            <div class="btn-list">
              <button type="button" class="btn btn-primary btn-block">
                Primary
              </button>
              <button type="button" class="btn btn-secondary btn-block">
                Secondary
              </button>
              <button type="button" class="btn btn-success btn-block">
                Success
              </button>
              <button type="button" class="btn btn-danger btn-block">
                Danger
              </button>
              <button type="button" class="btn btn-warning btn-block">
                Warning
              </button>
              <button type="button" class="btn btn-info btn-block">Info</button>
              <button type="button" class="btn btn-light btn-block">
                Light
              </button>
              <button type="button" class="btn btn-dark btn-block">Dark</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>