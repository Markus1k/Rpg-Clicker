<script>
    import Input from "/src/components/input.svelte";
    let login;
    let email;
    let password;
    let passwordCheck;
    const register = () => {
     if (passwordCheck.toLowerCase() == password.toLowerCase()) {
        console.log(login + " " + email + " " + password)
     }
     else {
         console.log("Ошибка, пароли не совпадают")
     }
    }

</script>
<style>

</style>
<svelte:head>
    <title>Зарегистрироваться</title>
</svelte:head>
<div class="font-body  flex justify-center md:h-[28rem] md:w-[25rem] h-[23rem] w-[20rem] mx-auto mt-[5rem] ">
    <div class="drop-shadow-xl text-center rounded-md bg-white">  
        <h1 class="pt-[3rem] inline-block text-center md:text-[16px] text-[14px] select-none">Представся, путник.</h1> 
        <form class="mt-[2rem]" >
            <div class="field rounded-md">
                <Input type="login" name="login" placeholder="Логин" bind:value={login}></Input>
            </div>
            <div class="field rounded-md">
                <Input type="email" name="email" placeholder="Почта" bind:value={email}></Input> 
            </div>
            <div class="field rounded-md">
                <Input type="password" name="password" placeholder="Пароль" bind:value={password}></Input> 
            </div>
            <div class="field rounded-md">
                <Input type="password" name="passwordtwo" placeholder="Повторите пароль" bind:value={passwordCheck}></Input> 
            </div>
        </form>
        <button class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-md w-[250px] h-[2.5rem] text-white md:w-[300px] md:h-[3rem] md:mt-[2rem] mt-[1rem] hover:shadow-lg transition ease-in-out duration-300 text-[10px] md:text-[15px] hover:shadow-pink-500/50" on:click={register}>Зарегистрироваться</button>
    </div>
    </div>
    <a href="/" class="text-center font-body text-white mt-[1rem] text-[14px] block mx-auto">Назад</a>