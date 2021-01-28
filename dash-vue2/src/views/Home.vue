<template>
<div class="">
    <NavBar />
    <CurriculumPage />
    <div class="container">
        <p>home</p>
    </div>
    
</div>
</template>

<script>
import NavBar from '../components/NavBar'
import CurriculumPage from './CurriculumPage'


export default {
    components: {
        NavBar,
        CurriculumPage
    },
    setup(){
        
    }
    
}
</script>