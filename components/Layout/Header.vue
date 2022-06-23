<template>
<header id="header" class="items-center flex">
    <a class="all_menu_btn cursor-pointer" @click="openNav" :class="{'active': isMenuOpen}">
        <span></span>
        <span></span>
        <span></span>
    </a>
    <h1>
        <NuxtLink to="/"><img src="~/assets/img/layout/logo.png" alt="NEXUS 가뭄관리시스템" style=""></NuxtLink>
    </h1>

    <nav class="nav">
        <ul>
            <li><a class="cursor-pointer active">밭가뭄</a></li>
            <li><a class="cursor-pointer">논가뭄</a></li>
            <li><a class="cursor-pointer">기상가뭄</a></li>
            <li><a class="cursor-pointer">가뭄대책</a></li>
        </ul>
    </nav>

    <div class="top_set">
        <p class="login_contact">
            <strong>관리자</strong> 님 로그인하였습니다.
        </p>
        <div class="contact_time">{{ time }}</div>
        <NuxtLink to="/login" class="btn_logout">로그아웃</NuxtLink>
        <!-- <a href="" class="btn_alarm"><span class="hidden">새소식</span></a>
            <a href="" class="btn_total_search"><span class="hidden">검색</span></a> -->
    </div>
</header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            result: "",
            isMenuOpen: false,
            time: '',
            timer: null,
        }
    },
    methods: {
        openNav() {
            if (this.isMenuOpen) {
                document.getElementById("main_sec").style.marginLeft = "0px";
                document.getElementById("mySidenav").style.width = "0px";

                this.isMenuOpen = false;
            } else {
                document.getElementById("main_sec").style.marginLeft = "260px";
                document.getElementById("mySidenav").style.width = "250px";

                this.isMenuOpen = true;
            }
        },
        updateTime() {
            var cd = new Date();
            this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
        },
        zeroPadding(num, digit) {
            var zero = '';
            for (var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        }
    },
    mounted() {
        this.timer =  setInterval(this.updateTime, 1000);
        this.updateTime();
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }

}
</script>
