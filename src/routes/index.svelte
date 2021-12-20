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
        <button class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-md w-[250px] h-[2.5rem] text-white md:w-[300px] md:h-[3rem] md:mt-[9rem] mt-[5rem] hover:shadow-lg transition ease-in-out duration-300 hover:shadow-pink-500/50">Войти</button>
    </div>
    <!--
    <form class="invisible">
        <div class="field rounded-md">
            <input type="email" name="email"  placeholder="email@mail.com"/>
            <label for="email">Email</label>
        </div>
        <div class="field rounded-md">
            <input type="password" name="password"  placeholder="password"/>
            <label for="password">Password</label>
        </div>
    </form>
-->
</div>

<footer class="text-white font-body md:text-[.8rem] text-[.5rem] mt-[5rem] text-center shadow-md md:w-[30rem]  w-[20rem] mx-auto rounded-md select-none">
    Данный проект находиться в стадии бета тестирования. На нём могут присутствовать ошибки и неточности. 
</footer>