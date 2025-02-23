import { memo } from 'react';
import { Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-md p-8 flex flex-col items-center space-y-4">
        <div className="animate-spin">
          <Loader2 className="h-12 w-12 text-blue-600" />
        </div>
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold text-gray-900">Loading</h2>
          <p className="text-sm text-gray-500">Please wait while we set things up...</p>
        </div>
        <div className="w-full max-w-xs bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 animate-pulse rounded-full" />
        </div>
      </Card>
    </div>
  );
};

export default memo(Loading);