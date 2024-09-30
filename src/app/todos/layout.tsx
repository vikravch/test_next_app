export default function TodosLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
        return (
            <div className="flex bg-green-300">
                {children}
            </div>
        )
}