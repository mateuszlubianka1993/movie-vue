<template>
  <div class="tv-card">
    <mdb-card class="tv-card-body">
      <mdb-view hover>
        <a href="#!">
          <mdb-card-image
            :src="'https://image.tmdb.org/t/p/w200/' + item.poster_path"
            alt="Card image cap"
          />
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body>
        <mdb-card-title>{{item.name}}</mdb-card-title>
        <p>({{item.first_air_date}})</p>
        <mdb-card-text class="card-overview">
            <div>
                <div class="row">
                    <div class="col-8 rating-col">
                        <mdb-rating v-model="value" disabled/>
                    </div>
                    <div class="col-4" style="font-size: 0.8rem">
                        {{item.vote_average}}/10
                    </div>
                </div>
            </div>
          </mdb-card-text>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbView,
  mdbMask,
  mdbRating
} from "mdbvue";
export default {
  name: "TvCard",
  props: ["item"],
  data() {
    return {
      value: Math.floor(this.item.vote_average/2)
    }
  },
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbView,
    mdbMask,
    mdbRating
  },
};
</script>

<style lang="scss">
.tv-card {
  padding-left: 10px;
  padding-right: 10px;
  .tv-card-body {
      .card-title {
            margin-bottom: .1rem;
        }
      .rating-col {
        padding-left: 0;
        padding-right: 0;
      }
  }
  img {
      width: 100%;
  }
}
</style>
