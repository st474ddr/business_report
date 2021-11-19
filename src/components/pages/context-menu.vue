<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-6">
        <div class="card shadow">
          <div class="card-header bg-white">一般樣式</div>
          <div class="card-body">
            <p class="text-muted">使用 <code>.context-menu</code></p>
            <div class="dropdown-menu context-menu static">
              <a class="dropdown-item">動作1</a>
              <a class="dropdown-item">動作2</a>
              <a class="dropdown-item">動作3</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="card shadow">
          <div class="card-header bg-white">呈現方式</div>
          <div class="card-body">
            <p class="text-muted">使用 long-press-event.js 套件</p>
            <div
              class="has-context-menu m-2 p-5 border text-center"
              data-long-press-delay="300"
              @contextmenu.prevent="showMenu($event, 1)"
            >
              <p class="user-select-none">點右鍵(手機長按)</p>
            </div>
            <div class="dropdown-menu context-menu" ref="contextMenu1">
              <h6 class="dropdown-header">目錄</h6>
              <a class="dropdown-item" href="#">動作1</a>
              <a class="dropdown-item" href="#">動作2</a>
              <div class="dropdown-divider"></div>
              <h6 class="dropdown-header">另一目錄</h6>
              <a class="dropdown-item" href="#">動作3</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="card shadow">
          <div class="card-header bg-white">有 Icon</div>
          <div class="card-body">
            <div
              class="has-context-menu m-2 p-5 border text-center"
              @contextmenu.prevent="showMenu($event, 2)"
            >
              <p class="user-select-none">點右鍵(手機長按)</p>
            </div>
            <div
              class="dropdown-menu context-menu has-icons"
              ref="contextMenu2"
            >
              <h6 class="dropdown-header">剪貼簿</h6>
              <a class="dropdown-item" href="#"
                ><i class="material-icons">content_cut</i>剪下</a
              >
              <a class="dropdown-item" href="#"
                ><i class="material-icons">content_copy</i>複製</a
              >
              <a class="dropdown-item" href="#"
                ><i class="material-icons">content_paste</i>貼上</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="card shadow">
          <div class="card-header bg-white">長型 Menu</div>
          <div class="card-body">
            <div
              class="has-context-menu m-2 p-5 border text-center"
              @contextmenu.prevent="showMenu($event, 3)"
            >
              <p class="user-select-none">點右鍵(手機長按)</p>
            </div>
            <div class="dropdown-menu context-menu has-icons" ref="contextMenu3">
              <h6 class="dropdown-header">功能表1</h6>
              <a class="dropdown-item" href="#"
                ><i class="material-icons">content_cut</i>剪下</a
              >
              <a class="dropdown-item" href="#"
                ><i class="material-icons">content_copy</i>複製</a
              >
              <a class="dropdown-item" href="#"
                ><i class="material-icons">content_paste</i>貼上</a
              >
              <h6 class="dropdown-header">功能表2</h6>
              <a class="dropdown-item" href="#"
                ><i class="material-icons">import_export</i>匯出</a
              >
              <a class="dropdown-item" href="#"
                ><i class="material-icons">file_upload</i>上傳</a
              >
              <a class="dropdown-item" href="#"
                ><i class="material-icons">file_download</i>下載</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showMenu: function (e, index) {
        let x = e.clientX;
        let y = (index == 3)?e.clientY-250:e.clientY;
      let contextMenu = "contextMenu" + index;
      this.$refs[contextMenu].style.position = "absolute";
      this.$refs[contextMenu].style.top = "0";
      this.$refs[contextMenu].style.left = "0";
      this.$refs[
        contextMenu
      ].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      console.log(this.$refs[contextMenu].style.transform);
      this.$refs[contextMenu].classList.add("show");
    },
  },
};
</script>

<style>
</style>