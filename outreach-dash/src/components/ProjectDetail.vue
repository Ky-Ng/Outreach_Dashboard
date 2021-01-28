<template>
  <div class="curriculum">
    <div class="week">
      <p>Week {{N}}</p>
    </div>
    <div class="title">
      <p>Project Title</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.curriculum {
  padding-block: 10px;
  display: flex;
  font-size: 130%;
}
.week {
  padding-left: 30px;
}
.title{
    padding-left: 60%;
}
</style>