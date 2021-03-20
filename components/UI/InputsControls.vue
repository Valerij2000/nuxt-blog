<template>
    <div>
        
    

        <input 

        :placeholder="placeholder"
        :type="type"
        v-bind="$attrs"
        :value="value"
        :required="required"
        @input="$emit('input', $event.target.value)"

        
        
        >


    </div>
</template>



<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text',
        },
        value: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: 'Enter',
        },
         required: {
            type: Boolean,
            default: true,
        },
    }
}
</script>


<style lang="scss" scoped>

    /* Поля ввода */
input {
   width: 500px;
    height: 48px;
    border: 2px solid rgba(190, 179, 240, 0.4);
    border-radius: 4px;
    background-clip: padding-box; 
    display:block;
    font-family: 'Open Sans', sans-serif;
    font-size:18px;
    font-weight: 300;    
    color:rgb(60, 72, 245);
    padding-left:20px;
    padding-right:20px;
    margin-bottom:20px;
    &:focus {
        outline-color: #17a2b8;
    }
}

</style>