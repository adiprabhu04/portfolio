export default function Footer() {
  return (
    <footer
      className="border-t border-[#1a1a1a] py-7"
      style={{
        paddingLeft: 'clamp(20px, 4vw, 64px)',
        paddingRight: 'clamp(20px, 4vw, 64px)',
      }}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between flex-wrap gap-3">
        <span className="font-mono text-2xs uppercase tracking-[0.08em] text-t3">
          © 2026 Aditya Prabhudessai
        </span>
        <span className="font-mono text-2xs uppercase tracking-[0.08em] text-t3">
          Built with Next.js
        </span>
        <span className="font-mono text-2xs uppercase tracking-[0.08em] text-t3">
          Goa · India
        </span>
      </div>
    </footer>
  )
}
