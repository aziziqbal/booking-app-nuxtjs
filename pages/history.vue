<template>
  <div class="contain">
    <b-row id="product">
      <b-col class="nopadding">
        <div class="header-checkout justify-content-between d-flex" style="margin-bottom:10px;">
          <NuxtLink to="/">
            <vs-button
              icon
              color="dark"
              transparent
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </vs-button>
          </NuxtLink>
          <div class="text-lg mx-auto mt-2 mb-0 d-flex">
            <p class="mr-1">
              Riwayat
            </p>
            <p class="vs-text-primary font-weight-bold">
              Pesanan
            </p>
          </div>
          <div>
            <vs-button
              icon
              color="dark"
              transparent
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </vs-button>
          </div>
        </div>
        <div class="list" style="padding-bottom:10px;height:100%;">
          <div v-for="list1 in 2" :key="list1" class="product-list p-2" style="box-shadow: rgba(152, 152, 152, 0.2) 0px 2px 8px 1px;border-radius:10px;margin-bottom:10px;">
            <div class="transaction">
              <div class="header px-2 text-center" style="border-bottom:1px solid #f5f5f5;">
                <div style="color: grey; font-size:15px;margin-bottom:5px;">Kamis, 30 September 2020</div>
              </div>
              <div class="info justify-content-between d-flex" style="border-bottom:1px solid #f5f5f5;">
                <div class="invoice p-1 text-center">
                  <p class="mb-0" style="color:grey;font-size:0.9rem;">
                    No. Invoice
                  </p>
                  <span class="vs-text-primary text-xs" style="color:blue;font-size:0.9rem;">#123456</span>
                </div>
                <div class="status p-1 text-center">
                  <p class="mb-0" style="color:grey;font-size:0.9rem;">
                    Status
                  </p>
                  <vs-button
                    size="small"
                    gradient
                  >
                    Selesai
                  </vs-button>
                </div>
                <div class="total p-1 text-center">
                  <p class="mb-0" style="color:grey;font-size:0.9rem;">
                    Total Order
                  </p>
                  <span class="vs-text-primary text-xs" style="color:blue;font-size:0.9rem;">Rp 132.000</span>
                </div>
              </div>
              <div class="list-order p-2">
                <div class="justify-content-between d-flex">
                  <p class="text-sm vs-text-primary mb-0" style="color:rgba(var(--vs-primary),1);font-size:0.9rem;">
                    Bangsal >
                    Gili Trawangan <br>
                    <span style="color:green;">Layanan A</span>
                  </p>
                  <p class="text-sm text-secondary mb-0">
                    5 orang
                  </p>
                </div>
              </div>
              <div class="footer-order" style="border-top:1px solid #f5f5f5;margin-top:5px;">
                <vs-row justify="space-between">
                  <vs-col w="8">
                    <div style="color:;font-size:0.8rem;padding-top:15px;padding-left:10px;">
                      Batas Pembayaran 21 Feb 2021 14.00
                    </div>
                  </vs-col>
                  <vs-col w="4" align="right">
                    <vs-button
                      size="small"
                      success
                      style="width:100px;margin-top:10px;"
                      border
                      @click="dialog=true"
                    >
                      Detail
                    </vs-button>
                  </vs-col>
                </vs-row>
                </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <div class="center">
      <vs-pagination v-model="page" :length="5" />
    </div>
    <vs-dialog v-model="dialog" overflow-hidden>
      <template #header>
        <h4 class="not-margin">
          Detail <b>Tiket</b>
        </h4>
      </template>
      <div class="con-content" >
        <vs-alert shadow style="margin-bottom:20px;">
          <template style="color:grey;">
            Nomor Virtual Account
          </template>
          <div style="font-size:1.4rem;margin-top:10px;">
            W04354893419882 <br>
            <div style="color:grey;font-size:0.7rem;">
              Batas Pembayaran 21 Feb 2021 14.00
            </div>
          </div>
        </vs-alert>
        <vs-row justify="space-between">
          <vs-col w="7">
            <div style="margin-bottom:10px;">
              <div style="color:grey;font-size:0.8rem;font-weight:bold;">
                Nomor Invoice
              </div>
              <div class="vs-text-primary text-xs" style="color:blue;font-size:0.9rem;">
                #123456
              </div>
            </div>
          </vs-col>
          <vs-col w="5" align="right">
            <vs-button
              size="small"
              success
              gradient
            >
              Sedang Diproses
            </vs-button>
          </vs-col>
        </vs-row>
        <div style="margin-bottom:10px;">
          <div style="color:grey;font-size:0.8rem;font-weight:bold;">
            Keberangkatan
          </div>
          <div style="color:blue;font-size:1rem;">
            Bangsal ke Gili Trawangan <br>
          </div>
        </div>
        <div style="margin-bottom:10px;">
          <div style="color:grey;font-size:0.8rem;font-weight:bold;">
            Tanggal
          </div>
          <div style="color:blue;font-size:0.9rem;">
            Kamis, 31 Desember 2024
          </div>
        </div>
        <div style="margin-bottom:10px;">
          <div style="color:grey;font-weight:bold;font-size:0.8rem;">
            Layanan
          </div>
          <div style="color:blue;font-size:0.9rem;">
            Domestik
          </div>
        </div>
        <div style="margin-bottom:10px;">
          <div style="color:grey;font-weight:bold;font-size:0.8rem;">
            Metode Pembayaran
          </div>
          <div style="color:blue;font-size:0.9rem;">
            Mandiri Virtual Account
          </div>
        </div>
        <div style="margin-bottom:10px;">
          <div style="color:grey;font-weight:bold;font-size:0.9rem;margin-bottom:5px;">
            Tarif Tiket
          </div>
          <vs-row justify="space-between" style="">
            <vs-col w="7">
              <div style="color:grey;font-size:0.8rem;">
                Dewasa (x5)
              </div>
            </vs-col>
            <vs-col w="5" align="right">
              <div class="vs-text-primary text-xs" style="color:grey;font-size:0.9rem;">
                Rp 21.000
              </div>
            </vs-col>
            <vs-col w="7">
              <div style="color:grey;font-size:0.8rem;">
                Anak (x2)
              </div>
            </vs-col>
            <vs-col w="5" align="right">
              <div class="vs-text-primary text-xs" style="color:grey;font-size:0.9rem;">
                Rp 42.000
              </div>
            </vs-col>
            <vs-col w="7">
              <div style="color:grey;font-size:0.8rem;">
                Bayi (x5)
              </div>
            </vs-col>
            <vs-col w="5" align="right">
              <div class="vs-text-primary text-xs" style="color:grey;font-size:0.9rem;">
                Rp 10.000
              </div>
            </vs-col>
            <vs-col w="7" >
              <div style="color:grey;font-size:0.8rem;">
                Asuransi
              </div>
            </vs-col>
            <vs-col w="5" align="right">
              <div class="vs-text-primary text-xs" style="color:grey;font-size:0.9rem;">
                Rp 10.000
              </div>
            </vs-col>
          </vs-row>
          <hr />
          <vs-row justify="space-between" style="margin-top:;">
            <vs-col w="7">
              <div style="color:grey;font-size:0.8rem;font-weight:bold;">
                Total Pembayaran
              </div>
            </vs-col>
            <vs-col w="5" align="right">
              <div class="vs-text-primary text-xs" style="color:blue;font-size:1rem;">
                Rp 21.000
              </div>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </vs-dialog>
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
  background-color:white;
  margin: 0 auto;
  height: 100%;
  padding:15px;
  margin-top:65px;
}
</style>
