<template>
<div>
  <div class="row">
    <div class="col-12 col-sm-12">
      <div class="card shadow">
        <div class="card-body">
          <div id="calendar"></div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="eventModal"
    tabindex="-1"
    aria-labelledby="eventModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="eventModalLabel">新增事件</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="event-name" class="col-form-label"
                >事件主旨</label
              >
              <input type="text" class="form-control" id="event-name" />
            </div>
            <div class="form-group">
              <label for="basic_input" class="col-form-label">日期</label>
              <input type="date" class="form-control" id="basic_input" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            關閉
          </button>
          <button type="button" class="btn btn-primary">
            新增事件
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

 
<script>
import '../../assets/js/page/calendar'
export default {
  
};
</script>

<style>
</style>