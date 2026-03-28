export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="h-px w-16 bg-divider" />
      <span className="mx-4 text-accent-muted text-sm select-none">✦</span>
      <div className="h-px w-16 bg-divider" />
    </div>
  );
}
