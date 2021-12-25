<script>
    export let placeholder = '';
    export let type = '';
    export let name = '';

    export let value = '';
  const handleInput = (event) => {
    if (type === 'number') {
      value = Number(event.target.value);
    } else {
      value = event.target.value;
    }
  };
</script>
<input type="{type}" class="w-[300px] md:w-[350px] ml-[20px] mr-[20px] md:ml-[40px] md:mr-[40px] md:h-[35px] mt-[15px] border-solid border-2 border-indigo-100" name="{name}"  placeholder="{placeholder}" {value} on:change
on:input={handleInput}/>
