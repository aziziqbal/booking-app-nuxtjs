<template>
  <div class="coba" style="max-width:500px;">
    <div class="px-3" style="background-color:white;height:100%;">
      <b-row id="slidder" class="pb-2 mt-4 pt-4 bg-grey-light">
        <b-col class="nopadding">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333;border-radius:20px;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide img-src="https://i2.wp.com/himaforka-uajy.org/wp-content/uploads/2020/06/100667873_10157804408279262_8708869271582670848_o.jpg?fit=1663%2C554&ssl=1" />
            <b-carousel-slide img-src="https://diskominfo.bogorkab.go.id/wp-content/uploads/2020/03/Banner-Germas-2.png" />
            <b-carousel-slide img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRSJYdxO6S3TVk5esXd1dPXRKyYJifw5GsA&usqp=CAU" />
          </b-carousel>
        </b-col>
      </b-row>
      <b-form style="padding:15px;box-shadow: rgba(152, 152, 152, 0.2) 0px 2px 8px 1px;border-radius:10px;margin-top:5px;height:520px;">
        <div style="font-size:18px;font-weight:bold;">
          Cari Tiket Anda
        </div>
        <div style="font-size:13px;color:grey;margin-bottom:10px;">
          Atur Jadwal Keberangkatan Anda
        </div>
        <div style="font-size:14px;font-weight:500;margin-bottom:7px;">
          Keberangkatan
        </div>
        <b-input-group size="" class="mb-2">
          <b-input-group-prepend is-text>
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-receipt-cutoff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </b-input-group-prepend>
          <b-form-select :options="options" placeholder="Search terms" class="font-form custom-select-form" />
        </b-input-group>
        <div style="font-size:14px;font-weight:500;margin-bottom:7px;">
          Tujuan
        </div>
        <b-input-group size="" class="mb-2">
          <b-input-group-prepend is-text>
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-receipt-cutoff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </b-input-group-prepend>
          <b-form-select :options="options" placeholder="Search terms" class="font-form custom-select-form" />
        </b-input-group>
        <div style="font-size:14px;font-weight:500;margin-bottom:7px;">
          Layanan
        </div>
        <b-input-group size="" class="mb-2">
          <b-input-group-prepend is-text>
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-receipt-cutoff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </b-input-group-prepend>
          <b-form-select :options="options" placeholder="Search terms" class="font-form custom-select-form" />
        </b-input-group><div style="font-size:14px;font-weight:500;margin-bottom:7px;">
          Tanggal Keberangkatan
        </div>
        <b-row fluid no-gutters>
          <b-col cols="7">
            <b-form-datepicker
              id="example-datepicker"
              locale="id"
              placeholder="Tanggal"
              :date-format-options="{ month: 'short', year: 'numeric', day: '2-digit', weekday: 'short' }"
              class="font-form mb-2"
            />
          </b-col>
          <b-col cols="5" style="padding-left:10px;">
            <b-form-timepicker
              now-button
              locale="id"
              placeholder="Waktu"
              class="font-form"
            />
          </b-col>
        </b-row>
        <div style="font-size:14px;font-weight:500;margin-bottom:7px;">
          Penumpang
        </div>
        <b-input-group size="" class="mb-2">
          <b-input-group-prepend is-text>
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-receipt-cutoff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </b-input-group-prepend>
          <b-form-select :options="options" placeholder="Search terms" class="font-form custom-select-form" />
        </b-input-group>
        <vs-button
          block
          style="margin-top:20px;"
          @click="order()"
        >
          Order Now
        </vs-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'home',
    slide: 0,
    options: [
      { value: null, text: 'Lokasi A' },
      { value: 'a', text: 'Lokasi B' },
      { value: 'b', text: 'Lokasi C', disabled: true },
      { value: 'c', text: 'Lokasi D', disabled: true },
      { value: 'd', text: 'Lokasi E', disabled: false },
      { value: 'e', text: 'Lokasi F', disabled: false }
    ]
  }),
  mounted() {
    this.getData()
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    async getData() {
      const data = await this.$axios
        .$get(
          'https://api.aziziqbal.com/laravel-crud/public/api/siswa'
        )
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
@media screen and (max-width: 400px) {
  .bi {
    font-size:14px;
  }
  .font-form {
    font-size:14px;
  }
}
.custom-select-form {
  border-right:1px solid #ced4da;
  border-left:0px solid #ced4da;
  border-top:1px solid #ced4da;
  border-bottom:1px solid #ced4da;
}
.input-group-text {
  background-color:white;
  border-left:1px solid #ced4da;
  border-top:1px solid #ced4da;
  border-bottom:1px solid #ced4da;
}
#slidder .carousel-inner, #slidder .carousel {
  border-radius:10px;
}
.coba {
  margin: 0 auto;
  /* overflow-y: scroll; */
  /* min-height: 100%; */
  height: 100%;
  /* display: flex; */
  /* justify-content: center;
  align-items: center;
  text-align: center; */
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 600px;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.plus {
  font-size: 2.5rem;
  margin: 15px;
  color: #35495e;
}

.h3 {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 400;
  margin: 10px;
}
</style>
