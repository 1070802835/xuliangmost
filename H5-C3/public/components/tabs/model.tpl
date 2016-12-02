<div class="tab_wrap">
          <div class="tab_titles">
              {{#each title}}
                  <div class="tab_title">
                  {{this}}
                  </div>
              {{/each}}
          </div>

          <div class="tab_contents">
             {{#each content}}
                  <div class="tab_content">
                  {{this}}
                  </div>
              {{/each}}
          </div>
      </div>


<!--<div class="input_wrap">
    <input type="text" class="input_title" placeholder='输入标签名, " , " 隔开'>
    <textarea name="input_content" class="input_content" cols="30" rows="10">
    </textarea>
    <button class="btn2">生成</button>
</div>-->
