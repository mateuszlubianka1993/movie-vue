<template>
  <div class="person-card">
    <mdb-card class="person-card-body">
      <mdb-view hover>
        <router-link :to="{ name: 'person-details', params: { id: item.id } }" >
          <mdb-card-image
            :src="'https://image.tmdb.org/t/p/w200/' + item.profile_path"
            alt="Card image cap"
          />
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </router-link>
      </mdb-view>
      <mdb-card-body>
        <mdb-card-title>{{item.name}}</mdb-card-title>
        <p></p>
        <mdb-card-text class="card-overview">
          Popularity: {{item.popularity}}
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
} from "mdbvue";
export default {
  name: "PersonCard",
  props: ["item"],
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbView,
    mdbMask,
  },
};
</script>

<style lang="scss">
.person-card {
  padding-left: 10px;
  padding-right: 10px;
  .person-card-body {
      .card-title {
            margin-bottom: .1rem;
        }
  }
  img {
      width: 100%;
  }
}
</style>
