<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">一般</div>
        <div class="card-body">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#defaultModal"
          >
            啟動
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="defaultModal"
            tabindex="-1"
            aria-labelledby="defaultModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="defaultModalLabel">標題</h4>
                  <button
                    type="button"
                    class="btn btn-light btn-circle dismiss"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" class="material-icons">close</span>
                  </button>
                </div>
                <div class="modal-body">這是範例</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary">確認</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">Static 模式</div>
        <div class="card-body">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            啟動
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="staticBackdrop"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="staticBackdropLabel">標題</h4>
                  <button
                    type="button"
                    class="btn btn-light btn-circle dismiss"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" class="material-icons">close</span>
                  </button>
                </div>
                <div class="modal-body">
                  當 parent 被設定為 static，此互動視窗點擊外部並不會被關閉
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary">確認</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">水平置中</div>
        <div class="card-body">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#verticalCenteredModalDemo"
          >
            啟動
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="verticalCenteredModalDemo"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="verticalCenteredModalDemoLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="verticalCenteredModalDemoLabel">
                    標題
                  </h4>
                  <button
                    type="button"
                    class="btn btn-light btn-circle dismiss"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" class="material-icons">close</span>
                  </button>
                </div>
                <div class="modal-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia eius fugit facilis, corporis quam cum officiis amet
                  quibusdam sapiente consectetur quisquam, corrupti eaque
                  accusantium ducimus ratione debitis labore! Fugit illum
                  placeat voluptatibus assumenda? Provident ad voluptatem rem
                  modi aspernatur dicta earum laboriosam id nam fugiat, quidem
                  voluptatibus! Temporibus, culpa laboriosam!
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary">確認</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">可捲動</div>
        <div class="card-body">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#scrollingModalDemo"
          >
            啟動(一般)
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="scrollingModalDemo"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="scrollingModalDemoLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="scrollingModalDemoLabel">標題</h4>
                  <button
                    type="button"
                    class="btn btn-light btn-circle dismiss"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" class="material-icons">close</span>
                  </button>
                </div>
                <div class="modal-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  repellat est facilis? Consectetur ratione libero repudiandae,
                  illum doloremque iure obcaecati optio nostrum odio possimus
                  dolores sequi. Consequatur nihil voluptas soluta, temporibus,
                  porro ipsum possimus dignissimos eum rem sequi dolor
                  repellendus totam, laudantium eligendi. Non, illum mollitia
                  eligendi in architecto ad voluptatem praesentium, beatae omnis
                  delectus aliquam iste molestias totam veritatis voluptatum?
                  Amet, reprehenderit. Esse est laboriosam maiores nostrum in
                  doloribus autem dolores aperiam molestiae iure! Praesentium
                  quaerat dolore quis, porro saepe iure voluptatem magni fugit
                  molestiae nulla corporis, a cumque, animi facere beatae eius!
                  Voluptatem illum adipisci repellat soluta maxime quisquam rem
                  doloremque, a dicta deleniti incidunt temporibus asperiores
                  corporis optio cumque quam quo? Provident harum dolorum
                  explicabo asperiores architecto, ad mollitia culpa aliquid.
                  Repellat necessitatibus sint, ipsa expedita cumque temporibus
                  facere similique, porro delectus nesciunt, tempore molestias
                  debitis! Voluptates assumenda ab hic numquam rerum sed
                  reiciendis harum distinctio quia, minus, dignissimos ad facere
                  itaque unde aliquid! Accusantium eos corrupti pariatur soluta
                  provident blanditiis, porro molestias ea eveniet impedit
                  repudiandae animi unde sint perferendis odit labore. Ullam, at
                  quam aliquam error, deserunt voluptates similique aperiam
                  deleniti temporibus voluptatem distinctio placeat asperiores
                  assumenda dolores amet recusandae? Quos dignissimos officiis
                  deserunt iste enim omnis fugit repellendus eligendi ullam iure
                  impedit quasi maxime consequatur, sed assumenda unde sint
                  temporibus. Suscipit hic autem temporibus qui, itaque dolores?
                  Ratione enim nulla nobis iusto inventore neque quis voluptas?
                  Natus suscipit ipsum eos ex, voluptatem fugiat rerum quibusdam
                  dolorum id accusantium necessitatibus illum praesentium
                  tempore optio molestias!
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary">確認</button>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#scrollingModalDemo2"
          >
            啟動(卷軸)
          </button>
          <div
            class="modal fade"
            id="scrollingModalDemo2"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="scrollingModalDemo2Label"
            aria-hidden="true"
          >
            <div
              class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="scrollingModalDemo2Label">
                    標題
                  </h4>
                  <button
                    type="button"
                    class="btn btn-light btn-circle dismiss"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" class="material-icons">close</span>
                  </button>
                </div>
                <div class="modal-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  nisi. A sapiente aliquid repellat? Dignissimos atque
                  consequuntur autem provident delectus itaque alias porro
                  quidem doloribus. Deserunt pariatur et obcaecati eligendi qui
                  in maxime, sint quisquam non assumenda ullam culpa iusto
                  asperiores eius blanditiis optio nesciunt nulla dolores iure!
                  Obcaecati tempora in laudantium iure. Similique porro autem ab
                  adipisci atque provident distinctio, vel libero pariatur error
                  nobis nam maxime debitis quas, id voluptates vero totam quis
                  quod architecto quidem reiciendis? Fugit eaque natus deleniti,
                  earum recusandae dolore praesentium magni aliquam maiores
                  quaerat sit officia asperiores similique sunt, veritatis
                  voluptates amet aliquid quidem temporibus provident in
                  architecto at quas. Culpa quibusdam debitis laboriosam porro,
                  fuga optio mollitia, id delectus quaerat dolores vero cum
                  corrupti qui quae aut fugiat quam? Enim sed nihil explicabo
                  sequi maiores, ipsam minima quas nemo minus, facilis eum,
                  laudantium facere nulla. Eaque, odio. Odio ullam modi libero
                  perspiciatis quis exercitationem vel quaerat rem maiores!
                  Soluta, commodi quas. Iste asperiores quaerat eveniet
                  laudantium dolores amet eos recusandae facere. Impedit,
                  voluptate tenetur repudiandae repellat mollitia expedita esse
                  ratione provident dignissimos natus fugiat soluta sequi rem
                  eos similique ex consequatur. Ut, aperiam! Repudiandae nulla
                  vero consectetur inventore placeat temporibus reiciendis ullam
                  explicabo sapiente illum. Illum, dignissimos repellendus
                  placeat quidem distinctio explicabo dolor cumque accusantium
                  ut nobis laboriosam repudiandae reprehenderit facere nulla!
                  Asperiores nobis ullam, eum vel non, debitis nihil recusandae
                  nostrum distinctio minima provident maxime labore quaerat enim
                  maiores quo aliquid, sit quidem delectus magni rerum
                  consectetur architecto dicta molestias. Aspernatur, et amet.
                  Dignissimos, laborum dicta. Veritatis voluptas laboriosam,
                  voluptatibus, iure laborum aperiam magni consequatur nostrum
                  odio accusamus corrupti perferendis vero, iste nemo aspernatur
                  sapiente ducimus. Ut odit recusandae itaque culpa delectus
                  tenetur eaque, consequatur adipisci in facere sed cumque
                  minima nemo mollitia ipsum vero iusto ab repudiandae natus ea.
                  Dolorem similique quidem aspernatur possimus distinctio
                  asperiores nemo, recusandae expedita sapiente consequuntur
                  reiciendis? Explicabo, omnis repudiandae, magnam impedit
                  asperiores error a architecto assumenda facilis nesciunt,
                  nobis ut quidem doloribus quisquam repellendus minima ipsa est
                  soluta vel voluptates doloremque dolorem alias. Facilis amet
                  quia, aspernatur nostrum dolor est dolorem fuga! In nam
                  accusantium, ipsa suscipit dolorem expedita vel corrupti autem
                  quas id tenetur exercitationem laborum nesciunt beatae atque
                  sed facere ducimus dignissimos, placeat cupiditate, rem eos
                  tempore et nemo. Neque, deleniti delectus, ipsum a explicabo
                  cum itaque ratione debitis impedit obcaecati maiores
                  voluptatum! Quidem architecto quaerat ducimus, in ut beatae
                  porro quam?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary">確認</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">超連結&提示</div>
        <div class="card-body">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#toolTipModal"
          >
            啟動
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="toolTipModal"
            tabindex="-1"
            aria-labelledby="toolTipModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="toolTipModalLabel">標題</h4>
                  <button
                    type="button"
                    class="btn btn-light btn-circle dismiss"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" class="material-icons">close</span>
                  </button>
                </div>
                <div class="modal-body">
                  <h5>超連結</h5>
                  <p>
                    點擊此
                    <a
                      href="#"
                      role="button"
                      class="btn btn-secondary popover-test"
                      title="Popover title"
                      data-toggle="popover"
                      data-content="Popover body content is set in this attribute."
                      >按鈕</a
                    >
                    會觸發超連結指到標題
                  </p>
                  <hr />
                  <h5>提示</h5>
                  <p>
                    <a
                      href="#"
                      class="tooltip-test"
                      title="Tooltip 1"
                      data-toggle="tooltip"
                      >連結 1</a
                    >
                    <a
                      href="#"
                      class="tooltip-test"
                      title="Tooltip 2"
                      data-toggle="tooltip"
                      >連結 2</a
                    >
                    hover 時會提示
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary">確認</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">大尺寸</div>
        <div class="card-body">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#largeModal"
          >
            啟動
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="largeModal"
            tabindex="-1"
            aria-labelledby="largeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="largeModalLabel">題目</h4>
                  <button
                    type="button"
                    class="btn btn-light btn-circle dismiss"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" class="material-icons">close</span>
                  </button>
                </div>
                <div class="modal-body">
                  <h5>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inventore non laudantium, numquam ad quasi sequi expedita
                    cupiditate rerum nulla sit tempore dolor temporibus, est
                    neque veritatis ipsam optio voluptatem. Minus,
                    necessitatibus? Repudiandae tempore sint aliquid cupiditate
                    corporis itaque tempora labore?
                  </h5>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary">
                    儲存
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">滑入模式</div>
        <div class="card-body">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalFromRight"
          >
            從右方滑入
            <i class="material-icons">arrow_back</i>
          </button>

          <!-- Modal -->
          <div
            class="modal modal-slidein from-right fade"
            id="exampleModalFromRight"
            tabindex="-1"
            aria-labelledby="exampleModalFromRightLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="exampleModalFromRightLabel">
                   標題
                  </h4>
                  <button
                    type="button"
                    class="btn btn-light btn-circle dismiss"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" class="material-icons">close</span>
                  </button>
                </div>
                <div class="modal-body">來自右邊</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary">
                    確認
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalFromLeft"
          >
            從左方滑入
            <i class="material-icons">arrow_forward</i>
          </button>

          <!-- Modal -->
          <div
            class="modal modal-slidein from-left fade"
            id="exampleModalFromLeft"
            tabindex="-1"
            aria-labelledby="exampleModalFromLeftLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="exampleModalFromLeftLabel">
                    標題
                  </h4>
                  <button
                    type="button"
                    class="btn btn-light btn-circle dismiss"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" class="material-icons">close</span>
                  </button>
                </div>
                <div class="modal-body">來自左邊</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary">
                    確認
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalFromTop"
          >
            從上方滑入
            <i class="material-icons">arrow_downward</i>
          </button>

          <!-- Modal -->
          <div
            class="modal modal-slidein from-top fade"
            id="exampleModalFromTop"
            tabindex="-1"
            aria-labelledby="exampleModalFromTopLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="exampleModalFromTopLabel">
                    標題
                  </h4>
                  <button
                    type="button"
                    class="btn btn-light btn-circle dismiss"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" class="material-icons">close</span>
                  </button>
                </div>
                <div class="modal-body">來自上面</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary">
                    確認
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalFromBottom"
          >
            從下方滑入
            <i class="material-icons">arrow_upward</i>
          </button>

          <!-- Modal -->
          <div
            class="modal modal-slidein from-bottom fade"
            id="exampleModalFromBottom"
            tabindex="-1"
            aria-labelledby="exampleModalFromBottomLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="exampleModalFromBottomLabel">
                    標題
                  </h4>
                  <button
                    type="button"
                    class="btn btn-light btn-circle dismiss"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" class="material-icons">close</span>
                  </button>
                </div>
                <div class="modal-body">來自下面</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary">
                    確認
                  </button>
                </div>
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