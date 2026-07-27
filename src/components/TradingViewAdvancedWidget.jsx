import { useEffect, useRef } from "react";

/**
 * Full live chart powered by TradingView's public embed widget.
 * Lets visitors switch symbols/timeframes and see real, real-time price action.
 */
export default function TradingViewAdvancedWidget({ symbol = "OANDA:XAUUSD", height = 480 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval: "60",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      support_host: "https://www.tradingview.com",
    });

    containerRef.current.appendChild(script);
  }, [symbol]);

  return (
    <div
      className="tradingview-widget-container w-full"
      ref={containerRef}
      style={{ height }}
    >
      <div className="tradingview-widget-container__widget h-full w-full" />
    </div>
  );
}
