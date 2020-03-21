
<div class="homepage">
  <div class="half-logo">
    <vue-diagonal :deg="60" space-after
                  background="linear-gradient(180deg, rgba(53,73,94,1) 0%, rgba(53,73,94,1) 49%, rgba(65,184,131,1) 50%, rgba(65,184,131,1) 100%)">
   </vue-diagonal>
  </div><div class="half-logo">
    <vue-diagonal :deg="-60" space-after
                  background="linear-gradient(180deg, rgba(53,73,94,1) 0%, rgba(53,73,94,1) 49%, rgba(65,184,131,1) 50%, rgba(65,184,131,1) 100%)">
    </vue-diagonal>
  </div>
  <div class="homepage-title">
    This is VueDiagonal
  </div>
  <div class="homepage-description">
    The logo above is done using 2 vue-diagonal components with (more or less) the code below
  </div>
</div>

<br><br><br>

```vue
<vue-diagonal :deg="60" 
              space-after
              background="linear-gradient(180deg, rgba(53,73,94,1) 0%, rgba(53,73,94,1) 49%, rgba(65,184,131,1) 50%, rgba(65,184,131,1) 100%)">
</vue-diagonal>
<vue-diagonal :deg="-60"
              space-after
              background="linear-gradient(180deg, rgba(53,73,94,1) 0%, rgba(53,73,94,1) 49%, rgba(65,184,131,1) 50%, rgba(65,184,131,1) 100%)">
</vue-diagonal></div>
```
