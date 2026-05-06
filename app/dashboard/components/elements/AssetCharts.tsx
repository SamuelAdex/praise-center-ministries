import dynamic from 'next/dynamic';

const AssetsChart = dynamic(
  () => import('../ui/AssetChartClient'),
  { ssr: false }
);

export default AssetsChart;