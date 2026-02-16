import { Search, Filter } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="bg-[#0a0d15] border border-gray-800/50 rounded p-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search FUD events, entities, influencers, or narratives..."
            className="w-full bg-[#05070d] border border-gray-800 rounded px-10 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-700"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <kbd className="px-2 py-1 text-xs bg-gray-900 border border-gray-800 rounded text-gray-600">⌘K</kbd>
          </div>
        </div>
        <button className="px-4 py-2.5 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-sm text-gray-400 flex items-center gap-2 transition-colors">
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>
    </div>
  );
}
