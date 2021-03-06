import { Liquid } from '@antv/g2plot';

const liquidPlot = new Liquid(document.getElementById('container'), {
  width: 600,
  height: 300,
  autoFit: false,
  percent: 0.75,
  statistic: {
    formatter: (v) => {
      return `占比${v * 100}%`;
    },
  },
  liquidStyle: (v) => {
    return {
      fill: v > 0.75 ? 'red' : '#acc9ff',
    };
  },
  color: () => '#acc9ff',
});
liquidPlot.render();
