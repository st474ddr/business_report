<template>
  <header>
    <div>
      <ul class="navbar-nav">
        <li class="nav-item icon">
          <button class="hamburger" id="hamburger-btn">
            <span class="material-icons">menu</span>
          </button>
        </li>
        <li class="flex-fill"></li>
        <!-- setting -->
        <li class="nav-item icon">
          <button
            class="nav-link"
            id="navbarDropdown"
            data-toggle="dropdown"
            data-offset="0"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="settings-btn">
              <i class="material-icons spin">settings</i>
            </div>
          </button>
          <div
            class="dropdown-menu p-0 dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <div
              class="d-flex p-3 bg-white justify-content-between border-bottom"
            >
              <h3 class="m-0">設定</h3>
            </div>
            <div class="notification-list p-3">
              <div class="card shadow-lg mb-3">
                <div class="card-body">
                  <h3 class="p-1 font-weight-bold">排版</h3>
                  <div class="custom-control custom-switch">
                    <input
                      type="radio"
                      value="box"
                      checked
                      name="layout-switch"
                      class="custom-control-input"
                      id="switch-layout-box"
                    />
                    <label class="custom-control-label" for="switch-layout-box">
                      <span>Box</span>
                    </label>
                  </div>
                  <div class="custom-control custom-switch">
                    <input
                      type="radio"
                      value="full-width"
                      name="layout-switch"
                      class="custom-control-input"
                      id="switch-layout-full-width"
                    />
                    <label
                      class="custom-control-label"
                      for="switch-layout-full-width"
                    >
                      <span>Full width</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <!--
        <li class="nav-item icon">
          <button
            class="nav-link pulse"
            id="navbarDropdown"
            data-toggle="dropdown"
            data-offset="0"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="material-icons">notifications</span>
          </button>
          <div
            class="dropdown-menu p-0 dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <div
              class="d-flex p-3 bg-white justify-content-between border-bottom"
            >
              <h3 class="m-0">Notifications</h3>
              <p class="float-right m-0">
                <a href="javascript:void()">Mark all as read</a>
              </p>
            </div>
            <div class="notification-list p-3">
              <div class="card shadow-lg mb-3">
                <div class="card-body">
                  All systems operational.
                  <small class="d-block">3 mins ago</small>
                </div>
              </div>
              <div class="card shadow-lg mb-3">
                <div class="card-body">
                  File upload successful.<small class="d-block"
                    >5 mins ago</small
                  >
                </div>
              </div>
              <div class="card shadow-lg mb-3">
                <div class="card-body">
                  Your holiday has been denied
                  <small class="d-block">10 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </li>
        -->
      </ul>
    </div>
  </header>
</template>
<script>
import "../assets/js/setting";
export default {
  name: "DashboardHeader",
  data: () => ({}),
};
</script>
<style>
</style>