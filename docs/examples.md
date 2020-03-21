<div class="example-page">
  <div class="example-title-wrap">
    <vue-diagonal :deg="5" background="rgba(53,73,94,1)">
      <div class="example-content example-title">
        Examples
      </div>
    </vue-diagonal>
  </div>
  <vue-diagonal :deg="5" background="#41b883">
    <div class="example-content">
      <div>
        This is a normal one, just with Vuejs colors
      </div>
      <div>
        that are amazing
      </div>
    </div>
  </vue-diagonal>
  <vue-diagonal :deg="5" background="linear-gradient(180deg, rgba(65,184,131,1) 0%, rgba(255,170,31,1) 78%)">
    <div class="example-content">
      <div>
        You can use gradient
      </div>
      <div>
        backgrounds too
      </div>
    </div>
  </vue-diagonal>
  <vue-diagonal :deg="-7" background="radial-gradient(circle, rgba(183,63,251,1) 0%, rgba(252,180,70,1) 100%)">
    <div class="example-content">
      <div>
        And you can spice things up
      </div>
      <div>
        playing with angles
      </div>
    </div>
  </vue-diagonal>
  <vue-diagonal :deg="-3" background="url('./pattern.png')" space-after>
    <div class="example-content">
      <div>
        Or with background images but keep in mind 
      </div>
      <div>
        that images are going to be skewed
      </div>
    </div>
  </vue-diagonal>
  Here there is normal content, to avoid overlapping, the last component has "space-after" prop
  <br><br><br>
</div>
