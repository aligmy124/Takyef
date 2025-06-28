function Section({ title, children }) {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-blue-800 border-r-4 border-blue-500 pr-3 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Section;
