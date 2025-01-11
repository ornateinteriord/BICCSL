import {  BoxesCore } from '../../components/ui/background-boxes';
import { cn } from '../../lib/utils';
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className="h-40 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
    <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

    <BoxesCore />
    <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      Welcome to MLM Dashboard
    </h1>
    <p className="text-center mt-2 text-neutral-300 relative z-20">
      Manage your network and track your success
    </p>
  </div>
  )
}

export default Dashboard