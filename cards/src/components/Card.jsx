export default function Card({ title, icon, className }) {
  return (
    <div
      className={`card-border flex flex-1 flex-col items-center justify-center border-b-8 border-white bg-gradient-to-br px-14 pb-28 shadow-[0_16px_0_0_rgba(0,0,0,0.2),_inset_0_-16px_0_0_rgba(255,255,255,0.2)] ${className}`}
    >
      <div className="rounded-b-full border-b-8 bg-purple-950 px-6 pb-6 shadow-[0_12px_0_0_rgba(0,0,0,0.2)]">
        {icon}
      </div>
      <p className="mt-8 text-2xl font-bold">{title}</p>
      <p className="mt-6 text-balance text-center text-sm text-zinc-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}
