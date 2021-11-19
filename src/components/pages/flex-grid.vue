<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header bg-white">Grid 框架</div>
        <div class="card-body">
          <p class="muted">如同 BS 的 grid system</p>
          <div class="table-responsive mt-40">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>超小裝置 <small>手機 (&lt;768px)</small></th>
                  <th>小裝置 <small>平板 (≥768px)</small></th>
                  <th>中型裝置<small>筆電 (≥992px)</small></th>
                  <th>大型裝置 <small>桌機 (≥1200px)</small></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Grid 呈現</th>
                  <td>永遠水平</td>
                  <td colspan="3">先聚合，根據 breakpoint 變成水平</td>
                </tr>
                <tr>
                  <th><code>.container</code> 最大寬度</th>
                  <td>None (auto)</td>
                  <td>750px</td>
                  <td>970px</td>
                  <td>1170px</td>
                </tr>
                <tr>
                  <th>class 前綴</th>
                  <td><code>.col-xs-</code></td>
                  <td><code>.col-sm-</code></td>
                  <td><code>.col-md-</code></td>
                  <td><code>.col-lg-</code></td>
                </tr>
                <tr>
                  <th>行（column）數</th>
                  <td colspan="4">12</td>
                </tr>
                <tr>
                  <th>最大行寬</th>
                  <td class="text-muted">Auto</td>
                  <td>60px</td>
                  <td>78px</td>
                  <td>95px</td>
                </tr>
                <tr>
                  <th>行間隙</th>
                  <td colspan="4">
                    - 覆寫 <code>variables.scss</code>: 15px (行兩側各 7.5px)
                    <br />
                    - 原先 Bootstrap 預設: 30px (行兩側各 15px )
                  </td>
                </tr>
                <tr>
                  <th>可否巢狀結構</th>
                  <td colspan="4">Y</td>
                </tr>
                <tr>
                  <th>Offsets</th>
                  <td colspan="4">Y</td>
                </tr>
                <tr>
                  <th>行排序</th>
                  <td colspan="4">Y</td>
                </tr>
              </tbody>
            </table>
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