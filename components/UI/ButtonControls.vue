<template>
    <div>
        <!-- Buttons -->

         <div class="controls">
             <button class="btn-form">Submit!</button>
         </div>


  

    </div>
</template>



<script>
export default {
    
}
</script>


<style lang="scss">
    
/* Стили для кнопки отправить */
.btn-form {
    width: 138px;
    height: 44px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    float:right;
    border: 1px solid   ;
    background: #416b68;
    background: -webkit-gradient(linear, left top, left bottom, from(#6da5a3), to(#416b68));
    background: -webkit-linear-gradient(top, #6da5a3, #416b68);
    background: -moz-linear-gradient(top, #6da5a3, #416b68);
    background: -ms-linear-gradient(top, #6da5a3, #416b68);
    background: -o-linear-gradient(top, #6da5a3, #416b68);
    background-image: -ms-linear-gradient(top, #6da5a3 0%, #416b68 100%);
    padding: 10.5px 21px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: rgba(255,255,255,0.1) 0 1px 0, inset rgba(255,255,255,0.7) 0 1px 0;
    -moz-box-shadow: rgba(255,255,255,0.1) 0 1px 0, inset rgba(255,255,255,0.7) 0 1px 0;
    box-shadow: rgba(255,255,255,0.1) 0 1px 0, inset rgba(255,255,255,0.7) 0 1px 0;
    text-shadow: #333333 0 1px 0;
    color: #e1e1e1;
}
.btn-form:hover {
    border: 1px solid #253737;
    text-shadow: #333333 0 1px 0;
    background: #416b68;
    background: -webkit-gradient(linear, left top, left bottom, from(#77b2b0), to(#416b68));
    background: -webkit-linear-gradient(top, #77b2b0, #416b68);
    background: -moz-linear-gradient(top, #77b2b0, #416b68);
    background: -ms-linear-gradient(top, #77b2b0, #416b68);
    background: -o-linear-gradient(top, #77b2b0, #416b68);
    background-image: -ms-linear-gradient(top, #77b2b0 0%, #416b68 100%);
    color: #fff;
 }
.btn-form:active {
    margin-top:1px;
    text-shadow: #333333 0 -1px 0;
    border: 1px solid #333333;
    background: #00e1ff;
    background: -webkit-gradient(linear, left top, left bottom, from(#ffCC00), to(#ff6600));
    background: -webkit-linear-gradient(top, #ffcc00, #ff6600);
    background: -moz-linear-gradient(top, #ffcc00, #ff6600);
    background: -ms-linear-gradient(top, #ffcc00, #ff6600);
    background: -o-linear-gradient(top, #ffcc00, #ff6600);
    background-image: -ms-linear-gradient(top, #ffcc00 0%, #ff6600 100%);
    color: #fff;
    -webkit-box-shadow: rgba(255,255,255,0) 0 1px 0, inset rgba(255,255,255,0.7) 0 1px 0;
    -moz-box-shadow: rgba(255,255,255,0) 0 1px 0, inset rgba(255,255,255,0.7) 0 1px 0;
    box-shadow: rgba(255,255,255,0) 0 1px 0, inset rgba(255,255,255,0.7) 0 1px 0;
    outline: none;
}
</style>