import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

export default function ({ app }, inject) {
  inject('CapacitorGeolocation', Geolocation);
}