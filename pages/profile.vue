<template>
  <div class="contain">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;border: 0px solid; box-shadow: rgba(152, 152, 152, 0.2) 0px 2px 8px 1px;border-radius:10px;padding:10px;">
      <b-row no-gutters>
        <b-col md="4">
          <vs-card>
            <template #img>
              <img src="https://i.imgflip.com/3b0s3p.jpg" alt="" style="width:300px;">
            </template>
          </vs-card>
        </b-col>
        <b-col md="8">
          <b-card-body>
            <div style="color:grey;font-size:1.5rem;margin-left:5px;">
              Muh Aziz Iqbal
            </div>
            <div style="color:grey;font-size:0.8rem;margin-left:5px;">
              info@aziziqbal.com
            </div>
            <!-- <vs-button
              size="small"
              upload
              color="blue"
              style="margin-top:10px;width:100px;border:solid 1px grey;"
              border
              @click="dialog=true"
              >
              Ubah Profil
            </vs-button> -->
            <vs-button
              size="small"
              style="margin-top:10px;width:100px;"

              @click="dialog=true"
              >
              Ubah Profil
            </vs-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <div style="box-shadow: rgba(152, 152, 152, 0.2) 0px 2px 8px 1px;border-radius:10px;padding:10px;margin-top:20px;">
      <b-nav tabs>
        <b-nav-item>Biodata Diri</b-nav-item>
        <b-nav-item>Daftar Penumpang</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'home',
    dialog: false,
    page:1,
  })
}
</script>

<style>
.contain {
  max-width:500px;
  background-color:blue;
  margin: 0 auto;
  height: 100%;
  padding:15px;
}
</style>
