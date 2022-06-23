<template>
<div>
    <hr><hr>
        <!-- lnb -->
        <div id="mySidenav" class="sidenav">            
            <ul>
                <li><NuxtLink to="/sub" class="active">기초자료 관리</NuxtLink></li>
                <li><NuxtLink to="/">작물계수 관리</NuxtLink></li>
                <li><NuxtLink to="#">수분(토양증발) 계수관리</NuxtLink></li>
                <li><NuxtLink to="#">기상관측자료관리</NuxtLink></li>
                <li><NuxtLink to="#">기준증발산량관리</NuxtLink></li>
                <li><NuxtLink to="#">토양유효수분량 관리</NuxtLink></li>
                <li><NuxtLink to="#">토양유효수분율 관리</NuxtLink></li>
            </ul>
        </div>
        <!-- //lnb -->        
        <hr><hr>
</div>
</template>

<script>
export default {
    name: "Sidebar",
}
</script>