<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-header bg-white">時程表</div>
        <div class="card-body">
          <div
            class="timeline timeline-one-side"
            data-timeline-axis-style="dashed"
            data-timeline-content="axis"
          >
            <div class="timeline-block">
              <span class="timeline-step badge-success">
                <i class="material-icons f-12">today</i>
              </span>
              <div class="timeline-content">
                <h5 class="mb-0 font-weight-bold">新 commit 沒過</h5>
                <small class="text-muted">10:30 AM</small>
                <p class="text-sm mt-1 mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum pariatur ullam at facere soluta beatae voluptas nam!
                  Repellendus iure nostrum, dicta dignissimos laboriosam fugit
                  sint impedit perspiciatis, possimus, natus facere.
                </p>
                <div class="mt-3">
                  <span class="badge badge-success badge-pill mr-1">debug</span
                  ><span class="badge badge-success badge-pill mr-1"
                    >system</span
                  >
                </div>
              </div>
            </div>
            <div class="timeline-block">
              <span class="timeline-step badge-danger"
                ><i class="material-icons f-12">alarm</i></span
              >
              <div class="timeline-content">
                <h5 class="mb-0 font-weight-bold">系統異常處理</h5>
                <small class="text-muted">10:30 AM</small>
                <p class="text-sm mt-1 mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  sint dolore dolorum qui mollitia omnis voluptates minima
                  ducimus corrupti voluptas beatae dignissimos neque ut adipisci
                  officiis modi, enim perspiciatis sunt!
                </p>
                <div class="mt-3">
                  <span class="badge badge-danger badge-pill mr-1">fix</span
                  ><span class="badge badge-success badge-pill mr-1"
                    >system</span
                  >
                </div>
              </div>
            </div>
            <div class="timeline-block">
              <span class="timeline-step badge-info"
                ><i class="material-icons f-12">thumb_up</i></span
              >
              <div class="timeline-content">
                <h5 class="mb-0 font-weight-bold">考核檢討</h5>
                <small class="text-muted">11:30 AM</small>
                <p class="text-sm mt-1 mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  sint dolore dolorum qui mollitia omnis voluptates minima
                  ducimus corrupti voluptas beatae dignissimos neque ut adipisci
                  officiis modi, enim perspiciatis sunt!
                </p>
                <div class="mt-3">
                  <span class="badge badge-info badge-pill mr-1">meeting</span
                  ><span class="badge badge-info badge-pill mr-1">dept</span>
                </div>
              </div>
            </div>
            <div class="timeline-block">
              <span class="timeline-step badge-secondary"
                ><i class="material-icons f-12">lunch_dining</i></span
              >
              <div class="timeline-content">
                <h5 class="mb-0 font-weight-bold">午餐時間</h5>
                <small class="text-muted">12:30 PM</small>
                <p class="text-sm mt-1 mb-0">好吃</p>
              </div>
            </div>
            <div class="timeline-block">
              <span class="timeline-step badge-danger"
                ><i class="material-icons f-12">grade</i></span
              >
              <div class="timeline-content">
                <h5 class="mb-0 font-weight-bold">處理倉庫出貨系統問題</h5>
                <small class="text-muted">1:30 PM</small>
                <p class="text-sm mt-1 mb-0">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus at ex distinctio quaerat ipsa eum praesentium
                  maxime? Dolores obcaecati magnam ab, omnis quia ullam id hic
                  iure tempora. Blanditiis, fuga!
                </p>
                <div class="mt-3">
                  <span class="badge badge-danger badge-pill mr-1">fix</span
                  ><span class="badge badge-success badge-pill mr-1"
                    >system</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-header bg-white">分隔式</div>
        <div class="card-body">
          <div class="timeline-one-side">
            <div class="card shadow">
              <div class="card-body">
                <span
                  class="font-weight-bold badge badge-success badge-pill mr-1"
                  >10:30 AM</span
                >
                <h5 class="mt-3 mb-0">新 commit 沒過</h5>
                <p class="text-sm mt-1 mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum pariatur ullam at facere soluta beatae voluptas nam!
                  Repellendus iure nostrum, dicta dignissimos laboriosam fugit
                  sint impedit perspiciatis, possimus, natus facere.
                </p>
                <div class="mt-3">
                  <span class="badge badge-danger badge-pill mr-1">debug</span
                  ><span class="badge badge-warning badge-pill mr-1"
                    >CI failed</span
                  >
                </div>
              </div>
            </div>
            <div class="card shadow">
              <div class="card-body">
                <span
                  class="font-weight-bold badge badge-danger badge-pill mr-1"
                  >10:30 AM</span
                >
                <h5 class="mt-3 mb-0">系統異常處理</h5>
                <p class="text-sm mt-1 mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, quod laboriosam. Maiores veniam voluptatum autem
                  laboriosam eaque ipsa incidunt expedita sed minima, impedit
                  aspernatur tempora officia voluptate ratione dolores. Saepe.
                </p>
                <div class="mt-3">
                  <span class="badge badge-danger badge-pill mr-1">fix</span
                  ><span class="badge badge-success badge-pill mr-1"
                    >system</span
                  >
                </div>
              </div>
            </div>
            <div class="card shadow">
              <div class="card-header">
                <span class="font-weight-bold badge badge-info badge-pill mr-1"
                  >11:30 AM</span
                >
                <h5 class="mt-3 mb-0">
                  安裝印表機
                  <i class="material-icons f-14">attachment</i>
                </h5>
                <p class="text-sm mt-1 mb-0">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, rerum?
                </p>
               
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