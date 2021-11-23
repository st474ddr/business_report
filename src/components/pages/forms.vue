<template>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">基本樣式</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">電子信箱</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted"
                >絕不外洩</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">密碼</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >同意申請</label
              >
            </div>
            <button type="submit" class="btn btn-primary">送出</button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">有 Icons</div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label>電子信箱</label>
              <div class="input-group is-invalid">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-white">
                    <i class="material-icons f-16">email</i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control border-left-0"
                  required
                />
              </div>
              <div class="invalid-feedback">不符email格式</div>
            </div>
            <div class="mb-3">
              <label>密碼</label>
              <div class="input-group is-invalid">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white"
                    id="validatedInputGroupPrepend"
                  >
                    <i class="material-icons f-16">lock</i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control border-left-0"
                  aria-describedby="validatedInputGroupPrepend"
                  required
                />
              </div>
              <div class="invalid-feedback">
                需要大於6字元
              </div>
            </div>
            <button type="submit" class="btn btn-primary">送出</button>
          </form>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">Checkbox</div>
        <div class="card-body">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label class="form-check-label" for="defaultCheck1">
              基本樣式
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck2"
              disabled
            />
            <label class="form-check-label" for="defaultCheck2">
              Disabled 樣式
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheckDisabled1"
            />
            <label class="custom-control-label" for="customCheckDisabled1"
              >圓形樣式</label
            >
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">範圍條</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="formControlRange">技能熟練度</label>
              <input
                type="range"
                class="form-control-range"
                id="formControlRange"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">Toggle 開關</div>
        <div class="card-body">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
            />
            <label class="custom-control-label" for="customSwitch1">
              基本樣式
            </label>
          </div>
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              disabled
              id="customSwitch2"
            />
            <label class="custom-control-label" for="customSwitch2"
              >Disabled 樣式</label
            >
          </div>
          <div class="custom-control custom-switch custom-switch-sm">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch3"
            />
            <label class="custom-control-label" for="customSwitch3"
              >SM 樣式
            </label>
          </div>
          <div class="custom-control custom-switch custom-switch-md">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch4"
            />
            <label class="custom-control-label" for="customSwitch4"
              >MD 樣式
            </label>
          </div>
          <div class="custom-control custom-switch custom-switch-lg">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch5"
            />
            <label class="custom-control-label" for="customSwitch5">
              <span>LG 樣式</span>
            </label>
          </div>
          <div class="custom-control custom-switch custom-switch-xl">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch6"
            />
            <label class="custom-control-label" for="customSwitch6"
              >XL 樣式
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">大小調整</div>
        <div class="card-body">
          <input
            class="form-control form-control-lg mt-3"
            type="text"
            placeholder=".form-control-lg"
          />
          <input
            class="form-control mt-3"
            type="text"
            placeholder="Default input"
          />
          <input
            class="form-control mt-3 form-control-sm"
            type="text"
            placeholder=".form-control-sm"
          />
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">dropdown list</div>
        <div class="card-body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01"
                >條件</label
              >
            </div>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>請選擇...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect02">
              <option selected>請選擇...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <div class="input-group-append">
              <label class="input-group-text" for="inputGroupSelect02"
                >條件</label
              >
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary" type="button">
                送出
              </button>
            </div>
            <select
              class="custom-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option selected>請選擇...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div class="input-group">
            <select
              class="custom-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option selected>請選擇...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">檔案上傳</div>
        <div class="card-body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupFileAddon01"
                >上傳</span
              >
            </div>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
              />
              <label class="custom-file-label" for="inputGroupFile01"
                >請選擇檔案</label
              >
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile02"
              />
              <label
                class="custom-file-label"
                for="inputGroupFile02"
                aria-describedby="inputGroupFileAddon02"
                >請選擇檔案</label
              >
            </div>
            <div class="input-group-append">
              <span class="input-group-text" id="inputGroupFileAddon02"
                >上傳</span
              >
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="inputGroupFileAddon03"
              >
                送出
              </button>
            </div>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile03"
                aria-describedby="inputGroupFileAddon03"
              />
              <label class="custom-file-label" for="inputGroupFile03"
                >請選擇檔案</label
              >
            </div>
          </div>

          <div class="input-group">
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
              />
              <label class="custom-file-label" for="inputGroupFile04"
                >請選擇檔案</label
              >
            </div>
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="inputGroupFileAddon04"
              >
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">Radio</div>
        <div class="card-body">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              基本樣式 1
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              基本樣式 2
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="option3"
              disabled
            />
            <label class="form-check-label" for="exampleRadios3">
              Disabled 樣式
            </label>
          </div>

          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
              value="customOption1"
            />
            <label class="custom-control-label" for="customRadio1"
              >自定義樣式 1</label
            >
          </div>
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio2"
              name="customRadio"
              class="custom-control-input"
              value="customOption2"
            />
            <label class="custom-control-label" for="customRadio2"
              >自定義樣式 2</label
            >
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">表格元素</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">電子信箱</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">下拉選擇</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect2"
                >下拉多選</label
              >
              <select
                multiple
                class="form-control"
                id="exampleFormControlSelect2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">文字框</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
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