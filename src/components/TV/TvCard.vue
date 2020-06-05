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
                    <div class="col-8">
                        <mdb-progress :height="20"  :value="item.vote_average * 10" color="blue" />
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
  mdbProgress
} from "mdbvue";
export default {
  name: "MovieCard",
  props: ["item"],
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbView,
    mdbMask,
    mdbProgress
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
  }
  img {
      width: 100%;
  }
}
</style>
