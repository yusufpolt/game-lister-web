/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oDQD19urgBC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";

export default function SearchInput() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 max-lg:hidden">
      <div className="relative">
        <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
          <SearchIcon className="h-4 w-4" />
        </div>
        <Input
          id="search"
          type="search"
          placeholder="Search..."
          className="w-full rounded-xl bg-[#A2A2A2]/50 opacity-50 pl-8 text-white border-none"
        />
      </div>
    </div>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
