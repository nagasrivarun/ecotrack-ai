export default function SectionHeading({ title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.3em] text-accent">EcoTrack AI</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-slate-300 leading-7">{description}</p>
    </div>
  )
}
