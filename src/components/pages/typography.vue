<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">標頭</div>
        <div class="card-body">
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">自定義標頭</div>
        <div class="card-body">
          <h3>
            Lorem, ipsum dolor.
            <small class="text-muted">Lorem ipsum dolor sit.</small>
          </h3>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">呈現</div>
        <div class="card-body">
        <p>使用 <code> .display-* </code></p>
          <h1 class="display-1">Display 1</h1>
          <h1 class="display-2">Display 2</h1>
          <h1 class="display-3">Display 3</h1>
          <h1 class="display-4">Display 4</h1>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">Leads</div>
        <div class="card-body">
            <p>使用 <code> .lead </code></p>
          <p class="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Duis mollis, est non commodo luctus.
          </p>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">行內文字</div>
        <div class="card-body">
          <p>You can use the mark tag to <mark>highlight</mark> text.</p>
          <p>
            <del>This line of text is meant to be treated as deleted text.</del>
          </p>
          <p>
            <s
              >This line of text is meant to be treated as no longer
              accurate.</s
            >
          </p>
          <p>
            <ins
              >This line of text is meant to be treated as an addition to the
              document.</ins
            >
          </p>
          <p><u>This line of text will render as underlined</u></p>
          <p>
            <small
              >This line of text is meant to be treated as fine print.</small
            >
          </p>
          <p><strong>This line rendered as bold text.</strong></p>
          <p><em>This line rendered as italicized text.</em></p>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">無排序清單</div>
        <div class="card-body">
          <ul class="list-unstyled">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>
              Nulla volutpat aliquam velit
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">字體權重</div>
        <div class="card-body">
          <p class="font-weight-bold">Bold text.</p>
          <p class="font-weight-bolder">
            Bolder weight text (relative to the parent element).
          </p>
          <p class="font-weight-normal">Normal weight text.</p>
          <p class="font-weight-light">Light weight text.</p>
          <p class="font-weight-lighter">
            Lighter weight text (relative to the parent element).
          </p>
          <p class="font-italic">Italic text.</p>
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