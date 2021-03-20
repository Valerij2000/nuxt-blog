<template>
    <div>
        
    

        <textarea 

        
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)">




        </textarea>
        



    </div>
</template>



<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: 'Enter',
        }
    }
}
</script>


<style lang="scss" scoped>
   
textarea {
    background: rgba(255, 255, 255, 0.4); 
    width: 500px;
    height: 110px;
    border: 2px solid rgba(190, 179, 240, 0.4);
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box; 
    display:block;
    font-family: 'Open Sans', sans-serif;
    font-size:18px;
    font-weight: 300;
    color:rgb(60, 72, 245);
    padding-left:25px;
    padding-right:20px;
    padding-top:12px;
    margin-bottom:20px;
    overflow:hidden;
     &:focus {
        outline-color: #17a2b8;
    }
}

</style>