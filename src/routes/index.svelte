<!--Landing login/register page-->

<script>


</script>
<svelte:head>
    <title>Ихтифаль</title>
</svelte:head>
<style>
:global(body) {
    overflow: hidden;
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(3,135,204,1) 53%, rgba(0,212,255,1) 100%);
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100%;
    height: 100vh;
}


</style>

<div class="font-body  flex justify-center md:h-[25rem] md:w-[25rem] h-[20rem] w-[20rem] mx-auto mt-[15rem] ">
    <div class="drop-shadow-xl text-center rounded-md bg-white">  
        <h1 class="pt-[3rem] inline-block text-center md:text-[16px] text-[14px] select-none">Добро пожаловать в Ихтифаль,<br> Приключенец!</h1> 
        <form class="mt-[2rem]">
            <div class="field rounded-md">
                <label for="email">Логин или почта</label>
                <input type="email" class="w-[300px] md:w-[350px] md:h-[35px]" name="email"  placeholder="email@mail.com"/>
                
            </div>
            <div class="field rounded-md md:mt-[2rem]">
                <label for="password" >Пароль</label>
                <input type="password" class="w-[300px] md:h-[35px] md:w-[350px]" name="password"  placeholder="password"/>
            </div>
        </form>
        <button class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-md w-[250px] h-[2.5rem] text-white md:w-[300px] md:h-[3rem] md:mt-[2rem] mt-[1rem] hover:shadow-lg transition ease-in-out duration-300 hover:shadow-pink-500/50">Войти</button>
    </div>
</div>
<a href="/register" class="text-center font-body text-white mt-[1rem] text-[14px] block mx-auto bottom">Зарегистрироваться</a>
<footer class="text-white font-body md:text-[.8rem] text-[.5rem] mt-[5rem] text-center shadow-md md:w-[30rem] animate-wiggle w-[20rem] mx-auto rounded-md select-none">
    Данный проект находиться в стадии бета тестирования. В нём могут присутствовать ошибки и неточности. 
</footer>