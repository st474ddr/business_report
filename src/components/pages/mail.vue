<template>
  <div class="row">
    <div class="col-12 col-sm-12">
      <!-- Content Place Here -->
      <div class="inbox-app mt-4">
        <div class="inbox-toolbars-wrapper">
          <div class="toolbar-body bg-white shadow">
            <ul class="toolbar-menu">
              <li class="d-flex px-3 py-lg-3">
                <button
                  type="button"
                  class="btn btn-primary btn-sm btn-circle btn-block m-auto"
                >
                  <i class="material-icons align-middle">add</i>
                </button>
              </li>
              <li class="active">
                <a href="javascript:void()">
                  <i class="material-icons mx-auto my-2">mail_outline</i>
                  <span class="text d-md-block d-none">收件夾</span>
                </a>
              </li>
              <li>
                <a href="javascript:void()">
                  <i class="material-icons mx-auto my-2">drafts</i>
                  <span class="text d-md-block d-none">草稿</span>
                </a>
              </li>
              <li>
                <a href="javascript:void()">
                  <i class="material-icons mx-auto my-2">send</i>
                  <span class="text d-md-block d-none">已寄送</span>
                </a>
              </li>
              <li>
                <a href="javascript:void()">
                  <i class="material-icons mx-auto my-2">error_outline</i>
                  <span class="text d-md-block d-none">垃圾信</span>
                </a>
              </li>
              <li>
                <a href="javascript:void()">
                  <i class="material-icons mx-auto my-2">delete</i>
                  <span class="text d-md-block d-none">垃圾桶</span>
                </a>
              </li>
              <li>
                <a href="javascript:void()">
                  <i class="material-icons mx-auto my-2">star_outline</i>
                  <span class="text d-md-block d-none">摘要</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mail-wrapper w-100">
          <div class="bg-white d-flex px-3 py-2">
            <div class="custom-control custom-checkbox d-inline-block my-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheckAll"
              />
              <label class="custom-control-label" for="customCheckAll">
                <span> All</span>
              </label>
            </div>
            <button
              class="btn btn-default dropdown"
              id="labelDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              分類
            </button>
            <div class="dropdown-menu" aria-labelledby="labelDropdown">
              <a class="dropdown-item" href="#">社交</a>
              <a class="dropdown-item" href="#">親友</a>
              <a class="dropdown-item" href="#">重要</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">個人</a>
            </div>
            <button class="btn btn-light btn-circle">
              <i class="material-icons">sync</i>
            </button>
            <div class="flex-fill"></div>
            <div class="">
              <span class="d-none d-md-inline"> 1-4 of 115</span>
              <button class="btn btn-light btn-circle">
                <i class="material-icons">chevron_left</i>
              </button>
              <button class="btn btn-light btn-circle">
                <i class="material-icons">chevron_right</i>
              </button>
            </div>
          </div>

          <div class="mail-list-items">
            <div
              class="d-md-flex align-items-center mail-item shadow px-3 py-3"
            >
              <div class="d-flex align-items-center mail-action">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                  />
                  <label class="custom-control-label" for="customCheck1">
                    <span class="sr-only"> Checkbox</span>
                  </label>
                </div>

                <i class="material-icons pr-1" style="color: orange"
                  >star_border</i
                >
                <p class="mb-0 f-14">
                  <a href="#" class="text-dark">John</a>
                </p>
              </div>
              <div class="mail-body-preview">
                <a href="#" class="text-dark">
                  <p class="mb-0 f-14">好久不見，下禮拜有時間見面嗎?</p>
                </a>
              </div>
              <div class="ml-auto justify-content-between d-flex">
                <span class="align-items-center mail-buttons">
                  <button
                    class="
                      btn btn-transparent-dark btn-sm btn-circle btn-icon
                      ml-2
                    "
                  >
                    <i class="material-icons">archive</i>
                  </button>
                  <button
                    class="
                      btn btn-transparent-dark btn-sm btn-circle btn-icon
                      ml-2
                    "
                  >
                    <i class="material-icons">delete</i>
                  </button>
                </span>
                <span class="mail-time">5:56 PM</span>
              </div>
            </div>

            <div
              class="
                d-md-flex
                align-items-center
                mail-item
                read
                shadow
                px-3
                py-3
              "
            >
              <div class="d-flex align-items-center mail-action">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck2"
                  />
                  <label class="custom-control-label" for="customCheck2">
                    <span class="sr-only"> Checkbox</span>
                  </label>
                </div>
                <i class="material-icons pr-1" style="color: orange">star</i>
                <p class="mb-0 f-14">
                  <a href="#" class="text-dark">入學通知</a>
                </p>
              </div>
              <div class="mail-body-preview">
                <a href="#" class="text-dark">
                  <p class="mb-0 f-14">
                    恭喜您的表現合乎預期，以下為詳細附件...
                  </p>
                </a>
              </div>
              <div class="ml-auto justify-content-between d-flex">
                <span class="align-items-center mail-buttons">
                  <button
                    class="
                      btn btn-transparent-dark btn-sm btn-circle btn-icon
                      ml-2
                    "
                  >
                    <i class="material-icons">archive</i>
                  </button>
                  <button
                    class="
                      btn btn-transparent-dark btn-sm btn-circle btn-icon
                      ml-2
                    "
                  >
                    <i class="material-icons">delete</i>
                  </button>
                </span>
                <span class="mail-time">5:45 PM</span>
              </div>
            </div>

            <div
              class="
                d-md-flex
                align-items-center
                mail-item
                read
                shadow
                px-3
                py-3
                border-bottom
              "
            >
              <div class="d-flex align-items-center mail-action">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck3"
                  />
                  <label class="custom-control-label" for="customCheck3">
                    <span class="sr-only"> Checkbox</span>
                  </label>
                </div>
                <i class="material-icons pr-1" style="color: orange"
                  >star_border</i
                >
                <p class="mb-0 f-14">
                  <a href="#" class="text-dark">實習邀請</a>
                </p>
              </div>
              <div class="mail-body-preview">
                <a href="#" class="text-dark">
                  <p class="mb-0 f-14">歡迎你加入團隊!我們有最堅強的 IT 團隊，還有最優秀的環境...</p>
                </a>
              </div>
              <div class="ml-auto justify-content-between d-flex">
                <span class="align-items-center mail-buttons">
                  <button
                    class="
                      btn btn-transparent-dark btn-sm btn-circle btn-icon
                      ml-2
                    "
                  >
                    <i class="material-icons">archive</i>
                  </button>
                  <button
                    class="
                      btn btn-transparent-dark btn-sm btn-circle btn-icon
                      ml-2
                    "
                  >
                    <i class="material-icons">delete</i>
                  </button>
                </span>
                <span class="mail-time">4:32 PM</span>
              </div>
            </div>

            <div
              class="d-md-flex align-items-center mail-item shadow px-3 py-3"
            >
              <div class="d-flex align-items-center mail-action">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck13"
                  />
                  <label class="custom-control-label" for="customCheck13">
                    <span class="sr-only"> Checkbox</span>
                  </label>
                </div>
                  <i class="material-icons pr-1" style="color: orange">star_border</i>
                <p class="mb-0 f-14">
                  <a href="#" class="text-dark">系統</a>
                </p>
              </div>
              <div class="mail-body-preview">
                <a href="#" class="text-dark">
                  <p class="mb-0 f-14">
                    歡迎使用系統~您可以照著以下步驟來學習如何操作...
                  </p>
                </a>
              </div>
              <div class="ml-auto justify-content-between d-flex">
                <span class="align-items-center mail-buttons">
                  <button
                    class="
                      btn btn-transparent-dark btn-sm btn-circle btn-icon
                      ml-2
                    "
                  >
                    <i class="material-icons">archive</i>
                  </button>
                  <button
                    class="
                      btn btn-transparent-dark btn-sm btn-circle btn-icon
                      ml-2
                    "
                  >
                    <i class="material-icons">delete</i>
                  </button>
                </span>
                <span class="mail-time">Oct 25</span>
              </div>
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