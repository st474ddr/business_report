<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="shadow mt-3">
          <div class="card-header bg-white">基本樣式</div>
          <div class="card-body bg-white">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#">Active 狀態</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link 2</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                  >Disabled 狀態</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12">
        <div class="shadow mt-4">
          <div class="card-header bg-white">Pills 風格</div>
          <div class="card-body bg-white">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#">Active 狀態</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link 2</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                  >Disabled 狀態</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12">
        <div class="shadow mt-4">
          <div class="card-header bg-white">下拉樣式</div>
          <div class="card-body bg-white">
            <ul class="nav nav-pills">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Dropdown</a
                >
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">動作 1</a>
                  <a class="dropdown-item" href="#">動作 2</a>
                  <a class="dropdown-item" href="#">動作 3</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">動作 4</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12">
        <div class="shadow mt-4">
          <div class="card-header bg-white">切換內容</div>
          <div class="card-body bg-white">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  >首頁</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  >個人資訊</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="pills-contact-tab"
                  data-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  >聯絡資訊</a
                >
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
               這是首頁
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                這是個人資訊
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                這是聯絡資訊
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-header mt-5">
      <span class="h2">搭配 Icon</span>
      <small>UI up</small>
    </div>
    <div class="row mt-3">
      <div class="col-12 col-sm-12 p-2">
        <div class="shadow">
          <div class="card-header bg-white">加上 Icons</div>
          <div class="card-body bg-white">
            <ul
              class="nav nav-pills nav-fill flex-column flex-md-row"
              id="tabs-icons-text"
              role="tablist"
            >
              <li class="nav-item m-1 shadow">
                <a
                  class="nav-link mb-md-0 active"
                  id="tabs-icons-text-1-tab"
                  data-toggle="tab"
                  href="#tabs-icons-text-1"
                  role="tab"
                  aria-controls="tabs-icons-text-1"
                  aria-selected="true"
                  ><i class="material-icons mr-2 align-middle f-16">home</i
                  >首頁</a
                >
              </li>
              <li class="nav-item m-1 shadow">
                <a
                  class="nav-link mb-md-0"
                  id="tabs-icons-text-2-tab"
                  data-toggle="tab"
                  href="#tabs-icons-text-2"
                  role="tab"
                  aria-controls="tabs-icons-text-2"
                  aria-selected="false"
                  ><i class="material-icons mr-2 align-middle f-16"
                    >notifications</i
                  >個人資訊</a
                >
              </li>
              <li class="nav-item m-1 shadow">
                <a
                  class="nav-link mb-md-0"
                  id="tabs-icons-text-3-tab"
                  data-toggle="tab"
                  href="#tabs-icons-text-3"
                  role="tab"
                  aria-controls="tabs-icons-text-3"
                  aria-selected="false"
                  ><i class="material-icons mr-2 align-middle f-16"
                    >calendar_today</i
                  >行事曆</a
                >
              </li>
            </ul>

            <div class="card shadow my-3 mx-1">
              <div class="card-body bg-white">
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="tabs-icons-text-1"
                    role="tabpanel"
                    aria-labelledby="tabs-icons-text-1-tab"
                  >
                    <p class="description">
                      這是首頁
                    </p>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="tabs-icons-text-2"
                    role="tabpanel"
                    aria-labelledby="tabs-icons-text-2-tab"
                  >
                    <p class="description">
                      這是個人資訊
                    </p>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="tabs-icons-text-3"
                    role="tabpanel"
                    aria-labelledby="tabs-icons-text-3-tab"
                  >
                    <p class="description">
                      今天行事曆
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12">
        <div class="shadow">
          <div class="card-header bg-white">圓形 Icon Tabs</div>
          <div class="card-body bg-white">
            <ul
              class="nav nav-pills nav-pills-circle"
              id="tabs_2"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link rounded-circle active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#tabs_2_1"
                  role="tab"
                  aria-selected="true"
                >
                  <span class="nav-link-icon d-block"
                    ><i class="material-icons f-16 align-middle">home</i></span
                  >
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link rounded-circle"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#tabs_2_2"
                  role="tab"
                  aria-selected="false"
                >
                  <span class="nav-link-icon d-block"
                    ><i class="material-icons f-16 align-middle"
                      >notifications</i
                    ></span
                  >
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link rounded-circle"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#tabs_2_3"
                  role="tab"
                  aria-selected="false"
                >
                  <span class="nav-link-icon d-block"
                    ><i class="material-icons f-16 align-middle"
                      >calendar_today</i
                    ></span
                  >
                </a>
              </li>
            </ul>
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