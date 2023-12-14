import SideNav from '@/app/ui/dashboard/sidenav';
 // este componete es el layaut del dasboard permite un esquema fijo pr aun rederizo estatico  y solo uno dianmico en los componetes que se trabajan
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}