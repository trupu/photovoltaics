<template lang="">
  <div></div>
</template>
<script>
export default {
  name: "Buttons",
};
</script>
<style lang="scss">
.button-medium,
.button-medium_reverse,
.button-small,
.button-small_reverse {
  text-transform: uppercase;
  text-shadow: 0 0 2px #000;

  transition: all 0.3s ease-in-out;

  a {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
}

.button-medium,
.button-medium_reverse {
  font-size: 20px;
  width: 180px;
  height: 60px;
  font-weight: 600;
}

.button-small,
.button-small_reverse {
  font-size: 16px;
  width: 120px;
  height: 40px;
}

.button-medium,
.button-small {
  border: 2px solid $color-secondary;
  background-color: $color-secondary;
  color: #fff;

  a {
    color: #fff;
  }

  &:hover {
    border: 2px solid #fff;
    background: none;
  }
}

.button-medium_reverse,
.button-small_reverse {
  border: 2px solid #fff;
  color: #fff;
  background: none;

  a {
    color: #fff;
  }

  &:hover {
    border: 2px solid $color-secondary;
    background-color: $color-secondary;
  }
}
</style>
