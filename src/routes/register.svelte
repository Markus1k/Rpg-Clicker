<script>
    let login;
    let mail;
    let password;
    let passwordCheck;
    const register = () => {
     if (passwordCheck.toLowerCase() == password.toLowerCase()) {
        console.log(login + " " + mail + " " + password)
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
<div class="font-body  flex justify-center md:h-[28rem] md:w-[25rem] h-[23rem] w-[20rem] mx-auto mt-[15rem] ">
    <div class="drop-shadow-xl text-center rounded-md bg-white">  
        <h1 class="pt-[3rem] inline-block text-center md:text-[16px] text-[14px] select-none">Представся, путник.</h1> 
        <form class="mt-[2rem]" >
            <div class="field rounded-md">
                <label class="select-none" for="login">Логин</label>
                <input type="login" class="w-[300px] md:w-[350px] md:h-[35px]" name="login"  placeholder="WorldDestroyer69" bind:value={login}/>
                
            </div>
            <div class="field rounded-md">
                <label class="select-none" for="email">Почта</label>
                <input type="email" class="w-[300px] md:w-[350px] md:h-[35px]" name="email"  placeholder="email@mail.com" bind:value={mail}/>
                
            </div>
            <div class="field rounded-md">
                <label class="select-none" for="password" >Пароль</label>
                <input type="password" class="w-[300px] md:h-[35px] md:w-[350px]" name="password"  placeholder="password" bind:value={password}/>
            </div>
            <div class="field rounded-md">
                <label class="select-none" for="password-two" >Пароль еще раз</label>
                <input type="password" class="w-[300px] md:h-[35px] md:w-[350px]" name="password-two"  placeholder="password" bind:value="{passwordCheck}"/>
            </div>
        </form>
        <button class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-md w-[250px] h-[2.5rem] text-white md:w-[300px] md:h-[3rem] md:mt-[2rem] mt-[1rem] hover:shadow-lg transition ease-in-out duration-300 text-[10px] md:text-[15px] hover:shadow-pink-500/50" on:click="{register}">Зарегистрироваться</button>
    </div>
    </div>
    <a href="/" class="text-center font-body text-white mt-[1rem] text-[14px] block mx-auto">Назад</a>