<template>
  <div class="contain">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;border: 0px solid; box-shadow: rgba(152, 152, 152, 0.2) 0px 2px 8px 1px;border-radius:10px;padding:10px;">
      <b-row no-gutters>
        <b-col md="4">
          <vs-card>
            <template #img>
              <img src="https://cdn.dribbble.com/users/1210339/screenshots/2767019/avatar18.gif" alt=""
              style="object-fit:contain;width:300px;height:150px;">
            </template>
          </vs-card>
        </b-col>
        <b-col md="8">
          <b-card-body>
            <div style="color:grey;font-size:1.5rem;margin-left:5px;">
              Lallo Admin
            </div>
            <div style="color:grey;font-size:0.8rem;margin-left:5px;">
              info@lallo.com
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <div style="box-shadow: rgba(152, 152, 152, 0.2) 0px 2px 8px 1px;border-radius:10px;padding:10px;margin-top:20px;">
      <b-tabs content-class="mt-3">
        <b-tab title="Biodata Diri" lazy>
          <div style="margin-top:30px;padding:10px;">
            <vs-input
              type="text"
              placeholder="Lallo"
              label="Nama Lengkap"
              block
            />
            <vs-input
              type="text"
              placeholder="info@lallo.com"
              label="Email"
              style="margin-top:35px;"
              block
            />
            <vs-input
              type="text"
              placeholder="Lombok"
              label="Alamat"
              style="margin-top:35px;"
              block
            />
            <vs-input
              type="text"
              placeholder="08529319234"
              label="Nomor Telepon"
              style="margin-top:35px;"
              block
            />
            <vs-input
              type="text"
              placeholder="Laki-Laki"
              label="Jenis Kelamin"
              style="margin-top:35px;"
              block
            />
            <vs-input
              type="text"
              placeholder="Lombok, 21 Nov 1996"
              label="TTL"
              style="margin-top:35px;"
              block
            />
            <vs-input
              type="text"
              placeholder="Mahasiswa"
              label="Pekerjaan"
              style="margin-top:35px;"
              block
            />
            <vs-button
              size="small"
              block
              style="margin-top:20px;"
              @click="dialog=true"
              >
              Ubah Profil
            </vs-button>
          </div>
        </b-tab>
        <b-tab title="Daftar Penumpang" lazy>
          b
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'home',
    dialog: false,
    page:1,
    biodata: true,
    daftar: false,
  }),
  methods: {
    biodataDiri() {
      this.biodata = true
      this.daftar = false
    },
    daftarPenumpang() {
      this.biodata = false
      this.daftar = true
    }
  }
}
</script>

<style scoped>
.contain {
  max-width:500px;
  background-color:white;
  margin: 0 auto;
  height: 100%;
  padding:15px;
  margin-top:57px;
}
</style>
