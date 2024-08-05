const DashboardModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="absolute top-0 z-50 h-full w-full bg-slate-100 bg-opacity-20 backdrop-blur-sm">
      <section className="modal-content">{children}</section>
    </main>
  );
};

export default DashboardModal;
