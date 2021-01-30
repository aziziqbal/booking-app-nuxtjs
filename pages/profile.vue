<template>
  <div class="contain">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;border: 0px solid; box-shadow: rgba(152, 152, 152, 0.2) 0px 2px 8px 1px;border-radius:10px;padding:13px;">
      <b-row no-gutters>
        <b-col md="4">
          <vs-card>
            <template #img>
              <img src="https://cdn.dribbble.com/users/1210339/screenshots/2767019/avatar18.gif"
              style="object-fit:contain;width:300px;height:150px;">
            </template>
          </vs-card>
        </b-col>
        <b-col md="8">
          <b-card-body>
            <div style="color:grey;font-size:1.5rem;margin-left:5px;">
              {{ data.full_name }}
            </div>
            <div style="color:grey;font-size:0.8rem;margin-left:5px;">
              {{ data.email }}
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <div style="box-shadow: rgba(152, 152, 152, 0.2) 0px 2px 8px 1px;border-radius:10px;padding:10px;margin-top:20px;">
      <b-tabs content-class="mt-3" fill style="font-size:15px;">
        <b-tab title="Biodata Diri" lazy>
          <div style="margin-top:30px;padding:10px;">
            <vs-input
              type="text"
              v-model="data.full_name"
              placeholder="Lallo"
              label="Nama Lengkap"
              block
            />
            <vs-input
              type="text"
              v-model="data.email"
              placeholder="info@lallo.com"
              label="Email"
              style="margin-top:35px;"
              block
            />
            <vs-input
              type="text"
              v-model="data.address"
              placeholder="Lombok"
              label="Alamat"
              style="margin-top:35px;"
              block
            />
            <vs-input
              type="text"
              v-model="data.phone_num"
              placeholder="08529319234"
              label="Nomor Telepon"
              style="margin-top:35px;"
              block
            />
            <vs-input
              type="text"
              v-model="data.gender"
              placeholder="Laki-Laki"
              label="Jenis Kelamin"
              style="margin-top:35px;"
              block
            />
            <vs-input
              type="date"
              v-model="data.birthdate"
              placeholder="Lombok, 21 Nov 1996"
              label="TTL"
              style="margin-top:35px;"
              block
            />
            <vs-input
              type="text"
              v-model="data.jobs"
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
          <div class="accordion" role="tablist">
            <b-row no-gutters style="margin-bottom:10px;">
              <b-col md="6">
                <div style="font-size:14px;padding-left:5px;padding-top:7px;">
                  Total {{ data.passengers.length }} Orang
                  </div>
              </b-col>
              <b-col md="6">
                <vs-button
                  flat
                  transparent
                  border
                  size="small"
                  @click="dialogTambah = true"
                  style="float:right;"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg> Tambah
                </vs-button>
              </b-col>
            </b-row>
            <b-card no-body class="mb-1" v-for="(item, index) in data.passengers" :key="item.id_passengers">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle="'accordion'+index" variant="light" style="text-align:left;font-size:14px;">
                  {{ index + 1 }}. {{ item.name_passengers }}
                  <span style="float:right;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </span>
                </b-btn>
              </b-card-header>
              <b-collapse v-bind:id="'accordion'+index" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-row style="margin-top:20px;">
                    <b-col md="4">
                      <vs-select label="Tipe ID" v-model="item.type_card">
                        <vs-option label="KTP" value="ktp">
                          KTP
                        </vs-option>
                        <vs-option label="SIM" value="sim">
                          SIM
                        </vs-option>
                      </vs-select>
                    </b-col>
                    <b-col md="8">
                      <vs-input
                        type="text"
                        v-model="item.id_card"
                        label="No ID"
                        block
                      />
                    </b-col>
                    <b-col md="12">
                      <vs-input
                        type="text"
                        v-model="item.name_passengers"
                        style="margin-top:35px;"
                        label="Nama Lengkap"
                        block
                      />
                    </b-col>
                    <b-col md="12">
                      <b-row style="margin-top:20px;padding-left:5px;">
                        <b-col md="auto">
                          <vs-radio v-model="item.gender" val="male">
                            Laki-laki
                          </vs-radio>
                        </b-col>
                        <b-col md="auto">
                          <vs-radio v-model="item.gender" val="female">
                            Perempuan
                          </vs-radio>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col md="12">
                      <vs-input
                        type="date"
                        v-model="item.birthdate"                        style="margin-top:40px;"
                        label="Tanggal Lahir"
                        block
                      />
                    </b-col>
                    <b-col md="12">
                      <b-row no-gutters style="margin-top:15px;" align-h="end">
                        <b-col md="auto">
                          <vs-button danger transparent>
                            Hapus
                          </vs-button>
                        </b-col>
                        <b-col md="auto">
                          <vs-button>
                            Simpan
                          </vs-button>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-tab>
      </b-tabs>
      <vs-dialog v-model="dialogTambah">
        <template #header>
          <h4 class="not-margin">
            Tambah <b>Penumpang</b>
          </h4>
        </template>
        <div class="con-form">
          <b-row style="margin-top:20px;">
            <b-col md="4">
                      <vs-select label="Tipe ID">
                        <vs-option label="KTP" value="ktp">
                          KTP
                        </vs-option>
                        <vs-option label="SIM" value="sim">
                          SIM
                        </vs-option>
                      </vs-select>
                    </b-col>
                    <b-col md="8">
                      <vs-input
                        type="text"
                        label="No ID"
                        block
                      />
                    </b-col>
          </b-row>

        </div>
        <template #footer>
          <div class="footer-dialog">
            <vs-button block>
              Sign In
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: '',
    active: 'home',
    dialog: false,
    page:1,
    biodata: true,
    daftar: false,
    dialogTambah: false,
    data: {
      id_user: 'A001',
      full_name: 'Muh Aziz Iqbal',
      email: 'info@lallo.com',
      address: 'Yogyakarta',
      phone_num: '085212039999',
      gender: 'Laki-Laki',
      birthdate: 'Aceh, 21 Februari 2012',
      jobs: 'Mahasiswa',
      passengers: [
        {
          id_passengers : '1',
          name_passengers: 'Muh Aziz Iqbal',
          type_card: 'ktp',
          id_card: '3301293482812',
          gender: 'male',
          birthdate: '21-12-2020'
        },
        {
          id_passengers : '2',
          name_passengers: 'Budi Gunawan',
          type_card: 'sim',
          id_card: '33012932482812',
          gender: 'female',
          birthdate: '09-06-1990'
        }
      ]
    }
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
