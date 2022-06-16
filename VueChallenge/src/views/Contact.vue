<template>
<form>

    <label>Name </label>
<input type="text" v-model="name">
    <label>E-mail</label>
    <input type="email" required v-model="email">
    <label> Your message</label>
    <input type="text" required v-model="message">


    <div class="terms">
<input type="checkbox" required>
<label id="label">I accept the terms and conditions</label>
    </div>

    <div class="submit">
        <button>submit</button>
    </div>

</form> 
</template>

<script>
export default{
data() {
return {
    name: "",
    email: "",
    message: ""
}
}
}

</script>

<style>
form{
    text-align: left;
    padding: 40px;
}

input{
    display: block;
}

input [type="checkbox"] {
  float: right;
}

button{
    background: #42b983;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

</style>