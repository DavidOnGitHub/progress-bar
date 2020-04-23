import { endpoint } from '../config/app';

export const getProgressBarData = () =>
  fetch(endpoint).then((res) => res.json());
