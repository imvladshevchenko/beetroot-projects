<template>
  <div class="random">
    <loader v-if="loading" />
    <div v-else class="random__inner">
      <div class="random__img-wrapper">
        <img :src="`${coctail.strDrinkThumb}`" alt="" class="random__img" />
      </div>

      <div class="random__title-badge">
        <el-badge :value="coctail.strCategory" type="primary">
          <h1 class="random__title">{{ coctail.strDrink }}</h1>
        </el-badge>
        <el-tag
          :type="alcoholicBadgeColor || 'primary'"
          class="random__badge"
          >{{ coctail.strAlcoholic }}</el-tag
        >
      </div>
      <div class="random__block">
        <div :class="{ 'non-alcoholic': isAlcoholic }" class="random__info">
          <h2 class="random__subtitle">
            Recipe <IconCart class="random__icon" />
          </h2>
          <el-table :data="ingredients">
            <el-table-column prop="name" label="Ingredient name">
            </el-table-column>
            <el-table-column prop="value" label="Amount"> </el-table-column>
          </el-table>
        </div>
        <div class="random__info">
          <h2 class="random__subtitle">
            Instruction <IconBook class="random__icon" />
          </h2>
          <p>
            {{ coctail.strInstructions }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loader from '../components/loader'
import IconBook from '../components/icons/svg/book'
import IconCart from '../components/icons/svg/cart'
import { transformIngridients } from '../common/helpers'
export default {
  components: {
    IconBook,
    IconCart,
    loader
  },
  data() {
    return {
      coctail: {},
      ingredients: [],
      loading: true
    }
  },
  computed: {
    alcoholicBadgeColor() {
      return this.coctail.strAlcoholic === 'Alcoholic' ? 'success' : 'danger'
    },
    isAlcoholic() {
      return this.coctail.strAlcoholic !== 'Alcoholic'
    }
  },
  mounted() {
    this.getRandomCoctail()
  },
  methods: {
    async getRandomCoctail() {
      const { drinks } = await this.$store.dispatch('coctails/getRandomCoctail')
      this.coctail = drinks[0]
      this.ingredients = transformIngridients(
        drinks[0],
        'strIngredient',
        'strMeasure'
      )
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
.random {
  padding: 32px 0;
  &__title {
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
    margin-top: 0;
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }
  &__badge {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;
    @media screen and (min-width: 768px) {
      bottom: 0;
    }
  }
  &__title-badge {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 32px;
  }
  &__inner {
    width: 100%;
  }
  &__img-wrapper {
    width: 300px;
    height: 300px;
    margin: auto;
    margin-bottom: 32px;
    position: relative;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
  &__block {
    display: flex;
    justify-content: stretch;
    flex-direction: column;
    align-items: stretch;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
  &__info {
    @media screen and (min-width: 768px) {
      padding: 24px;
      border-right: 1px solid #67c23a;
      width: 50%;
      &:last-child {
        border-right: none;
      }
      &.non-alcoholic {
        border-color: #f56c6c;
      }
    }
  }
  &__ingredients {
    @media screen and (min-width: 768px) {
      padding: 24px;
      flex-basis: 50%;
      max-width: 50%;
    }
  }
  &__subtitle {
    margin-top: 0;
    display: flex;
    align-items: center;
  }
  &__icon {
    width: 24px;
    height: 24px;
    margin-left: 16px;
  }
}
</style>
