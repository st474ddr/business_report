<template>
  <div>
    <aside class="sidebar">
      <nav class="navbar">
        <router-link to="/">
          <a class="navbar-brand brand-title" href="#">
            <img src="../assets/images/logo.jpg" alt="" class="logo" />
          </a>
        </router-link>
      </nav>
      <nav class="navigation shadow-sm">
        <div class="navigation-arrow">
          <i class="material-icons">chevron_left</i>
        </div>

        <ul>
          <li class="separator">
            <span>功能</span>
          </li>
          <li>
            <a href="#collapseSubmenu1" class="" data-toggle="collapse">
              <span class="caret material-icons">arrow_right</span>
              <span class="icon material-icons">apps</span>
              <span class="text">應用</span>
            </a>
            <ul class="collapse" id="collapseSubmenu1">
              <li>
                <router-link to="/mail">
                  <span class="icon material-icons">remove</span>
                  <span class="text">信箱</span>
                  <span class="badge badge-transparent-danger">1</span>
                </router-link>
              </li>
              <li>
                <router-link to="/calendar">
                  <span class="icon material-icons">remove</span>
                  <span class="text">日曆</span>
                </router-link>
              </li>
              <li>
                <router-link to="/bulletin">
                  <span class="icon material-icons">remove</span>
                  <span class="text">公佈欄</span>
                </router-link>
              </li>
              <li>
                <router-link to="/contacts">
                  <span class="icon material-icons">remove</span>
                  <span class="text">聯絡方式</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#authenticationPage" class="" data-toggle="collapse">
              <span class="caret material-icons">arrow_right</span>
              <span class="icon material-icons">verified_user</span>
              <span class="text">驗證</span>
            </a>
            <ul class="collapse" id="authenticationPage">
              <li>
                <router-link to="/login">
                  <span class="icon material-icons">remove</span>
                  <span class="text">登入</span>
                </router-link>
              </li>
              <li>
                <router-link to="/register">
                  <span class="icon material-icons">remove</span>
                  <span class="text">註冊</span>
                </router-link>
              </li>
              <li>
                <router-link to="/relogin">
                  <span class="icon material-icons">remove</span>
                  <span class="text">重新登入</span>
                </router-link>
              </li>
              <li>
                <router-link to="/reset">
                  <span class="icon material-icons">remove</span>
                  <span class="text">忘記密碼</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#errorPages" class="" data-toggle="collapse">
              <span class="caret material-icons">arrow_right</span>
              <span class="icon material-icons">error</span>
              <span class="text">錯誤頁面</span>
            </a>
            <ul class="collapse" id="errorPages">
              <li>
                <router-link to="403_error"  class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">403 Page</span>
                </router-link>
              </li>
              <li>
                <router-link to="404_error" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">404 Page</span>
                </router-link>
              </li>
              <li>
                <router-link to="500_error" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">500 Page</span>
                </router-link>
              </li>
              <li>
                <router-link to="503_error" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">503 Page</span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="separator">
            <span>UI元素</span>
          </li>
          <li>
            <a href="#uiElements" class="" data-toggle="collapse">
              <span class="caret material-icons">arrow_right</span>
              <span class="icon material-icons">extension</span>
              <span class="text">元素</span>
            </a>
            <ul class="collapse" id="uiElements">
              <li>
                 <router-link to="/alert">
                  <span class="icon material-icons">remove</span>
                  <span class="text">警告</span>
                </router-link>
              </li>

              <li>
                <router-link to="/badges">
                  <span class="icon material-icons">remove</span>
                  <span class="text">標籤</span>
                </router-link>
              </li>
              <li>
                <router-link to="/buttons">
                  <span class="icon material-icons">remove</span>
                  <span class="text">按鈕</span>
                </router-link>
              </li>
              <li>
                <router-link to="/cards">
                  <span class="icon material-icons">remove</span>
                  <span class="text">卡片</span>
                </router-link>
              </li>

              <li>
                <router-link to="/context-menu">
                  <span class="icon material-icons">remove</span>
                  <span class="text">工具列目錄</span>
                </router-link>
              </li>

              <li>
                <router-link to="/icons">
                  <span class="icon material-icons">remove</span>
                  <span class="text">Icons</span>
                </router-link>
              </li>

              <li>
                <router-link to="/typography">
                  <span class="icon material-icons">remove</span>
                  <span class="text">排版</span>
                </router-link>
              </li>
              <li>
                <router-link to="/flex-grid">
                  <span class="icon material-icons">remove</span>
                  <span class="text">切版</span>
                </router-link>
              </li>
              <li>
                <router-link to="/spinners">
                  <span class="icon material-icons">remove</span>
                  <span class="text">旋轉特效</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#uiComponents" class="" data-toggle="collapse">
              <span class="caret material-icons">arrow_right</span>
              <span class="icon material-icons">backup_table</span>
              <span class="text">套件</span>
            </a>
            <ul class="collapse" id="uiComponents">
              <li>
                <router-link to="/accordians" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">摺疊面板(Accordions)</span>
                </router-link>
              </li>
              <li>
                <router-link to="/avatar" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">頭像(Avatar)</span>
                </router-link>
              </li>
              <li>
                <router-link to="/colors" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">顏色</span>
                </router-link>
              </li>
              <li>
                <router-link to="/modals" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">互動視窗(Modals)</span>
                </router-link>
              </li>
              <li>
                <router-link to="/notifications" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">通知</span>
                </router-link>
              </li>
              <li>
                <router-link to="/tabs" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">標籤(Tabs & Pills)</span>
                </router-link>
              </li>
              <li>
                <router-link to="/timeline" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">時程表</span>
                </router-link>
              </li>
              <li>
                <router-link to="/tooltips" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">提示(Tooltips)</span>
                </router-link>
              </li>
            </ul>
          </li>

          <li>
            <a href="#formStuff" class="" data-toggle="collapse">
              <span class="caret material-icons">arrow_right</span>
              <span class="icon material-icons">assignment</span>
              <span class="text">表單</span>
            </a>
            <ul class="collapse" id="formStuff">
              <li>
                <router-link to="/forms" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">表單排版</span>
                </router-link>
              </li>
              <li>
                <router-link to="/validations" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">驗證</span>
                </router-link>
              </li>
              <li>
                <router-link to="/pickers" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">選擇器</span>
                </router-link>
              </li>
              <li>
                <router-link to="/wysiwyg" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">編輯器(WYSIWYG)</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#data-grid-menu" class="" data-toggle="collapse">
              <span class="caret material-icons">arrow_right</span>
              <span class="icon material-icons">grid_on</span>
              <span class="text">表格</span>
            </a>
            <ul class="collapse" id="data-grid-menu">
              <li>
                <router-link to="/tables" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">表格</span>
                </router-link>
              </li>
              <li>
                <router-link to="/data-tables" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">報表</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#maps-menu" data-toggle="collapse">
              <span class="caret material-icons">arrow_right</span>
              <span class="icon material-icons">map</span>
              <span class="text">地圖</span>
            </a>
            <ul class="collapse" id="maps-menu">
              <li>
                <router-link to="/google-maps" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">Google Maps</span>
                </router-link>
              </li>
              <li>
                <router-link to="/vector-maps" class="">
                  <span class="icon material-icons">remove</span>
                  <span class="text">Vector Maps</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <div class="navigation-arrow right">
          <i class="material-icons">chevron_right</i>
        </div>
      </nav>
    </aside>
  </div>
</template>
<script>
import "../assets/js/menu";

export default {
  name: "DashboardSidebar",
  data: () => ({}),
};
</script>

