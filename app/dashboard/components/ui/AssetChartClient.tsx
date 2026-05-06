'use client';

import { useEffect, useRef } from 'react';
import {
  createChart,
  ColorType,
  CrosshairMode,
  UTCTimestamp,
  CandlestickSeries,
} from 'lightweight-charts';

type Candle = {
  time: UTCTimestamp;
  open: number;
  high: number;
  low: number;
  close: number;
};

const data: Candle[] = [
  { time: 1704096000 as UTCTimestamp, open: 27800, high: 27950, low: 27600, close: 27720 },
  { time: 1704096900 as UTCTimestamp, open: 27720, high: 27800, low: 27580, close: 27640 },
  { time: 1704097800 as UTCTimestamp, open: 27640, high: 27720, low: 27500, close: 27610 },
  { time: 1704098700 as UTCTimestamp, open: 27610, high: 27850, low: 27590, close: 27810 },
];

export default function AssetsChartClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      width: containerRef.current.clientWidth,
      height: 420,
      layout: {
        background: { type: ColorType.Solid, color: '#0B0F1A' },
        textColor: '#AEB4C0',
      },
      grid: {
        vertLines: { color: 'rgba(255,255,255,0.05)' },
        horzLines: { color: 'rgba(255,255,255,0.05)' },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
      },
    });

    // ✅ v5 API
    const series = chart.addSeries(CandlestickSeries, {
      upColor: '#2ED573',
      downColor: '#FF4757',
      borderUpColor: '#2ED573',
      borderDownColor: '#FF4757',
      wickUpColor: '#2ED573',
      wickDownColor: '#FF4757',
    });

    series.setData(data);

    series.createPriceLine({
      price: 27560,
      color: '#4F7FFF',
      lineStyle: 2,
      axisLabelVisible: true,
      title: 'USD',
    });

    chart.timeScale().fitContent();

    const handleResize = () => {
      chart.applyOptions({
        width: containerRef.current!.clientWidth,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[420px]" />;
}
