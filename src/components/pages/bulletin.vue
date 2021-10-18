<template>
   <div class="row kb-board-app">
                    <div class="container-fluid kb-container">
                        <div class="row flex-row flex-sm-nowrap py-2">
                            <div class="col col-md-4 kb-board-list">
                                <div class="kb-list-body card shadow">
                                    <div class="kb-list-title">
                                        <h4 class="text-truncate p-2" contenteditable="true">新工作</h4>
                                        <span class="flex-fill"></span>
                                        <button class="btn btn-light btn-circle btn-sm btn-sm btn-ripple btn-icon">
                                            <span class="material-icons">more_vert</span>
                                        </button>
                                    </div>
                                    <div class="items">
                                        <div class="card draggable shadow" id="item-1" draggable="true" ondragstart="drag(event)">
                                            <div class="card-body p-3 theme-success">
                                                <span class="badge badge-pill badge-transparent-primary">普通件</span>
                                                <div class="pb-2 pt-1 kb-item-content">Dashboard 的排版太擠 請調整</div>
                                                <div class="row mt-3">
                                                    <div class="col">
                                                        <div class="actions">
                                                            <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple"><i class="material-icons">reply</i></button>
                                                            <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple"><i class="material-icons">delete</i></button>
                                                        </div>
                                                    </div>
                                                    <div class="col text-right">
                                                        <div class="avatar-group">
                                                            <div class="avatar avatar-xs bg-primary">
                                                                <img src="assets/images/avatar/team-1.jpg" class="avatar-img rounded-circle" alt="Avatar Image">
                                                            </div>
                                                            <div class="avatar avatar-xs bg-primary">
                                                                <img src="assets/images/avatar/team-2.jpg" class="avatar-img rounded-circle" alt="Avatar Image">
                                                            </div>
                                                            <div class="avatar avatar-xs avatar bg-primary">
                                                                <img src="assets/images/avatar/team-3.jpg" class="avatar-img rounded-circle" alt="Avatar Image">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"></div>
                                        <div class="card draggable shadow" id="item-2" draggable="true" ondragstart="drag(event)">
                                            <div class="card-body p-3 theme-danger">
                                                <span class="badge badge-pill badge-transparent-primary">急件</span>
                                                <div class="pb-2 pt-1 kb-item-content">出貨系統異常，請盡速支援</div>
                                                <div class="actions">
                                                    <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple"><i class="material-icons">reply</i>
                                                    </button>
                                                    <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple"><i class="material-icons">delete</i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"></div>
                                        <div class="card draggable shadow " id="item-7" draggable="true" ondragstart="drag(event)">
                                            <div class="card-body p-3 theme-success">
                                                <span class="badge badge-pill badge-transparent-primary">普通件</span>
                                                <div class="pb-2 pt-1 kb-item-content">下禮拜 standing meeting 準備</div>
                                                <div class="row mt-3">
                                                    <div class="col">
                                                        <div class="actions">
                                                            <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple"><i class="material-icons">reply</i></button>
                                                            <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple"><i class="material-icons">delete</i></button>
                                                        </div>
                                                    </div>
                                                    <div class="col text-right">
                                                        <div class="avatar-group">
                                                            <div class="avatar avatar-xs bg-primary">
                                                                <img src="assets/images/avatar/team-1.jpg" class="avatar-img rounded-circle" alt="Avatar Image">
                                                            </div>
                                                            <div class="avatar avatar-xs bg-primary">
                                                                <img src="assets/images/avatar/team-2.jpg" class="avatar-img rounded-circle" alt="Avatar Image">
                                                            </div>
                                                            <div class="avatar avatar-xs avatar bg-primary">
                                                                <img src="assets/images/avatar/team-3.jpg" class="avatar-img rounded-circle" alt="Avatar Image">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button class="btn btn-outline-light btn-block btn-animated btn-sm mt-3">
                                            <i class="material-icons">add</i>
                                            <span>add new</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4 kb-board-list">
                                <div class="kb-list-body card shadow">
                                    <div class="kb-list-title">
                                        <h4 class="text-truncate p-2" contenteditable="true">進度中</h4>
                                        <span class="flex-fill"></span>

                                        <button class="btn btn-light btn-circle btn-sm btn-ripple btn-icon">
                                            <span class="material-icons">more_vert</span>

                                        </button>
                                    </div>
                                    <div class="items">
                                        <div class="card draggable shadow " id="item-3" draggable="true" ondragstart="drag(event)">
                                            <div class="card-body p-3 theme-success">
                                                <span class="badge badge-pill badge-transparent-primary">普通件</span>
                                                <div class="pb-2 pt-1 kb-item-content">使用者登錄問題</div>
                                                <div class="row mt-3">
                                                    <div class="col">
                                                        <div class="actions">
                                                            <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple">
                                                                <i class="material-icons">reply</i>
                                                            </button>
                                                            <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple">
                                                                <i class="material-icons">delete</i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="col text-right">
                                                        <div class="avatar-group">
                                                            <div class="avatar avatar-xs bg-primary">
                                                                <img src="assets/images/avatar/team-1.jpg" class="avatar-img rounded-circle" alt="Avatar Image">
                                                            </div>
                                                            <div class="avatar avatar-xs bg-primary">
                                                                <img src="assets/images/avatar/team-2.jpg" class="avatar-img rounded-circle" alt="Avatar Image">
                                                            </div>
                                                            <div class="avatar avatar-xs avatar bg-primary">
                                                                <img src="assets/images/avatar/team-3.jpg" class="avatar-img rounded-circle" alt="Avatar Image">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"></div>
                                        <div class="card draggable shadow" id="item-4" draggable="true" ondragstart="drag(event)">
                                            <div class="card-body p-3 theme-danger">
                                                <span class="badge badge-pill badge-transparent-primary">擱置</span>
                                                <div class="pb-2 pt-1 kb-item-content">server 中午維修</div>
                                                <div class="actions">
                                                    <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple"><i class="material-icons">reply</i></button>
                                                    <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple"><i class="material-icons">delete</i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"></div>
                                    </div>
                                    <div class="text-center">
                                        <button class="btn btn-outline-light btn-block btn-animated btn-sm mt-3">
                                            <i class="material-icons">add</i>
                                            <span>add new</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4 kb-board-list">
                                <div class="kb-list-body card shadow">
                                    <div class="kb-list-title">
                                        <h4 class="text-truncate p-2" contenteditable="true">測試</h4>
                                        <span class="flex-fill"></span>
                                        <button class="btn btn-light btn-circle btn-sm btn-ripple btn-icon">
                                            <span class="material-icons">more_vert</span>
                                        </button>
                                    </div>
                                    <div class="items">
                                        <div class="card draggable shadow " id="item-5" draggable="true" ondragstart="drag(event)">
                                            <div class="card-body p-3 theme-success">
                                                <span class="badge badge-pill badge-transparent-primary">普通件</span>
                                                <div class="pb-2 pt-1 kb-item-content">簽核功能修正</div>
                                                <div class="row mt-3">
                                                    <div class="col">
                                                        <div class="actions">
                                                            <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple"><i class="material-icons">reply</i></button>
                                                            <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple"><i class="material-icons">delete</i></button>
                                                        </div>
                                                    </div>
                                                    <div class="col text-right">
                                                        <div class="avatar-group">
                                                            <div class="avatar avatar-xs bg-primary">
                                                                <img src="assets/images/avatar/team-1.jpg" class="avatar-img rounded-circle" alt="Avatar Image">
                                                            </div>
                                                            <div class="avatar avatar-xs bg-primary">
                                                                <img src="assets/images/avatar/team-2.jpg" class="avatar-img rounded-circle" alt="Avatar Image">
                                                            </div>
                                                            <div class="avatar avatar-xs avatar bg-primary">
                                                                <img src="assets/images/avatar/team-3.jpg" class="avatar-img rounded-circle" alt="Avatar Image">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"></div>
                                        <div class="card draggable shadow" id="item-6" draggable="true" ondragstart="drag(event)">
                                            <div class="card-body p-3 theme-danger">
                                                <span class="badge badge-pill badge-transparent-primary">擱置</span>
                                                <div class="pb-2 pt-1 kb-item-content">廣告系統版面校正</div>
                                                <div class="actions">
                                                    <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple"><i class="material-icons">reply</i></button>
                                                    <button class="btn btn-transparent-primary btn-sm btn-circle btn-ripple"><i class="material-icons">delete</i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"></div>
                                    </div>
                                    <div class="text-center">
                                        <button class="btn btn-outline-light btn-block btn-animated btn-sm mt-3">
                                            <i class="material-icons">add</i>
                                            <span>add new</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4 kb-board-list">
                                <div class="kb-list-body card shadow">
                                    <div class="kb-list-title">
                                        <h4 class="text-truncate p-2" contenteditable="true">Completed</h4>
                                        <span class="flex-fill"></span>
                                        <button class="btn btn-light btn-circle btn-sm btn-ripple btn-icon">
                                            <span class="material-icons">more_vert</span>
                                        </button>
                                    </div>
                                    <div class="items">

                                        <div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"></div>
                                    </div>
                                    <div class="text-center">
                                        <button class="btn btn-outline-light btn-block btn-animated btn-sm mt-3">
                                            <i class="material-icons">add</i>
                                            <span>add new</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {

}
</script>

<style>

</style>