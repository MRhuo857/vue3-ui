<template>
    <div>
        <Topnav/>
        <div class="topnav">
            <div class="log"></div>
            <div class="menu"></div>
        </div>
        <div class="content">
            <aside v-if="asideVisible">
                <h2>组件列表</h2>
                <ul>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tab">Tab 组件</router-link>
                    </li>
                </ul>
            </aside>
            <main>内容</main>
        </div>
    </div>
</template>
<script lang="ts">
    import Topnav from '../components/Topnav.vue'
    import {inject, Ref} from 'vue';
    export default {
      components:{
        Topnav
      },
      setup(){
        const asideVisible=inject<Ref>('xxx')
        console.log(asideVisible)
        return {asideVisible}
      }
    }
</script>
<style lang="scss" scoped>
    aside{
        background: pink;
        width: 150px;
        padding: 16px;
        >h2{
            margin-bottom: 4px;
        }
        >ol{
            >li{
                padding: 4px 0;
            }
        }
        @media (max-width:500px) {
            position: fixed;
            padding-top: 70px;
            top: 0;
            left: 0;
        }
    }

</style>