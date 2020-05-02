<template>
  <div id="particle">
    <div id="intro">
    <h1> Hey, there </h1>
    <h2> Thanks for interest !! </h2>
    </div>
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="150"
        shapeType="polygon"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="6"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'Particles',
};
</script>

<style scoped>
#particle {
    background: black;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
#particles-js {
    position: absolute;
    height: 100%;
    width: 100%;
}
#intro {
  color: white;
}
</style>
