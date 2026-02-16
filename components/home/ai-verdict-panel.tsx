import { Brain, AlertTriangle, CheckCircle2 } from 'lucide-react';

export function AIVerdictPanel() {
  return (
    <div className="bg-[#0a0d15] border border-gray-800/50 rounded p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-4 h-4 text-blue-500" />
        <h2 className="text-sm font-semibold text-gray-400 tracking-wide">AI VERDICT</h2>
      </div>

      <div className="space-y-4">
        {/* Overall Verdict */}
        <div className="bg-amber-950/20 border border-amber-900/30 rounded p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-400 mb-2">CAUTION ADVISED</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Elevated regulatory FUD detected. Multiple low-trust sources amplifying exchange withdrawal narratives. Cross-reference with on-chain data recommended.
              </p>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-gray-500 tracking-wide">KEY INSIGHTS</div>
          
          <div className="space-y-2.5">
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
              <p className="text-xs text-gray-400">
                <span className="text-red-400 font-semibold">87%</span> of regulatory FUD originates from accounts with trust score &lt;40
              </p>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></div>
              <p className="text-xs text-gray-400">
                <span className="text-amber-400 font-semibold">Binance</span> narrative intensity +240% in last 6h
              </p>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
              <p className="text-xs text-gray-400">
                On-chain metrics <span className="text-green-400 font-semibold">contradict</span> withdrawal delay claims
              </p>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></div>
              <p className="text-xs text-gray-400">
                <span className="text-amber-400 font-semibold">3 coordinated campaigns</span> detected in last 24h
              </p>
            </div>
          </div>
        </div>

        {/* Confidence Score */}
        <div className="pt-4 border-t border-gray-800/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">Analysis Confidence</span>
            <span className="text-xs font-mono text-white">89%</span>
          </div>
          <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: '89%' }}></div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-xs text-gray-600 pt-2">
          Updated 23 seconds ago
        </div>
      </div>
    </div>
  );
}
