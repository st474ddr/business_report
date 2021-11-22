<template>
  <div class="row">
    <div class="col-12 col-sm-12 mt-3">
      <div class="bg-white p-4">
        <h4 class="mb-4">摺疊按鈕</h4>
        <p>
          <a
            class="btn btn-primary mr-2"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            超連結開啟
          </a>
          <button
            class="btn btn-primary mr-2"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            按鈕開啟
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body shadow bg-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, distinctio labore iure, nemo assumenda reiciendis, quod temporibus fugit minima eos sequi inventore excepturi.
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-12 mt-3">
      <div class="bg-white shadow p-4">
        <h4 class="card-title mb-4">多個目標切換</h4>
        <div class="py-3">
          <p>每個 button 開啟不同內容</p>
          <p>
            <a
              class="btn btn-primary mr-2"
              data-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
              >內容1</a
            >
            <button
              class="btn btn-primary mr-2"
              type="button"
              data-toggle="collapse"
              data-target="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            >
              內容2
            </button>
            <button
              class="btn btn-primary mr-2"
              type="button"
              data-toggle="collapse"
              data-target=".multi-collapse"
              aria-expanded="false"
              aria-controls="multiCollapseExample1 multiCollapseExample2"
            >
              全擴展
            </button>
          </p>
          <div class="row">
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card shadow card-body bg-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis quisquam sint accusamus sapiente fugiat possimus, cupiditate vero deleniti eos?
                </div>
              </div>
            </div>
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapseExample2">
                <div class="card shadow card-body bg-light">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ab repellendus culpa, dolores ipsum quisquam ea eius numquam natus. Sapiente!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-12">
      <div class="card">
        <div class="card-body shadow">
          <h4 class="card-title mb-4">摺疊 Tabs</h4>
          <div class="accordion" id="accordionExample">
            <div class="card shadow">
              <div class="card-header bg-primary">
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left text-white"
                    type="button"
                    id="headingOne"
                    data-toggle="collapse"
                    data-target="#accordionOne"
                    aria-expanded="false"
                    aria-controls="accordionOne"
                  >
                    Tab 1
                  </button>
                </h2>
              </div>

              <div
                id="accordionOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugit, quaerat eaque quia architecto modi fugiat eos, esse itaque eveniet neque numquam qui libero possimus? Consequuntur corrupti magnam earum ex.
                </div>
              </div>
            </div>
            <div class="card shadow">
              <div class="card-header bg-primary">
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left text-white collapsed"
                    type="button"
                    id="headingTwo"
                    data-toggle="collapse"
                    data-target="#accordionTwo"
                    aria-expanded="false"
                    aria-controls="accordionTwo"
                  >
                   Tab 2
                  </button>
                </h2>
              </div>
              <div
                id="accordionTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quos sapiente saepe enim veniam velit beatae consequatur eveniet sint, optio in sequi, tenetur, ullam ut deleniti dolorem molestias! Eos, ullam?
                </div>
              </div>
            </div>
            <div class="card shadow">
              <div class="card-header bg-primary">
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left text-white collapsed"
                    type="button"
                    id="headingThree"
                    data-toggle="collapse"
                    data-target="#accordionThree"
                    aria-expanded="false"
                    aria-controls="accordionThree"
                  >
                    Tab 3
                  </button>
                </h2>
              </div>
              <div
                id="accordionThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quaerat illum ipsum saepe nobis sapiente placeat libero, accusantium dolore molestiae dolorem non excepturi dolor consequatur quae odio culpa dignissimos commodi!
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